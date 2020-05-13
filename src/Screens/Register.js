import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MuiPhoneInput from 'material-ui-phone-number';

import { Store } from '../Store/Store';

import Axios from 'axios';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const [Fname, setFName] = React.useState('');
  const [Lname, setLName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [completed, setCompleted] = React.useState(false);
  const [uploaded, setUpload] = React.useState(false);
  const [paymentOption, setPaymentOption] = React.useState('Cash');
  const classes = useStyles();
  const phoneRef = React.useRef();
  const _checkFilled = () => {
    setCompleted(!completed);
  };
  const _paymentOptionCheck = (event) => {};
  const [state] = React.useContext(Store);
  const _submitHandler = (event) => {
    event.preventDefault();
    if (phone !== '') {
      Axios({
        url: '/registeration',
        method: 'POST',
        data: {
          user: {
            Fname: Fname,
            Lname: Lname,
            email: email,
            number: phone,
            Scourse: course,
            detail: details,
            payment: paymentOption,
            checked: completed,
          },
        },
      }).then((res) => {
        setFName('');
        setLName('');
        setEmail('');
        setPhone('');
        setCourse('');
        setDetails('');
        setCompleted('');
        setPaymentOption('Cash');
        setUpload(true);
      });
    } else {
      phoneRef.current.style.border = '2px solid red';
    }
  };
  const _scrolltoCard = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  React.useEffect(_scrolltoCard, []);
  return (
    <Slide direction='down' in={true}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            style={{ backgroundColor: uploaded ? 'green' : '#FE6102' }}
            className={classes.avatar}
          >
            <LockOutlinedIcon />
          </Avatar>
          {uploaded ? (
            <p style={{ color: 'green' }}>Registration Successful</p>
          ) : (
            ''
          )}
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          <form className={classes.form} onSubmit={_submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  value={Fname}
                  label='First Name'
                  autoFocus
                  onChange={(event) => setFName(event.currentTarget.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  value={Lname}
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  onChange={(event) => setLName(event.currentTarget.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  label='Email Address'
                  name='email'
                  value={email}
                  type='email'
                  autoComplete='email'
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>Phone Number</FormLabel>
              </Grid>
              <Grid ref={phoneRef} item xs={12}>
                <MuiPhoneInput
                  value={phone}
                  style={{
                    margin: 'auto',
                    width: '100%',
                  }}
                  defaultCountry='pk'
                  regions={'asia'}
                  onChange={(value) => setPhone(value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel>Selected Course</FormLabel>
                <Select
                  required
                  native
                  fullWidth
                  value={course}
                  placeholder='Select Course'
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
                  onChange={(event) => setCourse(event.currentTarget.value)}
                >
                  <option aria-label='None' value='' />
                  {state.data.doc
                    ? state.data.doc.map((elem) => {
                        return (
                          <option value={elem.courseContent.courseTitle}>
                            {elem.courseContent.courseTitle}
                          </option>
                        );
                      })
                    : ''}
                </Select>
              </Grid>

              <Grid item xs={12}>
                <center>
                  <FormLabel>Why you need to join this ?</FormLabel>
                </center>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder='Maximum 120 Characters'
                  multiline
                  required
                  value={details}
                  type='text'
                  inputProps={{ maxLength: 120 }}
                  onChange={(event) => setDetails(event.currentTarget.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel>Payment Option</FormLabel>
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  onChange={() => {
                    setPaymentOption('Cash');
                  }}
                  checked={paymentOption === 'Cash' ? true : false}
                  control={
                    <Checkbox
                      value='allowExtraEmails'
                      style={{ color: 'green' }}
                    />
                  }
                  label='Cash'
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  onChange={() => {
                    setPaymentOption('Credit/Debit Card');
                  }}
                  checked={paymentOption === 'Credit/Debit Card' ? true : false}
                  control={
                    <Checkbox
                      value='allowExtraEmails'
                      style={{ color: 'green' }}
                    />
                  }
                  label='Credit/Debit Card'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  onChange={_checkFilled}
                  control={
                    <Checkbox
                      value='allowExtraEmails'
                      style={{ color: 'green' }}
                    />
                  }
                  label='I confirm that the information given in this form is true, complete and accurate *'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.submit}
              disabled={!completed}
            >
              Register
            </Button>
            <Grid container justify='flex-end'></Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </Slide>
  );
};

export default Register;
