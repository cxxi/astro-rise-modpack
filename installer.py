import argparse
import os
import sys
import json

# --- Constants ---
MANIFEST_PATH = "manifest.json"
MMC_PACK_PATH = "mmc-pack.json"

def die(message):
    """
    Prints an error message to stderr and exits the script.
    """
    print(f"Error: {message}", file=sys.stderr)
    sys.exit(1)

def get_mmc_version(components, component_uid):
    """
    Finds the version of a specific component in the mmc-pack.json data.
    """
    for component in components:
        if component.get('uid') == component_uid:
            return component.get('cachedVersion')
    return None

def verify_versions():
    """
    Verifies that the Minecraft and Forge versions in mmc-pack.json match
    the ones specified in manifest.json.
    """
    print("Verifying Minecraft and Forge versions...")

    # 1. Check for file existence
    if not os.path.exists(MANIFEST_PATH):
        die(f"'{MANIFEST_PATH}' not found. Make sure you are running the installer from the root of the repository.")
    if not os.path.exists(MMC_PACK_PATH):
        die(f"'{MMC_PACK_PATH}' not found. Make sure the repository content is placed inside a MultiMC instance folder.")

    # 2. Read and parse JSON files
    try:
        with open(MANIFEST_PATH, 'r') as f:
            manifest_data = json.load(f)
    except json.JSONDecodeError:
        die(f"Could not parse '{MANIFEST_PATH}'. It may be corrupted.")

    try:
        with open(MMC_PACK_PATH, 'r') as f:
            mmc_pack_data = json.load(f)
    except json.JSONDecodeError:
        die(f"Could not parse '{MMC_PACK_PATH}'. It may be corrupted.")

    # 3. Get versions from manifest
    required_mc_version = manifest_data.get('minecraft_version')
    required_forge_version = manifest_data.get('forge_version')

    if not required_mc_version or not required_forge_version:
        die(f"'minecraft_version' or 'forge_version' not defined in '{MANIFEST_PATH}'.")

    # 4. Get versions from mmc-pack.json
    mmc_components = mmc_pack_data.get('components', [])
    current_mc_version = get_mmc_version(mmc_components, 'net.minecraft')
    current_forge_version = get_mmc_version(mmc_components, 'net.minecraftforge')

    if not current_mc_version:
        die(f"Could not determine current Minecraft version from '{MMC_PACK_PATH}'.")
    if not current_forge_version:
        die(f"Could not determine current Forge version from '{MMC_PACK_PATH}'.")

    # 5. Compare versions
    print(f"  Required Minecraft version: {required_mc_version}")
    print(f"  Instance Minecraft version: {current_mc_version}")
    if current_mc_version != required_mc_version:
        die(f"Minecraft version mismatch. Expected {required_mc_version}, but instance is {current_mc_version}.")

    print(f"  Required Forge version: {required_forge_version}")
    print(f"  Instance Forge version: {current_forge_version}")
    if current_forge_version != required_forge_version:
        die(f"Forge version mismatch. Expected {required_forge_version}, but instance is {current_forge_version}.")

    print("Version verification successful.")


import shutil

# --- Constants (add new ones) ---
INSTANCE_CFG_PATH = "instance.cfg"
ICON_SOURCE_PATH = "astro-rise/astro-rise.png"
ICON_DEST_DIR = os.path.join("..", "..", "icons")
MINECRAFT_DIR = ".minecraft"
CONFIG_SOURCE_DIR = os.path.join("astro-rise", "config")
KUBEJS_SOURCE_DIR = os.path.join("astro-rise", "kubejs")
MODS_SOURCE_DIR = os.path.join("astro-rise", "mods")

def update_instance_cfg():
    """
    Updates the instance.cfg file to set the name and iconKey.
    """
    print(f"Updating '{INSTANCE_CFG_PATH}'...")
    if not os.path.exists(INSTANCE_CFG_PATH):
        print(f"  Warning: '{INSTANCE_CFG_PATH}' not found. Skipping config update.")
        return

    # The icon key is the basename of the source icon path, without extension.
    icon_key = os.path.splitext(os.path.basename(ICON_SOURCE_PATH))[0]

    try:
        with open(INSTANCE_CFG_PATH, 'r') as f:
            lines = f.readlines()

        new_lines = []
        name_updated = False
        icon_key_updated = False

        for line in lines:
            if line.strip().startswith('name='):
                new_lines.append('name=AstroRise\n')
                name_updated = True
            elif line.strip().startswith('iconKey='):
                new_lines.append(f'iconKey={icon_key}\n')
                icon_key_updated = True
            else:
                new_lines.append(line)

        if not name_updated:
            new_lines.append('name=AstroRise\n')
        if not icon_key_updated:
            new_lines.append(f'iconKey={icon_key}\n')

        with open(INSTANCE_CFG_PATH, 'w') as f:
            f.writelines(new_lines)

        print("  Instance name set to 'AstroRise'.")
        print(f"  Instance icon key set to '{icon_key}'.")
    except IOError as e:
        die(f"Could not read or write to '{INSTANCE_CFG_PATH}': {e}")


