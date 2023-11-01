import { Table } from "antd";

const ListadoDatos = ({ columns, scroll, data }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        key={data?.Id}
        size="small"
        scroll={{ x: scroll }}
        pagination={{ defaultPageSize: "1000", hideOnSinglePage: true }}
      />
    </>
  );
};
export default ListadoDatos;
