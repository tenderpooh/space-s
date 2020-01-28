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
import { Add, Remove } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: "100%",
    marginBottom: 10
  }
}));

export default function SetRocket() {
  const classes = useStyles();
  const [capsule, setCapsule] = React.useState("");
  const [passenger, setPassenger] = React.useState(0);
  const [supplies, setSupplies] = React.useState(0);
  const [junoRocket, setJunoRocket] = React.useState(0);
  const [atlasRocket, setAtlasRocket] = React.useState(0);
  const [soyuzRocket, setSoyuzRocket] = React.useState(0);
  const [saturnRocket, setSaturnRocket] = React.useState(0);

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
      <Grid container item>
        <Box fontWeight="fontWeightBold">승차 캡슐</Box>
        <Divider style={{ width: "100%" }} />
        <Grid container alignItems="center">
          <Box width="30%" textAlign="center">
            캡슐
          </Box>
          <FormControl style={{ width: "70%" }}>
            <Select value={capsule} onChange={handleChange} displayEmpty>
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
            <Button
              name="passenger"
              variant="text"
              value={-1}
              onClick={handleNumber}
              disabled={passenger <= 0}
            >
              <Remove />
            </Button>
            <Button color="primary" disabled style={{ color: "black" }}>
              {passenger}
            </Button>
            <Button name="passenger" value={1} onClick={handleNumber}>
              <Add />
            </Button>
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
              <Button color="primary" disabled style={{ color: "black" }}>
                {supplies}
              </Button>
              <Button name="supplies" value={1} onClick={handleNumber}>
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
              <Button color="primary" disabled style={{ color: "black" }}>
                {junoRocket}
              </Button>
              <Button name="junoRocket" value={1} onClick={handleNumber}>
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
              <Button color="primary" disabled style={{ color: "black" }}>
                {atlasRocket}
              </Button>
              <Button name="atlasRocket" value={1} onClick={handleNumber}>
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
              <Button color="primary" disabled style={{ color: "black" }}>
                {soyuzRocket}
              </Button>
              <Button name="soyuzRocket" value={1} onClick={handleNumber}>
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
              <Button color="primary" disabled style={{ color: "black" }}>
                {saturnRocket}
              </Button>
              <Button name="saturnRocket" value={1} onClick={handleNumber}>
                <Add />
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
