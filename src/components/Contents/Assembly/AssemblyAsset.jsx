import React, { useContext } from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Accessibility, Flight, Shop } from "@material-ui/icons";
import { DataContext } from "../../../backend/DataProvider";

import { yellow, grey, green, red, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary
  }
}));

export default function AssemblyAsset() {
  const classes = useStyles();
  const { company } = useContext(DataContext);
  const assets = [
    {
      icon: (
        <Accessibility
          style={{
            width: "100%",
            height: "100%",
            color: grey[700]
          }}
        />
      ),
      title: "승객",
      amount: company.passenger,
      scale: "명"
    },
    {
      icon: (
        <Shop
          style={{
            width: "100%",
            height: "100%",
            color: "black"
          }}
        />
      ),
      title: "보급품",
      amount: company.supplies,
      scale: "세트"
    },
    {
      icon: (
        <Flight
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      ),
      title: "주노 로켓",
      amount: company.junoRockets,
      scale: "기"
    },
    {
      icon: (
        <Flight
          style={{
            width: "100%",
            height: "100%",
            color: green[700]
          }}
        />
      ),
      title: "아틀라스 로켓",
      amount: company.atlasRockets,
      scale: "기"
    },
    {
      icon: (
        <Flight
          style={{
            width: "100%",
            height: "100%",
            color: yellow[700]
          }}
        />
      ),
      title: "소유즈 로켓",
      amount: company.soyuzRockets,
      scale: "기"
    },
    {
      icon: (
        <Flight
          style={{
            width: "100%",
            height: "100%",
            color: red[700]
          }}
        />
      ),
      title: "새턴 로켓",
      amount: company.saturnRockets,
      scale: "기"
    }
  ];
  return assets.map((asset, index) => {
    return (
      <Grid key={index} item xs={2}>
        <Paper className={classes.paper}>
          <Box display="flex" alignItems="center">
            <Box width="40%">{asset.icon}</Box>
            <Box width="60%">
              <Box
                fontSize="0.75rem"
                fontWeight="fontWeightLight"
                textAlign="right"
              >
                {asset.title}
              </Box>
              <Box
                fontSize="1rem"
                fontWeight="fontWeightBold"
                textAlign="right"
              >
                {asset.amount} {asset.scale}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    );
  });
}
