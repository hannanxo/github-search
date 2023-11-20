import React from "react";
import { Card, Avatar, Typography, Space } from "antd";
import { UserData } from "../../types/User";
import Link from "next/link";
import useStyles from "@/hooks/useStyles";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const UserCard = ({ user }: { user: UserData }) => {
  const { styles } = useStyles();

  return (
    <Card bodyStyle={{ padding: "0" }}>
      <Space className={styles.userCardHead}>
        <Space>
          <Avatar size={55} src={user.avatar_url} />
          <Text>{user.login}</Text>
        </Space>
      </Space>
      <Space className={styles.usercardContent}>
        <Text strong>
          <UserOutlined style={{ marginRight: "8px" }} />
          {user.type}
        </Text>
        <Link className={styles.linkButton} href={user.html_url}>
          <Text className={styles.linkText}>View</Text>
        </Link>
      </Space>
    </Card>
  );
};

export default UserCard;
