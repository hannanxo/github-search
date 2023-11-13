import React, { Key } from "react";
import { Col } from "antd";
import UserCard from "@/components/Cards/UserCard";
import RepositoryCard from "@/components/Cards/RepositoryCard";
import { LoadingLayout } from "../Layouts/LoadingLayout";
import { InfiniteData } from "react-query";

export const SuccessLayout = ({
  searchType,
  data,
  bottomBoundaryRef,
  isFetchingNextPage,
}: {
  searchType: string;
  data: InfiniteData<any> | undefined;
  bottomBoundaryRef: React.MutableRefObject<HTMLDivElement | null>;
  isFetchingNextPage: Boolean;
}) => {
  return (
    <>
      {data?.pages.map((page: any[], pageIndex: Key | null | undefined) => (
        <React.Fragment key={pageIndex}>
          {page.map((item: any, index: Key | null | undefined) => (
            <Col key={index} xs={12} sm={12} md={8} lg={8} xl={8}>
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
