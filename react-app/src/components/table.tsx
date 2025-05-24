import { useState, forwardRef, useImperativeHandle } from "react";
import {Table, Button } from "antd";
interface FormProps {
  id: number | null;
  name: string;
  age: number;
}
type TableProps = {
  form: FormProps;
  serch: string;
};
export interface TableRef {
  refresh: () => void;
}
const App = forwardRef<TableRef, TableProps>((props, ref) => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
    },
    {
      key: "2",
      name: "8祖",
      age: 42,
    },
  ]);
  const deletes = (key: string) => {
    setDataSource((prev) => prev.filter((item) => item.key !== key));
  };

  const column = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a onClick={() => namess()}>{text}</a>,
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "操作",
      key: "key",
      render: (text, record) => {
        return (
          <div>
            <Button size="small" style={{ marginRight: 20 }} type="primary">
              更新
            </Button>
            <Button
              onClick={() => deletes(record.key)}
              size="small"
              type="primary"
            >
              删除
            </Button>
          </div>
        );
      },
    },
  ];
  useImperativeHandle(ref, () => ({
    refresh(): void {
      if (props.form.age !== 0 && props.form.name != "") {
        setDataSource((perv) => [...perv, { ...props.form, id: Date.now() }]);
      } else {
        if (props.serch === "") {
          setDataSource((perv) => [...perv]);
        } else {
          setDataSource((perv) =>
            perv.filter((item) => item.name.includes(props.serch))
          );
        }
      }
    },
  }));

  return (
    <div>
      <Table dataSource={dataSource} columns={column} />
    </div>
  );
});

export default App
