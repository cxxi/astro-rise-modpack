#!/bin/bash

# This script checks for discrepancies between the assets listed in manifest.json
# (mods, resource packs, datapacks) and the files present in the repository.
# It performs a case-insensitive comparison and provides a colorized, diff-like output.

# --- Configuration ---
MANIFEST_FILE="manifest.json"

# --- Colors ---
COLOR_GREEN='\033[0;32m'
COLOR_RED='\033[0;31m'
COLOR_YELLOW='\033[1;33m'
COLOR_BLUE='\033[0;34m'
COLOR_BOLD='\033[1m'
COLOR_RESET='\033[0m'

# --- Main Check Function ---
check_consistency() {
    local title="$1"
    local json_query="$2"
    local asset_dir="$3"
    local file_pattern="$4"

    echo -e "${COLOR_BLUE}=======================================================${COLOR_RESET}"
    echo -e "${COLOR_BOLD}${COLOR_BLUE}      Checking Consistency for: ${title}${COLOR_RESET}"
    echo -e "${COLOR_BLUE}=======================================================${COLOR_RESET}"

    if [ ! -d "$asset_dir" ] && [ "$asset_dir" != "astro-rise/src/mods" ]; then # mods dir is guaranteed to exist
        echo -e "${COLOR_YELLOW}Warning: Directory '$asset_dir' not found. Skipping check.${COLOR_RESET}\n"
        return
    fi

    # --- Logic ---
    local manifest_original_temp=$(mktemp)
    local manifest_lower_temp=$(mktemp)
    local fs_original_temp=$(mktemp)
    local fs_lower_temp=$(mktemp)
    trap 'rm -f "$manifest_original_temp" "$manifest_lower_temp" "$fs_original_temp" "$fs_lower_temp"' RETURN

    # Create original and lowercase lists for manifest
    jq -r "$json_query" "$MANIFEST_FILE" | sort -u > "$manifest_original_temp"
    tr '[:upper:]' '[:lower:]' < "$manifest_original_temp" | sort -u > "$manifest_lower_temp"

    # Create original and lowercase lists for filesystem
    find "$asset_dir" -maxdepth 1 -name "$file_pattern" -type f -printf "%f\n" | sort -u > "$fs_original_temp"
    tr '[:upper:]' '[:lower:]' < "$fs_original_temp" | sort -u > "$fs_lower_temp"

    # --- Comparison ---
    local missing_lower=$(comm -23 "$manifest_lower_temp" "$fs_lower_temp")
    local extra_lower=$(comm -13 "$manifest_lower_temp" "$fs_lower_temp")

    local missing_count=0
    local extra_count=0
    local final_missing_list=""
    local final_extra_list=""

    if [ -n "$missing_lower" ]; then
        final_missing_list=$(grep -F -i -f <(echo "$missing_lower") "$manifest_original_temp" || true)
        if [ -n "$final_missing_list" ]; then
            missing_count=$(echo -n "$final_missing_list" | grep -c .)
        fi
    fi

    if [ -n "$extra_lower" ]; then
        final_extra_list=$(grep -F -i -f <(echo "$extra_lower") "$fs_original_temp" || true)
        if [ -n "$final_extra_list" ]; then
            extra_count=$(echo -n "$final_extra_list" | grep -c .)
        fi
    fi

    # --- Display Results ---
    if [ "$missing_count" -eq 0 ] && [ "$extra_count" -eq 0 ]; then
        echo -e "${COLOR_GREEN}✓ Success! '${title}' are perfectly consistent.${COLOR_RESET}\n"
        return
    fi

    if [ "$missing_count" -gt 0 ]; then
        echo -e "${COLOR_BOLD}Assets in manifest but not in filesystem (${missing_count}):${COLOR_RESET}"
        while IFS= read -r asset; do echo -e "${COLOR_RED}- ${asset}${COLOR_RESET}"; done <<< "$final_missing_list"
    fi

    if [ "$extra_count" -gt 0 ]; then
        echo -e "${COLOR_BOLD}Extra assets found in filesystem (${extra_count}):${COLOR_RESET}"
        while IFS= read -r asset; do echo -e "${COLOR_GREEN}+ ${asset}${COLOR_RESET}"; done <<< "$final_extra_list"
    fi
    echo ""
}

# --- Pre-flight Checks ---
if ! command -v jq &> /dev/null; then
    echo -e "${COLOR_RED}Error: 'jq' is not installed. Please install it to run this script.${COLOR_RESET}"
    exit 1
fi
if [ ! -f "$MANIFEST_FILE" ]; then
    echo -e "${COLOR_RED}Error: Manifest file not found at '$MANIFEST_FILE'${COLOR_RESET}"
    exit 1
fi

# --- Script Execution ---
check_consistency "Mods" ".client_mods[], .server_mods[], .mods[]" "astro-rise/src/mods" "*.jar"
check_consistency "Resource Packs" ".resourcepacks[]" "astro-rise/src/resourcepacks" "*.zip"
check_consistency "Datapacks" ".datapacks[]" "astro-rise/src/datapacks" "*.zip"
