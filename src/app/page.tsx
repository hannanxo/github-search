"use client";

import React, { useState } from "react";
import { Layout, ConfigProvider, theme, Flex } from "antd";
import themeConfig from "@/styles/Theme";
import { useDarkMode } from "@/hooks/useTheme";
import useDebounce from "@/hooks/useDebounce";
import { useUsers } from "@/hooks/useUsers";
import { useRepositories } from "@/hooks/useRepositories";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";

const HomePage = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("users");
  const debouncedSearch = useDebounce(searchQuery, 500);
  // const usersQuery = useUsers(searchType === "users" ? debouncedSearch : "");
  // const repositoriesQuery = useRepositories(searchType === "repos" ? debouncedSearch : "");

  return (
    <ConfigProvider theme={{ ...themeConfig, algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Layout className="layout-antd-wrapper">
        <div>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType} setSearchType={setSearchType} />
        </div>
      </Layout>
    </ConfigProvider>
  );
};

export default HomePage;
