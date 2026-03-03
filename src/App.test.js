// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VaultMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VaultMesh/i);
    expect(titleElement).toBeInTheDocument();
});
