import React, { useState, Key } from "react";
import { Alert, Col, Empty, Layout, Row, Space } from "antd";
import useDebounce from "@/hooks/useDebounce";
import { LoadingSkeleton } from "@/components/Skeleton";
import SearchInput from "@/components/SearchInput";
import useStyles from "@/hooks/useStyles";
import Header from "@/components/Header";
import RepositoryCard from "@/components/Cards/RepositoryCard";
import UserCard from "@/components/Cards/UserCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const ContentContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("users");
  const isSearching = searchQuery.length > 0;
  const { styles } = useStyles();
  const debouncedSearch = useDebounce(searchQuery, 500);
  const { data, isLoading, isError, isSuccess, isFetchingNextPage, bottomBoundaryRef } = useInfiniteScroll(searchType, debouncedSearch);
  return (
    <React.Fragment>
      <Layout className={isSearching ? styles.enabledSearch : styles.layoutWrapper}>
        <div className={styles.headerSpace}>
          <Header />
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType} setSearchType={setSearchType} />
        </div>
        <Row style={{ width: "100%", margin: "0" }} gutter={[16, 16]}>
          {isLoading && isSearching && <LoadingSkeleton searchType={searchType} />}
          {isSuccess && isSearching && (
            <React.Fragment>
              {data?.pages.map((page: any[], pageIndex: Key | null | undefined) => (
                <React.Fragment key={pageIndex}>
                  {page.map((item: any, index: Key | null | undefined) => (
                    <Col key={index} xs={12} sm={12} md={8} lg={8} xl={8}>
                      {searchType === "users" ? <UserCard user={item} /> : <RepositoryCard repository={item} />}
                    </Col>
                  ))}
                </React.Fragment>
              ))}
              {debouncedSearch.length >= 3 && data?.pages.length === 1 && data.pages[0].length === 0 && !isFetchingNextPage && (
                <Space className={styles.noData}>
                  {" "}
                  <Empty />
                </Space>
              )}
              <div ref={bottomBoundaryRef}></div>
              {isFetchingNextPage && <LoadingSkeleton searchType={searchType} />}
            </React.Fragment>
          )}

          {isError && isSearching && <Alert className={styles.errorMsg} message="Error" description="There was error while fetching the results" type="error" showIcon />}
        </Row>
      </Layout>
    </React.Fragment>
  );
};

export default ContentContainer;
