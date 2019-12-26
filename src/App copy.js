import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import "./App.css";

import Test from "./components/test";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="App">
        <div>
          <header className="App-header">
            <Test />
          </header>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
