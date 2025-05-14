import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import { useState, useEffect } from "react";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";
import Spinn from "../../components/Spinner";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import { Button, Space, Spin } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { api } from "../../utils/api";
import Unauthorized from "../../components/Unauthorized";

const PeriodoZafraContainer = ({ tokenAuth, routeAPI }) => {
  const [periodosZafra, setPeriodosZafra] = useState(null);
  const [yearZafra, setYearZafra] = useState(null);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [band, setBand] = useState(false);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);

  useEffect(() => {
    dataPeriodosZafra();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, yearZafra, band]);

  const dataPeriodosZafra = async () => {
    const params = { search, anio: yearZafra };
    const data = await getPeriodoZafra(params);
    setPeriodosZafra(data);
  };
  const handleDelete = async (deleted, id) => {
    try {
      if (deleted) {
        const res = await api(
          "PATCH",
          `${routeAPI}/restore/${id}`,
          null,
          tokenAuth
        );
        if (res.status === 200) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setBand(!band);
          }, 2500);
        }
        if (res.response.status === 401) {
          setModalUnauthorized(true);
        }
      } else {
        const res = await api(
          "PATCH",
          `${routeAPI}/delete/${id}`,
          null,
          tokenAuth
        );
        if (res.status === 200) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setBand(!band);
          }, 2500);
        }
        if (res.response.status === 401) {
          setModalUnauthorized(true);
        }
      }
    } catch (error) {}
  };
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
      render: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
    },
    {
      key: "fin_zafra",
      title: "Final",
      dataIndex: "fin_zafra",
      sorter: (a, b) => new Date(a.inicio_zafra) - new Date(b.inicio_zafra),
      render: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
    },
    {
      key: "inicio_destileria",
      title: "Inicio destileria",
      dataIndex: "inicio_destileria",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        new Date(a.inicio_destileria) - new Date(b.inicio_destileria),
      render: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
    },
    {
      key: "fin_destileria",
      title: "Fin destileria",
      dataIndex: "fin_destileria",
      sorter: (a, b) => new Date(a.fin_destileria) - new Date(b.fin_destileria),
      render: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
    },
    {
      key: "inicio_anhidro",
      title: "Inicio Anhidro",
      dataIndex: "inicio_anhidro",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        new Date(a.inicio_anhidro) - new Date(b.inicio_anhidro),
      render: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
    },
    {
      key: "fin_anhidro",
      title: "Fin Anhidro",
      dataIndex: "fin_anhidro",
      sorter: (a, b) => new Date(a.fin_anhidro) - new Date(b.fin_anhidro),
      render: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
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
              title="Editar"
            ></Button>
            <Button
              key={record?._id}
              className={`${record?.deleted ? "bg-success" : "bg-danger"}`}
              onClick={() => handleDelete(record?.deleted, record?.id)}
              type="primary"
              icon={
                record?.deleted ? (
                  <RollbackOutlined className="c-green" />
                ) : (
                  <DeleteOutlined className="c-red" />
                )
              }
              title={record?.deleted ? "Restaurar" : "Eliminar"}
            ></Button>
          </Space>
        );
      },
    },
  ];
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
            placeHolderSearch="Valor"
          />
          <ListHeader
            title={"Periodos de Zafra"}
            btnLink={"/admin/periodos-zafra/nuevo"}
          />
          <div className="pb-1 pt-3 px-4">
            <ListadoDatos
              columns={columnsData}
              scroll={100}
              data={periodosZafra}
            />
          </div>
        </>
      )}
      {loading && (
        <div className="loadingSpin">
          <Spin />
        </div>
      )}
      {modalUnauthorized && (
        <div>
          <Unauthorized />
        </div>
      )}
    </Container>
  );
};
export default PeriodoZafraContainer;
