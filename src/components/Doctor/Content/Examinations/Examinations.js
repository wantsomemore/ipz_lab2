import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

import ExaminationItem from "./ExaminationItem/ExaminationItem";

import classes from "./Examinations.module.css";

/* const MenuButton = withStyles((theme) => ({
  root: {
    color: "#28738f",
    "&:hover": {
      color: " #2fba64",
      backgroundColor: "transparent",
    },
  },
}))(Button); */

const Examinations = () => {
  return (
    <div className={classes.examinationsContainer}>
      <Box padding={1}>
        <Typography variant="h6" gutterBottom>
          Examinations
        </Typography>
      </Box>
      <Box className={classes.examItemsContainer}>
        <ExaminationItem />
        <ExaminationItem />
        <ExaminationItem />
        <ExaminationItem />
        <ExaminationItem />
        <ExaminationItem />
      </Box>
      {/* </Grid>
          </Grid>
        </Paper>
      </div> */}
    </div>
  );
};

export default Examinations;
