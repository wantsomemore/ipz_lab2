import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

import classes from "./RequestConfirmation.module.css";

const BookButton = withStyles((theme) => ({
  root: {
    color: "#28738f",
    "&:hover": {
      color: " #2fba64",
      backgroundColor: "transparent",
    },
  },
}))(Button);

const RequestConfirmation = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-10-10T16:00:00")
  );

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.requestConfirmationContainer}>
      <Box padding={1}>
        <Typography variant="h6" gutterBottom>
          Request confirmation
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Request date: 20.10.2012</Typography>
        <Typography variant="subtitle1">Patient: Jack Swager</Typography>
        <Typography variant="subtitle1">
          Availability: 22.10.2012 - 24.10.2012, 16:00 - 21:30
        </Typography>
      </Box>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <Box style={{ width: "100%" }}>
            <Typography variant="h6">Please, set examination date</Typography>
          </Box>

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="pick-date"
            label="Pick date"
            value={selectedDate}
            onChange={onDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Grid container>
          {/* <Box style={{width: "100%", marginTop: 30}}>
      <Typography variant="h6">and time range</Typography>
      </Box> */}
          <KeyboardTimePicker
            margin="normal"
            id="pick-time"
            label="Pick time"
            value={selectedDate}
            onChange={onDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Box pt={2}>
        <BookButton variant="outlined">Confirm</BookButton>
      </Box>
    </div>
  );
};

export default RequestConfirmation;
