import React from 'react';
import {
  Grid,
  Container,
  Box,
  useMediaQuery,
  makeStyles,
} from '@material-ui/core';
import aboutUsImg from '../assets/images/aboutUs.svg';
import founderImg from '../assets/images/founderImg-01.svg';

const useStyles = makeStyles((theme) => ({
  root: { flex: 1, marginTop: '100px' },
  heading: {
    color: theme.palette.secondary.main,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: { textAlign: 'center' },
  },
  content: {
    padding: 10,
    lineHeight: '1.5em',
    fontWeight: 200,
    fontSize: '1.2em',
    fontFamily: 'Montserrat',
  },
  founderImg: {
    '& img': {
      width: '300px',
      height: '300px',
    },
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth='lg' className={classes.root}>
        <Box>
          <h1 className={classes.heading}>About Us</h1>
          <Grid container justify='flex-start'>
            <Grid item xs={12} md={8}>
              <p className={classes.content}>
                Meshtronics is a group of electronics enthusiasts and industry
                specialists who are determined to share their expertise with
                anyone who wants to excel in this field. We believe that our
                knowledge and experience in the field will benefit the youth and
                subsequently, help in making{' '}
                <strong style={{ fontWeight: '500' }}>
                  Pakistan self-sufficient in technology
                </strong>
                <br></br>
                <br></br>
                We want to share valuable insights regarding electronics,
                robotics, and knowledge about industry, so that other people may
                have{' '}
                <strong style={{ fontWeight: '500' }}>
                  proper guidelines when starting their careers.
                </strong>
              </p>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={2}>
              <div>
                <Box component='div' className={classes.founderImg}>
                  <center>
                    <img src={founderImg}></img>
                  </center>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
        <br></br>
        <Box>
          <h1 className={classes.heading}>Our Mission</h1>
          <Grid container justify='flex-start'>
            <Grid item xs={12} md={8}>
              <p className={classes.content}>
                Our mission is to help{' '}
                <strong style={{ fontWeight: '500' }}>
                  enthusiasts, hobbyists, students, and anyone
                </strong>
                looking for gaining knowledge about electronics, robotics,
                microcontrollers, and instrumentation with our skill-set and
                knowledge. At Meshtronics, we are passionate about this field
                and want to share our knowledge with others. We aim to guide
                others and give them valuable insights from our experience that
                they may not get over the Internet or from their classes.
                Everything that we have
                <strong style={{ fontWeight: '500' }}>
                  experienced in this field
                </strong>
                , from troubleshooting to being creative with electronics to
                having a host of devices we have proficiency in, we want to
                share it with others. With us, you won’t just get textbook
                knowledge, but also the intricate details nobody tells you
                anywhere else.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src={aboutUsImg}></img>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default About;
