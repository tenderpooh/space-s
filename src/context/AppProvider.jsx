import React, { useState, createContext } from "react";

export const AppContext = createContext();

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
    content: "우주선 조립/분해",
    menuToggle,
    contentSelect
  };

  const [state, setState] = useState(initialState);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
