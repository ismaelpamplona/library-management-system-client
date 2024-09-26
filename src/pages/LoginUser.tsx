// src/pages/LoginUser.tsx
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { act } from '@testing-library/react';
import React, { useState } from 'react';
import { loginUser } from '../services/userService';

const LoginUser = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await loginUser(formValues);
      setSuccessMessage('Login successful!');
      console.log('Login successful:', response);
    } catch (error: any) {
      await act(async () => {
        setErrorMessage(error.message);
        console.error('Login failed:', error.message);
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        User Login
      </Typography>
      {successMessage && (
        <Typography
          variant="body1"
          color="success.main"
          align="center"
          gutterBottom
        >
          {successMessage}
        </Typography>
      )}
      {errorMessage && (
        <Typography
          variant="body1"
          color="error.main"
          align="center"
          gutterBottom
        >
          {errorMessage}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={formValues.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default LoginUser;
