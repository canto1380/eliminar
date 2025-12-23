import { Table } from "antd";
import '../ParteDiario/listadoDatos.css'
const ListadoDatosExpandible = ({ columns, scroll, data, expandable }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      expandable={expandable}
      rowKey={(record) =>
        `${record?.fechaDesde}-${record?.ingenioCodigo}-${record?.identificadorDeclaracion}`
      }
      rowClassName={(record, index) =>
        index % 2 === 0 ? "table-row-light" : "table-row-dark"
      }
      size="small"
      scroll={{ x: scroll, y: 6000 }}
      pagination={{ defaultPageSize: 1000, hideOnSinglePage: true }}
    />
  );
};

export default ListadoDatosExpandible