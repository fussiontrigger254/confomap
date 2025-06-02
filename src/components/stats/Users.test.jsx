import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Users from './Users';

describe('Users', () => {
  it('renders count and label inside the button', () => {
    render(<Users count={1} />);
    expect(screen.getByRole('button', { name: /1 users/i })).toBeInTheDocument();
  });

  it('renders zero count inside the button', () => {
    render(<Users count={0} />);
    expect(screen.getByRole('button', { name: /0 users/i })).toBeInTheDocument();
  });

  it('triggers click event on the button', () => {
    const handleAlert = jest.spyOn(window, 'alert').mockImplementation();
    render(<Users count={1} />);
    fireEvent.click(screen.getByRole('button', { name: /1 users/i }));
    expect(handleAlert).toHaveBeenCalledWith('Viewing Users');
    handleAlert.mockRestore();
  });
});