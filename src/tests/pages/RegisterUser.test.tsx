import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import RegisterUser from '../../pages/RegisterUser';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('makes an API call to register a new user on form submission', async () => {
  render(<RegisterUser />);

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'testuser' },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'testuser@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'Test@1234' },
  });

  // Mock the API response
  mockedAxios.post.mockResolvedValueOnce({
    data: { message: 'User registered successfully!' },
  });

  // Simulate form submission
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Wait for the API call to complete and check if it was called with correct data
  await waitFor(() => {
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:5000/users/register',
      {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'Test@1234',
      },
    );
  });
});
