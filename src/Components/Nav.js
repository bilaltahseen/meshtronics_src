import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { Store } from '../Store/Store';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: { justifyContent: 'space-around' },
  },
  items: {
    textAlign: 'center',
    fontSize: '1.1rem',
    marginLeft: '2em',
    transition: 'color 0.2s ease',
    [theme.breakpoints.down('xs')]: { marginLeft: '0' },
    '&:hover': { color: theme.palette.primary.hover, cursor: 'pointer' },
  },
}));
const Nav = (props) => {
  const classes = useStyles();
  const [state] = React.useContext(Store);
  const [link, setLink] = React.useState('/');
  const gotoCourse = async (homeCheck) => {
    await props.history.push('/');
    setTimeout(() => {
      window.scrollTo({
        top: homeCheck ? 0 : state.coursePos * 0.8,
        behavior: 'smooth',
      });
      homeCheck ? setLink('/') : setLink('/course');
    }, 300);
  };
  const redirect = (path) => {
    props.history.push(path);
    setLink(path);
  };

  return (
    <React.Fragment>
      <AppBar color='primary' position='fixed'>
        <div className={classes.logBar}></div>
        <Toolbar className={classes.root}>
          <Typography
            className={classes.items}
            varaint='h6'
            onClick={() => gotoCourse(true)}
            style={{ color: link === '/' ? '#FE6102' : '' }}
          >
            Home
          </Typography>
          <Typography
            onClick={() => gotoCourse(false)}
            className={classes.items}
            varaint='h6'
            style={{ color: link === '/course' ? '#FE6102' : '' }}
          >
            Courses
          </Typography>
          <Typography
            onClick={() => redirect('/about')}
            className={classes.items}
            style={{ color: link === '/about' ? '#FE6102' : '' }}
            varaint='h6'
          >
            About
          </Typography>
          <Typography
            onClick={() => redirect('/register')}
            className={classes.items}
            style={{ color: link === '/register' ? '#FE6102' : '' }}
            varaint='h6'
          >
            Register
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withRouter(Nav);
