import React, { useContext } from "react";
import { GridList, GridListTile, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../backend/DataProvider";

import Spaceship from "./Assembly/Spaceship";
import AssemblyAsset from "./Assembly/AssemblyAsset";
import NewSpaceship from "./Assembly/NewSpaceship";

const useStyles = makeStyles(theme => ({
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    margin: 0
  }
}));

export default function Assembly() {
  const classes = useStyles();
  const { spaceships, user, company } = useContext(DataContext);
  return (
    <>
      <Grid container item xs={12} spacing={3}>
        <AssemblyAsset />
        <Grid item>
          <GridList
            className={classes.gridList}
            cellHeight="auto"
            cols={3.5}
            spacing={24}
          >
            {spaceships.map((spaceship, index) => {
              return (
                <GridListTile key={index}>
                  <Spaceship data={spaceship} company={company} />
                </GridListTile>
              );
            })}
            <GridListTile>
              <NewSpaceship companyId={user.company} />
            </GridListTile>
          </GridList>
        </Grid>
      </Grid>
    </>
  );
}
