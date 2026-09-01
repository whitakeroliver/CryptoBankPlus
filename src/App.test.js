// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoBankPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoBankPlus/i);
    expect(titleElement).toBeInTheDocument();
});
