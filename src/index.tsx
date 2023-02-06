// NPM Modules
import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Core Modules
import App from './App';
import customTheme from 'config/mui.theme';
import './assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV', process.env.NODE_ENV);
  console.log('REACT_APP_API_DOMAIN', process.env.REACT_APP_API_DOMAIN);
}
