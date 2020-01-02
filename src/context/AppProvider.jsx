import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const menuToggle = () => {
    setState(prevState => {
      return {
        ...prevState,
        menuOpened: !prevState.menuOpened
      };
    });
  };

  const contentSelect = contentTitle => {
    setState(prevState => {
      return {
        ...prevState,
        content: contentTitle
      };
    });
  };

  const initialState = {
    menuOpened: false,
    content: "main",
    menuToggle,
    contentSelect
  };

  const [state, setState] = useState(initialState);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
