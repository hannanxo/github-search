export const fetchUsers = async (searchQuery: string) => {
  if (searchQuery.length >= 3) {
    const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    });
    return response.json();
  }
};

export const fetchRepositories = async (searchQuery: string) => {
  if (searchQuery.length >= 3) {
    const response = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    });
    return response.json();
  }
};
