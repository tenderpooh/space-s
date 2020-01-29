import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppProvider from "./context/AppProvider";
import "./App.css";
import Login from "./components/Login";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Nanum Myeongjo', serif",
    fontSize: 12
  },
  palette: {
    primary: {
      main: "#222232"
    },
    type: "dark",
    background: {
      default: "#05060a",
      paper: "#1e1e1e"
    }
  }
});

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <Login />
        </AppProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
