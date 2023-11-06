"use client";

import React, { useState } from "react";
import { Row, Col, Input, Switch, Select, Layout, ConfigProvider, theme, Flex } from "antd";
import themeConfig from "@/styles/Theme";
import Image from "next/image";
import DarkLogo from "../../public/images/github-mark-white.png";
import LightLogo from "../../public/images/github-mark.png";
import { useDarkMode } from "@/hooks/useTheme";
import useDebounce from "@/hooks/useDebounce";
import { useUsers } from "@/hooks/useUsers";
import { useRepositories } from "@/hooks/useRepositories";

const { Option } = Select;

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const YourPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("users");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const usersQuery = useUsers(searchType === "users" ? debouncedSearch : "");
  const repositoriesQuery = useRepositories(searchType === "repos" ? debouncedSearch : "");
  const [darkMode, setDarkMode] = useDarkMode();
  const { Header } = Layout;

  return (
    <ConfigProvider theme={{ ...themeConfig, algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Layout style={layoutStyle}>
        <div>
          <Row gutter={[20, 12]}>
            <Col>{darkMode ? <Image src={DarkLogo} alt="" width={45} height={45} /> : <Image src={LightLogo} alt="" width={45} height={45} />}</Col>
            <Header style={{ padding: "0px", background: "none" }}>
              <Flex>
                <span style={{ lineHeight: "80%", fontWeight: "700", fontSize: "18px" }}>
                  Github Searcher
                  <br />
                  <p style={{ fontWeight: "100", fontSize: "14px", color: "grey" }}>Search users or repositories below</p>
                </span>
              </Flex>
            </Header>
            <Switch checked={darkMode} checkedChildren="Dark" unCheckedChildren="Light" onChange={() => setDarkMode(!darkMode)} />
          </Row>

          <Row gutter={[20, 10]}>
            <Col span={18}>
              <Input style={{ padding: "4.5px 11px" }} placeholder="Start typing to search .." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </Col>
            <Col span={3}>
              <Select defaultValue="users" onChange={(value) => setSearchType(value)}>
                <Option value="users">Users</Option>
                <Option value="repositories">Repositories</Option>
              </Select>
            </Col>
          </Row>
        </div>
      </Layout>
    </ConfigProvider>
  );
};

export default YourPage;
