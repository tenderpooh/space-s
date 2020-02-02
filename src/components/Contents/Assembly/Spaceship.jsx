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
import { cancelSound, confirmSound, dropdownSound } from "../../../sound/Sound";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "60%",
    fontSize: "0.8rem"
  },
  paper: {
    padding: theme.spacing(3),
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
  const [customerType, setCustomerType] = React.useState(shipInfo.customerType);
  const [customer, setCustomer] = React.useState(shipInfo.customer);
  const [supplies, setSupplies] = React.useState(shipInfo.supplies);
  const [atlasRockets, setAtlasRockets] = React.useState(shipInfo.atlasRockets);
  const [soyuzRockets, setSoyuzRockets] = React.useState(shipInfo.soyuzRockets);
  const input = {
    capsule,
    supplies,
    atlasRockets,
    soyuzRockets,
    customerType,
    customer
  };
  const [isEarth, setIsEarth] = React.useState(false);
  const [isAssembled, setIsAssembled] = React.useState(shipInfo.assembled);

  const currentSupplies = props.company.supplies;
  const currentCustomer = props.company.customer[customerType];
  const currentAtlasRockets = props.company.rockets.atlas;
  const currentSoyuzRockets = props.company.rockets.soyuz;
  const currentCapsuleLv1 = props.company.capsules.capsuleLv1;
  const currentCapsuleLv2 = props.company.capsules.capsuleLv2;
  const currentCapsuleLv3 = props.company.capsules.capsuleLv3;

  const handleCapsuleChange = e => {
    confirmSound.play();
    setCapsule(e.target.value);
  };

  const handleCustomerTypeChange = e => {
    confirmSound.play();
    setCustomerType(e.target.value);
    setCustomer(0);
  };

  const handleNumber = e => {
    cancelSound.play();
    switch (e.currentTarget.getAttribute("name")) {
      case "customer":
        setCustomer(Number(customer) + Number(e.currentTarget.value));
        break;
      case "supplies":
        setSupplies(Number(supplies) + Number(e.currentTarget.value));
        break;
      case "atlasRockets":
        setAtlasRockets(Number(atlasRockets) + Number(e.currentTarget.value));
        break;
      case "soyuzRockets":
        setSoyuzRockets(Number(soyuzRockets) + Number(e.currentTarget.value));
        break;
      default:
    }
  };

  const inputInit = () => {
    setCapsule("");
    setAtlasRockets(0);
    setSoyuzRockets(0);
    setCustomer(0);
    setCustomerType("");
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
      <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
        {shipInfo.name}
      </Box>
      <Divider style={{ marginTop: 1, marginBottom: 1 }} />
      <Grid container spacing={1}>
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
        <Grid container item className={classes.parts} spacing={1}>
          <Grid container item>
            <Box fontWeight="fontWeightBold">승차 캡슐</Box>
            <Divider width="100%" style={{ marginTop: 1, marginBottom: 1 }} />
            <Grid container alignItems="center">
              <Box width="40%" textAlign="center">
                캡슐
              </Box>
              <FormControl
                className={classes.formControl}
                disabled={!isEarth || isAssembled}
              >
                <Select
                  value={capsule}
                  onChange={handleCapsuleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  style={{
                    fontSize: "0.8rem"
                  }}
                >
                  <MenuItem value="">
                    <em>선택</em>
                  </MenuItem>
                  <MenuItem
                    value={"capsuleLv1"}
                    disabled={currentCapsuleLv1 <= 0}
                  >
                    10인승 캡슐
                  </MenuItem>
                  <MenuItem
                    value={"capsuleLv2"}
                    disabled={currentCapsuleLv2 <= 0}
                  >
                    20인승 캡슐
                  </MenuItem>
                  <MenuItem
                    value={"capsuleLv3"}
                    disabled={currentCapsuleLv3 <= 0}
                  >
                    50인승 캡슐
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item>
            <Box fontWeight="fontWeightBold">고객 및 보급품</Box>
            <Divider width="100%" style={{ marginTop: 1, marginBottom: 1 }} />
            <Grid container item alignItems="center">
              <Grid container alignItems="center">
                <Box width="40%" textAlign="center">
                  행선지
                </Box>
                <FormControl
                  className={classes.formControl}
                  disabled={!isEarth || isAssembled}
                >
                  <Select
                    name="customerType"
                    value={customerType}
                    onChange={handleCustomerTypeChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    style={{
                      fontSize: "0.8rem"
                    }}
                  >
                    <MenuItem value="">
                      <em>선택</em>
                    </MenuItem>
                    <MenuItem value={"moon"}>달</MenuItem>
                    <MenuItem value={"mars"}>화성</MenuItem>
                    <MenuItem value={"jupiter"}>목성</MenuItem>
                    <MenuItem value={"etc"}>기타</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Box width="40%" textAlign="center">
                고객
              </Box>
              <Box width="60%">
                <ButtonGroup
                  fullWidth
                  variant="text"
                  size="small"
                  style={{ display: "flex" }}
                  disabled={
                    !isEarth ||
                    isAssembled ||
                    customerType === "" ||
                    capsule === "" ||
                    (capsule === "capsuleLv1" && customer >= 10) ||
                    (capsule === "capsuleLv2" && customer >= 20) ||
                    (capsule === "capsuleLv3" && customer >= 50)
                  }
                >
                  <Button
                    name="customer"
                    value={-10}
                    onClick={handleNumber}
                    disabled={customer <= 0}
                  >
                    <Remove />
                  </Button>
                  <Button disabled style={{ color: "white" }}>
                    {customer}
                  </Button>
                  <Button
                    name="customer"
                    value={10}
                    onClick={handleNumber}
                    disabled={customer >= currentCustomer}
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
                  <Button disabled style={{ color: "white" }}>
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
          <Grid container item spacing={1}>
            <Box fontWeight="fontWeightBold">추진 로켓 구성</Box>
            <Divider width="100%" style={{ marginTop: 1, marginBottom: 1 }} />
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
                  <Button disabled style={{ color: "white" }}>
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
                  <Button disabled style={{ color: "white" }}>
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
          </Grid>
        </Grid>
        <Divider width="100%" style={{ marginTop: 1, marginBottom: 1 }} />
        {isEarth ? (
          <Grid container>
            <AssemblyConfirm
              spaceship={shipInfo}
              input={input}
              inputInit={inputInit}
            />
          </Grid>
        ) : (
          <Button
            variant="contained"
            size="small"
            disabled
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            운행 중
          </Button>
        )}
      </Grid>
    </Paper>
  );
}
