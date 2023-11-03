import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';

import App from './App';
import { scodixAiTheme } from 'styles/theme';
import instance from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <Provider store={instance}>
         <ThemeProvider theme={scodixAiTheme}>
            <CssBaseline />
            <App />
         </ThemeProvider>
      </Provider>
   </React.StrictMode>,
);
