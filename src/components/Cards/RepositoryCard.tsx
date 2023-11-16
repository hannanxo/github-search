import React from "react";
import { Avatar, Card, Space, Typography } from "antd";
import { RepositoryData } from "@/types/Repository";
import useStyles from "@/hooks/useStyles";

const { Text, Link } = Typography;

interface RepositoryCardProps {
  repository: RepositoryData;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  const { styles } = useStyles();

  return (
    <Card bodyStyle={{ padding: "0" }}>
      <Space className={styles.repocardHead}>
        <Avatar size={64} src={repository.owner.avatar_url} />
        <Space style={{ marginLeft: "10px" }}>
          <Text strong>{repository.full_name}</Text>
        </Space>
      </Space>
      <Space style={{ padding: "24px 8px 22px 24px" }}>
        <Space className={styles.repocardContent}>
          <Text>Description: {repository.description ? repository.description : "Not found"}</Text>
          <br />
          <Text>Language: {repository.language ? repository.language : "Not found"}</Text>
          <br />

          <Text>Forks: {repository.forks_count}</Text>
          <br />

          <Text>Open Issues: {repository.open_issues}</Text>
          <br />
          <Link className={styles.linkButton} href={repository.html_url}>
            <Text className={styles.linkText}>View Repo</Text>
          </Link>
        </Space>
      </Space>
    </Card>
  );
};

export default RepositoryCard;
