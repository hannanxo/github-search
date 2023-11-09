export const fetchData = (searchType: string, searchQuery: string, page: number) => {
  const itemsPerPage = 10; // You can adjust the number of items per page based on your requirements
  const apiUrl = `https://api.github.com/search/${searchType}?q=${searchQuery}&page=${page}&per_page=${itemsPerPage}`;

  if (searchQuery.length >= 3) {
    return fetch(apiUrl, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        return data.items;
      })
      .catch((err) => {
        console.log("Error:", err);
        throw err; // Rethrow the error to be caught by the caller (useInfiniteQuery)
      });
  } else {
    console.log("Less than 3 characters");
    return Promise.resolve([]); // Return an empty array for invalid search queries
  }
};
