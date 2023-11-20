import React from "react";
import { Avatar, Card, Flex, Space, Typography } from "antd";
import { RepositoryData } from "@/types/Repository";
import Image from "next/image";
import useStyles from "@/hooks/useStyles";
import ForkLightIcon from "../../../public/images/forkLight.png";
import ForkDarkIcon from "../../../public/images/forkDark.png";
import IssueDarkIcon from "../../../public/images/issueDark.png";
import IssueLightIcon from "../../../public/images/issueLight.png";
import { useDarkModeContext } from "@/context/DarkModeContext";

const { Text, Link } = Typography;

const RepositoryCard = ({ repository }: { repository: RepositoryData }) => {
  const { darkMode } = useDarkModeContext();
  const { styles } = useStyles();

  return (
    <Card bodyStyle={{ padding: "0" }}>
      <Flex gap={10} className={styles.repocardHead}>
        <Avatar size={55} src={repository.owner.avatar_url} />
        <Space>
          <Text strong>{repository.full_name}</Text>
        </Space>
      </Flex>

      <Flex flex={1} justify="space-around" align="center" wrap="wrap" style={{ padding: "10px 0px 10px 0px" }}>
        <Flex gap={10} align="center">
          {darkMode ? <Image src={ForkDarkIcon} alt="" width={35} height={35} /> : <Image src={ForkLightIcon} alt="" width={35} height={35} />}
          <Text>{repository.forks_count}</Text>
        </Flex>
        <Flex gap={10} align="center">
          {darkMode ? <Image src={IssueDarkIcon} alt="" width={35} height={35} /> : <Image src={IssueLightIcon} alt="" width={35} height={35} />}
          <Text> {repository.open_issues}</Text>
        </Flex>
        <Flex gap={10} align="center" className={styles.buttonMobile}>
          <Link className={styles.linkButton} href={repository.html_url}>
            <Text className={styles.linkText}>View</Text>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export default RepositoryCard;
