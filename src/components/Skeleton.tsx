import { Col, Skeleton } from "antd";

interface LoadingSkeletonProps {
  searchType: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ searchType }) => {
  return (
    <>
      {[...Array(100)].map((_, index) => (
        <Col key={index} xs={12} sm={12} md={8} lg={8} xl={8} style={{ margin: "0px" }}>
          {searchType === "users" ? (
            <Skeleton active avatar={{ shape: "circle", size: "large" }} paragraph={{ rows: 1 }} style={{ backgroundColor: "#80808017", padding: "32px" }} />
          ) : (
            <Skeleton active avatar={{ shape: "circle", size: "large" }} paragraph={{ rows: 5 }} style={{ backgroundColor: "#80808017", padding: "14px" }} />
          )}
        </Col>
      ))}
    </>
  );
};
