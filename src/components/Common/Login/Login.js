import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import classes from './Login.module.css';

const Login = ({match, history, isDoctor}) => {
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const onEmailTextChange = (e) => {
    setEmailText(e.target.value);
  };

  const onPasswordTextChange = (e) => {
    setPasswordText(e.target.value);
  };

  const onSubmit = () => {
    console.log('isDoctor', isDoctor);
    if (isDoctor) {
      history.push('doctor');
    } else {
      history.push('patient');
    }
    //history.push('doctor');
  };

  return (
    <div className={classes.loginOuterContainer}>
      <Box mt={2} ml={2}>
        <Link to='/'>
          <ArrowBackIosRoundedIcon fontSize='large' />
        </Link>
      </Box>
      <div className={classes.loginContainer}>
        <Typography variant='h2' gutterBottom>
          Sign In
        </Typography>
        <Paper className={classes.dataContainer}>
          <TextField
            required
            fullWidth
            autoFocus
            id='email-login-input'
            label='Email'
            type='email'
            variant='outlined'
            margin='dense'
            value={emailText}
            error={emailError}
            onChange={onEmailTextChange}
          />
          <Box mt={1}>
            <TextField
              required
              fullWidth
              id='password-login-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              variant='outlined'
              margin='dense'
              value={passwordText}
              error={passwordError}
              onChange={onPasswordTextChange}
            />
          </Box>
          <Box mt={2}>
            <Button fullWidth variant='outlined' color='primary' onClick={onSubmit}>
              Sign In
            </Button>
          </Box>
          {/* if doctor ... else */}
          <span>
            <p>Don't have an account? </p>
            <Link to='/register' className={classes.registerNow}>
              Register now
            </Link>
          </span>
        </Paper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDoctor: state.auth.isDoctor,
  };
};

export default connect(mapStateToProps, null)(Login);
