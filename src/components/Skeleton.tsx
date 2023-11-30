import { Col, Skeleton } from "antd";
import React from "react";

export const LoadingSkeleton = ({ searchType }: { searchType: string }) => {
  return (
    <React.Fragment>
      {[...Array(100)].map((_, index) => (
        <Col
          key={index}
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{ margin: "0px" }}
        >
          {searchType === "users" ? (
            <Skeleton
              active
              avatar={{ shape: "circle", size: "large" }}
              paragraph={{ rows: 1 }}
              style={{ backgroundColor: "#80808017", padding: "25px" }}
            />
          ) : (
            <Skeleton
              active
              avatar={{ shape: "circle", size: "large" }}
              paragraph={{ rows: 1 }}
              style={{ backgroundColor: "#80808017", padding: "25px" }}
            />
          )}
        </Col>
      ))}
    </React.Fragment>
  );
};
