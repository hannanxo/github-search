"use client";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "antd-style";
import * as darkTheme from "../ant-tokens/dark.json";
import * as lightTheme from "../ant-tokens/light.json";
import DataDisplayContainer from "@/containers/DataDisplayContainer";
import { useDarkModeContext } from "@/context/DarkModeContext";

const HomePage: React.FC = () => {
  const {
    state: { darkMode },
  } = useDarkModeContext();
  const token = darkMode ? darkTheme : lightTheme;

  return (
    <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>
      <ThemeProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>
        <DataDisplayContainer />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default HomePage;
