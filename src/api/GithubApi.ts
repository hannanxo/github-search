import { RepositoryData } from "@/types/Repository";
import { UserData } from "@/types/User";

export const fetchData = async (
  searchType: string,
  searchQuery: string,
  page: number
): Promise<UserData[] | RepositoryData[]> => {
  const itemsPerPage = 10;
  const apiUrl = `https://api.github.com/search/${searchType}?q=${searchQuery}&page=${page}&per_page=${itemsPerPage}`;

  if (searchQuery.length < 3) {
    console.log("Less than 3 characters");
    return Promise.resolve([]);
  }

  try {
    const res = await fetch(apiUrl, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data.items;
  } catch (err) {
    console.log("Error:", err);
    throw err;
  }
};
