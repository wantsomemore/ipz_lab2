import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { specialties } from "../Specialties";

import classes from "./Profile.module.css";

/* const MenuButton = withStyles((theme) => ({
  root: {
    color: "#28738f",
    "&:hover": {
      color: " #2fba64",
      backgroundColor: "transparent",
    },
  },
}))(Button); */

const Profile = ({ isDoctor }) => {
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
    console.log("hello", emailText, passwordText);
  };

  return (
    <div className={classes.profileContainer}>
      <Box padding={1}>
        <Typography variant="h6" gutterBottom>
          Profile
        </Typography>
      </Box>
      <Box mt={2}>
        <Paper className={classes.dataContainer} elevation={10}>
          {/*  elevation={15} */}
          <Box display="flex" alignItems="center">
            <TextField
              fullWidth
              id="name-register-input"
              label="New name"
              type="text"
              variant="outlined"
              margin="dense"
              value={name}
              onChange={onNameTextChange}
            />
            <Box ml={1}>
              <Button variant="outlined" color="primary" onClick={onSubmit}>
                Change
              </Button>
            </Box>
          </Box>
          <Box mt={1} display="flex" alignItems="center">
            <TextField
              fullWidth
              id="surname-register-input"
              label="New surname"
              type="text"
              variant="outlined"
              margin="dense"
              value={surname}
              onChange={onSurnameTextChange}
            />
            <Box ml={1}>
              <Button variant="outlined" color="primary" onClick={onSubmit}>
                Change
              </Button>
            </Box>
          </Box>
          <Box mt={1} display="flex" alignItems="center">
            <TextField
              fullWidth
              id="email-register-input"
              label="New email"
              type="email"
              variant="outlined"
              margin="dense"
              value={emailText}
              onChange={onEmailTextChange}
            />
            <Box ml={1}>
              <Button variant="outlined" color="primary" onClick={onSubmit}>
                Change
              </Button>
            </Box>
          </Box>
          <Box mt={1} display="flex" alignItems="center">
            <TextField
              fullWidth
              id="password-register-input"
              label="New password"
              type="text"
              variant="outlined"
              margin="dense"
              value={passwordText}
              onChange={onPasswordTextChange}
            />
            <Box ml={1}>
              <Button variant="outlined" color="primary" onClick={onSubmit}>
                Change
              </Button>
            </Box>
          </Box>
          {isDoctor && (
            <Box mt={1} display="flex" alignItems="center">
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
              <Box ml={1}>
                <Button variant="outlined" color="primary" onClick={onSubmit}>
                  Change
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDoctor: state.auth.isDoctor,
  };
};

export default connect(mapStateToProps, null)(Profile);
