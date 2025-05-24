import { Button, Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";
import Tables from "./components/table";
import { useState, useMemo, useRef } from "react";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const App = () => {
  const [form, setForm] = useState({ id: null, name: "", age: 0 });
  const hells = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [serch, setSearch] = useState("");
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    setSearch(value);
    setTimeout(() => {
      tableRef.current?.refresh();
    });
  };
  const tableRef = useRef(null);
  const addEventListener = () => {
    console.log({ ...form, id: Date.now() });
    tableRef.current?.refresh();
  };
  const tablesMemo = useMemo(() => {
    return <Tables serch={serch} ref={tableRef} form={form} />;
  }, [form, serch]);
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Space>
      <div>
        <Input
          placeholder="Basic usage"
          onChange={hells}
          name="name"
          style={{ width: 200 }}
        />
        <Input
          onChange={hells}
          name="age"
          type="number"
          placeholder="Basic usage"
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={() => addEventListener()}>
          添加
        </Button>
      </div>
      <div>{tablesMemo}</div>
    </div>
  );
};
export default App;
