import React from "react";
import { Grid, Paper, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RankTable from "./Table/RankTable";
import MilestoneTable from "./Table/MilestoneTable";

import Timer from "./Dashboard/Timer";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  boxTitle: {
    lineHeight: "normal",
    fontWeight: "bolder",
    fontSize: "1.25rem",
    marginBottom: "0.5rem"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Grid container item spacing={2}>
        <Grid item xs={3}>
          <Timer />
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Box>시간</Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <Box className={classes.boxTitle}>글로벌 우주 여행사 순위</Box>
            <Divider />
            <RankTable />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Box className={classes.boxTitle}>업적 현황</Box>
            <Divider />
            <MilestoneTable />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
