import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Documents from './Documents';

describe('Documents', () => {
  it('renders count and label inside the button', () => {
    render(<Documents count={0} />);
    expect(screen.getByRole('button', { name: /0 documents/i })).toBeInTheDocument();
  });

  it('renders non-zero count inside the button', () => {
    render(<Documents count={6} />);
    expect(screen.getByRole('button', { name: /6 documents/i })).toBeInTheDocument();
  });

  it('triggers click event on the button', () => {
    const handleAlert = jest.spyOn(window, 'alert').mockImplementation();
    render(<Documents count={0} />);
    fireEvent.click(screen.getByRole('button', { name: /0 documents/i }));
    expect(handleAlert).toHaveBeenCalledWith('Viewing Documents');
    handleAlert.mockRestore();
  });
});