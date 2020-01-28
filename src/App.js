import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppProvider from "./context/AppProvider";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppProvider>
        <Login />
      </AppProvider>
    </React.Fragment>
  );
};

export default App;
