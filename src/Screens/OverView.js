import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

import CoverSide from '../assets/images/cover_side-01.svg';
import CoverSide2 from '../assets/images/cover_side_2-01.svg';

import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  overviewtext: {
    fontSize: '1.2em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
      lineHeight: '1.4em',
    },
    lineHeight: '2em',
    fontFamily: 'Montserrat',
    fontWeight: 'light',
  },
}));

const OverView = () => {
  const matches = useMediaQuery('(min-width:768px)');
  const classes = useStyles();
  const large = (
    <Container>
      <Grid container direction='row'>
        <Grid item xs={12} md={7} style={{ margin: 'auto' }}>
          <p className={classes.overviewtext}>
            It is evident how much technological evolution has changed the
            world. We see{' '}
            <strong style={{ fontWeight: '500' }}>AI, robotics, and IoT</strong>
            , in mostly every aspect of all our lives, be it our homes, our
            workplaces, our industries, our hospitals, our defense system, and
            more. These technological evolutions are providing comfort,
            automating repetitive tasks in industries, assisting businesses in
            their internal operations, and making this world a better place.
            Therefore, the importance of technology, and the need to have sound
            knowledge of it, cannot be denied. This is exactly why{' '}
            <strong style={{ fontWeight: '500' }}>Meshtronics </strong>
            came into being! We are a group of industry professionals, sharing
            our knowledge and experience with you so that you may gain the
            necessary competitive advantage that will help you excel in your
            career. Whether you are a professional looking to enhance your
            skills for your career, or an electronics enthusiast gaining
            knowledge, Meshtronics will provide you with the crucial guidance to
            kick start your journey.
          </p>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={CoverSide}></img>
        </Grid>
      </Grid>
      <hr
        style={{ height: '1px', backgroundColor: '#F39522', border: 'none' }}
      ></hr>
      <Grid container direction='row'>
        <Grid item xs={12} md={5}>
          <img src={CoverSide2}></img>
        </Grid>
        <Grid item xs={12} md={7} style={{ margin: 'auto' }}>
          <p className={classes.overviewtext}>
            With us, you will learn about the functioning of the most-used
            microcontrollers such as,{' '}
            <strong style={{ fontWeight: '500' }}> AVR and Arduino</strong>, as
            well as their applications. While Arduino is mostly used for
            prototyping projects, it is a good controller to start your
            electronics journey with. It is used for creating autonomous mini
            cars, robotic arms, Robo Maze, etc. Arduino is an easy-to-use
            microcontroller that you can use to create humdreds of interesting
            projects. Moreover, AVR is mostly used in industries in various
            applications, such as robotic arms,{' '}
            <strong style={{ fontWeight: '500' }}>
              Unmanned Aerial Vehicles (UAVs)
            </strong>
            , Automobile ECU (Electronic Control Unit), defense systems, and
            much more. Both of these controllers are crucial in their own way
            and will benefit anyone who is skilled in them. At Meshtronics, you
            will learn how to work on both of them along with using them in
            various applications in a step-by-step manner.
          </p>
        </Grid>
      </Grid>
      <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#FE6102' }}>
        <strong>
          Join Meshtronics now and get your electronics journey started with us!
        </strong>
      </p>
    </Container>
  );
  const small = (
    <Container>
      <Grid container direction='row'>
        <Grid item xs={12} md={5}>
          <img src={CoverSide}></img>
        </Grid>
        <Grid item xs={12} md={7} style={{ margin: 'auto' }}>
          <p className={classes.overviewtext}>
            It is evident how much technological evolution has changed the
            world. We see{' '}
            <strong style={{ fontWeight: '700' }}>AI, robotics, and IoT</strong>
            , in mostly every aspect of all our lives, be it our homes, our
            workplaces, our industries, our hospitals, our defense system, and
            more. These technological evolutions are providing comfort,
            automating repetitive tasks in industries, assisting businesses in
            their internal operations, and making this world a better place.
            Therefore, the importance of technology, and the need to have sound
            knowledge of it, cannot be denied. This is exactly why{' '}
            <strong style={{ fontWeight: '700' }}>Meshtronics </strong>
            came into being! We are a group of industry professionals, sharing
            our knowledge and experience with you so that you may gain the
            necessary competitive advantage that will help you excel in your
            career. Whether you are a professional looking to enhance your
            skills for your career, or an electronics enthusiast gaining
            knowledge, Meshtronics will provide you with the crucial guidance to
            kick start your journey.
          </p>
        </Grid>
      </Grid>
      <hr
        style={{ height: '1px', backgroundColor: '#F39522', border: 'none' }}
      ></hr>
      <Grid container direction='row'>
        <Grid item xs={12} md={5}>
          <img src={CoverSide2}></img>
        </Grid>
        <Grid item xs={12} md={7} style={{ margin: 'auto' }}>
          <p className={classes.overviewtext}>
            With us, you will learn about the functioning of the most-used
            microcontrollers such as,{' '}
            <strong style={{ fontWeight: '700' }}> AVR and Arduino</strong>, as
            well as their applications. While Arduino is mostly used for
            prototyping projects, it is a good controller to start your
            electronics journey with. It is used for creating autonomous mini
            cars, robotic arms, Robo Maze, etc. Arduino is an easy-to-use
            microcontroller that you can use to create humdreds of interesting
            projects. Moreover, AVR is mostly used in industries in various
            applications, such as robotic arms,{' '}
            <strong style={{ fontWeight: '700' }}>
              Unmanned Aerial Vehicles (UAVs)
            </strong>
            , Automobile ECU (Electronic Control Unit), defense systems, and
            much more. Both of these controllers are crucial in their own way
            and will benefit anyone who is skilled in them. At Meshtronics, you
            will learn how to work on both of them along with using them in
            various applications in a step-by-step manner.
          </p>
        </Grid>
      </Grid>
      <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#FE6102' }}>
        <strong>
          Join Meshtronics now and get your electronics journey started with us!
        </strong>
      </p>
    </Container>
  );
  return <React.Fragment>{matches ? large : small}</React.Fragment>;
};
export default OverView;
