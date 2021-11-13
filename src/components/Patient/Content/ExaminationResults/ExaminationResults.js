import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import classes from "./ExaminationResults.module.css";

const ExaminationResults = () => {
  const [reviewText, setReviewText] = React.useState("");
  const [reviewError, setReviewError] = React.useState(false);

  const onReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };
  return (
    <div className={classes.reviewContainer}>
      <Box padding={1}>
        <Typography variant="h6" gutterBottom>
          Examination results
        </Typography>
      </Box>
      <Box padding={1}>
        <Typography variant="subtitle1">
          Here is the result of your examination.
        </Typography>
      </Box>
    </div>
  );
};

export default ExaminationResults;
