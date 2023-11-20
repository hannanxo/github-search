import React from "react";
import { Flex, Switch, Row, Col, Layout, Typography } from "antd";
import Image from "next/image";
import DarkLogo from "../../public/images/github-mark-white.png";
import LightLogo from "../../public/images/github-mark.png";
import useStyles from "@/hooks/useStyles";
import { useDarkModeContext } from "@/context/DarkModeContext";

const { Text, Link } = Typography;

const Header: React.FC = () => {
  const { Header } = Layout;
  const { styles } = useStyles();
  const { darkMode, dispatch } = useDarkModeContext();

  return (
    <Row gutter={[20, 12]} className={styles.headerOverride}>
      <Col>{darkMode ? <Image src={DarkLogo} alt="" width={35} height={35} /> : <Image src={LightLogo} alt="" width={35} height={35} />}</Col>
      <Header className={styles.headerOverride}>
        <Flex>
          <span className={styles.titleFirst}>
            Github Searcher
            <br />
            <Text className={styles.titleSecond}>Search users or repositories below</Text>
          </span>
        </Flex>
      </Header>
      <Switch checked={darkMode} checkedChildren="Dark" unCheckedChildren="Light" className={styles.switch} onChange={() => dispatch({ type: "TOGGLE_DARK_MODE" })} />
    </Row>
  );
};

export default Header;
