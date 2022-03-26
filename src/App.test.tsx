import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import axios from "axios";

jest.mock('axios');
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/dirties/i);
  expect(linkElement).toBeInTheDocument();
});
