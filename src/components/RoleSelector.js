import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import { setUserIsDoctor } from "../redux/actions/actions";
//import { Link } from "react-router-dom";

//import classes from "./RoleSelector.module.css";

const useStyles = makeStyles({
  root: {
    /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3, */
    /* boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)', */
    border: "2px solid white",
    color: "white",
    height: 48,
    /* width: 500, */
    padding: "0 30px",
    margin: "0 2px",
    /* "&": {
      backgroundColor: 
    } */
  },
  roleSelectorContainer: {
    display: "flex",
    alignItems: "center",
    /* justifyContent: "center", */
    color: "white",
  },
  dataContainer: {
    height: 200,
    maxHeight: 200,
    width: 400,
    maxWidth: 400,
    padding: 15,
    paddingTop: 75,
  },
  buttonContainer: {
    display: "flex",
    paddingTop: 30,
  },
});

const RoleSelector = ({ history, setUserIsDoctor }) => {
  const classes = useStyles();

  const onDoctorSelected = () => {
    setUserIsDoctor(true);
    history.push("login");
  };

  const onPatientSelected = () => {
    setUserIsDoctor(false);
    history.push("login");
  };

  return (
    <div className={classes.roleSelectorContainer}>
      <div className={classes.dataContainer}>
        <Typography variant="h3" gutterBottom>
          Please, choose who you are
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.root}
            variant="outlined"
            onClick={onDoctorSelected}
          >
            I am a doctor
          </Button>
          <Button
            className={classes.root}
            variant="outlined"
            onClick={onPatientSelected}
          >
            I am a patient
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  setUserIsDoctor,
})(RoleSelector);
