import React, { useContext } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../context/AppContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const Content = () => {
  const classes = useStyles();
  const { content } = useContext(AppContext);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}> 안녕 </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>{content}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default Content;
