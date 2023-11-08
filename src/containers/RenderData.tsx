import Card from "antd/es/card/Card";
import { Col } from "antd";
import UserCard from "@/components/UserCard";
import RepositoryCard from "@/components/RepositoryCard";
import { useQuery, useInfiniteQuery } from "react-query";
import { fetchData } from "@/api/GithubApi";
import useDebounce from "@/hooks/useDebounce";
import { Key } from "react";
import React, { useRef, useCallback, useEffect } from "react";

const RenderData = ({ searchType, searchQuery }: { searchType: string; searchQuery: string }): any => {
  const debouncedSearch = useDebounce(searchQuery, 500);
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, isError, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["search", searchType, debouncedSearch],
    ({ pageParam = 1 }) => fetchData(searchType, debouncedSearch, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.length === 0 ? null : lastPage.length + 1;
      },
    }
  );

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 } // The callback will be triggered when the bottomBoundaryRef is fully visible
    )
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
      observer.observe(bottomBoundaryRef.current as HTMLDivElement); // Cast the ref object to HTMLDivElement
    }

    return () => {
      observer.disconnect();
    };
  }, [bottomBoundaryRef, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isSuccess) {
    return (
      <>
        {data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((item: any, index: Key | null | undefined) => (
              <Col key={index} xs={12} sm={12} md={12} lg={8} xl={8} style={{ margin: "0px" }}>
                {searchType === "users" ? <UserCard user={item} /> : <RepositoryCard repository={item} />}
              </Col>
            ))}
          </React.Fragment>
        ))}
        <div ref={bottomBoundaryRef}></div>
      </>
    );
  }
};

export default RenderData;
