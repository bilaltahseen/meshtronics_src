import React from 'react';
import {
  Container,
  Paper,
  makeStyles,
  TextField,
  Button,
  Box,
} from '@material-ui/core';
import { LockRounded, VpnKey } from '@material-ui/icons';

import { withRouter } from 'react-router-dom';

import { Store } from '../Store/Store';

import Logo from '../assets/images/logo.svg';
import firebase from 'firebase/app';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 100,
    width: '60%',
  },
  TextFields: {
    width: '80%',
  },
  loginBtn: {
    marginTop: 20,
    marginBottom: 10,
    width: '50%',
  },
  inputBox: {
    padding: 10,
    display: 'flex',
    direction: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));
const Login = (props) => {
  const [state, dispatch] = React.useContext(Store);
  const _login = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.getIdToken().then((token) => {
          localStorage.setItem('token', token);
          props.history.push('/select');
          dispatch({
            type: 'LOGIN_STATUS',
          });
        });
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth='md'>
        <center>
          <form onSubmit={_login}>
            <Paper elevation={1} className={classes.root}>
              <img src={Logo} width='50px'></img>
              <h3>Login With Your Credintials</h3>
              <Box className={classes.inputBox}>
                <LockRounded color='secondary' />
                <TextField
                  variant='outlined'
                  className={classes.TextFields}
                  label='Email'
                  type='email'
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Box>

              <Box className={classes.inputBox}>
                <VpnKey color='secondary' />
                <TextField
                  variant='outlined'
                  className={classes.TextFields}
                  label='Password'
                  type='password'
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </Box>
              <Button
                className={classes.loginBtn}
                variant='contained'
                color='secondary'
                type='submit'
              >
                Login
              </Button>
              <p style={{ color: 'red' }}>{errorMessage}</p>
            </Paper>
          </form>
        </center>
      </Container>
    </React.Fragment>
  );
};
export default withRouter(Login);
