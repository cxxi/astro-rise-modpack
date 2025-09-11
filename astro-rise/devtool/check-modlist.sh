#!/bin/bash

# This script checks for discrepancies between the mods listed in manifest.json
# and the mods present in the astro-rise/mods/ directory.
# It performs a case-insensitive comparison and provides a colorized, diff-like output.

# --- Configuration ---
MODS_DIR="astro-rise/mods"
MANIFEST_FILE="manifest.json"

# --- Colors ---
COLOR_GREEN='\033[0;32m'
COLOR_RED='\033[0;31m'
COLOR_YELLOW='\033[1;33m'
COLOR_BLUE='\033[0;34m'
COLOR_BOLD='\033[1m'
COLOR_RESET='\033[0m'

# --- Helper Functions ---
print_header() {
    echo -e "${COLOR_BOLD}${COLOR_BLUE}=======================================================${COLOR_RESET}"
    echo -e "${COLOR_BOLD}${COLOR_BLUE}      Modlist Consistency Check for Astro Rise       ${COLOR_RESET}"
    echo -e "${COLOR_BOLD}${COLOR_BLUE}=======================================================${COLOR_RESET}"
    echo ""
}

# --- Pre-flight Checks ---
set -e

if ! command -v jq &> /dev/null; then
    echo -e "${COLOR_RED}Error: 'jq' is not installed. Please install it to run this script.${COLOR_RESET}"
    exit 1
fi

if [ ! -f "$MANIFEST_FILE" ]; then
    echo -e "${COLOR_RED}Error: Manifest file not found at '$MANIFEST_FILE'${COLOR_RESET}"
    exit 1
fi

if [ ! -d "$MODS_DIR" ]; then
    echo -e "${COLOR_RED}Error: Mods directory not found at '$MODS_DIR'${COLOR_RESET}"
    exit 1
fi


# --- Logic ---

# Create temporary files
MANIFEST_MODS_TEMP=$(mktemp)
FILESYSTEM_MODS_TEMP=$(mktemp)
ORIGINAL_MANIFEST_MODS_TEMP=$(mktemp)
ORIGINAL_FILESYSTEM_MODS_TEMP=$(mktemp)
trap 'rm -f "$MANIFEST_MODS_TEMP" "$FILESYSTEM_MODS_TEMP" "$ORIGINAL_MANIFEST_MODS_TEMP" "$ORIGINAL_FILESYSTEM_MODS_TEMP"' EXIT

# Extract and process mod lists, using sort -u to handle potential duplicates
jq -r '.client_mods[], .server_mods[], .mods[]' "$MANIFEST_FILE" | sort -u > "$ORIGINAL_MANIFEST_MODS_TEMP"
cat "$ORIGINAL_MANIFEST_MODS_TEMP" | tr '[:upper:]' '[:lower:]' | sort -u > "$MANIFEST_MODS_TEMP"

find "$MODS_DIR" -maxdepth 1 -name "*.jar" -type f -printf "%f\n" | sort -u > "$ORIGINAL_FILESYSTEM_MODS_TEMP"
cat "$ORIGINAL_FILESYSTEM_MODS_TEMP" | tr '[:upper:]' '[:lower:]' | sort -u > "$FILESYSTEM_MODS_TEMP"


# --- Comparison and Reporting ---
print_header

# Find differences
MISSING_MODS_LOWER=$(comm -23 "$MANIFEST_MODS_TEMP" "$FILESYSTEM_MODS_TEMP")
EXTRA_MODS_LOWER=$(comm -13 "$MANIFEST_MODS_TEMP" "$FILESYSTEM_MODS_TEMP")

# Retrieve original filenames only if there are differences
MISSING_MODS=""
if [ -n "$MISSING_MODS_LOWER" ]; then
    MISSING_MODS=$(grep -F -i -f <(echo "$MISSING_MODS_LOWER") "$ORIGINAL_MANIFEST_MODS_TEMP" || true)
fi

EXTRA_MODS=""
if [ -n "$EXTRA_MODS_LOWER" ]; then
    EXTRA_MODS=$(grep -F -i -f <(echo "$EXTRA_MODS_LOWER") "$ORIGINAL_FILESYSTEM_MODS_TEMP" || true)
fi

# Get accurate counts of non-empty lines
MISSING_COUNT=0
if [ -n "$MISSING_MODS" ]; then
    MISSING_COUNT=$(echo -n "$MISSING_MODS" | grep -c .)
fi

EXTRA_COUNT=0
if [ -n "$EXTRA_MODS" ]; then
    EXTRA_COUNT=$(echo -n "$EXTRA_MODS" | grep -c .)
fi


# --- Display Results ---

echo -e "${COLOR_YELLOW}Comparing '${MANIFEST_FILE}' against '${MODS_DIR}/' directory...${COLOR_RESET}"
echo ""

if [ "$MISSING_COUNT" -eq 0 ] && [ "$EXTRA_COUNT" -eq 0 ]; then
    echo -e "${COLOR_GREEN}✓ Success! The modlist is perfectly consistent.${COLOR_RESET}"
    exit 0
fi

if [ "$MISSING_COUNT" -gt 0 ]; then
    echo -e "${COLOR_BOLD}Mods missing from the filesystem (${MISSING_COUNT}):${COLOR_RESET}"
    while IFS= read -r mod; do
        echo -e "${COLOR_RED}- ${mod}${COLOR_RESET}"
    done <<< "$MISSING_MODS"
    echo ""
fi

if [ "$EXTRA_COUNT" -gt 0 ]; then
    echo -e "${COLOR_BOLD}Extra mods found on the filesystem (${EXTRA_COUNT}):${COLOR_RESET}"
    while IFS= read -r mod; do
        echo -e "${COLOR_GREEN}+ ${mod}${COLOR_RESET}"
    done <<< "$EXTRA_MODS"
    echo ""
fi
