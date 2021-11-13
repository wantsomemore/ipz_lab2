import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import classes from "./ExaminationBooking.module.css";

const BookButton = withStyles((theme) => ({
  root: {
    color: "#28738f",
    "&:hover": {
      color: " #2fba64",
      backgroundColor: "transparent",
    },
  },
}))(Button);

const ExaminationBooking = () => {
  const [selectedStartDate, setSelectedStartDate] = React.useState(
    new Date("2020-10-10T16:00:00")
  );
  const [selectedEndDate, setSelectedEndDate] = React.useState(
    new Date("2020-10-25T19:30:00")
  );

  const onStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const onEndDateChange = (date) => {
    setSelectedEndDate(date);
  };
  return (
    <div className={classes.reviewContainer}>
      <Box padding={1}>
        <Typography variant="h6" gutterBottom>
          Examination Booking
        </Typography>
      </Box>
      <Box>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <Box style={{ width: "100%" }}>
              <Typography variant="h6">
                Please, pick date and time range when you are available
              </Typography>
            </Box>

            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="pick-start-date"
              label="Pick starting date"
              value={selectedStartDate}
              onChange={onStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="pick-end-date"
              label="Pick ending date"
              value={selectedEndDate}
              onChange={onEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid container justify="space-around">
            {/* <Box style={{width: "100%", marginTop: 30}}>
      <Typography variant="h6">and time range</Typography>
      </Box> */}
            <KeyboardTimePicker
              margin="normal"
              id="pick-start-time"
              label="Pick starting time"
              value={selectedStartDate}
              onChange={onStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="pick-end-time"
              label="Pick ending time"
              value={selectedEndDate}
              onChange={onEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Box pt={2}>
          <BookButton variant="outlined">Send booking request</BookButton>
        </Box>
      </Box>
    </div>
  );
};

export default ExaminationBooking;
