# `<MarkdownInput>` for react-admin

[![npm](https://img.shields.io/npm/dm/ra-input-markdown)](https://www.npmjs.com/package/ra-input-markdown) [![npm](https://img.shields.io/npm/v/ra-input-markdown)](https://www.npmjs.com/package/ra-input-markdown)

A Markdown input for [react-admin](https://github.com/marmelab/react-admin) 5. It wraps [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor) and binds it to the form with react-admin's `useInput` hook, so it behaves like any other input: validation, `defaultValue`, `format`/`parse` and helper text all work.

![`<MarkdownInput>` example](/screenshot.png?raw=true)

Dark mode follows the react-admin theme automatically:

![`<MarkdownInput>` in dark mode](/screenshot-dark.png?raw=true)

## Installation

```sh
npm install ra-input-markdown
# or
yarn add ra-input-markdown
```

`react-admin` (>= 5), `react` (>= 18), `react-dom` and `@mui/material` are peer dependencies; you already have them in a react-admin project.

## Usage

```jsx
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { MarkdownInput } from 'ra-input-markdown';

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" fullWidth />
            <MarkdownInput source="body" />
        </SimpleForm>
    </Edit>
);
```

`MarkdownInput` accepts the usual react-admin input props (`source`, `label`, `helperText`, `validate`, `defaultValue`, `format`, `parse`, `disabled`, `readOnly`, ...) plus a few passthrough props for the underlying editor:

| Prop             | Type                              | Description                                  |
| ---------------- | --------------------------------- | -------------------------------------------- |
| `height`         | `number`                          | Editor height in pixels.                     |
| `minHeight`      | `number`                          | Minimum height when the dragbar is used.     |
| `maxHeight`      | `number`                          | Maximum height when the dragbar is used.     |
| `preview`        | `'live' \| 'edit' \| 'preview'`   | Initial preview mode. Defaults to `live`.    |
| `hideToolbar`    | `boolean`                         | Hide the formatting toolbar.                 |
| `visibleDragbar` | `boolean`                         | Show the resize dragbar.                     |
| `commands`       | `ICommand[]`                      | Override the toolbar commands.               |
| `extraCommands`  | `ICommand[]`                      | Extra commands (top-right of the toolbar).   |
| `textareaProps`  | `object`                          | Props forwarded to the underlying textarea.  |

```jsx
<MarkdownInput source="body" height={400} preview="edit" />
```

## Migrating from 1.x

Version 2 is a rewrite for react-admin 5. The default export still works, but the named export is preferred:

```jsx
// 1.x
import MarkdownInput from 'ra-input-markdown';

// 2.x (both work)
import { MarkdownInput } from 'ra-input-markdown';
```

The editor changed from the unmaintained `react-mde` to `@uiw/react-md-editor`, which brings a live preview, dark mode and an actively maintained codebase. You no longer need to import any CSS yourself.

## License

Apache-2.0
