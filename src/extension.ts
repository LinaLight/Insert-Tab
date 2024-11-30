// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "insert-tab-when-press-tab" is now active!');
	let indent = vscode.commands.registerCommand('Insert Tab',() =>{
		let editor = vscode.window.activeTextEditor;
		if(!editor) {return;}
		editor.edit((edit: vscode.TextEditorEdit) => {
			if(!editor) {return;}
			editor.selections.forEach(it => {
				if(it.isEmpty) {
					let line = editor.document.lineAt(it.start.line).text;
					let indent = line.search(/\S|$/);
					//console.log(line);
					//console.log(indent);
					//console.log(it.start.character);
					if(it.start.character <= indent) {
						vscode.commands.executeCommand('tab');
					} else {
						edit.insert(it.active,'\t');
					}
				} else {
					vscode.commands.executeCommand('tab');
				}
			});
		});
	});
	context.subscriptions.push(indent);
}

// This method is called when your extension is deactivated
export function deactivate() {}
