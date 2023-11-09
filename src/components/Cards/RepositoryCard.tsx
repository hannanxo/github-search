import React from "react";
import { Card, Typography } from "antd";
import { RepositoryData } from "@/types/Repository";
import styles from "../../styles/RepositoryCard.module.css";

const { Text } = Typography;

const RepositoryCard = ({ repository }: { repository: RepositoryData }) => {
  return (
    <Card className={styles.card} title={repository.name}>
      <Text className={styles.text}>
        <span className={styles.heading}>Description:</span>
        <br />
        {repository.description ? repository.description : "Description not available"}
      </Text>
      <br />

      <Text className={styles.text}>
        <span className={styles.heading}>Language:</span>
        <br />
        {repository.language ? repository.language : "Language not available"}
      </Text>
      <br />

      <Text className={styles.text}>
        <span className={styles.heading}>Forks: </span>
        <br />
        {repository.forks_count}
      </Text>
      <br />

      <Text className={styles.text}>
        <span className={styles.heading}>Open issues: </span>
        <br />
        {repository.open_issues}
      </Text>
    </Card>
  );
};

export default RepositoryCard;
