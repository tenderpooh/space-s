import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Flag } from "@material-ui/icons";
import { yellow, green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.primary
  }
}));

const packages = [
  {
    title: "지구 궤도 항해 패키지",
    price: 0.1,
    icon: (
      <Flag
        style={{
          width: 80,
          height: 80,
          color: yellow["A400"]
        }}
      />
    )
  },
  {
    title: "달 착륙 패키지",
    price: 1.0,
    icon: (
      <Flag
        style={{
          width: 80,
          height: 80,
          color: green["A400"]
        }}
      />
    )
  }
];

const PackagePaper = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box display="flex" alignItems="center">
        <Box width="40%">{props.icon}</Box>
        <Box width="60%">
          <Box fontSize={18} fontWeight="fontWeightLight" textAlign="right">
            {props.title}
          </Box>
          <Box fontSize={32} fontWeight="fontWeightBold" textAlign="right">
            인당 {props.price} mil
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default function Packages() {
  return (
    <Grid container item xs={12} spacing={3}>
      {packages.map((pack, index) => (
        <Grid key={index} item xs={3}>
          <PackagePaper
            icon={pack.icon}
            title={pack.title}
            price={pack.price}
          />
        </Grid>
      ))}
    </Grid>
  );
}
