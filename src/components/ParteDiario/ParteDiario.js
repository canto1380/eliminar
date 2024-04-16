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
  dataParteDiariosHistoricos,
  dataImport,
  dataImportComparativa,
  setBanderaDataNull,
  setDataEnd,
  setDataImport,
  setDataImportComparativa,
  dateInicioIngenios,
  dateFinIngenios,
  dataIngenios,
}) => {
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
  const [d15, setD15] = useState([]);
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
  const [dc15, setDc15] = useState([]);
  const [inicioZafra, setInicioZafra] = useState(null);
  const [inicioZafraComparativa, setInicioZafraComparativa] = useState(null);
  const [finZafra, setFinZafra] = useState("");
  const [finZafraComparativa, setFinZafraComparativa] = useState("");
  const [fechasInicioIngenios, setFechasInicioIngenios] = useState(null);
  const [fechasInicioIngeniosComparativa, setFechasInicioIngeniosComparativa] =
    useState(null);
  const [dataDiasZafra, setDataDiasZafra] = useState(null);
  const [dataDiasZafraComparativa, setDataDiasZafraComparativa] =
    useState(null);
    useState(null);
  const [loadingDownload, setLoadingDownload] = useState(false);

  const { dataUser } = useContext(User);
  useEffect(() => {
    dataPorTipo(
      dataImport,
      dataEnd,
      dateInicioIngenios,
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
      setD15,
      setFechasInicioIngenios,
    );
    dataComparativaPorTipo(
      dataImportComparativa,
      dataEnd,
      dateFinIngenios,
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
      setDc15,
      setFechasInicioIngeniosComparativa,
    );
    dataFinZafra();
    dataFinZafraComparativa();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataImport, dataImportComparativa]);
  
  let inicioZafraa = new Date('3/10/2100');
  let finZafraa = null;

  const dataFinZafra = () => {
    for (let clave in fechasInicioIngenios) {
      if (fechasInicioIngenios[clave] === null) {
        setFinZafra("");
        return finZafraa;
      } else {
        finZafraa =
          new Date(fechasInicioIngenios[clave]) > finZafraa
            ? new Date(fechasInicioIngenios[clave])
            : finZafraa;
        setFinZafra(finZafraa);

        inicioZafraa =
          new Date(fechasInicioIngenios[clave]) < inicioZafraa
            ? new Date(fechasInicioIngenios[clave])
            : inicioZafraa;
        setInicioZafra(inicioZafraa)
      }
    }
  };

  let inicioZafraaComparativa = new Date('3/10/2100');
  let finZafraaComparativa = null;
  const dataFinZafraComparativa = () => {
    for (let clave in fechasInicioIngeniosComparativa) {
      if (fechasInicioIngeniosComparativa[clave] === null) {
        setFinZafraComparativa("");
        return finZafraaComparativa;
      } else {
        finZafraaComparativa =
          new Date(fechasInicioIngeniosComparativa[clave]) > finZafraaComparativa
            ? new Date(fechasInicioIngeniosComparativa[clave])
            : finZafraaComparativa;
        setFinZafraComparativa(finZafraaComparativa);

        inicioZafraaComparativa =
          new Date(fechasInicioIngeniosComparativa[clave]) < inicioZafraaComparativa
            ? new Date(fechasInicioIngeniosComparativa[clave])
            : inicioZafraaComparativa;
        setInicioZafraComparativa(inicioZafraaComparativa)
      }
    }
  }

  useEffect(() => {
    cantDiasZafra();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicioZafra, finZafra]);
  const cantDiasZafra = () => {
    if (finZafra !== "" && dataEnd < finZafra) {
      const diffDates = new Date(dataEnd).getTime() - new Date(inicioZafra).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24)
      setDataDiasZafra(Math.ceil(diffTotal));
    }
    if(finZafra !== "" && dataEnd >= finZafra) {
      const diffDates = new Date(finZafra).getTime() - new Date(inicioZafra).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24)
      setDataDiasZafra(Math.ceil(diffTotal));
    }
    if(finZafra === '') {
      const diffDates = new Date(dataEnd).getTime() - new Date(inicioZafra).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24)
      setDataDiasZafra(Math.ceil(diffTotal));
    }
  };
  

  useEffect(() => {
    cantDiasZafraComparativa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicioZafraComparativa, finZafraComparativa]);
  const cantDiasZafraComparativa = () => {
    const date = new Date(dataEnd)
    const anioDate = date.getFullYear() -1
    const dateComparativa = new Date(date)
    dateComparativa.setFullYear(anioDate)
    
    if (finZafraComparativa !== "" && dateComparativa < finZafraComparativa) {
      const diffDates = new Date(dateComparativa).getTime() - new Date(inicioZafraComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24)
      setDataDiasZafraComparativa(Math.ceil(diffTotal));
    }
    if(finZafraComparativa !== "" && dateComparativa >= finZafraComparativa) {
      const diffDates = new Date(finZafraComparativa).getTime() - new Date(inicioZafraComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24)
      setDataDiasZafraComparativa(Math.ceil(diffTotal));
    }
    if(finZafraComparativa === '') {
      const diffDates = new Date(dateComparativa).getTime() - new Date(inicioZafraComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24)
      setDataDiasZafraComparativa(Math.ceil(diffTotal));
    }
  }
  console.log(d15)
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
                // fechasFinIngeniosComparativa === null ||
                fechasInicioIngeniosComparativa === null) &&
              "disabled"
            }`}
            onClick={() =>
              CreateExcelWorkbook(
                setLoadingDownload,
                dataEnd,
                setDataEnd,
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
                d15,
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
                dc15,
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
                setDataImport,
                setDataImportComparativa,
                dataIngenios,
                finZafra,
                finZafraComparativa
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
            dataParteDiariosHistoricos={dataParteDiariosHistoricos}
          />
        </Col>
      </Row>
    </>
  );
};
export default ParteDiario;
