import React from "react";
import { Card, Avatar, Typography } from "antd";
import { UserData } from "../../types/User";
import styles from "../../styles/UserCard.module.css";
import Link from "next/link";

const { Text } = Typography;

const UserCard = ({ user }: { user: UserData }) => {
  return (
    <Card bodyStyle={{ display: "flex", alignItems: "center", padding: "10px" }}>
      <div style={{ marginRight: "10px" }}>
        <Avatar size={50} src={user.avatar_url} />
      </div>
      <div style={{ flex: 1 }}>
        <Text>{user.login}</Text>
      </div>
      <div>
        <Link href={user.html_url}>View</Link>
      </div>
    </Card>
  );
};

export default UserCard;
