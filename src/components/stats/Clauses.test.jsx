import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Clauses from './Clauses';

describe('Clauses', () => {
  it('renders clause count and plural name with view button', () => {
    render(<Clauses count={0} />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Clauses')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view clauses/i })).toBeInTheDocument();
  });

  it('renders non-zero count correctly', () => {
    render(<Clauses count={4} />);
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Clauses')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view clauses/i })).toBeInTheDocument();
  });

  it('triggers click event on view button', () => {
    const handleAlert = jest.spyOn(window, 'alert').mockImplementation();
    render(<Clauses count={0} />);
    fireEvent.click(screen.getByRole('button', { name: /view clauses/i }));
    expect(handleAlert).toHaveBeenCalledWith('Viewing Clauses');
    handleAlert.mockRestore();
  });
});