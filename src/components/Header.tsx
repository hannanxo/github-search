import React from "react";
import { Flex, Switch, Row, Col, Layout } from "antd";
import Image from "next/image";
import DarkLogo from "../../public/images/github-mark-white.png";
import LightLogo from "../../public/images/github-mark.png";

const Header = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { Header } = Layout;

  return (
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
  );
};

export default Header;
