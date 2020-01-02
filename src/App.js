import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppProvider from "./context/AppProvider";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppProvider>
        <Header />
        <div className={classes.root}>
          <SideBar />
          <Content />
        </div>
      </AppProvider>
    </React.Fragment>
  );
};

export default App;
