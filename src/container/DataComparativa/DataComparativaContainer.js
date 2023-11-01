import { Container } from "react-bootstrap";
import MsgError from "../../components/Messages/MsgError";
import TitlePage from "../../components/TitlePages";
import { useEffect, useState } from "react";
import dataComparativa from "../../Excel/dataConstanteParteDiario.json";
import Spinn from "../../components/Spinner";
import Filtros from "../../components/Filtros";
import ListHeader from "../../components/ListHeader";
import ListadoDatos from "../../components/ParteDiario/ListadoDatos";
import { columnsDataComparativa } from "../../components/ColumnsTables/DataComparativaColumnas";

const DataComparativaContainer = () => {
  const [banderaDataNull, setBanderaDataNull] = useState(false);
  const [dataComparativaJSON, setDataComparativaJSON] = useState(null);
  const [dataZafra, setDataZafra] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getData();
  }, [search, dataZafra]);

  const getData = () => {
    const data = dataComparativa?.dataComparativa;
    if (dataZafra !== null) {
      const aa = data.filter((d) => d.anio === dataZafra.toString());
      setDataComparativaJSON(aa);
    } else {
      setDataComparativaJSON(data);
    }
  };

  return (
    <Container fluid>
      {banderaDataNull && (
        <MsgError
          text1="Estamos procesando la información."
          text2="Intente de nuevo."
        />
      )}
      <TitlePage titlePage="Datos comparativos" />
      <hr className="mx-3 mt-1" />
      {dataComparativaJSON === null ? (
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
          />
          <ListHeader title={"Datos comparativos"} />
          <div className='pb-1 pt-3 px-4'>
          <ListadoDatos
            columns={columnsDataComparativa}
            scroll={30}
            data={dataComparativaJSON}
          />
          </div>
        </>
      )}
    </Container>
  );
};
export default DataComparativaContainer;
