import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Spaceship from "./Spaceship";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Assembly() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={3}>
        <Spaceship />
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>지도</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>지도</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>지도</Paper>
      </Grid>
    </>
  );
}
