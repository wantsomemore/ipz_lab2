import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

import classes from "./ExaminationItem.module.css";

const ExaminationItem = () => {
  return (
    <Paper className={classes.examItemContainer}>
      <Link to="/doctor/review">
        <Box mt={2} display="flex" justifyContent="space-between" padding={1}>
          <Typography variant="subtitle1">24.10.2012 16:00</Typography>
          <Typography variant="subtitle1">Steve Jackson</Typography>&nbsp;
        </Box>
      </Link>
    </Paper>
  );
};

export default ExaminationItem;
