import React from "react";
import { Grid, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomerTable from "./Customer/CustomerTable";
import Packages from "./Customer/Packages";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Customer() {
  const classes = useStyles();
  return (
    <Grid container item xs={12} spacing={5}>
      <Grid item xs={6}>
        <Box fontSize={20} fontWeight={500} marginLeft={1}>
          우주 여행 트렌드
        </Box>
        <Divider />
      </Grid>
      <Grid item xs={6}>
        <Box fontSize={20} fontWeight={500} marginLeft={1}>
          여행 중 고객 현황
        </Box>
        <Divider />
        <CustomerTable />
      </Grid>
      <Grid item xs={12}>
        <Box fontSize={20} fontWeight={500} marginLeft={1}>
          여행 패키지 시장 가격
        </Box>
        <Divider />
      </Grid>
      <Packages />
    </Grid>
  );
}
