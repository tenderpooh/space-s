import React from "react";
import { Grid } from "@material-ui/core";
import ShipOperation from "./Operation/ShipOperation";

export default function Operation() {
  return (
    <Grid container item spacing={3} xs={6}>
      <ShipOperation no={1} />
      <ShipOperation no={2} />
      <ShipOperation no={3} />
      <ShipOperation no={4} />
    </Grid>
  );
}
