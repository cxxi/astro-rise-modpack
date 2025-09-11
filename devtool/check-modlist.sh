#!/bin/bash

# This script checks for discrepancies between the mods listed in manifest.json
# and the mods present in the astro-rise/mods/ directory.
# It performs a case-insensitive comparison.

# Exit on error
set -e

# --- Configuration ---
MODS_DIR="astro-rise/mods"
MANIFEST_FILE="manifest.json"
# ---

# Check if jq is installed
if ! command -v jq &> /dev/null
then
    echo "jq could not be found. Please install jq to run this script."
    exit 1
fi

# --- Logic ---

# Create temporary files to store the lists of mods
MANIFEST_MODS_TEMP=$(mktemp)
FILESYSTEM_MODS_TEMP=$(mktemp)
ORIGINAL_MANIFEST_MODS_TEMP=$(mktemp)
ORIGINAL_FILESYSTEM_MODS_TEMP=$(mktemp)

# Cleanup temporary files on exit
trap 'rm -f "$MANIFEST_MODS_TEMP" "$FILESYSTEM_MODS_TEMP" "$ORIGINAL_MANIFEST_MODS_TEMP" "$ORIGINAL_FILESYSTEM_MODS_TEMP"' EXIT

# Extract original mod filenames from manifest.json and store them
jq -r '.client_mods[], .server_mods[], .mods[]' "$MANIFEST_FILE" | sort > "$ORIGINAL_MANIFEST_MODS_TEMP"
# Create a lowercase version for comparison
cat "$ORIGINAL_MANIFEST_MODS_TEMP" | tr '[:upper:]' '[:lower:]' | sort > "$MANIFEST_MODS_TEMP"

# Get the original list of .jar files from the mods directory
find "$MODS_DIR" -name "*.jar" -type f -printf "%f\n" | sort > "$ORIGINAL_FILESYSTEM_MODS_TEMP"
# Create a lowercase version for comparison
cat "$ORIGINAL_FILESYSTEM_MODS_TEMP" | tr '[:upper:]' '[:lower:]' | sort > "$FILESYSTEM_MODS_TEMP"

# --- Comparison and Reporting ---

echo "--- Checking for mods in manifest but not in filesystem (case-insensitive) ---"
# Use comm to find lines unique to the first file (manifest mods)
MISSING_MODS_LOWER=$(comm -23 "$MANIFEST_MODS_TEMP" "$FILESYSTEM_MODS_TEMP")

if [ -n "$MISSING_MODS_LOWER" ]; then
    echo "The following mods are listed in '$MANIFEST_FILE' but are not present in the '$MODS_DIR' directory:"
    # Grep the original manifest list to show the original casing
    grep -F -i -f <(echo "$MISSING_MODS_LOWER") "$ORIGINAL_MANIFEST_MODS_TEMP"
else
    echo "All mods listed in the manifest are present in the mods directory."
fi

echo ""
echo "--- Checking for mods in filesystem but not in manifest (case-insensitive) ---"
# Use comm to find lines unique to the second file (filesystem mods)
EXTRA_MODS_LOWER=$(comm -13 "$MANIFEST_MODS_TEMP" "$FILESYSTEM_MODS_TEMP")

if [ -n "$EXTRA_MODS_LOWER" ]; then
    echo "The following mods are present in the '$MODS_DIR' directory but are not listed in '$MANIFEST_FILE':"
    # Grep the original filesystem list to show the original casing
    grep -F -i -f <(echo "$EXTRA_MODS_LOWER") "$ORIGINAL_FILESYSTEM_MODS_TEMP"
else
    echo "All mods in the mods directory are listed in the manifest."
fi
