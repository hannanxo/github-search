import React from "react";
import { Flex, Switch, Row, Col, Layout } from "antd";
import Image from "next/image";
import DarkLogo from "../../public/images/github-mark-white.png";
import LightLogo from "../../public/images/github-mark.png";
import "../styles/Header.css";

const Header = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { Header } = Layout;

  return (
    <Row gutter={[20, 12]}>
      <Col>{darkMode ? <Image src={DarkLogo} alt="" width={45} height={45} /> : <Image src={LightLogo} alt="" width={45} height={45} />}</Col>
      <Header className="header-wrapper">
        <Flex>
          <span className="text-one">
            Github Searcher
            <br />
            <p className="text-two">Search users or repositories below</p>
          </span>
        </Flex>
      </Header>
      <Switch checked={darkMode} checkedChildren="Dark" unCheckedChildren="Light" onChange={() => setDarkMode(!darkMode)} />
    </Row>
  );
};

export default Header;
