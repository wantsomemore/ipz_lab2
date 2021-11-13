import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

import classes from "./Registration.module.css";

import { specialties } from "../Specialties";

const Registration = ({ match, history, isDoctor }) => {
  const [specialty, setSpecialty] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [emailText, setEmailText] = React.useState("");

  const [passwordText, setPasswordText] = React.useState("");
  const [repeatPasswordText, setRepeatPasswordText] = React.useState("");

  const onNameTextChange = (e) => {
    setName(e.target.value);
  };

  const onSurnameTextChange = (e) => {
    setSurname(e.target.value);
  };

  const onEmailTextChange = (e) => {
    setEmailText(e.target.value);
  };

  const onPasswordTextChange = (e) => {
    setPasswordText(e.target.value);
  };

  const onRepeatPasswordTextChange = (e) => {
    setRepeatPasswordText(e.target.value);
  };

  const onSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const onSubmit = () => {
    console.log("isDoctor", isDoctor);
    if (isDoctor) {
      history.push("doctor");
    } else {
      history.push("patient");
    }
    //history.push('doctor');
  };

  return (
    <div className={classes.registerOuterContainer}>
      <Box mt={2} ml={2}>
        <Link to="/">
          <ArrowBackIosRoundedIcon fontSize="large" />
        </Link>
      </Box>
      <div className={classes.registerContainer}>
        <Typography variant="h2" gutterBottom>
          Sign Up
        </Typography>
        <Paper className={classes.dataContainer}>
          <TextField
            required
            fullWidth
            autoFocus
            id="name-register-input"
            label="Name"
            type="text"
            variant="outlined"
            margin="dense"
            value={name}
            onChange={onNameTextChange}
          />
          <Box mt={1}>
            <TextField
              required
              fullWidth
              id="surname-register-input"
              label="Surname"
              type="text"
              variant="outlined"
              margin="dense"
              value={surname}
              onChange={onSurnameTextChange}
            />
          </Box>
          <Box mt={1}>
            <TextField
              required
              fullWidth
              id="email-register-input"
              label="Email"
              type="email"
              variant="outlined"
              margin="dense"
              value={emailText}
              onChange={onEmailTextChange}
            />
          </Box>
          <Box mt={1}>
            <TextField
              required
              fullWidth
              id="password-register-input"
              label="Password"
              type="password"
              variant="outlined"
              margin="dense"
              value={passwordText}
              onChange={onPasswordTextChange}
            />
          </Box>
          <Box mt={1}>
            <TextField
              required
              fullWidth
              id="repeat-password-register-input"
              label="Repeat password"
              type="password"
              variant="outlined"
              margin="dense"
              value={repeatPasswordText}
              onChange={onRepeatPasswordTextChange}
            />
          </Box>

          {isDoctor && (
            <Box mt={2}>
              <TextField
                id="specialty-register-input"
                select
                fullWidth
                label="Specialty"
                value={specialty}
                onChange={onSpecialtyChange}
              >
                {specialties.map((specialty) => (
                  <MenuItem key={specialty} value={specialty}>
                    {specialty}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          )}

          <Box mt={2}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={onSubmit}
            >
              Sign Up
            </Button>
          </Box>
          <span>
            <p>Already have an account? </p>
            <Link to="/login" className={classes.logInNow}>
              Sign in
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

export default connect(mapStateToProps, null)(Registration);
