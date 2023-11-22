import React from "react";
import { Avatar, Card, Flex, Space, Typography, theme } from "antd";
import { RepositoryData } from "@/types/Repository";
import useStyles from "@/hooks/useStyles";
import { ExclamationCircleOutlined, ForkOutlined } from "@ant-design/icons";

const { Text, Link } = Typography;

const RepositoryCard = ({ repository }: { repository: RepositoryData }) => {
  const { styles } = useStyles();

  return (
    <Card bodyStyle={{ padding: "0" }}>
      <Flex gap={10} className={styles.repocardHead}>
        <Avatar size={55} src={repository.owner.avatar_url} />
        <Space>
          <Text strong>{repository.full_name}</Text>
        </Space>
      </Flex>

      <Flex
        flex={1}
        justify="space-around"
        align="center"
        wrap="wrap"
        style={{ padding: "10px 0px 10px 0px" }}
      >
        <Flex gap={10} align="center">
          <ForkOutlined className={styles.icon} />
          <Text>{repository.forks_count}</Text>
        </Flex>
        <Flex gap={10} align="center">
          <ExclamationCircleOutlined className={styles.icon} />
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
