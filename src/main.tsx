import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import App from './App.tsx';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Failed to find the root element.');
}
