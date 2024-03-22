import { Container } from "react-bootstrap"
import TitlePage from "../../components/TitlePages"
import { useState, useEffect } from "react";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";
import Spinn from "../../components/Spinner";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import { Button, Space } from "antd";
import {
  EditOutlined,
} from "@ant-design/icons";
import moment from "moment";

const PeriodoZafraContainer = ({tokenAuth, routeAPI}) => {
  const [periodosZafra, setPeriodosZafra] = useState(null)
  const [yearZafra, setYearZafra] = useState(null);
  const [search, setSearch] = useState(null)

  useEffect(() => {
    dataPeriodosZafra()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search, yearZafra])

  const dataPeriodosZafra = async() => {
    const params = {search, anio: yearZafra}
    const data =  await getPeriodoZafra(params)
    setPeriodosZafra(data)
  }

  const columnsData = [
    {
      key: "nombre_ingenio",
      title: "Ingenio",
      dataIndex: "nombre_ingenio",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.nombre_ingenio.localeCompare(b.nombre_ingenio),
    },
    {
      key: "anio_zafra",
      title: "Año",
      dataIndex: "anio_zafra",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.anio_zafra - b.anio_zafra,
    },
    {
      key: "inicio_zafra",
      title: "Inicio",
      dataIndex: "inicio_zafra",
      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.inicio_zafra) - new Date(b.inicio_zafra),
      render: (date) => date? moment(date).format('DD-MM-YYYY') : null,
    },
    {
      key: "fin_zafra",
      title: "Final",
      dataIndex: "fin_zafra",
      sorter: (a, b) => new Date(a.inicio_zafra) - new Date(b.inicio_zafra),
      render: (date) => date ? moment(date).format('DD-MM-YYYY') : null,
    },
    {
      key: "actions",
      title: "Acciones",
      
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
            className="bg-secondary btn-edit"
              href={`/admin/periodos-zafra/editar/${record?.id}`}
              style={{ color: "white" }}
              icon={<EditOutlined className="" />}
              title='Editar'
            ></Button>
          </Space>
        );
      },
    },
    
  ]
  return (
    <Container fluid>
      <TitlePage titlePage={"Periodos de zafra"} />
      <hr className="mx-3 mt-1" />
      {periodosZafra === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Filtros
            setSearch={setSearch}
            setDataZafra={setYearZafra}
            bandFilterZafraAnio={true}
            bandFilterSearch={true}
            placeHolderSearch='Valor'
          />
          <ListHeader title={"Periodos de Zafra"} btnLink={'/admin/periodos-zafra/nuevo'}/>
          <div className='pb-1 pt-3 px-4'>
          <ListadoDatos
            columns={columnsData}
            scroll={30}
            data={periodosZafra}
          />
          </div>
        </>
      )}

    </Container>
  )
}
export default PeriodoZafraContainer