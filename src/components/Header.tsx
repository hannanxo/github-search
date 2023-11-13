import React from "react";
import { Flex, Switch, Row, Col, Layout } from "antd";
import Image from "next/image";
import DarkLogo from "../../public/images/github-mark-white.png";
import LightLogo from "../../public/images/github-mark.png";
import useStyles from "@/hooks/useStyles";

const Header = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { Header } = Layout;
  const { styles } = useStyles();

  return (
    <Row gutter={[20, 12]} className={styles.headerOverride}>
      <Col>{darkMode ? <Image src={DarkLogo} alt="" width={35} height={35} /> : <Image src={LightLogo} alt="" width={35} height={35} />}</Col>
      <Header className={styles.headerOverride}>
        <Flex>
          <span className={styles.titleFirst}>
            Github Searcher
            <br />
            <p className={styles.titleSecond}>Search users or repositories below</p>
          </span>
        </Flex>
      </Header>
      <Switch checked={darkMode} checkedChildren="Dark" unCheckedChildren="Light" className={styles.switch} onChange={() => setDarkMode(!darkMode)} />
    </Row>
  );
};

export default Header;