def install_icon():
    """
    Copies the pack icon to the MultiMC icons directory.
    """
    print(f"Installing icon...")
    if not os.path.exists(ICON_SOURCE_PATH):
        print(f"  Warning: Icon '{ICON_SOURCE_PATH}' not found. Skipping icon installation.")
        return

    icon_dest_name = os.path.splitext(os.path.basename(ICON_SOURCE_PATH))[0]
    icon_dest_path = os.path.join(ICON_DEST_DIR, icon_dest_name)

    try:
        os.makedirs(ICON_DEST_DIR, exist_ok=True)
        shutil.copy(ICON_SOURCE_PATH, icon_dest_path)
        print(f"  Icon copied to '{os.path.abspath(icon_dest_path)}'.")
    except (IOError, os.error) as e:
        die(f"Could not copy icon: {e}")


def sync_directory(src, dest):
    """
    Synchronizes a directory from src to dest, deleting the destination first.
    """
    print(f"  Syncing '{src}' to '{dest}'...")
    if not os.path.exists(src):
        die(f"Source directory '{src}' not found.")

    try:
        if os.path.exists(dest):
            shutil.rmtree(dest)
        shutil.copytree(src, dest)
        print(f"    Sync complete.")
    except (IOError, os.error) as e:
        die(f"Could not synchronize directory '{src}': {e}")


def sync_mods():
    """
    Synchronizes the mods based on the manifest file.
    """
    dest_dir = os.path.join(MINECRAFT_DIR, "mods")
    print(f"  Syncing mods to '{dest_dir}'...")

    try:
        with open(MANIFEST_PATH, 'r') as f:
            manifest_data = json.load(f)
    except (IOError, json.JSONDecodeError) as e:
        die(f"Could not read or parse manifest file '{MANIFEST_PATH}': {e}")

    client_mods = manifest_data.get('client_mods', [])
    common_mods = manifest_data.get('mods', [])
    required_mods = client_mods + common_mods

    if not os.path.exists(MODS_SOURCE_DIR):
        die(f"Source mods directory '{MODS_SOURCE_DIR}' not found.")

    # Clean destination directory
    if os.path.exists(dest_dir):
        shutil.rmtree(dest_dir)
    os.makedirs(dest_dir)

    # Copy required mods
    copied_count = 0
    for mod_filename in required_mods:
        source_path = os.path.join(MODS_SOURCE_DIR, mod_filename)
        if os.path.exists(source_path):
            shutil.copy(source_path, dest_dir)
            copied_count += 1
        else:
            print(f"    Warning: Mod '{mod_filename}' listed in manifest but not found in '{MODS_SOURCE_DIR}'.")

    print(f"    Sync complete. Copied {copied_count}/{len(required_mods)} mods.")


def install_client():
    """
    Runs the client installation process.
    """
    print("--- Starting client installation ---")
    verify_versions()
    print("\n--- Updating instance configuration ---")
    update_instance_cfg()
    print("\n--- Installing instance icon ---")
    install_icon()
    print("\n--- Synchronizing directories ---")
    # Ensure .minecraft directory exists
    os.makedirs(MINECRAFT_DIR, exist_ok=True)
    sync_directory(CONFIG_SOURCE_DIR, os.path.join(MINECRAFT_DIR, 'config'))
    sync_directory(KUBEJS_SOURCE_DIR, os.path.join(MINECRAFT_DIR, 'kubejs'))
    sync_mods()
    print("\n--- Client installation complete! ---")


def install_server():
    """
    Runs the server installation process.
    """
    print("Starting server installation...")
    # Placeholder for server installation steps
    print("Server installation is not yet implemented.")
    print("Server installation complete.")

def main():
    """
    Main function to parse arguments and run the installer.
    """
    parser = argparse.ArgumentParser(
        description="Astro Rise Modpack Installer. Choose 'client' or 'server' installation."
    )
    parser.add_argument(
        "mode",
        choices=['client', 'server'],
        help="The installation mode: 'client' for a MultiMC instance, 'server' for a dedicated server."
    )

    args = parser.parse_args()

    if args.mode == 'client':
        install_client()
    elif args.mode == 'server':
        install_server()
    else:
        # This case should not be reached due to argparse `choices`
        print(f"Error: Invalid mode '{args.mode}'. Please use 'client' or 'server'.", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
