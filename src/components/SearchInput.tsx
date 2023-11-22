import React from "react";
import { Row, Col, Input, Select } from "antd";
import useStyles from "@/hooks/useStyles";

const { Option } = Select;

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchType: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  setSearchQuery,
  searchType,
  setSearchType,
}) => {
  const { styles } = useStyles();
  return (
    <Row gutter={[20, 12]}>
      <Col span={19}>
        <Input
          placeholder="Start typing to search .."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Col>
      <Col span={1} className={styles.dropDown}>
        <Select
          defaultValue={searchType}
          onChange={(value) => setSearchType(value)}
        >
          <Option value="users">Users</Option>
          <Option value="repositories">Repos</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default SearchInput;
