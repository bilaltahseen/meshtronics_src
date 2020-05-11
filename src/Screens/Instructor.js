import React from 'react';
import { Container, makeStyles, Slide, Box } from '@material-ui/core';
import InstructorCard from '../Components/InstructorCard';
import { withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: '20%',
    marginBottom: '50%',
  },
}));
const Instructor = (props) => {
  const classes = useStyles();
  const cardRef = React.createRef();
  const _scrolltoCard = () => {
    window.scrollTo({
      top: cardRef.current.offsetTop - 90,
      behavior: 'smooth',
    });
  };
  React.useEffect(_scrolltoCard, []);
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Box className={classes.root} ref={cardRef}>
          <InstructorCard instructorContent={props.location.state.data} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Instructor);
