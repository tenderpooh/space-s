import React from "react";
import { CssBaseline } from "@material-ui/core";
import AppProvider from "./context/AppProvider";
import "./App.css";
import Login from "./components/Login";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Nanum Myeongjo', serif",
    fontSize: 12
  },
  palette: {
    secondary: {
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
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        iconVariant={{
          success: "✅",
          error: "✖️",
          warning: "⚠️",
          info: "ℹ️"
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <CssBaseline />
        <AppProvider>
          <Login />
        </AppProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
