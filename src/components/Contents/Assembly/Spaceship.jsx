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

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: "70%",
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
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

export default function Spaceship() {
  const classes = useStyles();
  const [capsule, setCapsule] = React.useState("");
  const [passenger, setPassenger] = React.useState(0);
  const [supplies, setSupplies] = React.useState(0);
  const [junoRocket, setJunoRocket] = React.useState(0);
  const [atlasRocket, setAtlasRocket] = React.useState(0);
  const [soyuzRocket, setSoyuzRocket] = React.useState(0);
  const [saturnRocket, setSaturnRocket] = React.useState(0);
  const currentSupplies = 10;
  const currentPassenger = 10;
  const currentJunoRocket = 10;
  const currentAtlasRocket = 10;
  const currentSoyuzRocket = 10;
  const currentSaturnRocket = 10;
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
      case "junoRocket":
        setJunoRocket(Number(junoRocket) + Number(e.currentTarget.value));
        break;
      case "atlasRocket":
        setAtlasRocket(Number(atlasRocket) + Number(e.currentTarget.value));
        break;
      case "soyuzRocket":
        setSoyuzRocket(Number(soyuzRocket) + Number(e.currentTarget.value));
        break;
      case "saturnRocket":
        setSaturnRocket(Number(saturnRocket) + Number(e.currentTarget.value));
        break;
      default:
    }
  };

  return (
    <Paper className={classes.paper}>
      <Box fontWeight="fontWeightBold">우주선 1</Box>
      <Divider />
      <Grid container>
        <Grid container item>
          <Box width="30%" display="flex">
            <LocationOn fontSize="small" className={classes.icon} />
            <Box>현 위치</Box>
          </Box>
          <Box width="70%" textAlign="center" fontWeight="fontWeightBold">
            {"지구 궤도"}
          </Box>
        </Grid>
        <Grid container item>
          <Box width="30%" display="flex">
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
            </Grid>
          </Grid>
          <Grid container item>
            <Box fontWeight="fontWeightBold">승객 및 보급품</Box>
            <Divider style={{ width: "100%" }} />
            <Grid container item alignItems="center">
              <Box width="30%" textAlign="center">
                승객
              </Box>
              <Box width="70%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    name="passenger"
                    value={-1}
                    onClick={handleNumber}
                    disa
                    bled={passenger <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button color="primary" disabled>
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
              <Box width="30%" textAlign="center">
                보급품
              </Box>
              <Box width="70%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    name="supplies"
                    value={-1}
                    onClick={handleNumber}
                    disabled={supplies <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button color="primary" disabled>
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
            <Divider style={{ width: "100%" }} />
            <Grid container alignItems="center">
              <Box width="30%" textAlign="center">
                주노 로켓
              </Box>
              <Box width="70%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    name="junoRocket"
                    value={-1}
                    onClick={handleNumber}
                    disabled={junoRocket <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button color="primary" disabled>
                    {junoRocket}
                  </Button>
                  <Button
                    name="junoRocket"
                    value={1}
                    onClick={handleNumber}
                    disabled={junoRocket >= currentJunoRocket}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container alignItems="center">
              <Box width="30%" textAlign="center">
                아틀라스 로켓
              </Box>
              <Box width="70%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    name="atlasRocket"
                    value={-1}
                    onClick={handleNumber}
                    disabled={atlasRocket <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button color="primary" disabled>
                    {atlasRocket}
                  </Button>
                  <Button
                    name="atlasRocket"
                    value={1}
                    onClick={handleNumber}
                    disabled={atlasRocket >= currentAtlasRocket}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container alignItems="center">
              <Box width="30%" textAlign="center">
                소유즈 로켓
              </Box>
              <Box width="70%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    name="soyuzRocket"
                    value={-1}
                    onClick={handleNumber}
                    disabled={soyuzRocket <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button color="primary" disabled>
                    {soyuzRocket}
                  </Button>
                  <Button
                    name="soyuzRocket"
                    value={1}
                    onClick={handleNumber}
                    disabled={soyuzRocket >= currentSoyuzRocket}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            <Grid container alignItems="center">
              <Box width="30%" textAlign="center">
                새턴 로켓
              </Box>
              <Box width="70%">
                <ButtonGroup
                  fullWidth={true}
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                >
                  <Button
                    name="saturnRocket"
                    value={-1}
                    onClick={handleNumber}
                    disabled={saturnRocket <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button color="primary" disabled>
                    {saturnRocket}
                  </Button>
                  <Button
                    name="saturnRocket"
                    value={1}
                    onClick={handleNumber}
                    disabled={saturnRocket >= currentSaturnRocket}
                  >
                    <Add />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
