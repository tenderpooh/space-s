import React from "react";
import { Grid } from "@material-ui/core";
import SetPath from "./Navigation/SetPath";
import SetRocket from "./Navigation/SetRocket";
import SimResult from "./Navigation/SimResult";

export default function Navigation() {
  return (
    <>
      <Grid container>
        <SetPath />
      </Grid>
      <Grid container>
        <Grid container item xs={5}>
          <SetRocket />
        </Grid>
        <Grid container item xs={2}></Grid>
        <Grid container item xs={5}>
          <SimResult />
        </Grid>
      </Grid>
    </>
  );
}
