# Using QuickRPC

This guide will contain (somewhat) useful information on how to use QuickRPC

## Configuration

### Buttons

Settings for buttons found in `Open Config Folder>Config.json` under keys `Button1` and `Button2`

### Games (1st Status Line, Small Icon)

To add a game, first, make a new file (which's name ends with .json - you might need to [enable show hidden file extensions](https://fileinfo.com/help/windows_10_show_file_extensions) in windows 10) in the `Config/Games` folder, and put this preset JSON in:

<CodeBlock>
{
  "Exe": ["game.exe"],
  "Prefix": "Playing",
  "DisplayName": "Game",
  "Enabled": true,
  "Icon": "rpc-gameicon-name",
  "Priority": 15
}
<CodeBlock>

Replace `game.exe` with the executable name (add more executable names if needed, each being a seperate `"string"` within the array of exes (`[]`))

#### Disabling Game Detection altogether (0.2.1 or above)

To disable game detection (lets say for some reason it's erroring), replace the line stating `--gameLineOverwrite none` with `--gameLineOverwrite <2nd line here>` (see [Using a Flag](#usingaflag))

#### Disabling Overwriting Games (0.1.2 or above)

Replace the flag `--overwriteGameJsonStrings true` with `--overwriteGameJsonStrings false` (see [Using a Flag](#usingaflag))

### Quotes (2nd Status Line)

Quotes can be found in the `quotes.txt` file, and every 15 seconds (every RPC update), a random line is selected from that file, to be put on the 2nd line of your status.

Lines must be at maximum `99-(Game Prefix Length)` characters long (longer will be ignored - sorry for those 100 character quotes), and mustn't start with `//` or be empty, otherwise they will be ignored

If none are found, the program might break idk

## Using A Flag

Flags are seperated into 2 categories, `value` and `valueless`

`valueless`-flags are structured like this: `--flagName`<br/>
`value`-flags are structured like this: `--flagName value (can include spaces)`

Regardless of which structure is used, each flag is on a seperate line in the `.flags` file<br/>(`.flags` file is found in your config directory, which is usually `%APPDATA%\QuickRPC\Config` on windows, and `~/.config/quickrpc/Config` on linux - you can access the config directory by clicking `Open Config Folder`)

To add one, add it to a new line in the `.flags` file, using the structures above

## Notes

1. Will not work if you have multiple discord clients logged into different accounts open
2. (Primarily for builds from source, or if you insist on using an older version - not needed pre-0.2.0)<br/>Use the `--noUpdateCheck` flag if the version in `package.json` doesn't match the latest version on the github releases page (See [Using a Flag](#usingaflag))<br/>
   > 1. The flag must be on its own line in the `.flags` file
   > 2. If the path to the .flags file, or the .flags file itself, doesn't exist, create it
   > 3. noUpdateCheck will entirely disable update checking, not just disable enforcing usage of the latest version.
   >    If you still want update checking, but not enforcement, use `--noUpdateEnforcement` (0.2.3+)
3. If you are getting an error every aproximately 15 seconds, try [this](#disablinggamedetectionaltogether021orabove)
4. If you don't want preset games to be replaced on each program restart (new ones are still added on restart), use [this](#disablingoverwritinggames012orabove)

## Issues

If you have an issue, whether you need support, or there's a bug, just file an [Issue](https://github.com/0J3/QuickRPC/issues/new). Detail in the original post is optional, but would be good if provided.
