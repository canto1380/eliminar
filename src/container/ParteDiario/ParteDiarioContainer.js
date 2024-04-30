import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import ParteDiario from "../../components/ParteDiario/ParteDiario";
import Filtros from "../../components/Filtros";
import { getDataPartesDiariosBE } from "../../utils/queryAPI/partesDiariosQuery";
import Spinn from "../../components/Spinner";
import MsgError from "../../components/Messages/MsgError";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";
import { getIngenios } from "../../utils/queryAPI/ingenios";

const ParteDiarioContainer = () => {
  const [dataEnd, setDataEnd] = useState(null);
  const [dataZafra, setDataZafra] = useState(null);
  const [dataAnio, setDataAnio] = useState(null);
  const [dataMes, setDataMes] = useState(null);
  const [dataQuincena, setDataQuincena] = useState(null);
  const [dataParteDiariosHistoricos, setDataParteDiariosHistoricos] =
    useState(null);
  const [dataImport, setDataImport] = useState(null);
  const [dataImportComparativa, setDataImportComparativa] = useState(null);
  const [banderaDataNull, setBanderaDataNull] = useState(false);
  const [dateInicioIngenios, setDateInicioIngenios] = useState(null);
  const [dateFinIngenios, setDateFinIngenios] = useState(null);
  const [dataIngenios, setDataIngenios] = useState(null);
  
  useEffect(() => {
    if (dataZafra !== null) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafra]);

  const getData = async () => {
    setDataParteDiariosHistoricos(null);
    const params = {
      fechadesde: `01-04-${dataZafra}`,
      fechahasta: `31-03-${dataZafra + 1}`,
    };
    /***** DESDE FRONTEND *****/
    // const data = await getDataPartesDiarios(params) DESDE FRONTEND
    // setDataParteDiariosHistoricos(data?.ParteDiarios)

    /***** DESDE BACKEND *****/
    const data = await getDataPartesDiariosBE(params, "/dataQuincenal"); // DESDE BACKEND
    setDataParteDiariosHistoricos(data);
  };

  useEffect(() => {
    if (dataEnd !== null) {
      getDataImport();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEnd]);
  const getDataImport = async () => {
    // const anioDataEnd = dataEnd.getFullYear();
    const anioDataEnd = new Date(dataEnd) < new Date(`${dataEnd.getFullYear()}-04-25`) ? dataEnd.getFullYear() -1 : dataEnd.getFullYear()

    const params = {
      fechadesde: `01-04-${anioDataEnd}`,
      fechahasta: `31-03-${anioDataEnd + 1}`,
    };
    const params1 = {
      fechadesde: `01-04-${anioDataEnd - 1}`,
      fechahasta: `31-03-${anioDataEnd}`,
    };

    /***** DESDE BACKEND *****/
    const data = await getDataPartesDiariosBE(params, "/parteDiario");
    setDataImport(data);

    const dataComparativa = await getDataPartesDiariosBE(
      params1,
      "/parteDiario"
    );
    setDataImportComparativa(dataComparativa);
  };

  useEffect(() => {
    const dataNow = new Date();
    if (dataZafra === null) {
      setDataZafra(dataNow.getFullYear());
    }

    if (dataAnio === null) {
      setDataAnio(dataNow.getFullYear());
    }
    if (dataMes === null) {
      setDataMes(dataNow.getMonth() + 1);
    }
    if (dataQuincena === null) {
      if (dataNow.getDate() <= 15) {
        setDataQuincena(1);
      } else {
        setDataQuincena(2);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (dataEnd) {
      getDataPeriodos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEnd]);

  const getDataPeriodos = async () => {
    const params = { limit: 10000000, anio: dataEnd.getFullYear(), date: dataEnd };
    const data = await getPeriodoZafra(params);
    setDateInicioIngenios(data);

    let dateEnd = new Date(dataEnd)

    const params1 = { limit: 10000000, anio: dataEnd.getFullYear() -1, date: new Date(dateEnd.setFullYear(dateEnd.getFullYear() - 1))};
    const data1 = await getPeriodoZafra(params1);
    setDateFinIngenios(data1);
  };
  useEffect(() => {
    getDataIngenios();
  }, []);
  const getDataIngenios = async () => {
    const data = await getIngenios();
    setDataIngenios(data);
  };

  return (
    <Container fluid>
      {banderaDataNull && (
        <MsgError
          text1="Estamos procesando la información."
          text2="Intente de nuevo."
        />
      )}
      <TitlePage titlePage="Parte Diario Directorio" />
      <hr className="mx-3 mt-1" />
      {dataParteDiariosHistoricos === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <div className="px-4">
            <span className="text-danger fw-bolder">*</span>
            <span className="text-legend">
              Periodos desde 01/04 al 31/03 del siguiente año
            </span>
          </div>
          <Filtros
            setDataEnd={setDataEnd}
            setDataAnio={setDataAnio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            setDataZafra={setDataZafra}
            dataEnd={dataEnd}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            bandFilterZafraAnio={true}
            bandFilterAnio={true}
            bandFilterMes={true}
            bandFilterQuincena={true}
            BandFilterDiaParteDirectorio={true}
          />
          <ParteDiario
            dataEnd={dataEnd}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            setDataAnio={setDataAnio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            setDataZafra={setDataZafra}
            dataParteDiariosHistoricos={dataParteDiariosHistoricos}
            dataImport={dataImport}
            dataImportComparativa={dataImportComparativa}
            setBanderaDataNull={setBanderaDataNull}
            setDataEnd={setDataEnd}
            setDataImport={setDataImport}
            setDataImportComparativa={setDataImportComparativa}
            dateInicioIngenios={dateInicioIngenios}
            dateFinIngenios={dateFinIngenios}
            dataIngenios={dataIngenios}
          />
        </>
      )}
    </Container>
  );
};
export default ParteDiarioContainer;
