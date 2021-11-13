import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

import classes from "./RequestItem.module.css";

const RequestItem = () => {
  return (
    <Paper className={classes.itemContainer}>
      <Link to="/doctor/request-confirmation">
        <Box mt={2} display="flex" justifyContent="space-around" padding={1}>
          <Typography variant="subtitle1">20.10.2012</Typography>
          <Typography variant="subtitle1">Steve Jackson</Typography>&nbsp;
          <Typography variant="subtitle1">
            22.10.2012 - 24.10.2012, 16:00 - 21:30
          </Typography>
        </Box>
      </Link>
    </Paper>
  );
};

export default RequestItem;
