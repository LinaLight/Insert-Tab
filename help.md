## create a extension

In this topic, we'll teach you the fundamental concepts for building extensions. Make sure you have Node.js and Git installed.
First, use Yeoman and VS Code Extension Generator to scaffold a TypeScript or JavaScript project ready for development.
    If you do not want to install Yeoman for later use, run the following command:

    npx --package yo --package generator-code -- yo code


## Publishing Extensions

Once you have made a high-quality extension, you can publish it to the VS Code Extension Marketplace so others can find, download, and use your extension. Alternatively, you can package an extension into the installable VSIX format and share it with other users.
This topic covers:
    Using vsce, the CLI tool for managing VS Code extensions
    Packaging, publishing and unpublishing extensions
    Registering a publisher necessary for publishing extensions
vsce, short for "Visual Studio Code Extensions", is a command-line tool for packaging, publishing and managing VS Code extensions.
Installation
Make sure you have Node.js installed. Then run:

npm install -g @vscode/vsce
cd myExtension
vsce package
vsce publishvsce package