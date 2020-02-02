import React, { useContext } from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../../backend/DataProvider";

import capsuleIcon from "./images/capsuleIcon.svg";
import rocketsIcon from "./images/rocketsIcon.svg";
import suppliesIcon from "./images/suppliesIcon.svg";
import customerIcon from "./images/customerIcon.svg";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.primary,
    height: "100%"
  }
}));

export default function AssemblyAsset() {
  const classes = useStyles();
  const { company } = useContext(DataContext);
  const assets = [
    {
      icon: <img alt="icon" src={capsuleIcon} />,
      title: "승차 캡슐",
      items: [
        { name: "10인승 캡슐", amount: company.capsules.capsuleLv1 },
        { name: "20인승 캡슐", amount: company.capsules.capsuleLv2 },
        { name: "50인승 캡슐", amount: company.capsules.capsuleLv3 }
      ],
      scale: "기"
    },

    {
      icon: <img alt="icon" src={customerIcon} />,
      title: "고객",
      items: [
        {
          name: "달",
          amount: company.customer.moon
        },
        {
          name: "화성",
          amount: company.customer.mars
        },
        {
          name: "목성",
          amount: company.customer.jupiter
        },
        {
          name: "기타",
          amount: company.customer.etc
        }
      ],
      scale: "명"
    },
    {
      icon: <img alt="icon" src={suppliesIcon} />,
      title: "보급품",
      items: [{ name: "보급품", amount: company.supplies }],
      scale: "세트"
    },
    {
      icon: <img alt="icon" src={rocketsIcon} />,
      title: "추진 로켓",
      items: [
        { name: "아틀라스 로켓", amount: company.rockets.atlas },
        { name: "소유즈 로켓", amount: company.rockets.soyuz }
      ],
      scale: "기"
    }
  ];
  return assets.map((asset, index) => {
    return (
      <Grid key={index} item xs={3}>
        <Paper className={classes.paper}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box width="40%">{asset.icon}</Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              width="60%"
            >
              <Box
                fontSize="1rem"
                fontWeight="fontWeightBold"
                textAlign="right"
              >
                {asset.title}
              </Box>
              <Box alignItems="right">
                {asset.items.map((item, index) => {
                  return (
                    <Box key={index} textAlign="right" fontSize="0.75rem">
                      {item.name} : {item.amount} {asset.scale}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    );
  });
}
