import { useQuery } from "react-query";
import { fetchUsers } from "@/api/GithubApi";

export const useUsers = (searchQuery: string) => {
  return useQuery(["users", searchQuery], () => fetchUsers(searchQuery), {
    enabled: !!searchQuery, // Enable the query only if searchQuery is truthy (not empty)
  });
};

// using enabled: !!searchQuery we avoid unnecessary api calls
//  keepPreviousData: true,
// staleTime: 5 * 60 * 1000,
