import argparse
import os
import sys
import json
import shutil
import subprocess

# --- Constants ---
# When running as a compiled PyInstaller executable, __file__ points to a temporary
# directory. The correct way to find the application's "home" directory is to
# use sys.executable.
# We assume the compiled installer (`installer.sh` or `installer.exe`) is
# placed in the root of the MultiMC instance folder.
if getattr(sys, 'frozen', False):
    # We are running in a bundle
    INSTANCE_ROOT = os.path.dirname(os.path.abspath(sys.executable))
else:
    # We are running in a normal Python environment
    # The script is at <instance_folder>/astro-rise/devtool/installer.py
    # So, the instance folder is two levels up from the script's directory.
    SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
    INSTANCE_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))

# Paths within the instance folder
GIT_DIR = os.path.join(INSTANCE_ROOT, ".git")
MANIFEST_PATH = os.path.join(INSTANCE_ROOT, "manifest.json")
MMC_PACK_PATH = os.path.join(INSTANCE_ROOT, "mmc-pack.json")
INSTANCE_CFG_PATH = os.path.join(INSTANCE_ROOT, "instance.cfg")
MINECRAFT_DIR = os.path.join(INSTANCE_ROOT, ".minecraft")

# Source paths are inside the `astro-rise` directory within the instance
ASTRO_RISE_DIR = os.path.join(INSTANCE_ROOT, "astro-rise")
ICON_SOURCE_PATH = os.path.join(ASTRO_RISE_DIR, "astro-rise.png")
CONFIG_SOURCE_DIR = os.path.join(ASTRO_RISE_DIR, "config")
KUBEJS_SOURCE_DIR = os.path.join(ASTRO_RISE_DIR, "kubejs")
MODS_SOURCE_DIR = os.path.join(ASTRO_RISE_DIR, "mods")

# Destination for the icon is relative to the instance folder
ICON_DEST_DIR = os.path.join(INSTANCE_ROOT, "..", "..", "icons")

def die(message):
    """Prints an error message to stderr and exits the script."""
    print(f"\nError: {message}", file=sys.stderr)
    sys.exit(1)

def prompt_for_continue(message):
    """Prints a message and waits for the user to press Enter."""
    print(message)
    try:
        input("Press Enter to continue, or Ctrl+C to cancel...")
    except KeyboardInterrupt:
        print("\nInstallation cancelled by user.")
        sys.exit(1)

def try_git_update():
    """Attempts to self-update the repository using Git if available."""
    print("--- Checking for updates ---")
    if not os.path.isdir(GIT_DIR):
        print("  .git directory not found. Skipping automatic update.")
        print("  To enable updates, please install by cloning the repository with Git.")
        return

    git_executable = shutil.which('git')
    if not git_executable:
        print("  Git command not found. Skipping automatic update.")
        print("  Please install Git or update manually by re-downloading the repository.")
        return

    print("  Git repository found. Attempting to pull latest changes...")
    try:
        # Fetch latest changes from origin
        fetch_process = subprocess.run([git_executable, "fetch"], cwd=INSTANCE_ROOT, capture_output=True, text=True)
        if fetch_process.returncode != 0:
            print("  Warning: 'git fetch' failed. Could not check for updates.")
            print(f"  Git stderr: {fetch_process.stderr}")
            return

        # Reset to the latest version of the main branch, discarding local changes
        reset_process = subprocess.run([git_executable, "reset", "--hard", "origin/main"], cwd=INSTANCE_ROOT, capture_output=True, text=True)
        if reset_process.returncode != 0:
            print("  Warning: 'git reset' failed. Could not apply updates automatically.")
            print(f"  Git stderr: {reset_process.stderr}")
            return

        print("  Repository updated successfully.")
        print(reset_process.stdout)

    except Exception as e:
        print(f"  An unexpected error occurred during git update: {e}")

def get_mmc_version(components, component_uid):
    """Finds the version of a specific component in the mmc-pack.json data."""
    for component in components:
        if component.get('uid') == component_uid:
            return component.get('cachedVersion')
    return None

def verify_versions():
    """Verifies that Minecraft/Forge versions in mmc-pack.json match manifest.json."""
    print("\n--- Verifying Minecraft and Forge versions ---")
    if not os.path.exists(MANIFEST_PATH):
        die(f"'{MANIFEST_PATH}' not found. Run installer from the repository root.")
    if not os.path.exists(MMC_PACK_PATH):
        die(f"'{MMC_PACK_PATH}' not found. Place repository content inside a MultiMC instance folder.")

    try:
        with open(MANIFEST_PATH, 'r') as f: manifest_data = json.load(f)
        with open(MMC_PACK_PATH, 'r') as f: mmc_pack_data = json.load(f)
    except json.JSONDecodeError as e:
        die(f"Could not parse JSON file: {e}")

    required_mc = manifest_data.get('minecraft_version')
    required_forge = manifest_data.get('forge_version')
    if not required_mc or not required_forge:
        die(f"'minecraft_version' or 'forge_version' not defined in '{MANIFEST_PATH}'.")

    mmc_components = mmc_pack_data.get('components', [])
    current_mc = get_mmc_version(mmc_components, 'net.minecraft')
    current_forge = get_mmc_version(mmc_components, 'net.minecraftforge')
    if not current_mc or not current_forge:
        die(f"Could not determine Minecraft/Forge version from '{MMC_PACK_PATH}'.")

    if current_mc != required_mc:
        die(f"Minecraft version mismatch. Expected {required_mc}, but instance is {current_mc}.")
    if current_forge != required_forge:
        die(f"Forge version mismatch. Expected {required_forge}, but instance is {current_forge}.")
    print("  Versions verified successfully.")

