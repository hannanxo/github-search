import { useQuery } from "react-query";
import { fetchRepositories } from "@/api/GithubApi";

export const useRepositories = (searchQuery: string) => {
  return useQuery(["repositories", searchQuery], () => fetchRepositories(searchQuery), {
    enabled: !!searchQuery, // Enable the query only if searchQuery is truthy (not empty)
  });
};
