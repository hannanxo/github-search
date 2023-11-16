import React, { useRef, useEffect, useState, Key } from "react";
import { Col, Layout, Row } from "antd";
import { useInfiniteQuery } from "react-query";
import { fetchData } from "@/api/GithubApi";
import useDebounce from "@/hooks/useDebounce";
import { LoadingSkeleton } from "@/components/Skeleton";
import SearchInput from "@/components/SearchInput";
import useStyles from "@/hooks/useStyles";
import Header from "@/components/Header";
import RepositoryCard from "@/components/Cards/RepositoryCard";
import UserCard from "@/components/Cards/UserCard";

// const DataDisplayContainer = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
const DataDisplayContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("users");
  const isSearching = searchQuery.length > 0;
  const { styles } = useStyles();
  const debouncedSearch = useDebounce(searchQuery, 500);
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, isError, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["search", searchType, debouncedSearch],
    ({ pageParam = 1 }) => fetchData(searchType, debouncedSearch, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.length === 0 ? null : lastPage?.length + 1;
      },
    }
  );
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [bottomBoundaryRef, fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <Layout className={isSearching ? styles.enabledSearch : styles.layoutWrapper}>
        <div className={styles.headerSpace}>
          <Header />
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchType={searchType} setSearchType={setSearchType} />
        </div>
        <Row gutter={[20, 20]}>
          {isLoading && isSearching && <LoadingSkeleton searchType={searchType} />}
          {isSuccess && isSearching && (
            <>
              {data?.pages.map((page: any[], pageIndex: Key | null | undefined) => (
                <React.Fragment key={pageIndex}>
                  {page.map((item: any, index: Key | null | undefined) => (
                    <Col key={index} xs={page.length > 2 ? 12 : 24} sm={page.length > 2 ? 12 : 24} md={page.length > 2 ? 8 : 24} lg={page.length > 2 ? 8 : 24} xl={page.length > 2 ? 8 : 24}>
                      {searchType === "users" ? <UserCard user={item} /> : <RepositoryCard repository={item} />}
                    </Col>
                  ))}
                </React.Fragment>
              ))}
              <div ref={bottomBoundaryRef}></div>
              {isFetchingNextPage && <LoadingSkeleton searchType={searchType} />}
            </>
          )}
          {isError && isSearching && <div>Error loading data</div>}
        </Row>
      </Layout>
    </>
  );
};

export default DataDisplayContainer;
