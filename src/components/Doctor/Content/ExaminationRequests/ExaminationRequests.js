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

import RequestItem from "./RequestItem/RequestItem";

import classes from "./ExaminationRequests.module.css";

/* const MenuButton = withStyles((theme) => ({
  root: {
    color: "#28738f",
    "&:hover": {
      color: " #2fba64",
      backgroundColor: "transparent",
    },
  },
}))(Button); */

const ExaminationRequests = () => {
  return (
    <div className={classes.requestsContainer}>
      {/* <div className={classes.requestsContainer}>
        <Paper className={classes.dataContainer}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Box padding={1}>
                <Typography variant="h6" gutterBottom>
                  Menu
                </Typography>
              </Box>
              <Box m={1}>
                <MenuButton startIcon={<AccountCircleIcon />} color="primary">
                  Profile
                </MenuButton>
              </Box>
              <Box m={1}>
                <MenuButton startIcon={<ListIcon />} color="primary">
                  Examinations
                </MenuButton>
              </Box>
              <Box m={1}>
                <MenuButton startIcon={<ExitToAppIcon />} color="primary">
                  Logout
                </MenuButton>
              </Box>
            </Grid>
            <Grid item xs={9}> */}
      <Box padding={1}>
        <Typography variant="h6" gutterBottom>
          Examination requests
        </Typography>
      </Box>
      <Box className={classes.requestItemsContainer}>
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
      </Box>
      {/* </Grid>
          </Grid>
        </Paper>
      </div> */}
    </div>
  );
};

export default ExaminationRequests;
