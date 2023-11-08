import React from "react";
import { Row, Col, Input, Select } from "antd";
import "../styles/SearchInput.css";

const { Option } = Select;

const SearchInput = ({
  searchQuery,
  setSearchQuery,
  searchType,
  setSearchType,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchType: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Row gutter={[20, 12]} className="input-field">
      <Col span={19}>
        <Input className="input-field" placeholder="Start typing to search .." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Col>
      <Col span={1} className="dropdown">
        <Select defaultValue={searchType} onChange={(value) => setSearchType(value)}>
          <Option value="users">Users</Option>
          <Option value="repositories">Repositories</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default SearchInput;
