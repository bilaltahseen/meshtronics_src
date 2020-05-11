import React, { Component } from 'react';
import {
  Container,
  Paper,
  withStyles,
  TextField,
  Input,
  Button,
  InputLabel,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import Axios from 'axios';

import firebase from 'firebase/app';
import 'firebase/storage';

import { withRouter } from 'react-router-dom';
const styles = (theme) => ({
  root: {
    backgroundColor: '#fff',
    marginTop: 100,
  },
  title: {
    textAlign: 'center',
  },
  inputBox: {
    display: 'flex',
    justify: 'center',
    flexDirection: 'column',
    margin: 10,
    '& div': {
      marginTop: 10,
    },
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
});
class EditDocument extends Component {
  state = {
    courseBody: '',
    courseTitle: '',
    coursePic: '',
    hasVideo: '',
    videoLink: '',
    videoCaption: '',
    instructorName: '',
    instructorExpertiese: '',
    instructorDetails: '',
    InstructorPic: '',
    open: false,
  };
  componentDidMount() {
    console.log(this.props);
    this.setState({
      courseBody: this.props.location.state.courseContent.courseBody,
      courseTitle: this.props.location.state.courseContent.courseTitle,
      coursePic: this.props.location.state.courseContent.courseImage,
      hasVideo: this.props.location.state.courseContent.hasVideo,
      videoLink: this.props.location.state.courseContent.videoLink,
      videoCaption: this.props.location.state.courseContent.videoCaption,
      instructorName: this.props.location.state.instructorContent.instrutorName,
      instructorExpertiese: this.props.location.state.instructorContent
        .instructorExpertie,
      instructorDetails: this.props.location.state.instructorContent
        .instructorDetails,
      InstructorPic: this.props.location.state.instructorContent
        .instructorImage,
    });
  }
  _changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  _selectCoursePic(event) {
    this.setState({ [event.target.name]: event.target.files[0] });
  }
  _Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  _submitHandler(event) {
    let promises = [];
    event.preventDefault();
    if (typeof this.state.coursePic.name === 'string') {
      const promise1 = firebase
        .storage()
        .ref(`images/${this.state.courseTitle}`)
        .put(this.state.coursePic)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((url) => {
            const santizedUrl = `https://firebasestorage.googleapis.com/v0/b/meshtronics-cd0cd.appspot.com/o/images%2F${this.state.courseTitle}_800x600?alt=media`;
            this.setState({ coursePic: santizedUrl });
          });
        });
      promises.push(promise1);
    } else if (typeof this.state.InstructorPic.name === 'string') {
      const promise2 = firebase
        .storage()
        .ref(`images/${this.state.instructorName}`)
        .put(this.state.InstructorPic)
        .then(async (snapshot) => {
          await snapshot.ref.getDownloadURL().then((url) => {
            const santizedUrl = `https://firebasestorage.googleapis.com/v0/b/meshtronics-cd0cd.appspot.com/o/images%2F${this.state.instructorName}_800x600?alt=media`;
            this.setState({ InstructorPic: santizedUrl });
          });
        });
      promises.push(promise2);
    } else {
      const body = {
        courseContent: {
          courseBody: this.state.courseBody,
          courseTitle: this.state.courseTitle,
          courseImage: this.state.coursePic,
          hasVideo: this.state.hasVideo,
          videoLink: this.state.videoLink,
          videoCaption: this.state.videoCaption,
        },
        instructorContent: {
          instrutorName: this.state.instructorName,
          instructorExpertie: this.state.instructorExpertiese,
          instructorDetails: this.state.instructorDetails,
          instructorImage: this.state.InstructorPic,
        },
      };
      Axios({
        url: '/updateDocument',
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        data: { doc: body },
      })
        .then((res) => {
          this.setState({ open: true });
        })
        .catch((er) => alert(er));
    }

    Promise.all([...promises])
      .then(() => {
        const body = {
          courseContent: {
            courseBody: this.state.courseBody,
            courseTitle: this.state.courseTitle,
            courseImage: this.state.coursePic,
            hasVideo: !(
              this.state.videoLink === '' && this.state.videoCaption === ''
            ),
            videoLink: this.state.videoLink,
            videoCaption: this.state.videoCaption,
          },
          instructorContent: {
            instrutorName: this.state.instructorName,
            instructorExpertie: this.state.instructorExpertiese,
            instructorDetails: this.state.instructorDetails,
            instructorImage: this.state.InstructorPic,
          },
        };
        Axios({
          url: '/updateDocument',
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: { doc: body },
        })
          .then((res) => {
            this.setState({ open: true });
          })
          .catch((er) => alert(er));
      })
      .catch(console.error);
  }
  _handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this._handleClose.bind(this)}
        >
          <this._Alert
            onClose={this._handleClose.bind(this)}
            severity='success'
          >
            Document Updated
          </this._Alert>
        </Snackbar>
        <Container>
          <Paper className={classes.root} elevation={3}>
            <h1 className={classes.title}>Update Course</h1>
            <Container maxWidth='md'>
              <form
                className={classes.inputBox}
                onSubmit={this._submitHandler.bind(this)}
              >
                <TextField
                  fullWidth
                  disabled
                  type='text'
                  variant='outlined'
                  label='Course Title'
                  name='courseTitle'
                  value={this.state.courseTitle}
                  onChange={this._changeHandler.bind(this)}
                  inputProps={{ maxLength: 18 }}
                />
                <TextField
                  fullWidth
                  type='text'
                  variant='outlined'
                  label='Course Body'
                  value={this.state.courseBody}
                  name='courseBody'
                  multiline
                  onChange={this._changeHandler.bind(this)}
                  rows={3}
                />
                <Input
                  type='file'
                  name='coursePic'
                  fullWidth
                  onChange={this._selectCoursePic.bind(this)}
                  inputProps={{ accept: 'image/x-png,image/jpeg' }}
                />
                <InputLabel>Recomened image dimension 800 x 600 px</InputLabel>
                <TextField
                  fullWidth
                  type='text'
                  variant='outlined'
                  label='Video Link'
                  onChange={this._changeHandler.bind(this)}
                  value={this.state.videoLink}
                  name='videoLink'
                />
                <TextField
                  fullWidth
                  type='text'
                  variant='outlined'
                  label='Video Caption'
                  name='videoCaption'
                  value={this.state.videoCaption}
                  onChange={this._changeHandler.bind(this)}
                  inputProps={{ maxLength: 100 }}
                />
                <h1 className={classes.title}>Instructor Details</h1>
                <TextField
                  fullWidth
                  type='text'
                  variant='outlined'
                  label='Instructor Name'
                  name='instructorName'
                  value={this.state.instructorName}
                  onChange={this._changeHandler.bind(this)}
                  inputProps={{ maxLength: 100 }}
                />
                <TextField
                  fullWidth
                  type='text'
                  variant='outlined'
                  label='Instructor Expertiese'
                  name='instructorExpertiese'
                  value={this.state.instructorExpertiese}
                  onChange={this._changeHandler.bind(this)}
                  inputProps={{ maxLength: 100 }}
                />
                <TextField
                  fullWidth
                  type='text'
                  variant='outlined'
                  label='Instructor Details'
                  name='instructorDetails'
                  value={this.state.instructorDetails}
                  onChange={this._changeHandler.bind(this)}
                  multiline
                />
                <Input
                  type='file'
                  name='InstructorPic'
                  fullWidth
                  onChange={this._selectCoursePic.bind(this)}
                  inputProps={{ accept: 'image/x-png,image/jpeg' }}
                />
                <InputLabel>Recomened image dimension 800 x 600 px</InputLabel>
                <Button
                  className={classes.button}
                  fullWidth
                  type='submit'
                  variant='contained'
                  color='secondary'
                >
                  Update
                </Button>
              </form>
            </Container>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(EditDocument));
