import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AdminContext, SimpleForm } from 'react-admin';
import { MarkdownInput } from './index';

const wrap = (record: Record<string, unknown>) =>
    render(
        <AdminContext>
            <SimpleForm record={record} resource="posts" toolbar={false}>
                <MarkdownInput source="body" />
            </SimpleForm>
        </AdminContext>,
    );

test('renders the editor bound to the record value', () => {
    wrap({ id: 1, body: 'Hello **world**' });
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('Hello **world**');
});

test('writes typed input back into the field', async () => {
    wrap({ id: 1, body: '' });
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    await userEvent.type(textarea, '# Title');
    expect(textarea.value).toBe('# Title');
});
