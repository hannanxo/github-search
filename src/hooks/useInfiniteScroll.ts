import { fetchData } from "@/api/GithubApi";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";

export default function useInfiniteScroll(searchType: string, debouncedSearch: string) {
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, isError, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["search", searchType, debouncedSearch],
    ({ pageParam = 1 }) => fetchData(searchType, debouncedSearch, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return !lastPage?.length ? null : lastPage?.length + 1;
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

  return { data, isLoading, isError, isSuccess, isFetchingNextPage, bottomBoundaryRef };
}
