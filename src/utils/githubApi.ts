import axios from "axios";

const BASE_URL = "https://api.github.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchSearchResults = async (query: string, entityType: string) => {
  const response = await api.get(`/search/${entityType}?q=${query}`);
  return response.data.items;
};
