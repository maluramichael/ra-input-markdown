import * as React from 'react';
import MDEditor, { type MDEditorProps } from '@uiw/react-md-editor';
import { useTheme } from '@mui/material/styles';
import {
    useInput,
    Labeled,
    InputHelperText,
    type CommonInputProps,
} from 'react-admin';

export type MarkdownInputProps = CommonInputProps & {
    className?: string;
} & Pick<
        MDEditorProps,
        | 'height'
        | 'minHeight'
        | 'maxHeight'
        | 'preview'
        | 'hideToolbar'
        | 'visibleDragbar'
        | 'commands'
        | 'extraCommands'
        | 'textareaProps'
    >;

/**
 * A react-admin input for editing Markdown, built on @uiw/react-md-editor.
 *
 * @example
 * import { MarkdownInput } from 'ra-input-markdown';
 * <MarkdownInput source="body" />
 */
export const MarkdownInput = (props: MarkdownInputProps) => {
    const {
        className,
        defaultValue,
        label,
        format,
        helperText,
        onBlur,
        onChange,
        parse,
        resource,
        source,
        validate,
        // forwarded to MDEditor
        height,
        minHeight,
        maxHeight,
        preview,
        hideToolbar,
        visibleDragbar,
        commands,
        extraCommands,
        textareaProps,
        ...rest
    } = props;

    const {
        field,
        fieldState: { error, invalid },
        id,
        isRequired,
    } = useInput({
        defaultValue,
        format,
        parse,
        resource,
        source,
        validate,
        onBlur,
        onChange,
        ...rest,
    });

    const theme = useTheme();

    return (
        <Labeled
            label={label}
            source={source}
            resource={resource}
            isRequired={isRequired}
            className={className}
            htmlFor={id}
            fullWidth
        >
            <div data-color-mode={theme.palette.mode}>
                <MDEditor
                    value={field.value ?? ''}
                    onChange={value => field.onChange(value ?? '')}
                    height={height}
                    minHeight={minHeight}
                    maxHeight={maxHeight}
                    preview={preview}
                    hideToolbar={hideToolbar}
                    visibleDragbar={visibleDragbar}
                    commands={commands}
                    extraCommands={extraCommands}
                    textareaProps={{ id, ...textareaProps, onBlur: field.onBlur }}
                />
                {(helperText !== false || invalid) && (
                    <InputHelperText
                        error={error?.message}
                        helperText={helperText}
                    />
                )}
            </div>
        </Labeled>
    );
};

export default MarkdownInput;
