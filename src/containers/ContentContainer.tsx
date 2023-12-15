import React, { useState, Key } from "react";
import { Alert, Col, Empty, Layout, Row, Space } from "antd";
import useDebounce from "@/hooks/useDebounce";
import { fetchData } from "@/api/GithubApi";
import { LoadingSkeleton } from "@/components/Skeleton";
import SearchInput from "@/components/SearchInput";
import useStyles from "@/hooks/useStyles";
import Header from "@/components/Header";
import RepositoryCard from "@/components/Cards/RepositoryCard";
import UserCard from "@/components/Cards/UserCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { UserData } from "@/types/User";
import { RepositoryData } from "@/types/Repository";
import { useInfiniteQuery } from "react-query";

const ContentContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("users");
  const isSearching = searchQuery.length > 0;
  const { styles } = useStyles();
  const debouncedSearch = useDebounce(searchQuery, 500);
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["search", searchType, debouncedSearch],
    ({ pageParam = 1 }) => fetchData(searchType, debouncedSearch, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage && lastPage.length > 0) {
          return allPages.length + 1;
        }
        return null;
      },
    }
  );

  const { bottomBoundaryRef } = useInfiniteScroll(
    () => hasNextPage && !isFetchingNextPage && fetchNextPage()
  );

  const inputLength = debouncedSearch.length >= 3;
  return (
    <React.Fragment>
      <Layout
        className={isSearching ? styles.enabledSearch : styles.layoutWrapper}
      >
        <div className={styles.headerSpace}>
          <Header />
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchType={searchType}
            setSearchType={setSearchType}
          />
        </div>
        <Row className={styles.contentPadding} gutter={[16, 16]}>
          {isLoading && isSearching && (
            <LoadingSkeleton searchType={searchType} />
          )}
          {isSuccess && isSearching && (
            <React.Fragment>
              {data?.pages.map((page, pageIndex: Key | null | undefined) => (
                <React.Fragment key={pageIndex}>
                  {page.map((item, index: Key | null | undefined) => (
                    <Col key={index} xs={12} sm={12} md={8} lg={8} xl={8}>
                      {searchType === "users" ? (
                        <UserCard user={item as UserData} />
                      ) : (
                        <RepositoryCard repository={item as RepositoryData} />
                      )}
                    </Col>
                  ))}
                </React.Fragment>
              ))}
              {inputLength && data?.pages[0].length === 0 && (
                <Space className={styles.noData}>
                  <Empty />
                </Space>
              )}
              <div ref={bottomBoundaryRef}></div>
              {isFetchingNextPage && (
                <LoadingSkeleton searchType={searchType} />
              )}
            </React.Fragment>
          )}

          {isError && isSearching && (
            <Alert
              className={styles.errorMsg}
              message="Error"
              description="There was error while fetching the results"
              type="error"
              showIcon
            />
          )}
        </Row>
      </Layout>
    </React.Fragment>
  );
};

export default ContentContainer;
