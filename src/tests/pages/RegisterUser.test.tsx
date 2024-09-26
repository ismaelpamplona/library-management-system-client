import { render, screen } from '@testing-library/react';
import RegisterUser from '../../pages/RegisterUser';

test('renders the registration form with username, email, password fields, and a submit button', () => {
  render(<RegisterUser />);

  // Check for the input fields
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // Check for the submit button
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
