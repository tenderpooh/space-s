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
import { LocationOn, Build, Add, Remove } from "@material-ui/icons";

import AssemblyConfirm from "./AssemblyConfirm";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "70%",
    height: "100%",
    fontSize: "0.8rem"
  },
  paper: {
    padding: theme.spacing(2),
    height: "100%"
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
  selectEmpty: {
    width: "100%"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function Spaceship(props) {
  const classes = useStyles();
  const shipInfo = props.data;
  const [capsule, setCapsule] = React.useState(shipInfo.capsule);
  const [passenger, setPassenger] = React.useState(shipInfo.passenger);
  const [supplies, setSupplies] = React.useState(shipInfo.supplies);
  const [junoRockets, setJunoRockets] = React.useState(shipInfo.junoRockets);
  const [atlasRockets, setAtlasRockets] = React.useState(shipInfo.atlasRockets);
  const [soyuzRockets, setSoyuzRockets] = React.useState(shipInfo.soyuzRockets);
  const [saturnRockets, setSaturnRockets] = React.useState(
    shipInfo.saturnRockets
  );
  const input = {
    capsule,
    passenger,
    supplies,
    junoRockets,
    atlasRockets,
    soyuzRockets,
    saturnRockets
  };
  const [isEarth, setIsEarth] = React.useState(false);
  const [isAssembled, setIsAssembled] = React.useState(shipInfo.assembled);

  const currentSupplies = props.company.supplies;
  const currentPassenger = props.company.passenger;
  const currentJunoRockets = props.company.junoRockets;
  const currentAtlasRockets = props.company.atlasRockets;
  const currentSoyuzRockets = props.company.soyuzRockets;
  const currentSaturnRockets = props.company.saturnRockets;
  const handleChange = event => {
    setCapsule(event.target.value);
  };
  const handleNumber = e => {
    switch (e.currentTarget.getAttribute("name")) {
      case "passenger":
        setPassenger(Number(passenger) + Number(e.currentTarget.value));
        break;
      case "supplies":
        setSupplies(Number(supplies) + Number(e.currentTarget.value));
        break;
      case "junoRockets":
        setJunoRockets(Number(junoRockets) + Number(e.currentTarget.value));
        break;
      case "atlasRockets":
        setAtlasRockets(Number(atlasRockets) + Number(e.currentTarget.value));
        break;
      case "soyuzRockets":
        setSoyuzRockets(Number(soyuzRockets) + Number(e.currentTarget.value));
        break;
      case "saturnRockets":
        setSaturnRockets(Number(saturnRockets) + Number(e.currentTarget.value));
        break;
      default:
    }
  };

  const inputInit = () => {
    setJunoRockets(0);
    setAtlasRockets(0);
    setSoyuzRockets(0);
    setSaturnRockets(0);
    setPassenger(0);
    setSupplies(0);
  };

  React.useEffect(() => {
    shipInfo.location === "지구" && shipInfo.destination === "지구"
      ? setIsEarth(true)
      : setIsEarth(false);
    shipInfo.assembled ? setIsAssembled(true) : setIsAssembled(false);
  }, [shipInfo]);

  return (
    <Paper className={classes.paper}>
      <Box fontWeight="fontWeightBold">{shipInfo.name}</Box>
      <Divider />
      <Grid container>
        <Grid container item>
          <Box width="50%" display="flex">
            <LocationOn fontSize="small" className={classes.icon} />
            <Box>현 위치</Box>
          </Box>
          <Box width="50%" textAlign="center" fontWeight="fontWeightBold">
            {shipInfo.location}
          </Box>
        </Grid>
        <Grid container item>
          <Box width="100%" display="flex">
            <Build fontSize="small" className={classes.icon} />
            <Box>부품 구성</Box>
          </Box>
        </Grid>
        <Grid container item className={classes.parts}>
          <Grid container item>
            <Box fontWeight="fontWeightBold">승차 캡슐</Box>
            <Divider style={{ width: "100%" }} />
            <Grid container alignItems="center">
              <Box width="30%" textAlign="center">
                캡슐
              </Box>
              <FormControl
                className={classes.formControl}
                disabled={!isEarth || isAssembled}
              >
                <Select
                  value={capsule}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  style={{
                    fontSize: "0.8rem"
                  }}
                >
                  <MenuItem value="">
                    <em>선택</em>
                  </MenuItem>
                  <MenuItem value={"capsuleLV.1"}>10인승 캡슐</MenuItem>
                  <MenuItem value={"capsuleLV.2"}>50인승 캡슐</MenuItem>
                  <MenuItem value={"capsuleLV.3"}>100인승 캡슐</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item>
            <Box fontWeight="fontWeightBold">승객 및 보급품</Box>
            <Divider style={{ width: "100%" }} />
            <Grid container item alignItems="center">
              <Box width="40%" textAlign="center">
                승객
              </Box>
              <Box width="60%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                  disabled={!isEarth || isAssembled}
                >
                  <Button
                    name="passenger"
                    value={-1}
                    onClick={handleNumber}
                    disabled={passenger <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button disabled style={{ color: "black" }}>
                    {passenger}
                  </Button>
                  <Button
                    name="passenger"
                    value={1}
                    onClick={handleNumber}
                    disabled={passenger >= currentPassenger}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container item alignItems="center">
              <Box width="40%" textAlign="center">
                보급품
              </Box>
              <Box width="60%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                  disabled={!isEarth || isAssembled}
                >
                  <Button
                    name="supplies"
                    value={-1}
                    onClick={handleNumber}
                    disabled={supplies <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button disabled style={{ color: "black" }}>
                    {supplies}
                  </Button>
                  <Button
                    name="supplies"
                    value={1}
                    onClick={handleNumber}
                    disabled={supplies >= currentSupplies}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>
          <Grid container item>
            <Box fontWeight="fontWeightBold">추진 로켓 구성</Box>
            <Divider width="100%" />
            <Grid container alignItems="center">
              <Box width="40%" textAlign="center">
                주노 로켓
              </Box>
              <Box width="60%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                  disabled={!isEarth || isAssembled}
                >
                  <Button
                    name="junoRockets"
                    value={-1}
                    onClick={handleNumber}
                    disabled={junoRockets <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button disabled style={{ color: "black" }}>
                    {junoRockets}
                  </Button>
                  <Button
                    name="junoRockets"
                    value={1}
                    onClick={handleNumber}
                    disabled={junoRockets >= currentJunoRockets}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container alignItems="center">
              <Box width="40%" textAlign="center">
                아틀라스 로켓
              </Box>
              <Box width="60%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                  disabled={!isEarth || isAssembled}
                >
                  <Button
                    name="atlasRockets"
                    value={-1}
                    onClick={handleNumber}
                    disabled={atlasRockets <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button disabled style={{ color: "black" }}>
                    {atlasRockets}
                  </Button>
                  <Button
                    name="atlasRockets"
                    value={1}
                    onClick={handleNumber}
                    disabled={atlasRockets >= currentAtlasRockets}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container alignItems="center">
              <Box width="40%" textAlign="center">
                소유즈 로켓
              </Box>
              <Box width="60%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                  disabled={!isEarth || isAssembled}
                >
                  <Button
                    name="soyuzRockets"
                    value={-1}
                    onClick={handleNumber}
                    disabled={soyuzRockets <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button disabled style={{ color: "black" }}>
                    {soyuzRockets}
                  </Button>
                  <Button
                    name="soyuzRockets"
                    value={1}
                    onClick={handleNumber}
                    disabled={soyuzRockets >= currentSoyuzRockets}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container alignItems="center">
              <Box width="40%" textAlign="center">
                새턴 로켓
              </Box>
              <Box width="60%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                  disabled={!isEarth || isAssembled}
                >
                  <Button
                    name="saturnRockets"
                    value={-1}
                    onClick={handleNumber}
                    disabled={saturnRockets <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button disabled style={{ color: "black" }}>
                    {saturnRockets}
                  </Button>
                  <Button
                    name="saturnRockets"
                    value={1}
                    onClick={handleNumber}
                    disabled={saturnRockets >= currentSaturnRockets}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {isEarth ? (
          <>
            <Divider width="100%" />
            <Grid container>
              <AssemblyConfirm
                spaceship={shipInfo}
                input={input}
                inputInit={inputInit}
              />
            </Grid>
          </>
        ) : (
          ""
        )}
      </Grid>
    </Paper>
  );
}
