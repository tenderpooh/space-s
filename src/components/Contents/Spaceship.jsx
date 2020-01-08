import React from "react";
import {
  Button,
  ButtonGroup,
  Paper,
  Box,
  Divider,
  Grid,
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BuildIcon from "@material-ui/icons/Build";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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
  },
  selectEmpty: {}
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
  const [passenger, setPassenger] = React.useState(1);
  const currentPassenger = 10;
  const handleChange = event => {
    setCapsule(event.target.value);
  };
  const handleNumber = e => {
    console.log(e.currentTarget.value);
    setPassenger(Number(passenger) + Number(e.currentTarget.value));
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
            <Divider style={{ width: "100%" }} />
            <Box flexGrow={1}>캡슐</Box>
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
                <MenuItem value={"capsuleLV.1"}>10인승 캡슐</MenuItem>
                <MenuItem value={"capsuleLV.2"}>50인승 캡슐</MenuItem>
                <MenuItem value={"capsuleLV.3"}>100인승 캡슐</MenuItem>
              </Select>
            </FormControl>
          </SpaceshipRow>
          <SpaceshipRow>
            <Box fontWeight="fontWeightBold">승객 및 보급품</Box>
            <Divider style={{ width: "100%" }} />
            <Grid container alignItems="center" style={{ marginTop: 5 }}>
              <Box flexGrow={1}>승객</Box>
              <Box flexGrow={1}>
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    value={-1}
                    onClick={handleNumber}
                    disabled={passenger <= 0}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button color="primary" disabled style={{ color: "black" }}>
                    {passenger}
                  </Button>
                  <Button
                    value={1}
                    onClick={handleNumber}
                    disabled={passenger >= currentPassenger}
                  >
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container alignItems="center" style={{ marginTop: 5 }}>
              <Box flexGrow={1}>승객</Box>
              <Box flexGrow={1}>
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    value={-1}
                    onClick={handleNumber}
                    disabled={passenger <= 0}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button color="primary" disabled style={{ color: "black" }}>
                    {passenger}
                  </Button>
                  <Button
                    value={1}
                    onClick={handleNumber}
                    disabled={passenger >= currentPassenger}
                  >
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </SpaceshipRow>
        </Grid>
      </Grid>
    </Paper>
  );
}
