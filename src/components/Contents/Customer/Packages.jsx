import React from "react";
import { Grid, Paper, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../../backend/DataProvider";
import { Flag } from "@material-ui/icons";
import { yellow, green, blueGrey, red, grey } from "@material-ui/core/colors";

import CustomerPurchase from "./CustomerPurchase";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.primary
  }
}));

const PackagePaper = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box display="flex" alignItems="center">
        <Box width="40%">{props.icon}</Box>
        <Box width="60%">
          <Box fontSize={"0.8rem"} textAlign="right">
            {props.title}
          </Box>
          <Box
            fontSize={"1.25rem"}
            fontWeight="fontWeightBold"
            textAlign="right"
          >
            인당 {props.price} mil
          </Box>
          <Box
            fontSize={"0.75rem"}
            fontWeight="fontWeightBold"
            textAlign="right"
          >
            현재 {props.customer} 명 대기 중
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        color={grey[500]}
        marginTop={1}
      >
        <CustomerPurchase
          id={props.id}
          title={props.title}
          customer={props.customer}
        />
      </Box>
    </Paper>
  );
};

export default function Packages() {
  const { game } = React.useContext(DataContext);
  const packages = [
    {
      title: "달 관람/착륙",
      price: game.moonPrice,
      customer: game.moonCustomer,
      icon: (
        <Flag
          style={{
            width: 80,
            height: 80,
            color: yellow["400"]
          }}
        />
      )
    },
    {
      title: "화성 관람/착륙",
      price: 0,
      customer: 0,
      icon: (
        <Flag
          style={{
            width: 80,
            height: 80,
            color: red["400"]
          }}
        />
      )
    },
    {
      title: "목성 관람/착륙",
      price: 0,
      customer: 0,
      icon: (
        <Flag
          style={{
            width: 80,
            height: 80,
            color: green["400"]
          }}
        />
      )
    },
    {
      title: "소행성 관람/착륙",
      price: 0,
      customer: 0,
      icon: (
        <Flag
          style={{
            width: 80,
            height: 80,
            color: blueGrey["400"]
          }}
        />
      )
    }
  ];

  return (
    <Grid container item xs={12} spacing={3}>
      {packages.map((pack, index) => (
        <Grid key={index} item xs={3}>
          <PackagePaper
            icon={pack.icon}
            title={pack.title}
            price={pack.price}
            customer={pack.customer}
          />
        </Grid>
      ))}
    </Grid>
  );
}
