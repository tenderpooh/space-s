import React from "react";
import {
  Paper,
  Box,
  Divider,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
  },
  row: {
    marginTop: 10
  },
  icon: {
    marginRight: 5
  },
  parts: {
    marginLeft: 20
  }
}));

const SpaceshipRow = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="row"
      alignItems="center"
      className={classes.row}
    >
      {children}
    </Grid>
  );
};

export default function Spaceship() {
  const classes = useStyles();
  const [capsule, setCapsule] = React.useState("");
  const handleChange = event => {
    setCapsule(event.target.value);
  };
  return (
    <Paper className={classes.paper}>
      <Box fontWeight="fontWeightBold" m={1}>
        우주선 1
      </Box>
      <Divider />
      <Grid container>
        <SpaceshipRow>
          <LocationOnIcon fontSize="small" className={classes.icon} />
          <Box flexGrow={1}>현 위치</Box>
          <Box flexGrow={3} fontWeight="fontWeightBold">
            {"지구 궤도"}
          </Box>
        </SpaceshipRow>
        <SpaceshipRow>
          <BuildIcon fontSize="small" className={classes.icon} />
          <Box flexGrow={1}>부품 구성</Box>
        </SpaceshipRow>
        <Grid container item className={classes.parts}>
          <SpaceshipRow>
            <Box fontWeight="fontWeightBold">승차 캡슐</Box>
          </SpaceshipRow>
          <SpaceshipRow>
            <Divider style={{ width: "100%" }} />
          </SpaceshipRow>
          <SpaceshipRow>
            <Box>캡슐</Box>
            <FormControl className={classes.formControl}>
              <Select
                value={capsule}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>선택</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </SpaceshipRow>
        </Grid>
      </Grid>
    </Paper>
  );
}
