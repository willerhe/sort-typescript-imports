import * as vscode from 'vscode'
import sortImports from './sortImports'

export default function sortInsideEditor () {
  let editor = vscode.window.activeTextEditor

  let edits: vscode.TextEdit[] = sortImports(editor.document)

  editor.edit(
    editBuilder => {
      edits.forEach(edit => {
        editBuilder.replace(edit.range, edit.newText)
      })
    }
  )
}