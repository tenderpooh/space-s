import React from "react";
import { Button, Paper, Box, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LocationOn, ArrowDropDown } from "@material-ui/icons";
import PathButton from "./PathButton";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: "100%",
    marginBottom: 10
  }
}));

export default function SetPath() {
  const classes = useStyles();
  const [paths, setPaths] = React.useState([]);
  console.log(paths);

  return (
    <Paper className={classes.paper}>
      <Box fontWeight="fontWeightBold">항로 설정</Box>
      <Divider style={{ width: "100%", marginTop: 5, marginBottom: 10 }} />
      <Grid container item alignItems="center" spacing={1}>
        <Grid item>
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<LocationOn />}
          >
            지구
          </Button>
        </Grid>
        <PathButton
          num={0}
          destination="지구"
          paths={paths}
          setPaths={setPaths}
        />
        {paths.map((path, index) => {
          if (path.destination !== "지구") {
            return (
              <PathButton
                key={index}
                num={index + 1}
                destination={path.destination}
                paths={paths}
                setPaths={setPaths}
              />
            );
          }
        })}
      </Grid>
    </Paper>
  );
}
