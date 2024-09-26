import { render, screen } from '@testing-library/react';
import RegisterUser from '../../pages/RegisterUser';

test('renders the registration form', () => {
  render(<RegisterUser />);

  // Check if the form fields are present
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // Check if the submit button is present
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
