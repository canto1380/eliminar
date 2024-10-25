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
  setBanderaDataNull,
  setDataImport,
  setDataImportComparativa,
  setDataImportDestileria,
  setDataImportDestileriaComparativa,
  dateInicioIngenios,
  dateFinIngenios,
  dataIngenios,
  zafraParteDiario,
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
  const [
    fechasInicioDestileriaIngeniosComparativa,
    setFechasInicioDestileriaIngeniosComparativa,
  ] = useState(null);
  const [fechasInicioIngeniosComparativa, setFechasInicioIngeniosComparativa] =
    useState(null);

  /** FECHAS DE TODOS LOS INGENIOS DE INICIO Y FIN NORTE **/
  const [fechasInicioIngeniosNorte, setFechasInicioIngeniosNorte] =
    useState(null);
  const [
    fechasInicioDestileriaIngeniosNorte,
    setFechasInicioDestileriaIngeniosNorte,
  ] = useState(null);

  const [
    fechasInicioIngeniosNorteComparativa,
    setFechasInicioIngeniosNorteComparativa,
  ] = useState(null);
  const [
    fechasInicioDestileriaIngeniosNorteComparativa,
    setFechasInicioDestileriaIngeniosNorteComparativa,
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
      setFechasInicioIngenios,
      setFechasInicioDestileriaIngenios,
      setFechasInicioIngeniosNorte,
      setFechasInicioDestileriaIngeniosNorte,
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
      setFechasInicioDestileriaIngeniosComparativa,
      setFechasInicioIngeniosNorteComparativa,
      setFechasInicioDestileriaIngeniosNorteComparativa
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
  ]);

  /*** DATOS DIAS PARADAS ***/
  useEffect(() => {
    if (dataAnio !== null && dataEnd !== null) {
      dataDiasParadaExport();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAnio, dataEnd]);
  const dataDiasParadaExport = async () => {
    const params = { anio: dataAnio };
    const data = await getDiasParadas(params);
    setDiasParadaExport(data);
  };

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
  useEffect(() => {
    cantDiasZafra();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inicioZafra, finZafra]);
  const cantDiasZafra = () => {
    if (inicioZafra === "") {
      setDataDiasZafra(0);
    }

    if (inicioZafra !== "" && dataEnd < inicioZafra) {
      setDataDiasZafra(0);
    }

    if (inicioZafra !== "" && finZafra === "" && dataEnd >= inicioZafra) {
      const diffDates =
        new Date(dataEnd).getTime() - new Date(inicioZafra).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafra(Math.ceil(diffTotal));
    }

    if (
      inicioZafra !== "" &&
      finZafra !== "" &&
      dataEnd >= inicioZafra &&
      dataEnd > finZafra
    ) {
      const diffDates =
        new Date(finZafra).getTime() - new Date(inicioZafra).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafra(Math.ceil(diffTotal));
    }

    if (
      inicioZafra !== "" &&
      finZafra !== "" &&
      dataEnd >= inicioZafra &&
      dataEnd <= finZafra
    ) {
      const diffDates =
        new Date(dataEnd).getTime() - new Date(inicioZafra).getTime();
      const diffTotal = diffDates / (1000 * 60 * 60 * 24);
      setDataDiasZafra(Math.ceil(diffTotal));
    }
  };

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
    }
  });

  /** CANTIDAD DIAS DE DESTILERIA **/
  const diasDestileria = dataEnd ? dataEnd - fechaInicioDestileria : "";
  const diasDestileriaFormat = diasDestileria / (1000 * 60 * 60 * 24);

  // const as = new Date(fechasInicioIngenios.Cell10)
  /** Exportacion **/
  const exportarParteComparativo = async () => {
    try {
      setLoadingDownload(true);
      const dateFormat = moment(dataEnd).format("DD-MM-YYYY");
      const dataSend = [
        {
          dataEnd,
          diasParadaExport,
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
        },
      ];
      const res = await apiExportExcel("POST", "descargar", dataSend);
      if (res.status === 200) {
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `Parte diario directorio - ${dateFormat}`;
        link.click();
        link.remove();
        window.URL.revokeObjectURL(link);
        setDataImport(null);
        setDataImportComparativa(null);
        setDataImportDestileria(null);
        setDataImportDestileriaComparativa(null);
        setLoadingDownload(false);
        message.success("Descarga realizada correctamente", 5);
        window.location.reload();
      } else {
        console.log("Error al generar el excel");
      }
    } catch (error) {
      console.error("Error en el fetch:", error);
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
          console.log(p.nombre_ingenio);
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
          style={{
            backgroundColor: "transparent",
            color: "black",
            border: "0px solid white",
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
      <Row className="d-flex justify-content-start align-items-center px-4 pb-0 pt-4">
        <Col xs={12} className="mb-2">
          <Row className="justify-content-start">
            <Col className="mb-1 encabezados-panel fw-bolder">
              Datos hasta: {dataEnd ? moment(dataEnd).format("DD-MM-YYYY") : ""}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Días de zafra: {dataDiasZafra}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Días de Destilería: {Math.ceil(diasDestileriaFormat)}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Rto CMB(%):{" "}
              {panelCMB
                ? ((panelAzucarEquivalente / panelCMB) * 100).toFixed(2)
                : ""}
            </Col>
            <Col className="mb-1 encabezados-panel fw-bolder">
              Avance de zafra(%):{" "}
              {panelCMB ? ((panelCMB / estimacionEEAOC) * 100).toFixed(2) : ""}
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
              className={`${
                (dataEnd === null ||
                  dataImport === null ||
                  dataImportComparativa === null ||
                  fechasInicioIngenios === null ||
                  loadingDownload === true ||
                  fechasInicioIngeniosComparativa === null) &&
                "disabled"
              }`}
              onClick={(e) => console.log(e)}
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

// /**BELLA VISTA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$190:$C$581;'DB original'!$G$190:$G$581;'DB original'!$K$190:$K$581;'DB original'!$O$190:$O$581;'DB original'!$S$190:$S$581;'DB original'!$W$190:$W$581;'DB original'!$AA$190:$AA$581;'DB original'!$AE$190:$AE$581;'DB original'!$AI$190:$AI$581);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$190:$D$581;'DB original'!$H$190:$H$581;'DB original'!$L$190:$L$581;'DB original'!$P$190:$P$581;'DB original'!$T$190:$T$581;'DB original'!$X$190:$X$581;'DB original'!$AB$190:$AB$581;'DB original'!$AF$190:$AF$581;'DB original'!$AJ$190:$AJ$581);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$190:$E$581;'DB original'!$I$190:$I$581;'DB original'!$M$190:$M$581;'DB original'!$Q$190:$Q$581;'DB original'!$U$190:$U$581;'DB original'!$Y$190:$Y$581;'DB original'!$AC$190:$AC$581;'DB original'!$AG$190:$AG$581;'DB original'!$AK$190:$AK$581);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$190:$F$581;'DB original'!$J$190:$J$581;'DB original'!$N$190:$N$581;'DB original'!$R$190:$R$581;'DB original'!$V$190:$V$581;'DB original'!$Z$190:$Z$581;'DB original'!$AD$190:$AD$581;'DB original'!$AH$190:$AH$581;'DB original'!$AL$190:$AL$581);1))

// /** CONCEPCION **/
// =(K.ESIMO.MAYOR(('DB original'!$C$582:$C$877;'DB original'!$G$582:$G$877;'DB original'!$K$582:$K$877;'DB original'!$O$582:$O$877;'DB original'!$S$582:$S$877;'DB original'!$W$582:$W$877;'DB original'!$AA$582:$AA$877;'DB original'!$AE$582:$AE$877;'DB original'!$AI$582:$AI$877);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$582:$D$877;'DB original'!$H$582:$H$877;'DB original'!$L$582:$L$877;'DB original'!$P$582:$P$877;'DB original'!$T$582:$T$877;'DB original'!$X$582:$X$877;'DB original'!$AB$582:$AB$877;'DB original'!$AF$582:$AF$877;'DB original'!$AJ$582:$AJ$877);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$582:$E$877;'DB original'!$I$582:$I$877;'DB original'!$M$582:$M$877;'DB original'!$Q$582:$Q$877;'DB original'!$U$582:$U$877;'DB original'!$Y$582:$Y$877;'DB original'!$AC$582:$AC$877;'DB original'!$AG$582:$AG$877;'DB original'!$AK$582:$AK$877);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$582:$F$877;'DB original'!$J$582:$J$877;'DB original'!$N$582:$N$877;'DB original'!$R$582:$R$877;'DB original'!$V$582:$V$877;'DB original'!$Z$582:$Z$877;'DB original'!$AD$582:$AD$877;'DB original'!$AH$582:$AH$877;'DB original'!$AL$582:$AL$877);1))

// /** CRUZ ALTA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$878:$C$1105;'DB original'!$G$878:$G$1105;'DB original'!$K$878:$K$1105;'DB original'!$O$878:$O$1105;'DB original'!$S$878:$S$1105;'DB original'!$W$878:$W$1105;'DB original'!$AA$878:$AA$1105;'DB original'!$AE$878:$AE$1105;'DB original'!$AI$878:$AI$1105);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$878:$D$1105;'DB original'!$H$878:$H$1105;'DB original'!$L$878:$L$1105;'DB original'!$P$878:$P$1105;'DB original'!$T$878:$T$1105;'DB original'!$X$878:$X$1105;'DB original'!$AB$878:$AB$1105;'DB original'!$AF$878:$AF$1105;'DB original'!$AJ$878:$AJ$1105);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$878:$E$1105;'DB original'!$I$878:$I$1105;'DB original'!$M$878:$M$1105;'DB original'!$Q$878:$Q$1105;'DB original'!$U$878:$U$1105;'DB original'!$Y$878:$Y$1105;'DB original'!$AC$878:$AC$1105;'DB original'!$AG$878:$AG$1105;'DB original'!$AK$878:$AK$1105);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$878:$F$1105;'DB original'!$J$878:$J$1105;'DB original'!$N$878:$N$1105;'DB original'!$R$878:$R$1105;'DB original'!$V$878:$V$1105;'DB original'!$Z$878:$Z$1105;'DB original'!$AD$878:$AD$1105;'DB original'!$AH$878:$AH$1105;'DB original'!$AL$878:$AL$1105);1))

// /** FAMAILLA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$1106:$C$1395;'DB original'!$G$1106:$G$1395;'DB original'!$K$1106:$K$1395;'DB original'!$O$1106:$O$1395;'DB original'!$S$1106:$S$1395;'DB original'!$W$1106:$W$1395;'DB original'!$AA$1106:$AA$1395;'DB original'!$AE$1106:$AE$1395;'DB original'!$AI$1106:$AI$1395);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$1106:$D$1395;'DB original'!$H$1106:$H$1395;'DB original'!$L$1106:$L$1395;'DB original'!$P$1106:$P$1395;'DB original'!$T$1106:$T$1395;'DB original'!$X$1106:$X$1395;'DB original'!$AB$1106:$AB$1395;'DB original'!$AF$1106:$AF$1395;'DB original'!$AJ$1106:$AJ$1395);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$1106:$E$1395;'DB original'!$I$1106:$I$1395;'DB original'!$M$1106:$M$1395;'DB original'!$Q$1106:$Q$1395;'DB original'!$U$1106:$U$1395;'DB original'!$Y$1106:$Y$1395;'DB original'!$AC$1106:$AC$1395;'DB original'!$AG$1106:$AG$1395;'DB original'!$AK$1106:$AK$1395);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$1106:$F$1395;'DB original'!$J$1106:$J$1395;'DB original'!$N$1106:$N$1395;'DB original'!$R$1106:$R$1395;'DB original'!$V$1106:$V$1395;'DB original'!$Z$1106:$Z$1395;'DB original'!$AD$1106:$AD$1395;'DB original'!$AH$1106:$AH$1395;'DB original'!$AL$1106:$AL$1395);1))

// /** LA CORONA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$1396:$C$1717;'DB original'!$G$1396:$G$1717;'DB original'!$K$1396:$K$1717;'DB original'!$O$1396:$O$1717;'DB original'!$S$1396:$S$1717;'DB original'!$W$1396:$W$1717;'DB original'!$AA$1396:$AA$1717;'DB original'!$AE$1396:$AE$1717;'DB original'!$AI$1396:$AI$1717);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$1396:$D$1717;'DB original'!$H$1396:$H$1717;'DB original'!$L$1396:$L$1717;'DB original'!$P$1396:$P$1717;'DB original'!$T$1396:$T$1717;'DB original'!$X$1396:$X$1717;'DB original'!$AB$1396:$AB$1717;'DB original'!$AF$1396:$AF$1717;'DB original'!$AJ$1396:$AJ$1717);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$1396:$E$1717;'DB original'!$I$1396:$I$1717;'DB original'!$M$1396:$M$1717;'DB original'!$Q$1396:$Q$1717;'DB original'!$U$1396:$U$1717;'DB original'!$Y$1396:$Y$1717;'DB original'!$AC$1396:$AC$1717;'DB original'!$AG$1396:$AG$1717;'DB original'!$AK$1396:$AK$1717);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$1396:$F$1717;'DB original'!$J$1396:$J$1717;'DB original'!$N$1396:$N$1717;'DB original'!$R$1396:$R$1717;'DB original'!$V$1396:$V$1717;'DB original'!$Z$1396:$Z$1717;'DB original'!$AD$1396:$AD$1717;'DB original'!$AH$1396:$AH$1717;'DB original'!$AL$1396:$AL$1717);1))

// /** LA FLORIDA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$1718:$C$2120;'DB original'!$G$1718:$G$2120;'DB original'!$K$1718:$K$2120;'DB original'!$O$1718:$O$2120;'DB original'!$S$1718:$S$2120;'DB original'!$W$1718:$W$2120;'DB original'!$AA$1718:$AA$2120;'DB original'!$AE$1718:$AE$2120;'DB original'!$AI$1718:$AI$2120);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$1718:$D$2120;'DB original'!$H$1718:$H$2120;'DB original'!$L$1718:$L$2120;'DB original'!$P$1718:$P$2120;'DB original'!$T$1718:$T$2120;'DB original'!$X$1718:$X$2120;'DB original'!$AB$1718:$AB$2120;'DB original'!$AF$1718:$AF$2120;'DB original'!$AJ$1718:$AJ$2120);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$1718:$E$2120;'DB original'!$I$1718:$I$2120;'DB original'!$M$1718:$M$2120;'DB original'!$Q$1718:$Q$2120;'DB original'!$U$1718:$U$2120;'DB original'!$Y$1718:$Y$2120;'DB original'!$AC$1718:$AC$2120;'DB original'!$AG$1718:$AG$2120;'DB original'!$AK$1718:$AK$2120);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$1718:$F$2120;'DB original'!$J$1718:$J$2120;'DB original'!$N$1718:$N$2120;'DB original'!$R$1718:$R$2120;'DB original'!$V$1718:$V$2120;'DB original'!$Z$1718:$Z$2120;'DB original'!$AD$1718:$AD$2120;'DB original'!$AH$1718:$AH$2120;'DB original'!$AL$1718:$AL$2120);1))

// /** LA PROVIDENCIA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$2121:$C$2328;'DB original'!$G$2121:$G$2328;'DB original'!$K$2121:$K$2328;'DB original'!$O$2121:$O$2328;'DB original'!$S$2121:$S$2328;'DB original'!$W$2121:$W$2328;'DB original'!$AA$2121:$AA$2328;'DB original'!$AE$2121:$AE$2328;'DB original'!$AI$2121:$AI$2328);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$2121:$D$2328;'DB original'!$H$2121:$H$2328;'DB original'!$L$2121:$L$2328;'DB original'!$P$2121:$P$2328;'DB original'!$T$2121:$T$2328;'DB original'!$X$2121:$X$2328;'DB original'!$AB$2121:$AB$2328;'DB original'!$AF$2121:$AF$2328;'DB original'!$AJ$2121:$AJ$2328);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$2121:$E$2328;'DB original'!$I$2121:$I$2328;'DB original'!$M$2121:$M$2328;'DB original'!$Q$2121:$Q$2328;'DB original'!$U$2121:$U$2328;'DB original'!$Y$2121:$Y$2328;'DB original'!$AC$2121:$AC$2328;'DB original'!$AG$2121:$AG$2328;'DB original'!$AK$2121:$AK$2328);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$2121:$F$2328;'DB original'!$J$2121:$J$2328;'DB original'!$N$2121:$N$2328;'DB original'!$R$2121:$R$2328;'DB original'!$V$2121:$V$2328;'DB original'!$Z$2121:$Z$2328;'DB original'!$AD$2121:$AD$2328;'DB original'!$AH$2121:$AH$2328;'DB original'!$AL$2121:$AL$2328);1))

// /** LA TRINIDAD **/
// =(K.ESIMO.MAYOR(('DB original'!$C$2329:$C$2565;'DB original'!$G$2329:$G$2565;'DB original'!$K$2329:$K$2565;'DB original'!$O$2329:$O$2565;'DB original'!$S$2329:$S$2565;'DB original'!$W$2329:$W$2565;'DB original'!$AA$2329:$AA$2565;'DB original'!$AE$2329:$AE$2565;'DB original'!$AI$2329:$AI$2565);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$2329:$D$2565;'DB original'!$H$2329:$H$2565;'DB original'!$L$2329:$L$2565;'DB original'!$P$2329:$P$2565;'DB original'!$T$2329:$T$2565;'DB original'!$X$2329:$X$2565;'DB original'!$AB$2329:$AB$2565;'DB original'!$AF$2329:$AF$2565;'DB original'!$AJ$2329:$AJ$2565);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$2329:$E$2565;'DB original'!$I$2329:$I$2565;'DB original'!$M$2329:$M$2565;'DB original'!$Q$2329:$Q$2565;'DB original'!$U$2329:$U$2565;'DB original'!$Y$2329:$Y$2565;'DB original'!$AC$2329:$AC$2565;'DB original'!$AG$2329:$AG$2565;'DB original'!$AK$2329:$AK$2565);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$2329:$F$2565;'DB original'!$J$2329:$J$2565;'DB original'!$N$2329:$N$2565;'DB original'!$R$2329:$R$2565;'DB original'!$V$2329:$V$2565;'DB original'!$Z$2329:$Z$2565;'DB original'!$AD$2329:$AD$2565;'DB original'!$AH$2329:$AH$2565;'DB original'!$AL$2329:$AL$2565);1))

// /** LEALES **/
// =(K.ESIMO.MAYOR(('DB original'!$C$2566:$C$2888;'DB original'!$G$2566:$G$2888;'DB original'!$K$2566:$K$2888;'DB original'!$O$2566:$O$2888;'DB original'!$S$2566:$S$2888;'DB original'!$W$2566:$W$2888;'DB original'!$AA$2566:$AA$2888;'DB original'!$AE$2566:$AE$2888;'DB original'!$AI$2566:$AI$2888);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$2566:$D$2888;'DB original'!$H$2566:$H$2888;'DB original'!$L$2566:$L$2888;'DB original'!$P$2566:$P$2888;'DB original'!$T$2566:$T$2888;'DB original'!$X$2566:$X$2888;'DB original'!$AB$2566:$AB$2888;'DB original'!$AF$2566:$AF$2888;'DB original'!$AJ$2566:$AJ$2888);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$2566:$E$2888;'DB original'!$I$2566:$I$2888;'DB original'!$M$2566:$M$2888;'DB original'!$Q$2566:$Q$2888;'DB original'!$U$2566:$U$2888;'DB original'!$Y$2566:$Y$2888;'DB original'!$AC$2566:$AC$2888;'DB original'!$AG$2566:$AG$2888;'DB original'!$AK$2566:$AK$2888);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$2566:$F$2888;'DB original'!$J$2566:$J$2888;'DB original'!$N$2566:$N$2888;'DB original'!$R$2566:$R$2888;'DB original'!$V$2566:$V$2888;'DB original'!$Z$2566:$Z$2888;'DB original'!$AD$2566:$AD$2888;'DB original'!$AH$2566:$AH$2888;'DB original'!$AL$2566:$AL$2888);1))

// /** MARAPA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$2889:$C$3144;'DB original'!$G$2889:$G$3144;'DB original'!$K$2889:$K$3144;'DB original'!$O$2889:$O$3144;'DB original'!$S$2889:$S$3144;'DB original'!$W$2889:$W$3144;'DB original'!$AA$2889:$AA$3144;'DB original'!$AE$2889:$AE$3144;'DB original'!$AI$2889:$AI$3144);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$2889:$D$3144;'DB original'!$H$2889:$H$3144;'DB original'!$L$2889:$L$3144;'DB original'!$P$2889:$P$3144;'DB original'!$T$2889:$T$3144;'DB original'!$X$2889:$X$3144;'DB original'!$AB$2889:$AB$3144;'DB original'!$AF$2889:$AF$3144;'DB original'!$AJ$2889:$AJ$3144);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$2889:$E$3144;'DB original'!$I$2889:$I$3144;'DB original'!$M$2889:$M$3144;'DB original'!$Q$2889:$Q$3144;'DB original'!$U$2889:$U$3144;'DB original'!$Y$2889:$Y$3144;'DB original'!$AC$2889:$AC$3144;'DB original'!$AG$2889:$AG$3144;'DB original'!$AK$2889:$AK$3144);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$2889:$F$3144;'DB original'!$J$2889:$J$3144;'DB original'!$N$2889:$N$3144;'DB original'!$R$2889:$R$3144;'DB original'!$V$2889:$V$3144;'DB original'!$Z$2889:$Z$3144;'DB original'!$AD$2889:$AD$3144;'DB original'!$AH$2889:$AH$3144;'DB original'!$AL$2889:$AL$3144);1))

// /** NUNORCO **/
// =(K.ESIMO.MAYOR(('DB original'!$C$3145:$C$3318;'DB original'!$G$3145:$G$3318;'DB original'!$K$3145:$K$3318;'DB original'!$O$3145:$O$3318;'DB original'!$S$3145:$S$3318;'DB original'!$W$3145:$W$3318;'DB original'!$AA$3145:$AA$3318;'DB original'!$AE$3145:$AE$3318;'DB original'!$AI$3145:$AI$3318);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$3145:$D$3318;'DB original'!$H$3145:$H$3318;'DB original'!$L$3145:$L$3318;'DB original'!$P$3145:$P$3318;'DB original'!$T$3145:$T$3318;'DB original'!$X$3145:$X$3318;'DB original'!$AB$3145:$AB$3318;'DB original'!$AF$3145:$AF$3318;'DB original'!$AJ$3145:$AJ$3318);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$3145:$E$3318;'DB original'!$I$3145:$I$3318;'DB original'!$M$3145:$M$3318;'DB original'!$Q$3145:$Q$3318;'DB original'!$U$3145:$U$3318;'DB original'!$Y$3145:$Y$3318;'DB original'!$AC$3145:$AC$3318;'DB original'!$AG$3145:$AG$3318;'DB original'!$AK$3145:$AK$3318);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$3145:$F$3318;'DB original'!$J$3145:$J$3318;'DB original'!$N$3145:$N$3318;'DB original'!$R$3145:$R$3318;'DB original'!$V$3145:$V$3318;'DB original'!$Z$3145:$Z$3318;'DB original'!$AD$3145:$AD$3318;'DB original'!$AH$3145:$AH$3318;'DB original'!$AL$3145:$AL$3318);1))
// /** STA BARBARA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$3319:$C$3726;'DB original'!$G$3319:$G$3726;'DB original'!$K$3319:$K$3726;'DB original'!$O$3319:$O$3726;'DB original'!$S$3319:$S$3726;'DB original'!$W$3319:$W$3726;'DB original'!$AA$3319:$AA$3726;'DB original'!$AE$3319:$AE$3726;'DB original'!$AI$3319:$AI$3726);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$3319:$D$3726;'DB original'!$H$3319:$H$3726;'DB original'!$L$3319:$L$3726;'DB original'!$P$3319:$P$3726;'DB original'!$T$3319:$T$3726;'DB original'!$X$3319:$X$3726;'DB original'!$AB$3319:$AB$3726;'DB original'!$AF$3319:$AF$3726;'DB original'!$AJ$3319:$AJ$3726);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$3319:$E$3726;'DB original'!$I$3319:$I$3726;'DB original'!$M$3319:$M$3726;'DB original'!$Q$3319:$Q$3726;'DB original'!$U$3319:$U$3726;'DB original'!$Y$3319:$Y$3726;'DB original'!$AC$3319:$AC$3726;'DB original'!$AG$3319:$AG$3726;'DB original'!$AK$3319:$AK$3726);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$3319:$F$3726;'DB original'!$J$3319:$J$3726;'DB original'!$N$3319:$N$3726;'DB original'!$R$3319:$R$3726;'DB original'!$V$3319:$V$3726;'DB original'!$Z$3319:$Z$3726;'DB original'!$AD$3319:$AD$3726;'DB original'!$AH$3319:$AH$3726;'DB original'!$AL$3319:$AL$3726);1))
// /** STA ROSA **/
// =(K.ESIMO.MAYOR(('DB original'!$C$3727:$C$4063;'DB original'!$G$3727:$G$4063;'DB original'!$K$3727:$K$4063;'DB original'!$O$3727:$O$4063;'DB original'!$S$3727:$S$4063;'DB original'!$W$3727:$W$4063;'DB original'!$AA$3727:$AA$4063;'DB original'!$AE$3727:$AE$4063;'DB original'!$AI$3727:$AI$4063);1))
// =(K.ESIMO.MAYOR(('DB original'!$D$3727:$D$4063;'DB original'!$H$3727:$H$4063;'DB original'!$L$3727:$L$4063;'DB original'!$P$3727:$P$4063;'DB original'!$T$3727:$T$4063;'DB original'!$X$3727:$X$4063;'DB original'!$AB$3727:$AB$4063;'DB original'!$AF$3727:$AF$4063;'DB original'!$AJ$3727:$AJ$4063);1))
// =(K.ESIMO.MAYOR(('DB original'!$E$3727:$E$4063;'DB original'!$I$3727:$I$4063;'DB original'!$M$3727:$M$4063;'DB original'!$Q$3727:$Q$4063;'DB original'!$U$3727:$U$4063;'DB original'!$Y$3727:$Y$4063;'DB original'!$AC$3727:$AC$4063;'DB original'!$AG$3727:$AG$4063;'DB original'!$AK$3727:$AK$4063);1))
// =(K.ESIMO.MAYOR(('DB original'!$F$3727:$F$4063;'DB original'!$J$3727:$J$4063;'DB original'!$N$3727:$N$4063;'DB original'!$R$3727:$R$4063;'DB original'!$V$3727:$V$4063;'DB original'!$Z$3727:$Z$4063;'DB original'!$AD$3727:$AD$4063;'DB original'!$AH$3727:$AH$4063;'DB original'!$AL$3727:$AL$4063);1))

// =MIN(D10:M10)
// =MIN(D18:M18)
// =MIN(D26:M26)
// =MIN(D34:M34)
// =MIN(D42:M42)
// =MIN(D50:M50)
// =MIN(D58:M58)
// =MIN(D66:M66)
// =MIN(D74:M74)
// =MIN(D82:M82)
// =MIN(D90:M90)
// =MIN(D98:M98)
// =MIN(D106:M106)
// =MIN(D114:M114)

// =MAX(D10:M10)
// =MAX(D18:M18)
// =MAX(D26:M26)
// =MAX(D34:M34)
// =MAX(D42:M42)
// =MAX(D50:M50)
// =MAX(D58:M58)
// =MAX(D66:M66)
// =MAX(D74:M74)
// =MAX(D82:M82)
// =MAX(D90:M90)
// =MAX(D98:M98)
// =MAX(D106:M106)
// =MAX(D114:M114)
