"use client";

import React, { useState } from "react";
import { Layout, ConfigProvider, theme, Flex, Row } from "antd";
import themeConfig from "@/styles/Theme";
import { useDarkMode } from "@/hooks/useTheme";
import useDebounce from "@/hooks/useDebounce";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import RenderData from "@/containers/RenderData";

const HomePage = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("users");
  const isSearching = searchQuery.length > 0;

  return (
    <ConfigProvider theme={{ ...themeConfig, algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Layout className={`${isSearching ? "searching" : "layout-antd-wrapper "}`}>
        <div>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType} setSearchType={setSearchType} />
        </div>
        <Row gutter={[20, 20]} style={{ margin: "24px -15px" }}>
          <RenderData searchType={searchType} searchQuery={searchQuery} />
        </Row>
      </Layout>
    </ConfigProvider>
  );
};

export default HomePage;
