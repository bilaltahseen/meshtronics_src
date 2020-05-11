import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import StoreProvider from './Store/Store';

import RoutesPages from './router';

import Axios from 'axios';

window.scrollTo({ top: 0, behavior: 'smooth' });
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0D1228',
      contrastText: '#fff',
      hover: '#FE6102',
    },
    secondary: {
      main: '#FE6102',
    },
  },
});

Axios.defaults.baseURL =
  'https://us-central1-meshtronics-cd0cd.cloudfunctions.net/api';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StoreProvider>
          <RoutesPages />
        </StoreProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
