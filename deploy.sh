#!/bin/bash

# This script deploys the modpack files for either a client or a server.

# --- Configuration ---
SRC_DIR="modpack_source"
MODS_DIR="mods"
CONFIG_DIR="config"
KUBEJS_DIR="kubejs"
DATAPACKS_DIR="datapacks"

# --- Functions ---

# Function to print usage information
usage() {
  echo "Usage: $0 [client|server]"
  exit 1
}

# Function to clean a directory. If it doesn't exist, it will be created.
clean_or_create_dir() {
  local dir_path=$1
  echo "Preparing directory: $dir_path"
  if [ -d "$dir_path" ]; then
    # Remove contents, not the directory itself
    rm -rf "$dir_path"/*
  else
    mkdir -p "$dir_path"
  fi
}

# Function to copy files from a source sub-directory to its destination
copy_files() {
  local type=$1 # e.g., "common", "client", or "server"
  echo "Copying $type files..."

  # Mods
  if [ -d "$SRC_DIR/$MODS_DIR/$type" ] && [ -n "$(ls -A $SRC_DIR/$MODS_DIR/$type)" ]; then
    cp -rT "$SRC_DIR/$MODS_DIR/$type" "$MODS_DIR/"
  fi

  # Config
  if [ -d "$SRC_DIR/$CONFIG_DIR/$type" ] && [ -n "$(ls -A $SRC_DIR/$CONFIG_DIR/$type)" ]; then
    cp -rT "$SRC_DIR/$CONFIG_DIR/$type" "$CONFIG_DIR/"
  fi

  # KubeJS
  if [ -d "$SRC_DIR/$KUBEJS_DIR/$type" ] && [ -n "$(ls -A $SRC_DIR/$KUBEJS_DIR/$type)" ]; then
    cp -rT "$SRC_DIR/$KUBEJS_DIR/$type" "$KUBEJS_DIR/"
  fi

  # Datapacks
  if [ -d "$SRC_DIR/$DATAPACKS_DIR/$type" ] && [ -n "$(ls -A $SRC_DIR/$DATAPACKS_DIR/$type)" ]; then
    cp -rT "$SRC_DIR/$DATAPACKS_DIR/$type" "$DATAPACKS_DIR/"
  fi
}

# --- Main Script ---

# Check for correct number of arguments
if [ "$#" -ne 1 ]; then
  usage
fi

# Get the deployment type
DEPLOY_TYPE=$1

# Validate the deployment type
if [ "$DEPLOY_TYPE" != "client" ] && [ "$DEPLOY_TYPE" != "server" ]; then
  usage
fi

echo "--- Starting Modpack Deployment for: $DEPLOY_TYPE ---"

# Clean or create destination directories
clean_or_create_dir "$MODS_DIR"
clean_or_create_dir "$CONFIG_DIR"
clean_or_create_dir "$KUBEJS_DIR"
clean_or_create_dir "$DATAPACKS_DIR"

# Copy common files
copy_files "common"

# Copy environment-specific files
copy_files "$DEPLOY_TYPE"

echo "--- Deployment for '$DEPLOY_TYPE' complete! ---"
