import React, { useContext, useState, useEffect } from "react";
import { Container, TextField, makeStyles, Button } from "@material-ui/core";
import { AppContext } from "../context/AppProvider";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";

import { confirmLogin } from "../backend/utils";
import DataProvider from "../backend/DataProvider";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  input: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem"
  }
}));

export default function Login() {
  const classes = useStyles();
  const { isLogined, login } = useContext(AppContext);
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [loginResult, setLoginResult] = useState(["", false]);

  const handleInput = e => {
    switch (e.currentTarget.getAttribute("name")) {
      case "idInput":
        setIdInput(e.currentTarget.value);
        break;
      case "pwInput":
        setPwInput(e.currentTarget.value);
        break;
      default:
    }
  };

  const handleLogin = () => {
    confirmLogin(idInput, pwInput).then(result => {
      setLoginResult(result);
      result[1] && login(idInput);
    });
  };

  useEffect(() => {
    const currentId = localStorage.getItem("id");
    if (currentId) {
      login(currentId);
    }
  }, [login]);

  return isLogined ? (
    <DataProvider>
      <Header />
      <div className={classes.root}>
        <SideBar />
        <Content />
      </div>
    </DataProvider>
  ) : (
    <div className={classes.root}>
      <Container>
        <TextField
          label="아이디"
          variant="outlined"
          className={classes.input}
          value={idInput}
          onChange={handleInput}
          name="idInput"
          autoFocus
          fullWidth
          error={loginResult[0].length > 1}
        />
        <TextField
          label="비밀번호"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          value={pwInput}
          onChange={handleInput}
          name="pwInput"
          className={classes.input}
          fullWidth
          error={loginResult[0].length > 1}
          helperText={loginResult[0]}
        />
        <Button
          label="비밀번호"
          autoComplete="current-password"
          variant="contained"
          color="primary"
          className={classes.input}
          onClick={handleLogin}
          size="large"
          fullWidth
        >
          로그인
        </Button>
      </Container>
    </div>
  );
}
