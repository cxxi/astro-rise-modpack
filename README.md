# AstroRise Modpack

`minecraft 1.20.1` `forge 47.4.0`

![astro-rise-logo](astro-rise/astro-rise.png)

This repository contains the files for the Astro Rise modpack, along with a Python-based installer to help set it up.

## Installer Usage

The `installer.py` script is used to set up the modpack for different environments.

### Client Installation (for MultiMC)

1.  Download the repository as a ZIP file and unzip it, or clone it.
2.  Copy the entire content of the repository into your new MultiMC instance folder.
3.  Run the installer in `client` mode from a terminal inside the instance folder:
    ```bash
    python installer.py client
    ```
4.  The script will verify your Minecraft and Forge versions and synchronize all the necessary configs, scripts, and mods.

### Server Installation

The server installation process is not yet implemented.

---

## For Developers

### How to Create a Standalone Installer (.exe)

To make it easier for users who do not have Python installed, you can compile the `installer.py` script into a single standalone executable file (`.exe` for Windows).

1.  **Install PyInstaller:**
    If you don't have it already, install PyInstaller using pip:
    ```bash
    pip install pyinstaller
    ```

2.  **Run PyInstaller:**
    Navigate to the root of the repository in your terminal and run the following command:
    ```bash
    pyinstaller --onefile --name AstroRiseInstaller installer.py
    ```
    *   `--onefile`: This bundles everything into a single executable file.
    *   `--name AstroRiseInstaller`: This sets the name of the output file.

3.  **Distribute the Executable:**
    After PyInstaller finishes, you will find the `AstroRiseInstaller.exe` file inside a new `dist` directory. You can share this single file with your users. They can place it in their MultiMC instance folder and run it without needing to install Python.
