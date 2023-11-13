import { Col, Skeleton } from "antd";

export const LoadingLayout = ({ searchType }: { searchType: string }) => {
  return (
    <>
      {[...Array(100)].map((_, index) => (
        <Col key={index} xs={12} sm={12} md={12} lg={8} xl={8} style={{ margin: "0px" }}>
          {searchType === "users" ? (
            <Skeleton active avatar={{ shape: "circle", size: "large" }} paragraph={{ rows: 1 }} style={{ backgroundColor: "#80808017", padding: "14px" }} />
          ) : (
            <Skeleton active avatar={{ shape: "circle", size: "large" }} paragraph={{ rows: 5 }} style={{ backgroundColor: "#80808017", padding: "14px" }} />
          )}
        </Col>
      ))}
    </>
  );
};
