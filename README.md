# WordPress Assessment Interview - Rui Vergani Neto

This project is an assessment for beginner WordPress developers aimed at evaluating their experience with WordPress. It involves setting up a WordPress environment, building custom assets, and interacting with a provided theme.

## Setup and Installation

### Prerequisites

Make sure your system meets the following requirements:
- **Node.js**: version ~18
- **npm**: version ~8
- **Docker**: required to run the WordPress environment
- **Operating System**: Linux-based system (Linux, macOS, or Windows >= 10 w/ WSL)

### Step-by-Step Guide

1. **Fork this repo, clone  it to your local and cd into the directory:**
   
   ```bash
   git clone https://github.com/ruivergani/wordpress-assessment-interview-rui.git

3. **Install Dependencies::**
   
   ```bash
   npm install

4. **Initialize the WordPress Environment:**
   
   This command sets up the local WordPress environment using Docker:
   ```bash
   npm run env:init
   
5. **Launch the WordPress Environment:**
   
   Run this command to activate the theme, delete existing themes and plugins, and launch the environment:
   ```bash
   npm run env:launch

6. **Build Assets::**
   
   ```bash
   npm run assets:build

7. **Watch and build assets with hot reload::**
   
   ```bash
   npm run assets:watch:hot

In a few minutes, you should have a fresh WordPress install up and running with a simple theme named WordPress Assessment activated. The service assumes it can run on port 8888, so if there's a conflict there, you'll have to edit `.wp-env.json`, run `npm run env:destroy` and then re-run `npm run env:init`.

Any changes made to the `./content/` folder will show up on the WordPress install.
   
**WP-CLI**

If you need to run any wp-cli commands, it is available via either `npx wp-env run cli [command]` OR, you can use the `./bin/wp.sh` which should make things a bit easier.

The local WordPress instance will now be accessible at: 
   ```bash
   http://localhost:8888
   ```

### WP-CLI Usage

To run WP-CLI commands within the Docker environment, you have two options:
   ```bash
   npx wp-env run cli [command]
   ```

Using the provided WP-CLI helper script:
   ```bash
   ./bin/wp.sh [command]
   ```

### Development Commands

Here are some useful commands for working with the project:

Start the WordPress environment:
   ```bash
   npm run env:start
   ```

Stop the WordPress environment:
   ```bash
   npm run env:stop
   ```

Restart the WordPress environment:
   ```bash
   npm run env:restart
   ```

### Common Issues and Solutions

1. Port 8888 is already in use: 
If port 8888 is occupied, stop the conflicting service or edit .wp-env.json to change the port number.
To identify the process using the port, run the following:

   ```bash
   lsof -i :8888
   ```

2. npm install errors
Ensure you're using the correct version of Node.js and npm:
   ```bash
   node --version
   npm --version
   ```
   If the versions do not match, update to the correct version.

3. MySQL connection errors
If you encounter database connection issues, it may be due to an outdated version of Docker. Update Docker, and then reset the environment by running:
   ```bash
   npm run env:stop
   npm run env:destroy
   npm run env:init
   npm run env:launch
   ```
