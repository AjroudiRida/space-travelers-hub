import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

const HeaderElement = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

describe('header testing', () => {
  it('should be in the document', () => {
    render(<HeaderElement />);
    const headerElement = screen.getByTestId('menu');
    expect(headerElement).toBeInTheDocument();
  });
});
