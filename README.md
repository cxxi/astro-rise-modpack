# Minecraft Modpack Repository

This repository is designed to manage a Minecraft Forge 1.20.1 modpack for both client and server environments. It centralizes mods, configurations, KubeJS scripts, and datapacks in a single version-controlled repository.

## How to Use

1.  **Clone the Repository**: Clone this repository directly into your MultiMC instance's `.minecraft` directory.
    ```sh
    git clone <repository_url> .
    ```
    *Note the `.` at the end of the command, which clones the repo into the current directory.*

2.  **Add Your Files**: Place your modpack files into the `modpack_source` directory.
    *   **Common files** (for both client and server) go into the `common` subdirectories.
    *   **Client-only files** go into the `client` subdirectories.
    *   **Server-only files** go into the `server` subdirectories.

3.  **Deploy the Modpack**: After pulling changes or adding new files, run the `deploy.sh` script to place the files in their correct locations.

    *   **For a client setup**:
        ```sh
        ./deploy.sh client
        ```

    *   **For a server setup**:
        ```sh
        ./deploy.sh server
        ```

## Directory Structure

*   `modpack_source/`: This directory contains the source files for the modpack, separated into `client`, `server`, and `common` subdirectories. This is where you should add and manage your files.
    *   `mods/`: Contains the mod `.jar` files.
    *   `config/`: Contains the mod configuration files.
    *   `kubejs/`: Contains KubeJS scripts.
    *   `datapacks/`: Contains datapacks.
*   `deploy.sh`: The script used to deploy the modpack.
*   `.gitignore`: A comprehensive gitignore file to prevent tracking of unnecessary files.
*   `mods/`, `config/`, `kubejs/`, `datapacks/`: These are the directories that Minecraft uses. They are intentionally git-ignored and are populated by the `deploy.sh` script. **Do not place files directly in these directories.**
