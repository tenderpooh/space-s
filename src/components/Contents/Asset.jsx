import React, { useContext } from "react";
import { Grid, Paper, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { DataContext } from "../../backend/DataProvider";
import { grey, red } from "@material-ui/core/colors";
import soyuzIcon from "../Images/soyuzIcon.svg";
import atlasIcon from "../Images/atlasIcon.svg";
import suppliesIcon from "../Images/suppliesIcon.svg";
import capsuleLv1Icon from "../Images/capsuleLv1Icon.svg";
import capsuleLv2Icon from "../Images/capsuleLv2Icon.svg";
import capsuleLv3Icon from "../Images/capsuleLv3Icon.svg";

import fundIcon from "../Images/fundIcon.svg";
import brandIcon from "../Images/brandIcon.svg";
import profitIcon from "../Images/profitIcon.svg";
import riskIcon from "../Images/riskIcon.svg";

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
    icon: <img alt="icon" src={profitIcon} />
  },
  {
    title: "보유 자금",
    amount: 105,
    scale: "mil $",
    icon: <img alt="icon" src={fundIcon} />
  },
  {
    title: "리스크 비용",
    amount: -31,
    scale: "mil $",
    icon: <img alt="icon" src={riskIcon} />
  },
  {
    title: "브랜드 가치",
    amount: 1,
    scale: "위",
    icon: <img alt="icon" src={brandIcon} />
  }
];

const assets = [
  {
    id: ["rockets", "atlas"],
    title: "아틀라스 로켓",
    price: 5,
    scale: "기 보유",
    icon: <img alt="icon" src={atlasIcon} />
  },
  {
    id: ["rockets", "soyuz"],
    title: "소유즈 로켓",
    price: 8,
    amount: 2,
    scale: "기 보유",
    icon: <img alt="icon" src={soyuzIcon} />
  },
  {
    id: ["capsules", "capsuleLv1"],
    title: "10인승 캡슐",
    price: 5,
    amount: 3,
    scale: "기 보유",
    icon: <img alt="icon" src={capsuleLv1Icon} />
  },
  {
    id: ["capsules", "capsuleLv2"],
    title: "20인승 캡슐",
    price: 20,
    scale: "기 보유",
    icon: <img alt="icon" src={capsuleLv2Icon} />
  },
  {
    id: ["capsules", "capsuleLv3"],
    title: "50인승 캡슐",
    price: 60,
    scale: "기 보유",
    icon: <img alt="icon" src={capsuleLv3Icon} />
  },
  {
    id: ["supplies"],
    title: "보급품",
    price: 1,
    scale: "세트 보유",
    icon: <img alt="icon" src={suppliesIcon} />
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
            color={props.amount > 0 ? "white" : red[500]}
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
