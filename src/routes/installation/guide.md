# Installation

## Dependencies

These instructions assume you have the following:

1. Discord (https://discord.com/)
2. NodeJS (https://nodejs.org/)
3. Yarnpkg (https://yarnpkg.com/) (Classic will do (`npm i -g yarn`))
4. Git (look it up)

Steps 2., 3. and 4. are only for [building from source](#build-instructions)

Once you have the following, you can proceed to [Installing QuickRPC from prebuilt installers](#installing-from-prebuilt-installers)

## Installing from Prebuilt Installers

To install QuickRPC from prebuilt installers, first, download the appropriate file from <Link href="/download">here</Link>

### Windows

Run `QuickRPC Setup <VERSION>.exe`

If Windows SmartScreen complains, click `Read More` (or similar), then `Run Anyway`

The only reason it's complaining is because i didn't sign my code with a code-signing license.

### Linux (.deb)

Open a Terminal, `cd` into the directory (usually `cd ~/Downloads`), and run `sudo apt install ./quickrpc_<VERSION>_amd64.deb`

### Linux (.snap)

idk how to install snap files offhand just look it up ig

## Installing from Source

### Downloading the QuickRPC Source Code

1. Open a Terminal
2. Clone the repository (you know how; `git clone https://github.com/0J3/QuickRPC.git`)
3. CD into the Directory: `cd QuickRPC`
4. Install packages `yarn`

### Running QuickRPC from local code

1. Ensure your terminal is in the root directory of QuickRPC
2. Run `yarn start`

### Building QuickRPC

1. Ensure your terminal is in the root directory of QuickRPC
2. Run `yarn dist`

### Developer Notes

See [developers.md](/developers.md) (SoonTM)

---

Now that you've installed it (regardless how), you can move on to [Configuration](#configuration)
