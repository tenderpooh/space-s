import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Customer() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>지도</Paper>
    </Grid>
  );
}
