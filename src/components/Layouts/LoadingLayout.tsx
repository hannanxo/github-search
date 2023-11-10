import { Col, Skeleton } from "antd";

export const LoadingLayout = ({ searchType }: { searchType: string }) => {
  return (
    <>
      {[...Array(100)].map((_, index) => (
        <Col key={index} xs={12} sm={12} md={12} lg={8} xl={8} style={{ margin: "0px" }}>
          {searchType === "users" ? <Skeleton active avatar={{ shape: "circle", size: "large" }} paragraph={{ rows: 1 }} /> : <Skeleton active paragraph={{ rows: 5 }} />}
        </Col>
      ))}
    </>
  );
};
