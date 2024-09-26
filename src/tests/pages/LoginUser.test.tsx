import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import axios from 'axios';
import LoginUser from '../../pages/LoginUser';

test('renders the login form with email and password fields and a submit button', () => {
  render(<LoginUser />);

  // Check for the input fields
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  // Check for the submit button
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('captures form values correctly on submission', async () => {
  render(<LoginUser />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'testuser@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'Test@1234' },
  });

  // Simulate form submission
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Check if the form values are captured correctly
  expect(screen.getByDisplayValue('testuser@example.com')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Test@1234')).toBeInTheDocument();
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('makes an API call to log in a user on form submission', async () => {
  render(<LoginUser />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'testuser@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'Test@1234' },
  });

  // Mock the API response
  mockedAxios.post.mockResolvedValueOnce({
    data: { message: 'Login successful!' },
  });

  // Wrap the following actions in act()
  await act(async () => {
    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  });

  // Wait for the API call to complete and check if it was called with correct data
  await waitFor(() => {
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:5000/users/login',
      {
        email: 'testuser@example.com',
        password: 'Test@1234',
      },
    );
  });
});
