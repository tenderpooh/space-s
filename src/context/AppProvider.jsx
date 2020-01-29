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
        content: contentTitle,
        menuOpened: false
      };
    });
  };

  const login = id => {
    localStorage.setItem("id", id);
    setState(prevState => {
      return {
        ...prevState,
        isLogined: true,
        user: {
          id: id
        }
      };
    });
  };

  const initialState = {
    menuOpened: false,
    content: "고객 서비스",
    user: null,
    isLogined: false,
    menuToggle,
    contentSelect,
    login
  };

  const [state, setState] = useState(initialState);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
