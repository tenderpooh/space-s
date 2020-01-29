import React, { useContext, useState, useEffect } from "react";
import { Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../../backend/DataProvider";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
}));

export default function Timer() {
  const classes = useStyles();
  const { game } = useContext(DataContext);
  const [nowTime, setNowTime] = useState(Date.now());
  const endTime = game.time.seconds * 1000;
  const remainSeconds = Math.round((endTime - nowTime) / 1000);
  const remainMin = Math.floor(remainSeconds / 60);
  const remainSec = Math.floor(remainSeconds % 60);

  const n = number => {
    return number >= 10 ? number : "0" + String(number);
  };
  const remainTime =
    remainSeconds < 0 ? "00:00" : `${n(remainMin)}:${n(remainSec)}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setNowTime(Date.now());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      className={classes.paper}
      display="flex"
      style={{
        justifyContent: "center"
      }}
    >
      <Box>
        <Box
          fontWeight="fontWeightBold"
          fontSize="h4.fontSize"
          textAlign="center"
        >
          {game.round} 라운드
        </Box>
        <Box
          fontWeight="fontWeightBold"
          fontSize="h1.fontSize"
          textAlign="center"
        >
          {remainTime}
        </Box>
      </Box>
    </Paper>
  );
}
