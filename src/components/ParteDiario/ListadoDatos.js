import { Table } from "antd";

const ListadoDatos = ({ columns, scroll, data, handleDelete }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        key={data.id}
        rowKey={(record) => record.id}
        size="small"
        scroll={{ x: scroll }}
        pagination={{ defaultPageSize: "1000", hideOnSinglePage: true }}
      />
    </>
  );
};
export default ListadoDatos;
