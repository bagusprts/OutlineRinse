// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlineRinse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlineRinse/i);
    expect(titleElement).toBeInTheDocument();
});
