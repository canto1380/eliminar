import "moment/locale/es";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { CreateExcelWorkbook } from "../../Excel/ParteDiarioDirectorio";
import ItemCollpse from "./ItemsCollpase";
import { User } from "../../context/UserProvider";
import { dataComparativaPorTipo } from "./DataComparativa";
import { dataPorTipo } from "./DataOriginal";

const ParteDiario = ({
  dataEnd,
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  setDataAnio,
  setDataMes,
  setDataQuincena,
  setDataZafra,
  dataParteDiariosHistoricos,
  dataImport,
  dataImportComparativa,
  setBanderaDataNull,
}) => {
  // moment.locale('es')
  // console.log(moment.locale())
  const [d1, setD1] = useState([]);
  const [d2, setD2] = useState([]);
  const [d3, setD3] = useState([]);
  const [d4, setD4] = useState([]);
  const [d5, setD5] = useState([]);
  const [d6, setD6] = useState([]);
  const [d7, setD7] = useState([]);
  const [d8, setD8] = useState([]);
  const [d9, setD9] = useState([]);
  const [d10, setD10] = useState([]);
  const [d11, setD11] = useState([]);
  const [d12, setD12] = useState([]);
  const [d13, setD13] = useState([]);
  const [d14, setD14] = useState([]);
  /** DC - Data Comparativa **/
  const [dc1, setDc1] = useState([]);
  const [dc2, setDc2] = useState([]);
  const [dc3, setDc3] = useState([]);
  const [dc4, setDc4] = useState([]);
  const [dc5, setDc5] = useState([]);
  const [dc6, setDc6] = useState([]);
  const [dc7, setDc7] = useState([]);
  const [dc8, setDc8] = useState([]);
  const [dc9, setDc9] = useState([]);
  const [dc10, setDc10] = useState([]);
  const [dc11, setDc11] = useState([]);
  const [dc12, setDc12] = useState([]);
  const [dc13, setDc13] = useState([]);
  const [dc14, setDc14] = useState([]);
  const [inicioZafra, setInicioZafra] = useState(null);
  const [inicioZafraComparativa, setInicioZafraComparativa] = useState(null);
  const [fechasInicioIngenios, setFechasInicioIngenios] = useState(null);
  const [fechasInicioIngeniosComparativa, setFechasInicioIngeniosComparativa] =
    useState(null);
  const [dataDiasZafra, setDataDiasZafra] = useState(null);
  const [dataDiasZafraComparativa, setDataDiasZafraComparativa] =
    useState(null);
  const [fechasFinIngeniosComparativa, setFechasFinIngeniosComparativa] =
    useState(null);
  const [loadingDownload, setLoadingDownload] = useState(false);

  const { state, dataUser } = useContext(User);
  useEffect(() => {
    dataPorTipo(
      dataImport,
      dataEnd,
      setD1,
      setD2,
      setD3,
      setD4,
      setD5,
      setD6,
      setD7,
      setD8,
      setD9,
      setD10,
      setD11,
      setD12,
      setD13,
      setD14,
      setFechasInicioIngenios,
      setDataDiasZafra
    );
    dataComparativaPorTipo(
      dataImportComparativa,
      dataEnd,
      setDc1,
      setDc2,
      setDc3,
      setDc4,
      setDc5,
      setDc6,
      setDc7,
      setDc8,
      setDc9,
      setDc10,
      setDc11,
      setDc12,
      setDc13,
      setDc14,
      setFechasInicioIngeniosComparativa,
      setFechasFinIngeniosComparativa,
      setDataDiasZafraComparativa
    );
    dataInicioZafras();
  }, [dataImport, dataImportComparativa]);

  const dataInicioZafras = () => {
    const fecha1 = dataImport?.find((d) => d.MoliendaCanaBruta !== 0);
    setInicioZafra(fecha1?.FechaParte);
    const fecha2 = dataImportComparativa?.find(
      (d) => d.MoliendaCanaBruta !== 0
    );
    setInicioZafraComparativa(fecha2?.FechaParte);
  };

  return (
    <>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        <Col xs={12} className="text-start mb-5 mt-4">
          <Button
            className={`${
              (dataEnd === null ||
                dataImport === null ||
                dataImportComparativa === null ||
                fechasInicioIngenios === null ||
                fechasFinIngeniosComparativa === null ||
                fechasInicioIngeniosComparativa === null) &&
              "disabled"
            }`}
            onClick={() =>
              CreateExcelWorkbook(
                setLoadingDownload,
                dataEnd,
                d1,
                d2,
                d3,
                d4,
                d5,
                d6,
                d7,
                d8,
                d9,
                d10,
                d11,
                d12,
                d13,
                d14,
                dc1,
                dc2,
                dc3,
                dc4,
                dc5,
                dc6,
                dc7,
                dc8,
                dc9,
                dc10,
                dc11,
                dc12,
                dc13,
                dc14,
                dataImport,
                dataImportComparativa,
                dataUser,
                setBanderaDataNull,
                inicioZafra,
                inicioZafraComparativa,
                fechasInicioIngenios,
                dataDiasZafra,
                fechasInicioIngeniosComparativa,
                dataDiasZafraComparativa,
                fechasFinIngeniosComparativa,
              )
            }
          >
            {dataEnd === null &&
            dataImport === null &&
            dataImportComparativa === null ? (
              "Elija Fecha"
            ) : dataEnd !== null &&
              (dataImport === null || dataImportComparativa === null) ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Procesando
              </>
            ) : loadingDownload ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Descargando
              </>
            ) : (
              "Descargar"
            )}
          </Button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        <Col>
          <ItemCollpse
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            setDataAnio={setDataAnio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            setDataZafra={setDataZafra}
            dataParteDiariosHistoricos={dataParteDiariosHistoricos}
          />
        </Col>
      </Row>
    </>
  );
};
export default ParteDiario;
