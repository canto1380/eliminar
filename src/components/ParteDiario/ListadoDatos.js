import { Table } from "antd";

const ListadoDatos = ({ columns, scroll, data, handleDelete }) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        style={{
          fontSize: 10,
        }}
        // key={data?.id}
        rowKey={(record) => `${record?.FechaParte} ${record?.IngenioNombre} ${record?.id} ${record?.anio}`}
        size="small"
        scroll={{ x: scroll, y: 600 }}
        pagination={{ defaultPageSize: "1000", hideOnSinglePage: true }}
      />
    </>
  );
};
export default ListadoDatos;
