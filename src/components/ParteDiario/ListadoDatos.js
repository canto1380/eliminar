import { Table } from "antd";
import { columns } from "./ColumnasTablaListadoDatos";
import { useEffect, useState } from "react";

const ListadoDatos = ({ data }) => {
  
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        key={data?.Id}
        size="small"
        scroll={{ x: 2000 }}
        pagination={{ defaultPageSize: "1000", hideOnSinglePage: true }}
      />
    </>
  );
};
export default ListadoDatos;
