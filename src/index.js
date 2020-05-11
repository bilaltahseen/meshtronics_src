import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './Store/Store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import RouterHub from './router';

const firebaseConfig = {
  apiKey: 'AIzaSyDovgOLIeW55dHUgDK6K0Pgz1Iq8QvmIOg',
  authDomain: 'meshtronics-cd0cd.firebaseapp.com',
  databaseURL: 'https://meshtronics-cd0cd.firebaseio.com',
  projectId: 'meshtronics-cd0cd',
  storageBucket: 'meshtronics-cd0cd.appspot.com',
  messagingSenderId: '614319679392',
  appId: '1:614319679392:web:0cb3d33059e9ccdf01a6c5',
  measurementId: 'G-LRZRG46CC0',
};

if (!firebase.app.length || firebase.app.length >= 1) {
  firebase.initializeApp(firebaseConfig);
  console.log('App');
}

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
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <RouterHub />
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
