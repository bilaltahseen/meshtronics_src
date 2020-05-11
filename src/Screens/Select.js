import React from 'react';
import { Grid, Container, Paper, makeStyles, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    padding: 10,
    marginTop: 100,
  },
}));
const Select = (props) => {
  const classes = useStyles();
  const _navigate = (route) => {
    props.history.push(route);
  };
  return (
    <React.Fragment>
      <Container maxWidth='md'>
        <Paper elevation={3} className={classes.root}>
          <h2>Select Option</h2>
          <Button
            onClick={() => {
              _navigate('/createDocument');
            }}
            color='secondary'
            variant='contained'
          >
            Create Document
          </Button>
          <p>Create a document in a database</p>
          <Button
            onClick={() => {
              _navigate('/previousDocuments');
            }}
            color='secondary'
            variant='contained'
          >
            Edit Document
          </Button>
          <p>Edit a previously stored document in a database</p>
          <Button
            onClick={() => {
              _navigate('/registrations');
            }}
            color='secondary'
            variant='contained'
          >
            Show Registrations
          </Button>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Select);
