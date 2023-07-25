import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

test('renders learn react link', () => {
  render(<ErrorPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
