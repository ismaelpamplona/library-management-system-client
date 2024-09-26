// src/components/HelloLibrary.test.tsx
import { render, screen } from '@testing-library/react';
import HelloLibrary from '../components/HelloLibrary';

test('renders Hello, Library! text', () => {
  render(<HelloLibrary />);
  const headingElement = screen.getByText(/hello, library!/i);
  expect(headingElement).toBeInTheDocument();
});
