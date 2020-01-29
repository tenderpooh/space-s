import React, { useContext } from "react";
import {
  Grid,
  Paper,
  Box,
  Divider,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  MonetizationOn,
  AccountBalanceWallet,
  TrendingUp,
  Flight,
  IndeterminateCheckBox,
  AirlineSeatReclineNormal,
  Shop
} from "@material-ui/icons";
import { DataContext } from "../../backend/DataProvider";
import { yellow, grey, green, red, deepPurple } from "@material-ui/core/colors";

import AssetPurchase from "./Asset/AssetPurchase";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.primary
  }
}));

const funds = [
  {
    title: "분기 고정 수입",
    amount: 20,
    scale: "mil $",
    icon: (
      <MonetizationOn
        style={{
          width: 50,
          height: 50,
          color: yellow["A400"]
        }}
      />
    )
  },
  {
    title: "보유 자금",
    amount: 105,
    scale: "mil $",
    icon: (
      <AccountBalanceWallet
        style={{
          width: 50,
          height: 50,
          color: green[600]
        }}
      />
    )
  },
  {
    title: "리스크 비용",
    amount: -31,
    scale: "mil $",
    icon: (
      <IndeterminateCheckBox
        style={{
          width: 50,
          height: 50,
          color: red[500]
        }}
      />
    )
  },
  {
    title: "브랜드 가치",
    amount: 1,
    scale: "위",
    icon: (
      <TrendingUp
        style={{
          width: 50,
          height: 50,
          color: deepPurple[500]
        }}
      />
    )
  }
];

const assets = [
  {
    id: ["rockets", "atlas"],
    title: "아틀라스 로켓",
    price: 5,
    scale: "기 보유",
    icon: (
      <Flight
        style={{
          width: 50,
          height: 50,
          color: green[400]
        }}
      />
    )
  },
  {
    id: ["rockets", "soyuz"],
    title: "소유즈 로켓",
    price: 8,
    amount: 2,
    scale: "기 보유",
    icon: (
      <Flight
        style={{
          width: 50,
          height: 50,
          color: yellow[600]
        }}
      />
    )
  },
  {
    id: ["capsules", "capsuleLv1"],
    title: "10인승 캡슐",
    price: 5,
    amount: 3,
    scale: "기 보유",
    icon: (
      <AirlineSeatReclineNormal
        style={{
          width: 50,
          height: 50,
          color: grey[700]
        }}
      />
    )
  },
  {
    id: ["capsules", "capsuleLv2"],
    title: "20인승 캡슐",
    price: 20,
    scale: "기 보유",
    icon: (
      <AirlineSeatReclineNormal
        style={{
          width: 50,
          height: 50,
          color: green[400]
        }}
      />
    )
  },
  {
    id: ["capsules", "capsuleLv3"],
    title: "50인승 캡슐",
    price: 60,
    scale: "기 보유",
    icon: (
      <AirlineSeatReclineNormal
        style={{
          width: 50,
          height: 50,
          color: red[400]
        }}
      />
    )
  },
  {
    id: ["supplies"],
    title: "보급품",
    price: 1,
    scale: "세트 보유",
    icon: (
      <Shop
        style={{
          width: 50,
          height: 50,
          color: "black"
        }}
      />
    )
  }
];

const AssetPaper = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box display="flex" alignItems="center">
        <Box width="40%">{props.icon}</Box>
        <Box width="60%">
          <Box fontSize="0.75rem" fontWeight="400" textAlign="right">
            {props.title}
            {props.price ? (
              <span style={{ fontSize: "0.25rem" }}>($ {props.price} mil)</span>
            ) : (
              ""
            )}
          </Box>
          <Box
            fontSize="1.5rem"
            fontWeight="fontWeightBold"
            textAlign="right"
            color={props.amount > 0 ? "black" : red[500]}
          >
            {props.amount} {props.scale}
          </Box>
        </Box>
      </Box>
      {props.purchase ? (
        <>
          <Divider />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            color={grey[500]}
            marginTop={1}
          >
            <AssetPurchase
              id={props.id}
              title={props.title}
              price={props.price}
              buy={true}
            />
            <AssetPurchase
              id={props.id}
              title={props.title}
              price={props.price}
              buy={false}
            />
          </Box>
        </>
      ) : (
        ""
      )}
    </Paper>
  );
};

export default function Asset() {
  const { company } = useContext(DataContext);
  return (
    <Grid container item xs={12} spacing={3}>
      <Grid item xs={12}>
        <Box fontSize={20} fontWeight={500} marginLeft={1}>
          사업 자금 현황
        </Box>
        <Divider />
      </Grid>
      {funds.map((fund, index) => (
        <Grid key={index} item xs={3}>
          <AssetPaper
            icon={fund.icon}
            title={fund.title}
            amount={fund.title === "보유 자금" ? company.fund : fund.amount}
            scale={fund.scale}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Box fontSize={20} fontWeight={500} marginLeft={1}>
          자산 보유 현황
        </Box>
        <Divider />
      </Grid>
      {assets.map((asset, index) => (
        <Grid key={index} item xs={3}>
          <AssetPaper
            id={asset.id}
            icon={asset.icon}
            title={asset.title}
            price={asset.price}
            amount={
              asset.id.length === 2
                ? company[asset.id[0]][asset.id[1]]
                : company[asset.id[0]]
            }
            scale={asset.scale}
            purchase={true}
          />
        </Grid>
      ))}
    </Grid>
  );
}
