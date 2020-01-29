import React from "react";
import { DataContext } from "../../../backend/DataProvider";
import { makeStyles } from "@material-ui/core/styles";

import trend1 from "./TrendImages/trend-1.jpg";
import trend2 from "./TrendImages/trend-2.jpg";
import trend3 from "./TrendImages/trend-3.jpg";
import trend4 from "./TrendImages/trend-4.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    height: "320px"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const tileData = [
  {
    img: trend1
  },
  {
    img: trend2
  },
  {
    img: trend3
  },
  {
    img: trend4
  },
  {
    img: trend1
  },
  {
    img: trend2
  },
  {
    img: trend3
  },
  {
    img: trend4
  },
  {
    img: trend1
  },
  {
    img: trend2
  },
  {
    img: trend3
  },
  {
    img: trend4
  },
  {
    img: trend1
  },
  {
    img: trend2
  },
  {
    img: trend3
  },
  {
    img: trend4
  }
];

export default function Trend() {
  const classes = useStyles();
  const { game } = React.useContext(DataContext);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${tileData[game.round].img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    ></div>
  );
}
