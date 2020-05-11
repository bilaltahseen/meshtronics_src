import React from 'react';
import { Box, makeStyles, Grid, useMediaQuery } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    marginTop: '60vh',
  },
  social: {
    marginTop: 10,
    '& svg': {
      color: '#fff',
      fontSize: '2.1em',
    },
  },
  contact: {
    '& svg': { color: '#fff' },
    '& p': { color: '#fff', paddingLeft: 20 },
  },
}));
const Footer = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <React.Fragment>
      <footer id='course_footer'>
        <Box className={classes.root}>
          <Grid container justify='center'>
            <Grid item sm={4} md={4} xs={12}>
              <Grid
                container
                alignItems='center'
                className={classes.contact}
                justify={matches ? 'flex-start' : 'center'}
              >
                <CallIcon />
                <p>+92 0331-1385989</p>
              </Grid>
            </Grid>
            <Grid item sm={4} md={4} xs={12} className={classes.social}>
              <Grid container justify='center' alignItems='center'>
                <FacebookIcon />
                <LinkedIn />
                <TwitterIcon />
              </Grid>
            </Grid>
            <Grid item sm={4} md={4} xs={12}>
              <Grid
                container
                justify={matches ? 'flex-end' : 'center'}
                alignItems='center'
                className={classes.contact}
              >
                <EmailIcon />
                <p>meshtronics@gmail.com</p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
