import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #28738f 30%, #2fba64 90%)",
    minHeight: "100vh",
    height: "100%",
  },
});

const GeneralLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className={classes.root}
      >
        {children}
      </Grid>
    </React.Fragment>
  );
};

export default GeneralLayout;
