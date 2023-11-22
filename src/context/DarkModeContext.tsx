import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "antd-style";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import * as darkTheme from "../ant-tokens/dark.json";
import * as lightTheme from "../ant-tokens/light.json";

type DarkModeAction = {
  type: "TOGGLE_DARK_MODE";
};

type DarkModeContextProps = {
  darkMode: boolean;
  dispatch: React.Dispatch<DarkModeAction>;
};

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

const darkModeReducer = (state: boolean, action: DarkModeAction): boolean => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      const newDarkMode = !state;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    default:
      return state;
  }
};

const DarkModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialState: boolean = storedDarkMode ? JSON.parse(storedDarkMode) : false;
  const [darkMode, dispatch] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const contextValue: DarkModeContextProps = { darkMode, dispatch };
  const token = darkMode ? darkTheme : lightTheme;

  return (
    <DarkModeContext.Provider value={contextValue}>
      <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>
        <ThemeProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>{children}</ThemeProvider>
      </ConfigProvider>
    </DarkModeContext.Provider>
  );
};

const useDarkModeContext = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkModeContext must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkModeContext };
