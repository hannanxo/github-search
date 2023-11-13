"use client";
import React, { useState } from "react";
import { Layout, ConfigProvider, theme, Row } from "antd";
import { ThemeProvider } from "antd-style";
import { useDarkMode } from "@/hooks/useTheme";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import RenderData from "@/containers/DataDisplayContainer";
import * as darkTheme from "../ant-tokens/dark.json";
import * as lightTheme from "../ant-tokens/light.json";
import useStyles from "@/hooks/useStyles";

const HomePage = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const token = darkMode ? darkTheme : lightTheme;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("users");
  const isSearching = searchQuery.length > 0;
  const { styles } = useStyles();

  return (
    <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>
      <ThemeProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm, token }}>
        <Layout className={isSearching ? styles.enabledSearch : styles.layoutWrapper}>
          <div className={styles.headerSpace}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType} setSearchType={setSearchType} />
          </div>
          {isSearching && (
            <Row gutter={[20, 20]}>
              <RenderData searchType={searchType} searchQuery={searchQuery} />
            </Row>
          )}
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default HomePage;
