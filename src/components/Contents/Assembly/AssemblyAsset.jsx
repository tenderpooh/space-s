import React, { useContext } from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DataContext } from "../../../backend/DataProvider";

import { red, amber, teal, blueGrey } from "@material-ui/core/colors";
import Icons from "./images/Icons";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    height: "100%"
  }
}));

export default function AssemblyAsset() {
  const classes = useStyles();
  const { company } = useContext(DataContext);
  const assets = [
    {
      icon: <Icons size="100%" name="capsules" color={red[400]} />,
      title: "승차 캡슐",
      items: [
        { name: "10인승 캡슐", amount: company.capsules.capsuleLv1 },
        { name: "20인승 캡슐", amount: company.capsules.capsuleLv2 },
        { name: "50인승 캡슐", amount: company.capsules.capsuleLv3 }
      ],
      scale: "기"
    },

    {
      icon: <Icons size="100%" name="customer" color={amber[400]} />,
      title: "여행객",
      items: [
        {
          name: "달 여행객",
          amount: company.customer.moon
        },
        {
          name: "화성 여행객",
          amount: company.customer.mars
        },
        {
          name: "목성 여행객",
          amount: company.customer.jupiter
        },
        {
          name: "기타 여행객",
          amount: company.customer.etc
        }
      ],
      scale: "명"
    },
    {
      icon: <Icons size="100%" name="supplies" color={teal[400]} />,
      title: "보급품",
      items: [{ name: "승객용 보급품", amount: company.supplies }],
      scale: "세트"
    },
    {
      icon: <Icons size="100%" name="rockets" color={blueGrey[400]} />,
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
          <Box display="flex" alignItems="center">
            <Box width="40%">{asset.icon}</Box>
            <Box width="60%">
              <Box
                fontSize="1.25rem"
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
