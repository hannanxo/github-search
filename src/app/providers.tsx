"use client";

import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "antd-style";
import React, { useEffect, useState } from "react";
import * as darkTheme from "../ant-tokens/dark.json";
import * as lightTheme from "../ant-tokens/light.json";
import { IThemeContext, ThemeContext } from "@/context/ThemeContext";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialState: boolean = storedDarkMode
    ? JSON.parse(storedDarkMode)
    : false;
  const [darkMode, setDarkMode] = useState(initialState);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const contextValue: IThemeContext = { darkMode, toggleTheme };
  const token = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token,
        }}
      >
        <ThemeProvider
          theme={{
            algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token,
          }}
        >
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default Providers;
