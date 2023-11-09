import React, { useRef, useEffect } from "react";

import { useQuery, useInfiniteQuery } from "react-query";
import { fetchData } from "@/api/GithubApi";
import useDebounce from "@/hooks/useDebounce";
import { Key } from "react";
import { LoadingLayout } from "@/components/Layouts/LoadingLayout";
import { SuccessLayout } from "@/components/Layouts/SuccessLayout";

const RenderData = ({ searchType, searchQuery }: { searchType: string; searchQuery: string }) => {
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

  console.log("TYPES", typeof bottomBoundaryRef);
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

  if (isLoading) {
    return <LoadingLayout searchType={searchType} />;
  }

  if (isSuccess) {
    return <SuccessLayout searchType={searchType} data={data} bottomBoundaryRef={bottomBoundaryRef} isFetchingNextPage={isFetchingNextPage} />;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  // not working
  if (!data) {
    <div>Data not available</div>;
  }
  return null;
};

export default RenderData;
