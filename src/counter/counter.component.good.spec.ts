import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  it('should increment the counter', async () => {
    // Arrange
    const user = userEvent.setup();
    await render(CounterComponent);
    const incrementButton = screen.getByRole('button', { name: '+' });

    // Act
    await user.click(incrementButton);

    // Assert
    expect(screen.getByText(/The count is 1/)).toBeInTheDocument();
  });

  it('should decrement the counter', async () => {
    // Arrange
    const user = userEvent.setup();
    await render(CounterComponent);
    const decrementButton = screen.getByRole('button', { name: /-/ });

    // Act
    await user.click(decrementButton);

    // Assert
    expect(screen.getByText(/The count is -1/)).toBeInTheDocument();
  });

  it('should work via keyboard', async () => {
    // Arrange
    const user = userEvent.setup();
    await render(CounterComponent);

    // Act
    await user.tab();
    await user.keyboard('{Enter}');

    await user.tab();
    await user.keyboard('{Enter}');
    await user.keyboard('{Enter}');

    // Assert
    expect(screen.getByText(/The count is 1/)).toBeInTheDocument();
  });
});
