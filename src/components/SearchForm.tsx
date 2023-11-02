"use client";

import React, { useState } from "react";
import { Input, Select, Spin } from "antd";
import useDebounce from "../hooks/useDebounce";
import { useUsers } from "@/hooks/useUsers";
import { useRepositories } from "@/hooks/useRepositories";

const { Option } = Select;

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("users"); // Default to users search
  const debouncedSearch = useDebounce(search, 500);

  const usersQuery = useUsers(searchType === "users" ? debouncedSearch : "");
  const repositoriesQuery = useRepositories(searchType === "repos" ? debouncedSearch : "");

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSearchTypeChange(value: string) {
    setSearchType(value);
  }

  return (
    <div>
      <Select value={searchType} onChange={handleSearchTypeChange} style={{ marginBottom: "16px" }}>
        <Option value="users">Users</Option>
        <Option value="repos">Repositories</Option>
      </Select>
      <Input id="filter-search" placeholder="Search..." value={search} onChange={handleSearchChange} style={{ marginBottom: "16px" }} />
      {searchType === "users" && usersQuery.isLoading && <Spin />}
      {searchType === "repos" && repositoriesQuery.isLoading && <Spin />}
      {searchType === "users" && usersQuery.data && (
        <ul>
          {usersQuery.data.items.map((user: any) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
      {searchType === "repos" && repositoriesQuery.data && (
        <ul>
          {repositoriesQuery.data.items.map((repo: any) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
