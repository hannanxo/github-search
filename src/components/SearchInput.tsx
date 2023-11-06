import React from "react";
import { Row, Col, Input, Select } from "antd";

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
    <Row gutter={[20, 10]}>
      <Col span={18}>
        <Input style={{ padding: "4.5px 11px" }} placeholder="Start typing to search .." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Col>
      <Col span={3}>
        <Select defaultValue={searchType} onChange={(value) => setSearchType(value)}>
          <Option value="users">Users</Option>
          <Option value="repositories">Repositories</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default SearchInput;
