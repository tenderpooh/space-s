import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Spaceship from "./Assembly/Spaceship";

const useStyles = makeStyles(theme => ({
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  }
}));

export default function Assembly() {
  const classes = useStyles();
  return (
    <GridList
      className={classes.gridList}
      cellHeight="auto"
      cols={4}
      spacing={10}
    >
      <GridListTile>
        <Spaceship />
      </GridListTile>
      <GridListTile>
        <Spaceship />
      </GridListTile>
      <GridListTile>
        <Spaceship />
      </GridListTile>
      <GridListTile>
        <Spaceship />
      </GridListTile>
      <GridListTile>
        <Spaceship />
      </GridListTile>
    </GridList>
  );
}
