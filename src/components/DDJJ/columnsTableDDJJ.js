import moment from "moment"
import { getPeriodoQuincenal } from "../../helpers/helpers"
export const columnsDDJJ = [
  {
    key: "ID",
    title: "ID",
    dataIndex: "identificadorDeclaracion",
    sorter: (a, b) => a.identificadorDeclaracion - b.identificadorDeclaracion,
  },
  {
    key: "ingenioNombre",
    title: "Ingenio",
    dataIndex: "ingenioNombre",
    sorter: (a, b) => a.ingenioNombre - b.ingenioNombre,
  },
  {
    key: "periodo",
    title: "Periodo",
    render: (d) => `${getPeriodoQuincenal(d.fechaDesde)}`
  },
  {
    key: "estado",
    title: "Estado",
    dataIndex: 'estado',
    sorter: (a, b) => a.estado - b.estado,
    
  },
  
]

export const columnsDetalleDDJJ = [
  {
    key: "ID",
    title: "ID",
    dataIndex: "identificadorDeclaracion",
    sorter: (a, b) => a.identificadorDeclaracion - b.identificadorDeclaracion,
  },
  {
    key: "ingenioNombre",
    title: "Ingenio",
    dataIndex: "ingenioNombre",
    sorter: (a, b) => a.ingenioNombre - b.ingenioNombre,
  },
  {
    key: "ingenioNombre",
    title: "Periodo",
    render: (d) => `${getPeriodoQuincenal(d.fechaDesde)}`
  },
  {
    key: "estado",
    title: "Estado",
    dataIndex: 'estado',
    sorter: (a, b) => a.estado - b.estado,
    
  },
];