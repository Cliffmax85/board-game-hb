import { render, screen } from '@testing-library/react';
//import App from './App';
import Auth from './AuthPage';

test('renders learn react link', () => {
  render(<Auth />);
  const linkElement = screen.getByText(/Boardzo/i);
  expect(linkElement).toBeInTheDocument();
});
