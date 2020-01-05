import React, { useContext } from "react";
import { Box, Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../context/AppProvider";
import route from "../route/Route";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

const Content = () => {
  const classes = useStyles();
  const { content } = useContext(AppContext);
  const arr = route.find(el => el.text === content);
  const { component } = arr;

  return (
    <div className={classes.content}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
            {content}
          </Box>
          <Divider />
        </Grid>
        {component}
      </Grid>
    </div>
  );
};

export default Content;
