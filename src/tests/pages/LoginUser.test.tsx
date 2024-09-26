import { render, screen } from '@testing-library/react';
import LoginUser from '../../pages/LoginUser';

test('renders the login form with email and password fields and a submit button', () => {
  render(<LoginUser />);

  // Check for the input fields
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // Check for the submit button
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
