# `<MarkdownInput>` for react-admin

[![npm](https://img.shields.io/npm/dm/ra-input-markdown)](https://www.npmjs.com/package/ra-input-markdown) [![npm](https://img.shields.io/npm/v/ra-input-markdown)](https://www.npmjs.com/package/ra-input-markdown)

For editing Markdown with [react-admin](https://github.com/marmelab/react-admin), use the `<MarkdownInput>` component. It uses [react-med](https://github.com/andrerpena/react-mde), a popular React Markdown Editor.

![`<MarkdownInput>` example](/screenshot.png?raw=true)

## Installation

```sh
npm install --save ra-input-markdown
# or
yarn add ra-input-markdown
```

## Usage

```js
import React from 'react';
import {
    DateInput,
    Edit,
    EditButton,
    LongTextInput,
    TextInput,
} from 'react-admin';
import MarkdownInput from 'ra-input-markdown';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <DisabledInput label="Id" source="id" />
        <TextInput source="title" validation={{ required: true }} />
        <LongTextInput source="teaser" validation={{ required: true }} />
        <MarkdownInput source="body" />
        <DateInput label="Publication date" source="published_at" />
    </Edit>
);
```
