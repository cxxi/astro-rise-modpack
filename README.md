# AstroRise Modpack

`minecraft 1.20.1` `forge 47.4.0`

![astro-rise-logo](astro-rise/astro-rise.png)
=======

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
    ```bash
    git init
    git remote add origin git@github.com:cxxi/astro-rise-modpack.git
    git pull origin main
    ```
2.  **!!! CLOSE MULTIMC !!!** Before running the installer, make sure the MultiMC application is **completely closed**. This is critical.
3.  Open a terminal or command prompt inside the instance folder and run the installer script:
    ```bash
    ./installer.sh client 
    ```
4.  The script will ask you to confirm that MultiMC is closed. Press Enter to proceed.

Once the script is finished, you can re-open MultiMC, and your Astro Rise instance will be ready to play!

## Server Installation

*not implemented*  

## Updating the Modpack

If you installed the pack using the `git clone` method, updating is simple:
1.  Make sure MultiMC is closed.
2.  Run the installer script again from within your instance folder:
    ```bash
    ./installer.sh client 
    ```
The script will automatically download the latest changes before applying them.

If you installed from a ZIP file, you follow the installation guide again with the new ZIP file.

---
