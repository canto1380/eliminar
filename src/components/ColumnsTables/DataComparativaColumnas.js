import { Space, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
export const columnsDataComparativa = [
  {
    key: "anio",
    title: "Año",
    dataIndex: "anio",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.anio > b.anio,
  },
  {
    key: "CMBPorDDJJIPAAT",
    title: "CMB por DDJJ",
    dataIndex: "CMBPorDDJJIPAAT",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.CMBPorDDJJIPAAT > b.CMBPorDDJJIPAAT,
  },
  {
    key: "estimacionEEAOC",
    title: "Estimación EEAOC",
    dataIndex: "estimacionEEAOC",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.estimacionEEAOC > b.estimacionEEAOC,
  },
  {
    key: "actions",
    title: "Acciones",
    render: (_, record) => {
      return (
        <Space size="middle">
          <Button
            href={`/admin/datos-comparativos/editar/${record?.anio}`}
            type="secondary"
            style={{ background: "green", color: "white" }}
            icon={<EditOutlined className="" />}
          ></Button>
          <Button
            danger
            type="primary"
            icon={<DeleteOutlined className="" />}
          ></Button>
        </Space>
      );
    },
  },
];
