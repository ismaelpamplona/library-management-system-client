import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { registerUser } from '../services/userService'; // Import the registerUser service

const RegisterUser = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Clear error messages as user types
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { username: '', email: '', password: '' };

    if (!formValues.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }
    if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'A valid email is required';
      valid = false;
    }

    // Regex for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(formValues.password)) {
      newErrors.password =
        'Password must be at least 6 characters long and include an uppercase letter, a lowercase letter, a number, and a symbol';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true);
      setSuccessMessage('');
      setErrorMessage('');

      try {
        const response = await registerUser(formValues);
        setSuccessMessage('User registered successfully!');
        console.log('Registration successful:', response);
      } catch (error: any) {
        setErrorMessage(error.message);
        console.error('Registration failed:', error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        User Registration
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
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            required
            value={formValues.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
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
            error={!!errors.email}
            helperText={errors.email}
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
            error={!!errors.password}
            helperText={errors.password}
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

export default RegisterUser;
