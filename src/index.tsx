import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { scodixAiTheme } from 'styles/theme';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <ThemeProvider theme={scodixAiTheme}>
         <CssBaseline />
         <App />
      </ThemeProvider>
   </React.StrictMode>,
);