def update_instance_cfg():
    """Updates the instance.cfg file to set the name and iconKey."""
    print(f"Updating '{INSTANCE_CFG_PATH}'...")
    if not os.path.exists(INSTANCE_CFG_PATH):
        print(f"  Warning: '{INSTANCE_CFG_PATH}' not found. Skipping config update.")
        return

    icon_key = os.path.splitext(os.path.basename(ICON_SOURCE_PATH))[0]
    try:
        with open(INSTANCE_CFG_PATH, 'r') as f: lines = f.readlines()

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

        if not name_updated: new_lines.append('name=AstroRise\n')
        if not icon_key_updated: new_lines.append(f'iconKey={icon_key}\n')

        with open(INSTANCE_CFG_PATH, 'w') as f: f.writelines(new_lines)
        print("  Instance name and icon key set.")
    except IOError as e:
        die(f"Could not read or write to '{INSTANCE_CFG_PATH}': {e}")

def install_icon():
    """Copies the pack icon to the MultiMC icons directory."""
    print(f"Installing icon...")
    if not os.path.exists(ICON_SOURCE_PATH):
        print(f"  Warning: Icon '{ICON_SOURCE_PATH}' not found. Skipping.")
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
    """Synchronizes a directory from src to dest, deleting the destination first."""
    print(f"  Syncing '{src}' to '{dest}'...")
    if not os.path.exists(src): die(f"Source directory '{src}' not found.")
    try:
        if os.path.exists(dest): shutil.rmtree(dest)
        shutil.copytree(src, dest)
        print(f"    Sync complete.")
    except (IOError, os.error) as e:
        die(f"Could not synchronize directory '{src}': {e}")

def sync_mods():
    """Synchronizes the mods based on the manifest file."""
    dest_dir = os.path.join(MINECRAFT_DIR, "mods")
    print(f"  Syncing mods to '{dest_dir}'...")
    try:
        with open(MANIFEST_PATH, 'r') as f: manifest_data = json.load(f)
    except (IOError, json.JSONDecodeError) as e:
        die(f"Could not read or parse manifest file '{MANIFEST_PATH}': {e}")

    required_mods = manifest_data.get('client_mods', []) + manifest_data.get('mods', [])
    if not os.path.exists(MODS_SOURCE_DIR): die(f"Source mods directory '{MODS_SOURCE_DIR}' not found.")

    if os.path.exists(dest_dir): shutil.rmtree(dest_dir)
    os.makedirs(dest_dir)

    copied_count = 0
    for mod_filename in required_mods:
        source_path = os.path.join(MODS_SOURCE_DIR, mod_filename)
        if os.path.exists(source_path):
            shutil.copy(source_path, dest_dir)
            copied_count += 1
        else:
            print(f"    Warning: Mod '{mod_filename}' not found in '{MODS_SOURCE_DIR}'.")
    print(f"    Sync complete. Copied {copied_count}/{len(required_mods)} mods.")

def install_client():
    """Runs the client installation process."""
    try_git_update()
    print("\n--- Starting Installation/Update ---")
    prompt_for_continue("!!! IMPORTANT !!!\nPlease ensure MultiMC is completely closed before proceeding.\nFailure to do so may result in the configuration changes being overwritten by MultiMC.")
    verify_versions()
    print("\n--- Updating instance configuration ---")
    update_instance_cfg()
    print("\n--- Installing instance icon ---")
    install_icon()
    print("\n--- Synchronizing directories ---")
    os.makedirs(MINECRAFT_DIR, exist_ok=True)
    sync_directory(CONFIG_SOURCE_DIR, os.path.join(MINECRAFT_DIR, 'config'))
    sync_directory(KUBEJS_SOURCE_DIR, os.path.join(MINECRAFT_DIR, 'kubejs'))
    sync_mods()
    print("\n--- Client installation complete! ---")

def install_server():
    """Runs the server installation process."""
    print("Server installation is not yet implemented.")

def main():
    """Main function to parse arguments and run the installer."""
    parser = argparse.ArgumentParser(description="Astro Rise Modpack Installer.")
    parser.add_argument("mode", choices=['client', 'server'], help="Installation mode: 'client' or 'server'.")
    args = parser.parse_args()
    if args.mode == 'client':
        install_client()
    elif args.mode == 'server':
        install_server()

if __name__ == "__main__":
    main()
