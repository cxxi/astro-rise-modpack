# Astro Rise Modpack

This repository contains the files for the Astro Rise modpack, along with a Python-based installer to help set it up.

## Client Installation Guide (for MultiMC)

This guide will walk you through creating a new instance and installing the modpack.

### Step 1: Clone the Repository

For the best experience, including automatic updates, you should install the modpack using `git`.

Open a terminal or command prompt and navigate to your MultiMC `instances` directory. Then, run the following command to clone the repository. This will create a new instance folder for you.
```bash
git clone https://github.com/cxxi/astro-rise-modpack.git "AstroRise"
```
*(Note: If you prefer not to use git, you can download the repository as a ZIP file and extract it into a new folder inside your `instances` directory. However, you will not benefit from the automatic update feature.)*

### Step 2: Run the Installer

This is the most important step.

1.  **!!! CLOSE MULTIMC !!!** Before running the installer, make sure the MultiMC application is **completely closed**. This is critical to ensure your instance configuration is updated correctly.
2.  Open a terminal or command prompt inside the new `AstroRise` instance folder.
3.  Run the installer script:
    ```bash
    # On Windows
    python astro-rise/devtool/installer.py client

    # On Linux/macOS
    python3 astro-rise/devtool/installer.py client
    ```
4.  The script will ask you to confirm that MultiMC is closed. Press Enter to proceed.
5.  The script will verify your environment and synchronize all the necessary mods, configs, and scripts.

Once the script is finished, you can open MultiMC, and your Astro Rise instance will be ready to play!

## Updating the Modpack

If you installed the pack using the `git clone` method, updating is simple:
1.  Make sure MultiMC is closed.
2.  Run the installer script again from within your instance folder:
    ```bash
    python astro-rise/devtool/installer.py client
    ```
The script will automatically download the latest changes before applying them.

If you installed from a ZIP file, you must delete your instance and follow the installation guide again with the new ZIP file.

---

## For Developers

### How to Create a Standalone Installer (.exe)

To make it easier for users, you can compile the `installer.py` script into a single standalone executable file.

1.  **Install PyInstaller:**
    ```bash
    pip install pyinstaller
    ```

2.  **Run PyInstaller:**
    ```bash
    pyinstaller --onefile --name AstroRiseInstaller astro-rise/devtool/installer.py
    ```

3.  **Distribute the Executable:**
    The `AstroRiseInstaller.exe` file will be created in the `dist` directory. Share this file with your users.
