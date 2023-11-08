import React from "react";
import { Card, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { UserData } from "../types/User";
import styles from "../styles/UserCard.module.css";

const { Text } = Typography;

const UserCard = ({ user }: { user: UserData }) => {
  return (
    <Card className={`${styles.userCard} noPaddingCard`} cover={<Avatar size={55} src={user.avatar_url} />}>
      <Text className={styles.userText}>{user.login}</Text>
    </Card>
  );
};

export default UserCard;
