"use client";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "antd-style";
import * as darkTheme from "../ant-tokens/dark.json";
import * as lightTheme from "../ant-tokens/light.json";
import ContentContainer from "@/containers/ContentContainer";
import NextTopLoader from "nextjs-toploader";

import { useDarkModeContext } from "@/context/DarkModeContext";

const HomePage: React.FC = () => {
  const { darkMode } = useDarkModeContext();
  const token = darkMode ? darkTheme : lightTheme;

  return (
    <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>
      <ThemeProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>
        <NextTopLoader color={darkMode ? "#b21900" : "#3399ff"} showSpinner={false} initialPosition={0.8} crawlSpeed={50} speed={50} />
        <ContentContainer />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default HomePage;
