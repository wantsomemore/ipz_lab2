import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import classes from "./ExaminationReview.module.css";

const SendButton = withStyles((theme) => ({
  root: {
    color: "#28738f",
    "&:hover": {
      color: " #2fba64",
      backgroundColor: "transparent",
    },
  },
}))(Button);

const ExaminationReview = () => {
  const [reviewText, setReviewText] = React.useState("");
  const [reviewError, setReviewError] = React.useState(false);

  const onReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };
  return (
    <div className={classes.reviewContainer}>
      <Box padding={1}>
        <Typography variant="h6" gutterBottom>
          Examination review
        </Typography>
      </Box>
      <Box>
        <TextField
          required
          fullWidth
          autoFocus
          id="review-login-input"
          label="Review"
          type="text"
          variant="outlined"
          margin="dense"
          value={reviewText}
          error={reviewError}
          onChange={onReviewTextChange}
        />
      </Box>
      <Box pt={2}>
        <SendButton variant="outlined">Send examination review</SendButton>
      </Box>
    </div>
  );
};

export default ExaminationReview;
