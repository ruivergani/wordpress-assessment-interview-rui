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
   cd assessment

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

In a few minutes, you should have a fresh WordPress install up and running with a simple theme named WordPress Assessment activated. The service assumes it can run on port 8888, so if there's a conflict there, you'll have to edit `.wp-env.json`, run `npm run env:destroy` and then re-run `npm run env:init`.

Any changes made to the `./content/` folder will show up on the WordPress install.
   
**WP-CLI**

If you need to run any wp-cli commands, it is available via either `npx wp-env run cli [command]` OR, you can use the `./bin/wp.sh` which should make things a bit easier.

The local WordPress instance will now be accessible at:
   ```bash
   http://localhost:8888

