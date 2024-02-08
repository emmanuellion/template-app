import React from 'react';
import { createRoot } from 'react-dom/client';
import './front/reset.scss';
import App from './front/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
