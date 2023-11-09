import React from "react";
import { Col } from "antd";
import { Key } from "react";
import UserCard from "@/components/Cards/UserCard";
import RepositoryCard from "@/components/Cards/RepositoryCard";
import { LoadingLayout } from "../Layouts/LoadingLayout";

export const SuccessLayout = ({ searchType, data, bottomBoundaryRef, isFetchingNextPage }: { searchType: string; data: any; bottomBoundaryRef: any; isFetchingNextPage: Object }) => {
  return (
    <>
      {data.pages.map((page: any[], pageIndex: Key | null | undefined) => (
        <React.Fragment key={pageIndex}>
          {page.map((item: any, index: Key | null | undefined) => (
            <Col key={index} xs={12} sm={12} md={12} lg={8} xl={8} style={{ margin: "0px" }}>
              {searchType === "users" ? <UserCard user={item} /> : <RepositoryCard repository={item} />}
            </Col>
          ))}
        </React.Fragment>
      ))}
      <div ref={bottomBoundaryRef}></div>
      {isFetchingNextPage && <LoadingLayout searchType={searchType} />}
    </>
  );
};
