import { TodoComponent } from './todo.component';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

describe('TodoComponent', () => {
  it('should add a todo', async () => {
    await render(TodoComponent);
    const user = userEvent.setup();

    const input = screen.getByRole('textbox', { name: 'Add your Todo' });

    await user.type(input, 'Buy milk');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('Buy milk')).toBeInTheDocument();
  });

  it('should clear the input after adding a todo', async () => {
    await render(TodoComponent);
    const user = userEvent.setup();

    const input = screen.getByRole('textbox', { name: 'Add your Todo' });

    await user.type(input, 'Buy milk');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(input).toHaveValue('');
  });

  it('should remove a todo', async () => {
    await render(TodoComponent);
    const user = userEvent.setup();

    const input = screen.getByRole('textbox', { name: 'Add your Todo' });

    await user.type(input, 'Buy milk');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    await user.click(screen.getByRole('button', { name: 'Remove Buy milk' }));

    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
  });
});
