import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import aboutUsImg from '../assets/images/aboutUs.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: '2em',
    textAlign: 'center',
    marginTop: '2.5em',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      fontSize: '3em',
      textAlign: 'left',
      marginTop: '2.5em',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
    },
  },
  imgBox: {
    width: '55%',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '120%',
      '& img': { marginTop: -50 },
    },
  },
  textBox: {
    padding: 10,
    marginBottom: 10,
    marginTop: -35,
    '& p': {
      textAlign: 'center',
      lineHeight: '1.3em',
      fontWeight: '200',
      fontSize: '1.2em',
      fontFamily: 'Montserrat',
    },
    [theme.breakpoints.up('md')]: {
      padding: 10,
      margin: 'auto',
      '& p': {
        textAlign: 'left',
        lineHeight: '1.5em',
        fontWeight: '200',
        fontSize: '1.3em',
        fontFamily: 'Montserrat',
      },
    },
  },
}));

const About = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  const matches = useMediaQuery('(min-width:768px)');
  const classes = useStyles();
  const gridImg = (
    <Grid container justify='center'>
      <Grid item xs={12} md={8}>
        <Box className={classes.textBox}>
          <p>
            Meshtronics is a group of electronics enthusiasts and industry
            specialists who are determined to share their expertise with anyone
            who wants to excel in this field. We believe that our knowledge and
            experience in the field will benefit the youth and subsequently,
            help in making{' '}
            <strong style={{ fontWeight: '500' }}>
              Pakistan self-sufficient in technology
            </strong>
            <br></br>
            <br></br>
            We want to share valuable insights regarding electronics, robotics,
            and knowledge about industry, so that other people may have{' '}
            <strong style={{ fontWeight: '500' }}>
              proper guidelines when starting their careers.
            </strong>
          </p>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box className={classes.imgBox}>
          <img src={aboutUsImg}></img>
        </Box>
      </Grid>
    </Grid>
  );
  const small = (
    <Container maxWidth={matches ? 'md' : 'xs'}>
      <p className={classes.title}>About Us</p>
      {matches ? (
        gridImg
      ) : (
        <React.Fragment>
          <Box className={classes.imgBox}>
            <img src={aboutUsImg}></img>
          </Box>
          <Box className={classes.textBox}>
            <p>
              Meshtronics is a group of{' '}
              <strong style={{ fontWeight: '500' }}>
                electronics enthusiasts{' '}
              </strong>{' '}
              and industry specialists who are determined to share their
              expertise with anyone who wants to excel in this field. We believe
              that our knowledge and experience in the field will benefit the
              youth and subsequently, help in making{' '}
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
          </Box>
        </React.Fragment>
      )}
      <p className={classes.title}>Our Mission</p>
      <Box className={classes.textBox}>
        <p>
          Our mission is to help{' '}
          <strong style={{ fontWeight: '500' }}>
            enthusiasts, hobbyists, students, and anyone
          </strong>
          looking for gaining knowledge about electronics, robotics,
          microcontrollers, and instrumentation with our skill-set and
          knowledge. At Meshtronics, we are passionate about this field and want
          to share our knowledge with others. We aim to guide others and give
          them valuable insights from our experience that they may not get over
          the Internet or from their classes. Everything that we have
          <strong style={{ fontWeight: '500' }}>
            experienced in this field
          </strong>
          , from troubleshooting to being creative with electronics to having a
          host of devices we have proficiency in, we want to share it with
          others. With us, you won’t just get textbook knowledge, but also the
          intricate details nobody tells you anywhere else.
        </p>
        <p>
          <p>
            <strong>
              So, what are you waiting for? Get yourself registered for our
              classes now!
            </strong>
          </p>
        </p>
      </Box>
    </Container>
  );

  return <React.Fragment>{small}</React.Fragment>;
};

export default About;
