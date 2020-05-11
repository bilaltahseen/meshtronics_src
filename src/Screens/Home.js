import React from 'react';
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Box,
} from '@material-ui/core';
import coverImage from '../assets/images/cover_image.jpg';

import { withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    marginTop: '56px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${coverImage})`,
  },
  aisle: {
    backgroundColor: 'red',
    height: '90vh',
  },
  title: {
    color: '#fff',
  },
  titlebox: {
    color: '#fff',
    marginTop: 140,
    textAlign: 'center',
  },
  contactbtn: {
    marginTop: 20,
    fontWeight: 'bold',
  },
}));
const Home = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container disableGutters className={classes.root} maxWidth='xl'>
        <Grid container disableGutters justify='center'>
          <Grid item xs={12}>
            <Box className={classes.titlebox}>
              <Typography variant='h2' component='div'>
                Meshtronics
              </Typography>
              <Typography variant='h6' component='div'>
                Embedded System Training
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Home);
