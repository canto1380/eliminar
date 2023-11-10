import { Space, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
export const columnsDataComparativa = [
  {
    key: "anio",
    title: "Año",
    dataIndex: "anio_zafra",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.anio_zafra > b.anio_zafra,
  },
  {
    key: "CMBPorDDJJIPAAT",
    title: "CMB por DDJJ",
    dataIndex: "CMB_DDJJ",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.CMB_DDJJ > b.CMB_DDJJ,
  },
  {
    key: "estimacionEEAOC",
    title: "Estimación EEAOC",
    dataIndex: "estimacion_EEAOC",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.estimacion_EEAOC > b.estimacion_EEAOC,
  },
  {
    key: "actions",
    title: "Acciones",
    render: (_, record) => {
      return (
        <Space size="middle">
          <Button
            href={`/admin/datos-comparativos/editar/${record?.anio_zafra}`}
            type="secondary"
            style={{ background: "green", color: "white" }}
            icon={<EditOutlined className="" />}
            title='Editar'
          ></Button>
          <Button
          onClick={handleDelete(record?.id)}
            danger
            type="primary"
            icon={<DeleteOutlined className="" />}
            title='Eliminar'
          ></Button>
        </Space>
      );
    },
  },
];

