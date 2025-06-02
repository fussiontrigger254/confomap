import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Evidences from './Evidences';

describe('Evidences', () => {
  it('renders count and label inside the button', () => {
    render(<Evidences count={0} />);
    expect(screen.getByRole('button', { name: /0 evidences/i })).toBeInTheDocument();
  });

  it('renders non-zero count inside the button', () => {
    render(<Evidences count={3} />);
    expect(screen.getByRole('button', { name: /3 evidences/i })).toBeInTheDocument();
  });

  it('triggers click event on the button', () => {
    const handleAlert = jest.spyOn(window, 'alert').mockImplementation();
    render(<Evidences count={0} />);
    fireEvent.click(screen.getByRole('button', { name: /0 evidences/i }));
    expect(handleAlert).toHaveBeenCalledWith('Viewing Evidences');
    handleAlert.mockRestore();
  });
});