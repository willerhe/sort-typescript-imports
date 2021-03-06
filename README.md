# Sort Typescript imports

Sort import statements in Typescript code

## Features

This configurable extension allows you to sort all the imports in a *.ts or *.tsx file.

> Tip: You can access this functionality either from the context menu, or simply pressing 'F10'

## Extension Settings

* `typescript.extension.sortImports.sortMethod`: The method to use for sorting the imports.
  * `'importName'`(default) sorts by the type and name of the import. Namespace imports are first, followed by default imports, named imports, and unnamed imports.
  * `'path'` sorts by the import path, sorting relative-path imports above package imports
* `typescript.extension.sortImports.pathSortOrder`: An array describing the order in which imports should be sorted by paths. Only applicable if `sortMethod` is set to `path`.
  * Default: `["relativeDownLevel", "relativeUpLevel", "package"]`
  * `package` - Any import path that does not begin with `.`
  * `relativeUpLevel` - Any import path that begins with `../`
  * `relativeDownLevel` - Any import path that begins with `./`
* `typescript.extension.sortImports.maxNamedImportsInSingleLine`: The number of named imports to allow on a single line. If a single import has more than this number, they will be broken up onto separate lines.
* `typescript.extension.sortImports.quoteStyle`: The type of quotation mark to use. `single`(default) or `double`.
* `typescript.extension.sortImports.sortOnSave`: If set to `true`, imports will be sorted whenever you save a file. Default: `false`
* `typescript.extension.sortImports.sortMembers`: import {a, c, b}... -> import {a, b, c}...**
* `typescript.extension.sortImports.omitSemicolon`: If set to `true`, the trailing semicolon will be omitted. Default: `false`
* `typescript.extension.sortImports.enableJavascript`: If set to `true`, the extension will attempt to sort ES6-style imports in Javascript files. Default: `false`

