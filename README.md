# Astro Rise Modpack

This repository contains the files for the Astro Rise modpack, along with a Python-based installer to help set it up.

## Client Installation Guide (for MultiMC)

This guide will walk you through creating a new instance and installing the modpack.

### Step 1: Create Instance & Select Minecraft Version

In the main MultiMC window, click **"Add Instance"**. A dialog box will appear.

Select the version of Minecraft that matches the one specified in `manifest.json` (currently **1.20.1**). You can leave the name as default for now.

![Step 1: Select Minecraft Version](.github/assets/step-1.png)

Click **"OK"**.

### Step 2: Edit the New Instance

With your new instance created, select it and click **"Edit Instance"** from the right-hand menu.

![Step 2: Edit Instance](.github/assets/step-2.png)

### Step 3: Install Forge

In the "Version" tab of the instance editor, click **"Install Forge"** on the right side.

![Step 3: Install Forge](.github/assets/step-3.png)

### Step 4: Select Forge Version

A new window will open. Select the version of Forge that matches the one specified in `manifest.json` (currently **47.4.0**).

![Step 4: Select Forge Version](.github/assets/step-4.png)

Click **"OK"**. MultiMC will now install the modloader.

### Step 5: Open the Instance Folder

Once the modloader is installed, return to the main MultiMC window. Right-click on your instance and select **"Instance Folder"**.

![Step 5: Open Instance Folder](.github/assets/step-5.png)

This will open the folder where the instance's files are stored.

### Step 6: Copy Repository Files & Run Installer

Now, you will set up the modpack itself.

1.  Download or clone this repository. Copy the **entire contents** of the repository (the `astro-rise` folder, `manifest.json`, `installer.py`, etc.) directly into the instance folder you just opened.
2.  **!!! CLOSE MULTIMC !!!** Before running the installer, make sure the MultiMC application is **completely closed**. This is critical.
3.  Open a terminal or command prompt inside the instance folder and run the installer script:
    ```bash
    python installer.py client
    ```
4.  The script will ask you to confirm that MultiMC is closed. Press Enter to proceed.

Once the script is finished, you can re-open MultiMC, and your Astro Rise instance will be ready to play!

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
    pyinstaller --onefile --name AstroRiseInstaller installer.py
    ```

3.  **Distribute the Executable:**
    The `AstroRiseInstaller.exe` file will be created in the `dist` directory. Share this file with your users.
