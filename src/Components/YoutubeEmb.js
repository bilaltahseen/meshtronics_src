import React from 'react';
import { Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Store } from '../Store/Store';

import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
const YoutubeEmb = (props) => {
  const [state, dispatch] = React.useContext(Store);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    dispatch({ type: 'REMOVE_LIGHTBOX' });
  };

  const extractVideoID = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
      return match[7];
    } else {
      return '';
    }
  };
  window.onpopstate = (event) => {
    props.history.push('/');
    handleClose();
    setTimeout(() => {
      window.scrollTo({
        top: state.coursePos,
        behavior: 'smooth',
      });
    }, 300);
  };
  return (
    <React.Fragment>
      <div>
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
          unmountOnExit
        >
          <iframe
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${extractVideoID(
              state.currentVideo
            )}`}
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </Backdrop>
      </div>
    </React.Fragment>
  );
};

export default withRouter(YoutubeEmb);
