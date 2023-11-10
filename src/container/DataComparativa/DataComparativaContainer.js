import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import { useEffect, useState } from "react";
import Spinn from "../../components/Spinner";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import { columnsDataComparativa } from "../../components/ColumnsTables/DataComparativaColumnas";
import { getDataComparativa } from "../../utils/queryAPI/dataComparativa";
import { api } from "../../utils/api";

const DataComparativaContainer = ({tokenAuth, routeAPI}) => {
  const [dataComparativa, setDataComparativa] = useState(null);
  const [dataZafra, setDataZafra] = useState(null);
  const [search, setSearch] = useState(null);
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [modalUnauthorized, setModalUnauthorized] = useState(false)
  const [band, setBand] = useState(false)

  useEffect(() => {
    dataComparativaGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, dataZafra, band]);

  const dataComparativaGet = async() => {
    const params = {search, anio: dataZafra}
    const data = await getDataComparativa(params)
    setDataComparativa(data)
  };

  const convertRoute = routeAPI[0].toUpperCase() + routeAPI.slice(1)
  const handleDelete = async (deleted, id) => {
    try {
      if (deleted) {
        const res = await api(
          'PATCH',
          `${routeAPI}/restore${convertRoute}/${id}`,
          null,
          tokenAuth
        )
        if (res.status === 200) {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            setBand(!band)
          }, 2500)
        }
        if (res.response.status === 401) {
          setModalUnauthorized(true)
        }
      } else {
        const res = await api(
          'PATCH',
          `${routeAPI}/delete${convertRoute}/${id}`,
          null,
          tokenAuth
        )
        if (res.status === 200) {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            setBand(!band)
          }, 2500)
        }
        if (res.response.status === 401) {
          setModalUnauthorized(true)
        }
      }
    } catch (error) {}
  }



  return (
    <Container fluid>
      <TitlePage titlePage="Datos comparativos" />
      <hr className="mx-3 mt-1" />
      {dataComparativa === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <Filtros
            setSearch={setSearch}
            setDataZafra={setDataZafra}
            bandFilterZafraAnio={true}
            bandFilterSearch={true}
            placeHolderSearch='Valor'
          />
          <ListHeader title={"Datos comparativos"} />
          <div className='pb-1 pt-3 px-4'>
          <ListadoDatos
            columns={columnsDataComparativa}
            scroll={30}
            data={dataComparativa}
            handleDelete={handleDelete}
          />
          </div>
        </>
      )}
    </Container>
  );
};
export default DataComparativaContainer;
