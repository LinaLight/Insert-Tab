# insert-tab-when-press-tab README

This extension allow you insert Tab when press Tab, when "Insert Spaces when press Tab" is enabled.
This extension is for those who use spaces for indent and tab for align.

## Features

If:
1. the Tab key is pressed.
2. Editor is in Insert mode, not Normal mode nor Visual mode.
3. Characters between the beginning of the current line and the cursor are all whitespaces character.
Then:
1. The Tab character is insert

## Extension Settings

No setting is required.
But:
This extension wouldn't have any effect if you disabled the "Insert Spaces when press Tab".
This extension wouldn't be much useful if your "editor.IndentSize" setting is "tabSize".

## Known Issues

The Tab character insidel a line e.g. "    \t\n" can not be deleted by backspace key.

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Initial release

**Enjoy!**
