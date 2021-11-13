import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

//import RequestItem from "./RequestItem/RequestItem";

import ExaminationsHistory from "./Content/ExaminationsHistory/ExaminationsHistory";
import ExaminationBooking from "./Content/ExaminationBooking/ExaminationBooking";
import ExaminationResults from "./Content/ExaminationResults/ExaminationResults";
import Profile from "../Common/Profile/Profile";

import classes from "./Patient.module.css";

const MenuButton = withStyles((theme) => ({
  root: {
    color: "#28738f",
    "&:hover": {
      color: " #2fba64",
      backgroundColor: "transparent",
    },
  },
}))(Button);

const Patient = ({ match }) => {
  return (
    <div className={classes.requestsOuterContainer}>
      <div className={classes.requestsContainer}>
        <Paper className={classes.dataContainer}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Box padding={1}>
                <Typography variant="h6" gutterBottom>
                  Menu
                </Typography>
              </Box>
              <Box m={1}>
                <Link to={`${match.path}/profile`}>
                  <MenuButton startIcon={<AccountCircleIcon />} color="primary">
                    Profile
                  </MenuButton>
                </Link>
              </Box>
              <Box m={1}>
                <Link to={`${match.path}/book`}>
                  <MenuButton startIcon={<BorderColorIcon />} color="primary">
                    Book examination
                  </MenuButton>
                </Link>
              </Box>
              <Box m={1}>
                <Link to={match.path}>
                  <MenuButton startIcon={<ListIcon />} color="primary">
                    Examinations
                  </MenuButton>
                </Link>
              </Box>
              <Divider variant="middle" />
              <Box m={1}>
                <Link to="/">
                  <MenuButton startIcon={<ExitToAppIcon />} color="primary">
                    Logout
                  </MenuButton>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={9}>
              {/* <Switch> */}

              <div>
                <Route exact path={match.path}>
                  <ExaminationsHistory />
                </Route>
                <Route path={`${match.path}/book`}>
                  <ExaminationBooking />
                </Route>
                <Route path={`${match.path}/profile`}>
                  <Profile />
                </Route>
                <Route path={`${match.path}/results`}>
                  <ExaminationResults />
                </Route>
              </div>

              {/* examination-requests */}
              {/* <Box padding={1}>
                <Typography variant="h6" gutterBottom>
                  Examination requests
                </Typography>
              </Box>
              <Box>
                <RequestItem />
                <RequestItem />
                <RequestItem />
              </Box> */}
              {/* </Switch> */}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Patient;
