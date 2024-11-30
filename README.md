# Insert Tab when press Tab

This extension allow you insert Tab when press Tab, when "Insert Spaces when press Tab" is enabled.

This extension is for those who use spaces for indent and tab for align.

## Features

If:
1. the Tab key is pressed.
2. Characters between the beginning of the current line and the cursor are not all whitespace character.

Then:
1. The Tab character is insert

## Notes

This extension wouldn't make any different if you have disabled the "Insert Spaces when press Tab".

This extension wouldn't be much useful if your "editor.IndentSize" setting is "tabSize".

Since some files may have a mixture of tabs and spaces for indent, this extension will treat all leading whitespace character as indent.

When the Tab character appeared inside indent e.g. "    \t\n", you may not able to delete that "\t" by backspace key in VSCode.

## Extension Settings

No setting is required.

## Known Issues

None yet.

## Release Notes

### 1.0.0

Initial release
