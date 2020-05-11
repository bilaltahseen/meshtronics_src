import { Paper, makeStyles, Button } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { Store } from '../Store/Store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '95%',
    paddingBottom: 20,
  },
  imageDiv: {
    width: '100%',
    height: '200px',
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
  details: {
    marginTop: '2em',
  },
  button: {},
}));
const CourseCard = (props) => {
  const [open, setOpen] = React.useState(true);
  const [, dispatch] = React.useContext(Store);
  const _showVideo = () => {
    dispatch({ type: 'REMOVE_LIGHTBOX' });
    dispatch({
      type: 'SHOW_VIDEO',
      payload: props.courseVideoLink,
    });
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={4}>
        <div className={classes.imageDiv}>
          <img src={props.courseImage} />
        </div>
        <div className={classes.details}>
          <h4
            style={{
              textTransform: 'uppercase',
              fontSize: '25px',
              fontWeight: 700,
              textAlign: 'center',
              color: '#0D1228',
            }}
          >
            {props.courseTitle}
          </h4>
          <p style={{ textAlign: 'center', padding: 10 }}>
            {props.courseDetail}
          </p>
          <Button
            disableElevation
            style={{
              fontWeight: 'bold',
              borderRadius: 0,
              width: '70%',
              marginTop: 10,
            }}
            variant='contained'
            color='secondary'
            onClick={() => {
              props.history.push('/instructor', {
                data: props.instructorContent,
              });
            }}
          >
            INSTRUCTOR DETAIL
          </Button>
          {props.coursehasVideo ? (
            <div>
              <Button
                disableElevation
                style={{
                  fontWeight: 'bold',
                  borderRadius: 0,
                  marginTop: 10,
                  width: '70%',
                }}
                variant='contained'
                color='secondary'
                onClick={_showVideo}
              >
                CLICK TO WATCH
              </Button>
              <p style={{ fontWeight: 700 }}>{props.courseVideoCaption}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </Paper>
    </React.Fragment>
  );
};
export default withRouter(CourseCard);
