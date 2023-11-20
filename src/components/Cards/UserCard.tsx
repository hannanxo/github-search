import React from "react";
import { Card, Avatar, Typography, Space, Flex } from "antd";
import { UserData } from "../../types/User";
import Link from "next/link";
import useStyles from "@/hooks/useStyles";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const UserCard = ({ user }: { user: UserData }) => {
  const { styles } = useStyles();

  return (
    <Card bodyStyle={{ padding: "0" }}>
      <Flex className={styles.userCardHead}>
        <Space>
          <Avatar size={55} src={user.avatar_url} />
          <Text>{user.login}</Text>
        </Space>
      </Flex>
      <Flex flex={1} justify="space-around" align="center" wrap="wrap" style={{ padding: "10px 0px 10px 0px" }}>
        <Flex>
          <Text strong>
            <UserOutlined style={{ marginRight: "8px" }} />
            {user.type === "Organization" ? "Org" : user.type}
          </Text>
        </Flex>
        <Flex>
          <Link className={styles.linkButton} href={user.html_url}>
            <Text className={styles.linkText}>View</Text>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export default UserCard;
