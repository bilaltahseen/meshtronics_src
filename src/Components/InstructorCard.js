import React from 'react';
import { Grid, Box, makeStyles, Paper, useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, paddingTop: 10 },
  userDetails: {
    textAlign: 'center',
    paddingBottom: 10,
    '& :first-child': {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      fontSize: '1.5rem',
      fontFamily: 'Montserrat',
    },
    '& p': {
      color: theme.palette.secondary.main,
      fontWeight: 500,
      fontFamily: 'Montserrat',
    },
  },
  userDescp: {
    paddingTop: 1,
    padding: 20,
    wordWrap: 'break-word',
  },
  largePic: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      minWidth: '100%',
      minHeight: '100%',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  small: {
    padding: 10,
    marginTop: 20,
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      minWidth: '100%',
      minHeight: '100%',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
}));
const InstructorCard = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:768px)');
  const small = (
    <Paper elevation={3} className={classes.root}>
      <center>
        <Box className={classes.small}>
          <img
            src={props.instructorContent.instructorImage}
            width='60%'
            height='60%'
          />
        </Box>
        <Box className={classes.userDetails} component='div'>
          <p>{props.instructorContent.instrutorName}</p>
          <p>{props.instructorContent.instructorExpertie}</p>
        </Box>
        <Box className={classes.userDescp}>
          <p>{props.instructorContent.instructorDetails}</p>
        </Box>
      </center>
    </Paper>
  );
  const large = (
    <center>
      <Paper elevation={3} className={classes.root} style={{ width: '75%' }}>
        <Grid container>
          <Grid item xs={4} style={{ padding: 30 }} justify='flex-start'>
            <Box component='div' className={classes.largePic}>
              <img src={props.instructorContent.instructorImage}></img>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                fontSize: '3rem',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                color: '#0D1228',
              }}
            >
              {props.instructorContent.instrutorName}
            </p>
            <p
              style={{
                textAlign: 'center',
                fontSize: '2rem',
                fontFamily: 'Montserrat',
                color: '#FE6102',
              }}
            >
              {props.instructorContent.instructorExpertie}
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              padding: 30,
              fontFamily: 'Montserrat',
              fontSize: '1.2em',
            }}
          >
            <div style={{ wordWrap: 'break-word' }}>
              <p style={{ textAlign: 'left' }}>
                {props.instructorContent.instructorDetails}
              </p>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </center>
  );
  return <React.Fragment>{matches ? large : small}</React.Fragment>;
};
export default InstructorCard;
