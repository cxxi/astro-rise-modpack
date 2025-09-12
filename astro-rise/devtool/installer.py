import argparse
import os
import sys
import json
import shutil
import subprocess
import tkinter as tk
from tkinter import ttk, messagebox
from PIL import Image, ImageTk

# --- Global State ---
IS_GUI_MODE = False

# --- Constants ---
# Path logic to handle both normal execution and PyInstaller bundling
if getattr(sys, 'frozen', False):
    INSTANCE_ROOT = os.path.dirname(os.path.abspath(sys.executable))
else:
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
ASTRO_RISE_SRC_DIR = os.path.join(ASTRO_RISE_DIR, "src")
ICON_SOURCE_PATH = os.path.join(ASTRO_RISE_DIR, "astro-rise.png")
CONFIG_SOURCE_DIR = os.path.join(ASTRO_RISE_SRC_DIR, "config")
KUBEJS_SOURCE_DIR = os.path.join(ASTRO_RISE_SRC_DIR, "kubejs")
MODS_SOURCE_DIR = os.path.join(ASTRO_RISE_SRC_DIR, "mods")

# Destination for the icon is relative to the instance folder
ICON_DEST_DIR = os.path.join(INSTANCE_ROOT, "..", "..", "icons")

def die(message):
    """Prints an error message and exits the script."""
    error_message = f"\nError: {message}"
    if IS_GUI_MODE:
        messagebox.showerror("Error", message)
    else:
        print(error_message, file=sys.stderr)
    sys.exit(1)

def prompt_for_continue(message):
    """Prints a message and waits for user confirmation, adapting to GUI or CLI."""
    if IS_GUI_MODE:
        # In GUI mode, show a dialog box. askokcancel returns True if OK is clicked.
        if not messagebox.askokcancel("Confirmation", message):
            print("\nInstallation cancelled by user.")
            sys.exit(1)
    else:
        # In CLI mode, use input()
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
        return

    git_executable = shutil.which('git')
    if not git_executable:
        print("  Git command not found. Skipping automatic update.")
        return

    print("  Git repository found. Attempting to pull latest changes...")
    try:
        subprocess.run([git_executable, "fetch"], cwd=INSTANCE_ROOT, check=True, capture_output=True)
        reset_process = subprocess.run([git_executable, "reset", "--hard", "origin/main"], cwd=INSTANCE_ROOT, check=True, capture_output=True, text=True)
        print("  Repository updated successfully.")
        print(reset_process.stdout)
    except (subprocess.CalledProcessError, Exception) as e:
        print(f"  Warning: Git update failed. Please update manually. Error: {e}")

# ... (All other core logic functions like verify_versions, update_instance_cfg, etc., remain the same)
def get_mmc_version(components, component_uid):
    for component in components:
        if component.get('uid') == component_uid: return component.get('cachedVersion')
    return None

def verify_versions():
    print("\n--- Verifying Minecraft and Forge versions ---")
    if not os.path.exists(MANIFEST_PATH): die(f"'{MANIFEST_PATH}' not found.")
    if not os.path.exists(MMC_PACK_PATH): die(f"'{MMC_PACK_PATH}' not found.")
    with open(MANIFEST_PATH, 'r') as f: manifest_data = json.load(f)
    with open(MMC_PACK_PATH, 'r') as f: mmc_pack_data = json.load(f)
    required_mc = manifest_data.get('minecraft_version')
    required_forge = manifest_data.get('forge_version')
    mmc_components = mmc_pack_data.get('components', [])
    current_mc = get_mmc_version(mmc_components, 'net.minecraft')
    current_forge = get_mmc_version(mmc_components, 'net.minecraftforge')
    if current_mc != required_mc: die(f"Minecraft version mismatch. Expected {required_mc}, is {current_mc}.")
    if current_forge != required_forge: die(f"Forge version mismatch. Expected {required_forge}, is {current_forge}.")
    print("  Versions verified successfully.")

def update_instance_cfg():
    print(f"Updating '{INSTANCE_CFG_PATH}'...")
    if not os.path.exists(INSTANCE_CFG_PATH):
        print(f"  Warning: '{INSTANCE_CFG_PATH}' not found. Skipping.")
        return
    icon_key = os.path.splitext(os.path.basename(ICON_SOURCE_PATH))[0]
    with open(INSTANCE_CFG_PATH, 'r') as f: lines = f.readlines()
    new_lines, name_updated, icon_key_updated = [], False, False
    for line in lines:
        if line.strip().startswith('name='): new_lines.append('name=AstroRise\n'); name_updated = True
        elif line.strip().startswith('iconKey='): new_lines.append(f'iconKey={icon_key}\n'); icon_key_updated = True
        else: new_lines.append(line)
    if not name_updated: new_lines.append('name=AstroRise\n')
    if not icon_key_updated: new_lines.append(f'iconKey={icon_key}\n')
    with open(INSTANCE_CFG_PATH, 'w') as f: f.writelines(new_lines)
    print("  Instance name and icon key set.")

