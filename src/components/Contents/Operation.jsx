import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import ShipOperation from "./Operation/ShipOperation";
import { DataContext } from "../../backend/DataProvider";

export default function Operation() {
  const { spaceships } = useContext(DataContext);
  return (
    <Grid container item spacing={3} xs={12}>
      {spaceships.map((spaceship, index) => {
        return <ShipOperation key={index} data={spaceship} />;
      })}
    </Grid>
  );
}
