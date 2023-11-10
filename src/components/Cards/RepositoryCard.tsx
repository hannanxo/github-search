import React from "react";
import { Avatar, Card, Typography } from "antd";
import { RepositoryData } from "@/types/Repository";
import styles from "../../styles/RepositoryCard.module.css";

const { Text, Link } = Typography;

const RepositoryCard = ({ repository }: { repository: RepositoryData }) => {
  return (
    <Card bodyStyle={{ padding: "0" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", borderBottom: "#80808070 solid 1px", padding: "8px" }}>
        <Avatar size={64} src={repository.owner.avatar_url} />
        <div style={{ marginLeft: "10px" }}>
          <Text strong>{repository.full_name}</Text>
        </div>
      </div>

      <div style={{ lineHeight: "2.5", padding: "0 24px 18px 24px" }}>
        <Text>Description: {repository.description ? repository.description : "Not found"}</Text>
        <br />
        <Text>Language: {repository.language ? repository.language : "Not found"}</Text>
        <br />

        <Text>Forks: {repository.forks_count}</Text>
        <br />

        <Text>Open Issues: {repository.open_issues}</Text>
        <br />

        <Link
          style={{
            display: "inline-block",
            padding: "8px 16px",
            backgroundColor: "rgb(50 112 225)",
            marginTop: "4px",
            color: "#fff",
            borderRadius: "4px",
            textDecoration: "none",
          }}
          href={repository.owner.html_url}
        >
          Owner's Profile
        </Link>
      </div>
    </Card>
  );
};

export default RepositoryCard;
