import React from "react";
import { Grid, Paper, Box, Divider, Button } from "@material-ui/core";
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
import { yellow, grey, green, red, deepPurple } from "@material-ui/core/colors";

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
    title: "주노 로켓 - 1 mil $",
    amount: 1,
    scale: "기 보유",
    icon: (
      <Flight
        style={{
          width: 50,
          height: 50,
          color: "black"
        }}
      />
    )
  },
  {
    title: "아틀라스 로켓 - 5 mil $",
    amount: 10,
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
    title: "소유즈 로켓 - 10 mil $",
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
    title: "새턴 로켓 - 20 mil $",
    amount: 3,
    scale: "기 보유",
    icon: (
      <Flight
        style={{
          width: 50,
          height: 50,
          color: red[400]
        }}
      />
    )
  },
  {
    title: "10인승 캡슐 - 1 mil $",
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
    title: "20인승 캡슐- 5 mil $",
    amount: 2,
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
    title: "50인승 캡슐- 10 mil $",
    amount: 0,
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
    title: "보급품 - 1 mil $",
    amount: 10,
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
          <Box fontSize={18} fontWeight="fontWeightLight" textAlign="right">
            {props.title}
          </Box>
          <Box
            fontSize={24}
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
            <Button
              variant="outlined"
              fullWidth
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              구매
            </Button>
            <Button
              variant="outlined"
              fullWidth
              style={{ marginLeft: 20, marginRight: 20 }}
            >
              매각
            </Button>
          </Box>
        </>
      ) : (
        ""
      )}
    </Paper>
  );
};

export default function Asset() {
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
            amount={fund.amount}
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
            icon={asset.icon}
            title={asset.title}
            amount={asset.amount}
            scale={asset.scale}
            purchase={true}
          />
        </Grid>
      ))}
    </Grid>
  );
}
