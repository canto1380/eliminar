import "moment/locale/es";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { DownOutlined } from "@ant-design/icons";
import { CreateExcelWorkbook } from "../../Excel/ParteDiarioDirectorio";
import ItemCollpse from "./ItemsCollpase";
import { User } from "../../context/UserProvider";
import { dataComparativaPorTipo } from "./DataComparativa";
import { dataPorTipo } from "./DataOriginal";
import { getDataComparativa } from "../../utils/queryAPI/dataComparativa";
import { getDataToken } from "../../helpers/helpers";
import "./parteDiario.css";
import moment from "moment";
import { apiExportExcel } from "../../utils/apiExportExcel";
import { Dropdown, message, Space } from "antd";
import { getDiasParadas } from "../../utils/queryAPI/diaParadas";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";

const ParteDiario = ({
  dataEnd,
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  dataParteDiariosHistoricos,
  dataImport,
  dataImportComparativa,
  dataImportDestileria,
  dataImportDestileriaComparativa,
  dataImportAnhidro,
  dataImportAnhidroComparativa,
  setBanderaDataNull,
  dataImportNorte,
  dataImportComparativaNorte,
  dataImportDestileriaNorte,
  dataImportDestileriaComparativaNorte,
  dataImportAnhidroNorte,
  dataImportAnhidroComparativaNorte,
  setDataImport,
  setDataImportComparativa,
  setDataImportDestileria,
  setDataImportDestileriaComparativa,
  setDataImportAnhidro,
  setDataImportAnhidroComparativa,
  setDataImportNorte,
  setDataImportComparativaNorte,
  setDataImportDestileriaNorte,
  setDataImportDestileriaComparativaNorte,
  setDataImportAnhidroNorte,
  setDataImportAnhidroComparativaNorte,
  dateInicioIngenios,
  dateFinIngenios,
  dataIngenios,
  zafraParteDiario,

}) => {
/***** TUCUMAN *****/
/** D - Data Periodo actual **/
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
  
  /***** NORTE *****/
  /** N - Data Periodo actual **/
  const [n1, setN1] = useState([]);
  const [n2, setN2] = useState([]);
  const [n3, setN3] = useState([]);
  const [n4, setN4] = useState([]);
  const [n5, setN5] = useState([]);

  /** NC - Data Comparativa **/
  const [nc1, setNc1] = useState([]);
  const [nc2, setNc2] = useState([]);
  const [nc3, setNc3] = useState([]);
  const [nc4, setNc4] = useState([]);
  const [nc5, setNc5] = useState([]);

  const [observaciones, setObservaciones] = useState('')

  /** Fecha de inicio y fin de zafras TUCUMAN **/
  const [inicioZafra, setInicioZafra] = useState(null);
  const [inicioZafraComparativa, setInicioZafraComparativa] = useState(null);
  const [finZafra, setFinZafra] = useState("");
  const [finZafraComparativa, setFinZafraComparativa] = useState("");

  /** Fecha de inicio y fin de zafras NORTE **/
  const [inicioZafraNorte, setInicioZafraNorte] = useState(null);
  const [inicioZafraNorteComparativa, setInicioZafraNorteComparativa] =
    useState(null);
  const [finZafraNorte, setFinZafraNorte] = useState("");
  const [finZafraNorteComparativa, setFinZafraNorteComparativa] = useState("");

  /** FECHAS DE TODOS LOS INGENIOS DE INICIO Y FIN TUCUMAN **/
  const [fechasInicioIngenios, setFechasInicioIngenios] = useState(null);
  const [fechasInicioDestileriaIngenios, setFechasInicioDestileriaIngenios] =
    useState(null);
  const [fechasInicioAnhidroIngenios, setFechasInicioAnhidroIngenios] = useState(null)

  const [fechasInicioIngeniosComparativa, setFechasInicioIngeniosComparativa] =
    useState(null);
  const [
    fechasInicioDestileriaIngeniosComparativa,
    setFechasInicioDestileriaIngeniosComparativa,
  ] = useState(null);
  const [
    fechasInicioAnhidroIngeniosComparativa,
    setFechasInicioAnhidroIngeniosComparativa,
  ] = useState(null);



  /** FECHAS DE TODOS LOS INGENIOS DE INICIO Y FIN NORTE **/
  const [fechasInicioIngeniosNorte, setFechasInicioIngeniosNorte] =
    useState(null);
  const [
    fechasInicioDestileriaIngeniosNorte,
    setFechasInicioDestileriaIngeniosNorte,
  ] = useState(null);
  const [
    fechasInicioAnhidroIngeniosNorte,
    setFechasInicioAnhidroIngeniosNorte,
  ] = useState(null);

  const [
    fechasInicioIngeniosNorteComparativa,
    setFechasInicioIngeniosNorteComparativa,
  ] = useState(null);
  const [
    fechasInicioDestileriaIngeniosNorteComparativa,
    setFechasInicioDestileriaIngeniosNorteComparativa,
  ] = useState(null);
  const [
    fechasInicioAnhidroIngeniosNorteComparativa,
    setFechasInicioAnhidroIngeniosNorteComparativa,
  ] = useState(null);

  /** Cantidad de dias de zafra TUCUMAN **/
  const [dataDiasZafra, setDataDiasZafra] = useState(null);
  const [dataDiasZafraComparativa, setDataDiasZafraComparativa] =
    useState(null);

  /** Cantidad de dias de zafra NORTE **/
  const [dataDiasZafraNorte, setDataDiasZafraNorte] = useState(null);
  const [dataDiasZafraNorteComparativa, setDataDiasZafraNorteComparativa] =
    useState(null);

  /** DATOS TOTALES AL DIA ELEGIDO **/
  const [panelCMB, setPanelCMB] = useState(null);
  const [panelAzucar, setPanelAzucar] = useState(null);
  const [panelAzucarEquivalente, setPanelAzucarEquivalente] = useState(null);
  const [panelAzucarCrudo, setPanelAzucarCrudo] = useState(null);
  const [panelAzucarBlancoA, setPanelAzucarBlancoA] = useState(null);
  const [panelAzucarRefinado, setPanelAzucarRefinado] = useState(null);
  const [panelAzucarOrganico, setPanelAzucarOrganico] = useState(null);
  const [panelAzucarOtros, setPanelAzucarOtros] = useState(null);
  const [panelAlcohol, setPanelAlcohol] = useState(null);

  /** DATOS DIAS PARADAS **/
  const [diasParadaExport, setDiasParadaExport] = useState(null);

  const [loadingDownload, setLoadingDownload] = useState(false);
  const [dataComparativa, setDataComparativa] = useState(undefined);
  const [fechaInicioDestileria, setFechaInicioDestileria] = useState(undefined);
  const [dataUserRegister, setDataUserRegister] = useState(undefined);
  const { dataUser } = useContext(User);

  useEffect(() => {
    dataComparativaGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dataComparativaGet = async () => {
    const params = { deleted: false };
    const data = await getDataComparativa(params);
    setDataComparativa(data);
  };

  useEffect(() => {
    getDataUserRegister();
  }, [dataUser]);
  const getDataUserRegister = () => {
    const data = getDataToken();
    setDataUserRegister(data);
  };
  useEffect(() => {
    dataPorTipo(
      dataImport,
      dataImportDestileria,
      dataImportAnhidro,
      dataImportNorte,
      dataImportDestileriaNorte,
      dataImportAnhidroNorte,
      dataEnd,
      dateInicioIngenios,
      zafraParteDiario,
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
      setN1,
      setN2,
      setN3,
      setN4,
      setN5,
      setFechasInicioIngenios,
      setFechasInicioDestileriaIngenios,
      setFechasInicioAnhidroIngenios,
      setFechasInicioIngeniosNorte,
      setFechasInicioDestileriaIngeniosNorte,
      setFechasInicioAnhidroIngeniosNorte,
      setPanelCMB,
      setPanelAzucar,
      setPanelAzucarEquivalente,
      setPanelAzucarCrudo,
      setPanelAzucarBlancoA,
      setPanelAzucarRefinado,
      setPanelAzucarOrganico,
      setPanelAzucarOtros,
      setPanelAlcohol
    );
    dataComparativaPorTipo(
      dataImportComparativa,
      dataImportDestileriaComparativa,
      dataImportAnhidroComparativa,
      dataImportComparativaNorte,
      dataImportDestileriaComparativaNorte,
      dataImportAnhidroComparativaNorte,
      dataEnd,
      dateFinIngenios,
      zafraParteDiario,
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
      setNc1,
      setNc2,
      setNc3,
      setNc4,
      setNc5,
      setFechasInicioIngeniosComparativa,
      setFechasInicioDestileriaIngeniosComparativa,
      setFechasInicioAnhidroIngeniosComparativa,
      setFechasInicioIngeniosNorteComparativa,
      setFechasInicioDestileriaIngeniosNorteComparativa,
      setFechasInicioAnhidroIngeniosNorteComparativa
    );
    dataFinZafra();
    dataFinZafraComparativa();
    dataFinZafraNorte();
    dataFinZafraComparativaNorte();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dataImport,
    dataImportComparativa,
    dataImportDestileria,
    dataImportDestileriaComparativa,
    dataImportAnhidro,
    dataImportAnhidroComparativa,
    dataImportNorte,
    dataImportComparativaNorte,
    dataImportDestileriaNorte,
    dataImportDestileriaComparativaNorte,
    dataImportAnhidroNorte,
    dataImportAnhidroComparativaNorte,
    zafraParteDiario
  ]);

  /*** DATOS DIAS PARADAS ***/
  useEffect(() => {
    if (dataAnio !== null && dataEnd !== null) {
      dataDiasParadaExport();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAnio, dataEnd]);
  const dataDiasParadaExport = async () => {
    const params = { anio: dataAnio, anioZafra: zafraParteDiario };
    const data = await getDiasParadas(params);
    setDiasParadaExport(data);
  };

  useEffect(() => {
    dataFinZafra();
    dataFinZafraComparativa();
    dataFinZafraNorte();
    dataFinZafraComparativaNorte();
  }, [fechasInicioIngenios, fechasInicioIngeniosNorte])

  /************* CALCULO PARA OBTENER FECHA DE INICIO Y FIN DE ZAFRAS TUCUMAN *************/
  let inicioZafraa = new Date("3/10/2100");
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
      }
      for (let clave in fechasInicioIngenios) {
        if (
          fechasInicioIngenios[clave] &&
          fechasInicioIngenios[clave] !== null
        ) {
          inicioZafraa =
            new Date(fechasInicioIngenios[clave]) < inicioZafraa
              ? new Date(fechasInicioIngenios[clave])
              : inicioZafraa;
          setInicioZafra(inicioZafraa);
        }
      }
    }
  };

  let inicioZafraaComparativa = new Date("3/10/2100");
  let finZafraaComparativa = null;
  const dataFinZafraComparativa = () => {
    for (let clave in fechasInicioIngeniosComparativa) {
      if (fechasInicioIngeniosComparativa[clave] === null) {
        setFinZafraComparativa("");

        return finZafraaComparativa;
      } else {
        finZafraaComparativa =
          new Date(fechasInicioIngeniosComparativa[clave]) >
            finZafraaComparativa
            ? new Date(fechasInicioIngeniosComparativa[clave])
            : finZafraaComparativa;
        setFinZafraComparativa(finZafraaComparativa);

        inicioZafraaComparativa =
          new Date(fechasInicioIngeniosComparativa[clave]) <
            inicioZafraaComparativa
            ? new Date(fechasInicioIngeniosComparativa[clave])
            : inicioZafraaComparativa;
        setInicioZafraComparativa(inicioZafraaComparativa);
      }
    }
  };
  /***************************************************************************************/

  /************* CALCULO PARA OBTENER FECHA DE INICIO Y FIN DE ZAFRAS NORTE *************/
  let inicioZafraaNorte = new Date("3/10/2100");
  let finZafraaNorte = null;
  const dataFinZafraNorte = () => {
    for (let clave in fechasInicioIngeniosNorte) {
      if (fechasInicioIngeniosNorte[clave] === null) {
        setFinZafraNorte(null);
        return finZafraaNorte;
      } else {
        finZafraaNorte =
          new Date(fechasInicioIngeniosNorte[clave]) > finZafraaNorte
            ? new Date(fechasInicioIngeniosNorte[clave])
            : finZafraaNorte;
        setFinZafraNorte(finZafraaNorte);
      }
      for (let clave in fechasInicioIngeniosNorte) {
        if (
          fechasInicioIngeniosNorte[clave] &&
          fechasInicioIngeniosNorte[clave] !== null
        ) {
          inicioZafraaNorte =
            new Date(fechasInicioIngeniosNorte[clave]) < inicioZafraaNorte
              ? new Date(fechasInicioIngeniosNorte[clave])
              : inicioZafraaNorte;
          setInicioZafraNorte(inicioZafraaNorte);
        }
      }
    }
  };
  let inicioZafraaComparativaNorte = new Date("3/10/2100");
  let finZafraaComparativaNorte = null;
  const dataFinZafraComparativaNorte = () => {
    for (let clave in fechasInicioIngeniosNorteComparativa) {
      if (fechasInicioIngeniosNorteComparativa[clave] === null) {
        setFinZafraNorteComparativa("");

        return finZafraaComparativaNorte;
      } else {
        finZafraaComparativaNorte =
          new Date(fechasInicioIngeniosNorteComparativa[clave]) >
            finZafraaComparativaNorte
            ? new Date(fechasInicioIngeniosNorteComparativa[clave])
            : finZafraaComparativaNorte;
        setFinZafraNorteComparativa(finZafraaComparativaNorte);

        inicioZafraaComparativaNorte =
          new Date(fechasInicioIngeniosNorteComparativa[clave]) <
            inicioZafraaComparativaNorte
            ? new Date(fechasInicioIngeniosNorteComparativa[clave])
            : inicioZafraaComparativaNorte;
        setInicioZafraNorteComparativa(inicioZafraaComparativaNorte);
      }
    }
  };
  /***************************************************************************************/

  /************************** CANTIDAD DIAS DE ZAFRA **************************/
  /***** TUCUMAN *****/
  const diasZafra = (dataEnd &&
    new Date(inicioZafra).getTime() !== new Date('3/10/2100').getTime())
    ? dataEnd - inicioZafra
    : 0
  const diasZafraFormat = diasZafra / (1000 * 60 * 60 * 24);
  useEffect(() => {
    cantDiasZafraComparativa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicioZafraComparativa, finZafraComparativa]);
  const cantDiasZafraComparativa = () => {
    const date = new Date(dataEnd);
    const anioDate = date.getFullYear() - 1;
    const dateComparativa = new Date(date);
    dateComparativa.setFullYear(anioDate);

    if (inicioZafraComparativa === "") {
      setDataDiasZafraComparativa(0);
    }

    if (
      inicioZafraComparativa !== "" &&
      dateComparativa < inicioZafraComparativa
    ) {
      setDataDiasZafraComparativa(0);
    }
    if (
      inicioZafraComparativa !== "" &&
      finZafraComparativa === "" &&
      dateComparativa >= inicioZafraComparativa
    ) {
      const diffDates =
        new Date(dateComparativa).getTime() -
        new Date(inicioZafraComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraComparativa(Math.ceil(diffTotal));
    }

    if (
      inicioZafraComparativa !== "" &&
      finZafraComparativa !== "" &&
      dateComparativa >= inicioZafraComparativa &&
      dateComparativa > finZafraComparativa
    ) {
      const diffDates =
        new Date(finZafraComparativa).getTime() -
        new Date(inicioZafraComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraComparativa(Math.ceil(diffTotal));
    }

    if (
      inicioZafraComparativa !== "" &&
      finZafraComparativa !== "" &&
      dateComparativa >= inicioZafraComparativa &&
      dateComparativa <= finZafraComparativa
    ) {
      const diffDates =
        new Date(dateComparativa).getTime() -
        new Date(inicioZafraComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraComparativa(Math.ceil(diffTotal));
    }
  };

  /***** NORTE *****/
  useEffect(() => {
    cantDiasZafraNorte();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicioZafraNorte, finZafraNorte]);
  const cantDiasZafraNorte = () => {
    if (inicioZafraNorte === "") {
      setDataDiasZafraNorte(0);
    }

    if (inicioZafraNorte !== "" && dataEnd < inicioZafraNorte) {
      setDataDiasZafraNorte(0);
    }

    if (
      inicioZafraNorte !== "" &&
      finZafraNorte === null &&
      dataEnd >= inicioZafraNorte
    ) {
      const diffDates =
        new Date(dataEnd).getTime() - new Date(inicioZafraNorte).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraNorte(Math.ceil(diffTotal));
    }

    if (
      inicioZafraNorte !== "" &&
      finZafraNorte !== null &&
      dataEnd >= inicioZafraNorte &&
      dataEnd > finZafraNorte
    ) {
      const diffDates =
        new Date(finZafraNorte).getTime() -
        new Date(inicioZafraNorte).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraNorte(Math.ceil(diffTotal));
    }

    if (
      inicioZafraNorte !== "" &&
      finZafraNorte !== null &&
      dataEnd >= inicioZafraNorte &&
      dataEnd <= finZafraNorte
    ) {
      const diffDates =
        new Date(dataEnd).getTime() - new Date(inicioZafraNorte).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraNorte(Math.ceil(diffTotal));
    }
  };

  useEffect(() => {
    cantDiasZafraNorteComparativa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicioZafraNorteComparativa, finZafraNorteComparativa]);
  const cantDiasZafraNorteComparativa = () => {
    const date = new Date(dataEnd);
    const anioDate = date.getFullYear() - 1;
    const dateComparativa = new Date(date);
    dateComparativa.setFullYear(anioDate);

    if (inicioZafraNorteComparativa === "") {
      setDataDiasZafraNorteComparativa(0);
    }

    if (
      inicioZafraNorteComparativa !== "" &&
      dateComparativa < inicioZafraNorteComparativa
    ) {
      setDataDiasZafraNorteComparativa(0);
    }
    if (
      inicioZafraNorteComparativa !== "" &&
      finZafraNorteComparativa === "" &&
      dateComparativa >= inicioZafraNorteComparativa
    ) {
      const diffDates =
        new Date(dateComparativa).getTime() -
        new Date(inicioZafraNorteComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraNorteComparativa(Math.ceil(diffTotal));
    }

    if (
      inicioZafraNorteComparativa !== "" &&
      finZafraNorteComparativa !== "" &&
      dateComparativa >= inicioZafraNorteComparativa &&
      dateComparativa > finZafraNorteComparativa
    ) {
      const diffDates =
        new Date(finZafraNorteComparativa).getTime() -
        new Date(inicioZafraNorteComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraNorteComparativa(Math.ceil(diffTotal));
    }

    if (
      inicioZafraNorteComparativa !== "" &&
      finZafraNorteComparativa !== "" &&
      dateComparativa >= inicioZafraNorteComparativa &&
      dateComparativa <= finZafraNorteComparativa
    ) {
      const diffDates =
        new Date(dateComparativa).getTime() -
        new Date(inicioZafraNorteComparativa).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafraNorteComparativa(Math.ceil(diffTotal));
    }
  };

  /*******************************************************************/

  useEffect(() => {
    fechaInicioDestilerias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateInicioIngenios]);

  let inicioDestileria = new Date("3/10/2100");
  const fechaInicioDestilerias = () => {
    dateInicioIngenios?.forEach((d) => {
      if (d.inicio_destileria !== null) {
        inicioDestileria =
          new Date(d.inicio_destileria) < inicioDestileria
            ? new Date(d.inicio_destileria)
            : inicioDestileria;
      }
    });
    setFechaInicioDestileria(inicioDestileria);
  };

  /*** ESTIMACIONES ***/
  let estimacionEEAOC;
  dataComparativa?.forEach((d) => {
    if (d.anio_zafra === zafraParteDiario) {
      estimacionEEAOC = d.estimacion_EEAOC;
    } else {
      estimacionEEAOC = 0
    }
  });

  // console.log('dc1', dc1)
  // console.log('dc2', dc2)
  // console.log('dc3', dc3)
  // console.log('dc4', dc4)
  // console.log('dc5', dc5)
  // console.log('dc6', dc6)
  // console.log('dc7', dc7)
  // console.log('dc8', dc8)
  // console.log('dc9', dc9)
  // console.log('dc10', dc10)
  // console.log('dc11', dc11)
  // console.log('dc12', dc12)
  // console.log('dc13', dc13)
  // console.log('dc14', dc14)
  // console.log('dc15', dc15)
  // console.log('n1', n1)
  // console.log('n2', n2)
  // console.log('n3', n3)
  // console.log('n4', n4)
  // console.log('n5', n5)
  console.log('nc1', nc1)
  console.log('nc2', nc2)
  console.log('nc3', nc3)
  console.log('nc4', nc4)
  console.log('nc5', nc5)

  /** CANTIDAD DIAS DE DESTILERIA **/
  const diasDestileria = (dataEnd &&
    new Date(fechaInicioDestileria).getTime() !== new Date("3/10/2100").getTime())
    ? dataEnd - fechaInicioDestileria
    : "";
  const diasDestileriaFormat = diasDestileria / (1000 * 60 * 60 * 24);
  /** Exportacion ZAFRA ACTUAL **/
  const exportarParteComparativo = async () => {
    try {
      setLoadingDownload(true);
      const dateFormat = moment(dataEnd).format("DD-MM-YYYY");
      const dataSend = [
        {
          dataEnd,
          diasParadaExport,
          /** TUCUMAN **/
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
          /** NORTE **/
          n1,
          n2,
          n3,
          n4,
          n5,
          /** TUCUMAN - COMPARATIVA **/
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
          /** NORTE - COMPARATIVA **/
          nc1,
          nc2,
          nc3,
          nc4,
          nc5,
          dataImport,
          dataImportComparativa,
          dataImportNorte,
          dataUser,
          dataUserRegister,
          setBanderaDataNull,
          inicioZafra,
          inicioZafraComparativa,
          fechasInicioIngenios,
          diasZafraFormat,
          fechasInicioIngeniosComparativa,
          dataDiasZafraComparativa,
          setDataImport,
          setDataImportComparativa,
          setDataImportDestileria,
          setDataImportDestileriaComparativa,
          dataIngenios,
          finZafra,
          finZafraComparativa,
          dataComparativa,
          fechaInicioDestileria,
          zafraParteDiario,
          fechasInicioDestileriaIngenios,
          fechasInicioDestileriaIngeniosComparativa,
          observaciones,
          /**NORTE **/
          inicioZafraNorte,
          inicioZafraNorteComparativa,
          finZafraNorte,
          finZafraNorteComparativa,
          fechasInicioIngeniosNorte,
          fechasInicioIngeniosNorteComparativa,
          fechasInicioDestileriaIngeniosNorte,
          fechasInicioDestileriaIngeniosNorteComparativa,
          dataDiasZafraNorte,
          dataDiasZafraNorteComparativa,
        },
      ];
      const res = await apiExportExcel("POST", "descargar", dataSend);
      if (res.status === 200) {
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `Zafra ${zafraParteDiario} - Parte diario directorio - ${dateFormat}`;
        link.click();
        link.remove();
        window.URL.revokeObjectURL(link);
        setDataImport(null);
        setDataImportComparativa(null);
        setDataImportDestileria(null);
        setDataImportDestileriaComparativa(null);
        setDataImportAnhidro(null)
        setDataImportAnhidroComparativa(null)
        setLoadingDownload(false);
        message.success("Descarga realizada correctamente", 5);
        window.location.reload();
      } else {
        toast.error("Error al generar el excel");
      }
    } catch (error) {
      toast.error("Error en el servidor:", error);
    }
  };
  /*** DIAS EFECTIVOS DE ZAFRA ***/
  useEffect(() => {
    if (dataAnio !== null && dataEnd !== null && diasParadaExport !== null) {
      getCalculoDiasParada();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAnio, dataEnd, diasParadaExport]);

  /** DIAS PARADA **/
  const [aguilDiasParada, setAguilDiasParada] = useState(0);
  const [bellavistaDiasParada, setBellavistaDiasParada] = useState(0);
  const [concepDiasParada, setConcepDiasParada] = useState(0);
  const [cruzaltaDiasParada, setCruzaltaDiasParada] = useState(0);
  const [famaillaDiasParada, setFamaillaDiasParada] = useState(0);
  const [coronaDiasParada, setCoronaDiasParada] = useState(0);
  const [floridaDiasParada, setFloridaDiasParada] = useState(0);
  const [providDiasParada, setProvidDiasParada] = useState(0);
  const [trinidadDiasParada, setTrinidadDiasParada] = useState(0);
  const [lealesDiasParada, setLealesDiasParada] = useState(0);
  const [marapaDiasParada, setMarapaDiasParada] = useState(0);
  const [nunorcoDiasParada, setNunorcoDiasParada] = useState(0);
  const [barbaraDiasParada, setBarbaraDiasParada] = useState(0);
  const [rosaDiasParada, setRosaDiasParada] = useState(0);

  const getCalculoDiasParada = () => {
    let aguilDiasParada = 0,
      bellavistaDiasParada = 0,
      concepDiasParada = 0,
      cruzaltaDiasParada = 0,
      famaillaDiasParada = 0,
      coronaDiasParada = 0,
      floridaDiasParada = 0,
      providDiasParada = 0,
      trinidadDiasParada = 0,
      lealesDiasParada = 0,
      marapaDiasParada = 0,
      nunorcoDiasParada = 0,
      barbaraDiasParada = 0,
      rosaDiasParada = 0;
    const calculoDiasParada = diasParadaExport;
    for (const p of calculoDiasParada) {
      switch (p.nombre_ingenio) {
        case "Aguilares":
          aguilDiasParada = aguilDiasParada + p.horas_paradas;
          break;
        case "Bella Vista":
          bellavistaDiasParada = bellavistaDiasParada + p.horas_paradas;
          break;
        case "Concepción":
          concepDiasParada = concepDiasParada + p.horas_paradas;
          break;
        case "Cruz Alta":
          cruzaltaDiasParada = cruzaltaDiasParada + p.horas_paradas;
          break;
        case "Famaillá":
          famaillaDiasParada = famaillaDiasParada + p.horas_paradas;
          break;
        case "La Corona":
          coronaDiasParada = coronaDiasParada + p.horas_paradas;
          break;
        case "La Florida":
          floridaDiasParada = floridaDiasParada + p.horas_paradas;
          break;
        case "La Providencia":
          providDiasParada = providDiasParada + p.horas_paradas;
          break;
        case "La Trinidad":
          trinidadDiasParada = trinidadDiasParada + p.horas_paradas;
          break;
        case "Leales":
          lealesDiasParada = lealesDiasParada + p.horas_paradas;
          break;
        case "Marapa":
          marapaDiasParada = marapaDiasParada + p.horas_paradas;
          break;
        case "Ñuñorco":
          nunorcoDiasParada = nunorcoDiasParada + p.horas_paradas;
          break;
        case "Santa Bárbara":
          barbaraDiasParada = barbaraDiasParada + p.horas_paradas;
          break;
        case "Santa Rosa":
          rosaDiasParada = rosaDiasParada + p.horas_paradas;
          break;
        default:
          break;
      }
    }
    setAguilDiasParada(aguilDiasParada / 24);
    setBellavistaDiasParada(bellavistaDiasParada / 24);
    setConcepDiasParada(concepDiasParada / 24);
    setCruzaltaDiasParada(cruzaltaDiasParada / 24);
    setFamaillaDiasParada(famaillaDiasParada / 24);
    setCoronaDiasParada(coronaDiasParada / 24);
    setFloridaDiasParada(floridaDiasParada / 24);
    setProvidDiasParada(providDiasParada / 24);
    setTrinidadDiasParada(trinidadDiasParada / 24);
    setLealesDiasParada(lealesDiasParada / 24);
    setMarapaDiasParada(marapaDiasParada / 24);
    setNunorcoDiasParada(nunorcoDiasParada / 24);
    setBarbaraDiasParada(barbaraDiasParada / 24);
    setRosaDiasParada(rosaDiasParada / 24);
  };
  /*********************/

  /** Boton desplegable **/
  const handleMenuClick = (e) => {
    if (e.key === 1) {
    }
    if (e.key === 2) {
      exportarParteComparativo();
    }
  };

  const items = [
    {
      label: (
        <button
          disabled
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "0px solid white",
            cursor: "not-allowed",
          }}
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
              dataUserRegister,
              setBanderaDataNull,
              inicioZafra,
              inicioZafraComparativa,
              fechasInicioIngenios,
              dataDiasZafra,
              fechasInicioIngeniosComparativa,
              dataDiasZafraComparativa,
              setDataImport,
              setDataImportComparativa,
              setDataImportDestileria,
              setDataImportDestileriaComparativa,
              dataIngenios,
              finZafra,
              finZafraComparativa,
              dataComparativa,
              fechaInicioDestileria,
              zafraParteDiario,
              fechasInicioDestileriaIngenios,
              fechasInicioDestileriaIngeniosComparativa,
              /**NORTE **/
              inicioZafraNorte,
              inicioZafraNorteComparativa,
              finZafraNorte,
              finZafraNorteComparativa,
              fechasInicioIngeniosNorte,
              fechasInicioIngeniosNorteComparativa,
              fechasInicioDestileriaIngeniosNorte,
              fechasInicioDestileriaIngeniosNorteComparativa,
              dataDiasZafraNorte,
              dataDiasZafraNorteComparativa,
              aguilDiasParada,
              bellavistaDiasParada,
              concepDiasParada,
              cruzaltaDiasParada,
              famaillaDiasParada,
              coronaDiasParada,
              floridaDiasParada,
              providDiasParada,
              trinidadDiasParada,
              lealesDiasParada,
              marapaDiasParada,
              nunorcoDiasParada,
              barbaraDiasParada,
              rosaDiasParada
            )
          }
        >
          Zafra comparativa
        </button>
      ),
      key: "1",
      // icon: <UserOutlined />,
    },
    {
      label: (
        <button
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "0px solid white",
          }}
          onClick={() => exportarParteComparativo()}
        >
          Zafra actual
        </button>
      ),
      key: "2",
      // icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <>
      <Row className="d-flex justify-content-start align-items-center px-4 pb-0 pt-2">
        <Col xs={12} className="mb-3 mt-0">
          <p className="me-4 mb-0">Observaciones:</p>
          <TextArea row={3} disabled={!zafraParteDiario ? true : false} onChange={(e) => setObservaciones(e.target.value)} />
        </Col>
        <Col xs={12} className="mb-2">
          <Row className="justify-content-start">
            <Col className="mb-1 encabezados-panel fw-bolder">
              Datos hasta: {dataEnd ? moment(dataEnd).format("DD-MM-YYYY") : ""}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Días de zafra: {Math.ceil(diasZafraFormat)}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Días de Destilería: {Math.ceil(diasDestileriaFormat)}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Rto CMB(%):{" "}
              {panelCMB
                ? ((panelAzucarEquivalente / panelCMB) / 10).toFixed(2)
                : ""}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Avance de zafra(%):{" "}
              {(panelCMB && estimacionEEAOC !== 0) ? ((panelCMB / estimacionEEAOC) * 100).toFixed(2) : 0}
            </Col>
          </Row>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Caña molida bruta
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelCMB?.toLocaleString("es-ES")} [Tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">Azúcar Total</p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucar?.toLocaleString("es-ES")} [Tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">Azúcar Crudo</p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarCrudo?.toLocaleString("es-ES")} [Tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Azúcar Blanco A
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarBlancoA?.toLocaleString("es-ES")} [Tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Azúcar Refinado
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarRefinado?.toLocaleString("es-ES")} [Tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">
              Azúcar Orgánico
            </p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAzucarOrganico?.toLocaleString("es-ES")} [Tn]
            </p>
          </div>
        </Col>
        <Col className="align-items-center col-valores p-2 mx-2">
          <div>
            <p className="text-center fw-bolder mb-1 t-panel">Alcohol</p>
          </div>
          <div>
            <p className="text-center mb-1 dato-panel">
              {panelAlcohol?.toLocaleString("es-ES")} [L]
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        <Col xs={12} className="text-start mb-5 mt-4">
          <Dropdown menu={menuProps}>
            <Button
              className={`${(dataEnd === null ||
                  dataImport === null ||
                  dataImportComparativa === null ||
                  fechasInicioIngenios === null ||
                  loadingDownload === true ||
                  fechasInicioIngeniosComparativa === null) &&
                "disabled"
                }`}
            >
              <Space>
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
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
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