def install_icon():
    print(f"Installing icon...")
    if not os.path.exists(ICON_SOURCE_PATH):
        print(f"  Warning: Icon '{ICON_SOURCE_PATH}' not found. Skipping.")
        return
    icon_dest_name = os.path.splitext(os.path.basename(ICON_SOURCE_PATH))[0]
    icon_dest_path = os.path.join(ICON_DEST_DIR, icon_dest_name)
    os.makedirs(ICON_DEST_DIR, exist_ok=True)
    shutil.copy(ICON_SOURCE_PATH, icon_dest_path)
    print(f"  Icon copied to '{os.path.abspath(icon_dest_path)}'.")

def sync_directory(src, dest):
    print(f"  Syncing '{src}' to '{dest}'...")
    if not os.path.exists(src): die(f"Source directory '{src}' not found.")
    if os.path.exists(dest): shutil.rmtree(dest)
    shutil.copytree(src, dest)
    print(f"    Sync complete.")

def sync_mods():
    dest_dir = os.path.join(MINECRAFT_DIR, "mods")
    print(f"  Syncing mods to '{dest_dir}'...")
    with open(MANIFEST_PATH, 'r') as f: manifest_data = json.load(f)
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

def show_gui_selector():
    """Shows a simple GUI to select the installation mode."""
    global IS_GUI_MODE
    IS_GUI_MODE = True

    root = tk.Tk()
    root.title("Astro Rise Installer")

    main_frame = ttk.Frame(root, padding="10")
    main_frame.pack(fill=tk.BOTH, expand=True)

    # --- Logo ---
    try:
        # Resize the image to a more reasonable size for the GUI
        img = Image.open(ICON_SOURCE_PATH)
        img.thumbnail((128, 128))
        logo = ImageTk.PhotoImage(img)
        logo_label = ttk.Label(main_frame, image=logo)
        logo_label.pack(pady=10)
    except FileNotFoundError:
        # If logo not found, just continue without it.
        pass
    except Exception as e:
        # Catch other potential Pillow/tk errors
        print(f"Could not load logo: {e}")

    label = ttk.Label(main_frame, text="Choose the installation type:", font=("Arial", 12))
    label.pack(pady=10)

    def run_install(install_function):
        for widget in main_frame.winfo_children():
            widget.destroy()

        text_area = tk.Text(main_frame, wrap=tk.WORD, height=20, width=70)
        text_area.pack(fill=tk.BOTH, expand=True)

        class StdoutRedirector:
            def __init__(self, widget): self.widget = widget
            def write(self, text):
                self.widget.insert(tk.END, text)
                self.widget.see(tk.END)
                root.update_idletasks()
            def flush(self): pass

        sys.stdout = StdoutRedirector(text_area)
        sys.stderr = StdoutRedirector(text_area)

        try:
            install_function()
        except SystemExit as e:
            if e.code != 0: print(f"\nInstallation failed.")
            else: print("\nInstallation finished.")
        except Exception as e:
            print(f"\nAn unexpected error occurred: {e}")

        close_button = ttk.Button(main_frame, text="Close", command=root.destroy)
        close_button.pack(pady=10)

    client_button = ttk.Button(main_frame, text="Install Client", command=lambda: run_install(install_client))
    client_button.pack(pady=10, fill=tk.X)
    server_button = ttk.Button(main_frame, text="Install Server", command=lambda: run_install(install_server))
    server_button.pack(pady=5, fill=tk.X)

    root.mainloop()

def main():
    """Main function to parse arguments or show GUI."""
    if len(sys.argv) > 1:
        parser = argparse.ArgumentParser(description="Astro Rise Modpack Installer.")
        parser.add_argument("mode", choices=['client', 'server'], help="Installation mode: 'client' or 'server'.")
        args = parser.parse_args()
        if args.mode == 'client': install_client()
        elif args.mode == 'server': install_server()
    else:
        show_gui_selector()

if __name__ == "__main__":
    main()
