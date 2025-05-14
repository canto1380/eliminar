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
import MsgErrorServerJSON from "../../components/Messages/MsgErrorServerJSON";
import { getParteDiarios } from "../../utils/queryAPI/parteDiarios";
import "./ParteDiarioContainer.css";
import { getActualizarPartesDiarios } from "../../utils/queryAPI/actualizarPartesDiarios";
import { getLastUpdated } from "../../utils/queryAPI/lastUpdated";
import { notification } from "antd";
import { toast } from "react-toastify";

const ParteDiarioContainer = () => {
  const [errorServer, setErrorServer] = useState(false);
  const [msgErrorServer, setMsgErrorServer] = useState("");
  const [errorInterno, setErrorInterno] = useState(false);
  const [msgErrorInterno, setMsgErrorInterno] = useState("");
  const [dataEnd, setDataEnd] = useState(null);
  const [dataZafra, setDataZafra] = useState(null);
  const [dataAnio, setDataAnio] = useState(null);
  const [dataMes, setDataMes] = useState(null);
  const [dataQuincena, setDataQuincena] = useState(null);
  const [dataParteDiariosHistoricos, setDataParteDiariosHistoricos] =
    useState(null);

  const [dataImport, setDataImport] = useState(null);
  const [dataImportComparativa, setDataImportComparativa] = useState(null);
  const [dataImportDestileria, setDataImportDestileria] = useState(null);
  const [dataImportDestileriaComparativa, setDataImportDestileriaComparativa] =
    useState(null);
  const [dataImportAnhidro, setDataImportAnhidro] = useState(null);
  const [dataImportAnhidroComparativa, setDataImportAnhidroComparativa] =
    useState(null);

  const [banderaDataNull, setBanderaDataNull] = useState(false);
  const [dateInicioIngenios, setDateInicioIngenios] = useState(null);
  const [dateFinIngenios, setDateFinIngenios] = useState(null);
  const [dataIngenios, setDataIngenios] = useState(null);
  const [zafraParteDiario, setZafraParteDiario] = useState(null);

  const [inicioZafra, setInicioZafra] = useState(null);
  const [finZafra, setFinZafra] = useState(null);
  const [inicioZafraComparativa, setInicioZafraComparativa] = useState(null);
  const [finZafraComparativa, setFinZafraComparativa] = useState(undefined);

  const [inicioDestileria, setInicioDestileria] = useState(null);
  const [finDestileria, setFinDestileria] = useState(null);
  const [inicioDestileriaComparativa, setInicioDestileriaComparativa] =
    useState(null);
  const [finDestileriaComparativa, setFinDestileriaComparativa] =
    useState(undefined);

  const [inicioAnhidro, setInicioAnhidro] = useState(null);
  const [finAnhidro, setFinAnhidro] = useState(null);
  const [inicioAnhidroComparativo, setInicioAnhidroComparativo] =
    useState(null);
  const [finAnhidroComparativo, setFinAnhidroComparativo] = useState(null);

  const [loading, setLoading] = useState(false);
  const [dataParteDiarios, setDataParteDiarios] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  console.log('Periodos:: ', dateInicioIngenios)
  console.log('Zafra: ',inicioZafra, finZafra)
  console.log('Destileria: ',inicioDestileria, finDestileria)
  console.log('Anhidro: ',inicioAnhidro, finAnhidro)
  console.log('Comparativo::', dateFinIngenios)
  console.log('Zafra Comparativo: ',inicioZafraComparativa, finZafraComparativa)
  console.log('Destileria Comparativo: ',inicioDestileriaComparativa, finDestileriaComparativa)
  console.log('Anhidro Comparativo: ',inicioAnhidroComparativo, finAnhidroComparativo)


  useEffect(() => {
    if (dataZafra !== null) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafra]);


  useEffect(() => {
    getDataParteDiarios();
  }, []);
  const getDataParteDiarios = async () => {
    const data = await getParteDiarios();
    setDataParteDiarios(data);
    aa(data);
  };

  const aa = (data) => {
    const maxByIngenio = Object.values(
      data.reduce((acc, curr) => {
        const fecha = new Date(curr.fechaParte);
        const fechaLimite = new Date("2015-01-01");

        if (fecha < fechaLimite) return acc;
        const nombre = curr.ingenioNombre;
        if (
          !acc[nombre] ||
          curr.moliendaCanaBruta > acc[nombre].moliendaCanaBruta
        ) {
          acc[nombre] = curr;
        }
        return acc;
      }, {})
    );
  };

  useEffect(() => {
    dataLastUpdated();
  }, [loading]);

  const dataLastUpdated = async () => {
    const data = await getLastUpdated();
    const fecha = new Date(data[0]?.fechaParte).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setLastUpdated(fecha);
  };

  const getData = async () => {
    try {
      setDataParteDiariosHistoricos(null);
      const params = {
        fechadesde: `01-04-${dataZafra}`,
        fechahasta: `31-03-${dataZafra + 1}`,
      };

      /***** DESDE BACKEND *****/
      const data = await getDataPartesDiariosBE(params, "/dataQuincenal"); // DESDE BACKEND
      if (data.status === 200) {
        setDataParteDiariosHistoricos(data?.data?.data?.ParteDiarios);
      }
      if (data.response.status === 503) {
        setErrorServer(true);
        setMsgErrorServer(data.response.data.error);
      }
      // setDataParteDiariosHistoricos(data)
    } catch (error) {
      setErrorInterno(true);
      setMsgErrorInterno(
        "Hubo un problema interno del servidor. Recargue la página."
      );
      setTimeout(() => {
        setErrorInterno(false);
      }, 3000);
    }
  };
  useEffect(() => {
    if (dataEnd !== null) {
      getDataImportZafra();
      getDataImportDestileria();
      getDataImportAnhidro();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    zafraParteDiario,
    dataEnd,
    inicioZafra,
    finZafra,
    inicioZafraComparativa,
    finZafraComparativa,
    dateInicioIngenios,
  ]);
  const getDataImportZafra = async () => {
    const inicioComparativa = new Date(inicioZafraComparativa);
    const aa = new Date(periodosComparativo.inicio_zafra)
    console.log(aa)
    /**FECHA FIN INGRESADA AL ELEGIR FECHA DE PARTE **/
    const verificarFechaFin =
      finZafra !== null ? (dataEnd > finZafra ? finZafra : dataEnd) : dataEnd;
    /************************************************/

    const fechaInicioComparativo = `${inicioComparativa.getDate()}-${
      inicioComparativa.getMonth() + 1
    }-${zafraParteDiario - 1}`;

    const [day1, month1, year1] = fechaInicioComparativo.split("-");
    const fechaInicioComparativoProcesada = new Date(
      `${year1}-${month1.padStart(2, "0")}-${day1.padStart(2, "0")}T00:00:00`
    );
    const fechaFinComparativoAUsar =
      new Date(dataEnd) < new Date(finZafraComparativa)
        ? dataEnd
        : new Date(finZafraComparativa);
    const fechaFinComparativo = `${fechaFinComparativoAUsar.getDate()}-${
      fechaFinComparativoAUsar.getMonth() + 1
    }-${zafraParteDiario - 1}`;

    const [day, month, year] = fechaFinComparativo.split("-");
    const fechaFinComparativoProcesada = new Date(
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00`
    );
    /************************************************/
    console.log(dataParteDiarios)
    try {
      setLoading(true);
      if (inicioZafra !== null && dataParteDiarios.length > 0) {
        const dataAImportar = dataParteDiarios.filter((item) => {
          const fecha = new Date(item.fechaParte);
          return fecha >= inicioZafra && fecha <= verificarFechaFin;
        });
        setDataImport(dataAImportar);
      } else {
        setDataImport([]);
      }

      if (inicioZafra !== null && dataParteDiarios.length > 0) {
        const fechaInicioComparativo1 = new Date(
          fechaInicioComparativoProcesada
        );
        const fechaFinComparativo1 = new Date(fechaFinComparativoProcesada);
        const dataAImportarComparativa = dataParteDiarios.filter((item) => {
          const fecha = new Date(item.fechaParte);
          return (
            fecha >= fechaInicioComparativo1 && fecha <= fechaFinComparativo1
          );
        });
        setDataImportComparativa(dataAImportarComparativa);
      } else {
        setDataImportComparativa([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getDataImportDestileria = async () => {
    const inicioComparativa = new Date(inicioDestileriaComparativa);
    const finComparativa = new Date(finDestileriaComparativa);
    let verificarFechaFin =
      finDestileria !== null && finDestileria !== ''
        ? dataEnd > finDestileria
          ? finDestileria
          : dataEnd
        : dataEnd;
    const fechaInicioComparativo = `${inicioComparativa.getDate()}-${
      inicioComparativa.getMonth() + 1
    }-${zafraParteDiario - 1}`;

    const fechaFinComparativo =
      finDestileriaComparativa === null
        ? `${dataEnd.getDate()}-${
            dataEnd.getMonth() + 1
          }-${dataEnd.getFullYear()}`
        : `${finComparativa.getDate()}-${
            finComparativa.getMonth() + 1
          }-${finComparativa.getFullYear()}`;

    const [day1, month1, year1] = fechaInicioComparativo.split("-");
    const [day2, month2, year2] = fechaFinComparativo.split("-");
    const fechaInicioComparativoProcesada = new Date(
      `${year1}-${month1.padStart(2, "0")}-${day1.padStart(2, "0")}T00:00:00`
    );
    const fechaFinComparativoProcesada = new Date(
      `${year2}-${month2.padStart(2, "0")}-${day2.padStart(2, "0")}T00:00:00`
    );

    try {
      setLoading(true);
      if (inicioZafra !== null && dataParteDiarios.length > 0) {
        const dataDestileriaAImportar = dataParteDiarios.filter((item) => {
          const fecha = new Date(item.fechaParte);
          return fecha >= inicioDestileria && fecha <= verificarFechaFin;
        });
        setDataImportDestileria(dataDestileriaAImportar);
      } else {
        setDataImportDestileria([]);
      }

      if (inicioZafra !== null && dataParteDiarios.length > 0) {
        const fechaInicioDestileriaComparativo = new Date(
          fechaInicioComparativoProcesada
        );
        const fechaFinDestileriaComparativo = new Date(
          fechaFinComparativoProcesada
        );
        const dataDestileriaComparativoAImportar = dataParteDiarios.filter(
          (item) => {
            const fecha = new Date(item.fechaParte);
            return (
              fecha >= fechaInicioDestileriaComparativo &&
              fecha <= fechaFinDestileriaComparativo
            );
          }
        );
        setDataImportDestileriaComparativa(dataDestileriaComparativoAImportar);
      } else {
        setDataImportDestileriaComparativa([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDataImportAnhidro = async () => {
    const inicioComparativa = new Date(inicioAnhidroComparativo);
    const finComparativa = new Date(finAnhidroComparativo);
    let verificarFechaFinAnhidro =
      finAnhidro !== null && finAnhidro !== ''
        ? dataEnd > finAnhidro
          ? finAnhidro
          : dataEnd
        : dataEnd;
    // verificarFechaFinAnhidro = verificarFechaFinAnhidro === "" && dataEnd;

    const fechaInicioComparativo = `${inicioComparativa.getDate()}-${
      inicioComparativa.getMonth() + 1
    }-${zafraParteDiario - 1}`;

    const fechaFinComparativo =
      finAnhidroComparativo === null
        ? `${dataEnd.getDate()}-${
            dataEnd.getMonth() + 1
          }-${dataEnd.getFullYear()}`
        : `${finComparativa.getDate()}-${
            finComparativa.getMonth() + 1
          }-${finComparativa.getFullYear()}`;

    const [day1, month1, year1] = fechaInicioComparativo.split("-");
    const [day2, month2, year2] = fechaFinComparativo.split("-");

    const fechaInicioComparativoProcesada = new Date(
      `${year1}-${month1.padStart(2, "0")}-${day1.padStart(2, "0")}T00:00:00`
    );
    const fechaFinComparativoProcesada = new Date(
      `${year2}-${month2.padStart(2, "0")}-${day2.padStart(2, "0")}T00:00:00`
    );
    try {
      setLoading(true);
      if (inicioZafra !== null && dataParteDiarios.length > 0) {
        const dataAnhidroAImportar = dataParteDiarios.filter((item) => {
          const fecha = new Date(item.fechaParte);
          return fecha >= inicioAnhidro && fecha <= verificarFechaFinAnhidro;
        });
        setDataImportAnhidro(dataAnhidroAImportar);
      } else {
        setDataImportAnhidro([]);
      }
      if (inicioZafra !== null && dataParteDiarios.length > 0) {
        const fechaInicioAnhidroComparativo = new Date(
          fechaInicioComparativoProcesada
        );
        const fechaFinAnhidroComparativo = new Date(
          fechaFinComparativoProcesada
        );
        const dataAnhidroComparativoAImportar = dataParteDiarios.filter(
          (item) => {
            const fecha = new Date(item.fechaParte);
            return (
              fecha >= fechaInicioAnhidroComparativo &&
              fecha <= fechaFinAnhidroComparativo
            );
          }
        );
        setDataImportAnhidroComparativa(dataAnhidroComparativoAImportar);
      } else {
        setDataImportAnhidroComparativa([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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

  /*** LISTADO INGENIOS ***/
  useEffect(() => {
    getDataIngenios();
  }, []);
  const getDataIngenios = async () => {
    const data = await getIngenios();
    setDataIngenios(data);
  };
  /******/

  /*** PERIODOS INGENIOS - ACTUAL Y COMPARATIVO ***/
  useEffect(() => {
    if (dataEnd) {
      getDataPeriodos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEnd, zafraParteDiario]);
  const getDataPeriodos = async () => {
    const params = {
      limit: 10000000,
      anio: zafraParteDiario,
      deleted: 0,
      region: 1,
    };
    const data = await getPeriodoZafra(params);
    setDateInicioIngenios(data);
    const params1 = { limit: 10000000, anio: zafraParteDiario - 1, region: 1 };
    const data1 = await getPeriodoZafra(params1);
    setDateFinIngenios(data1);
  };
  /******/

  /*** INICIO Y FIN DE ZAFRA ACTUAL Y COMPARATIVA ***/
  useEffect(() => {
    inicioPeriodoZafra();
    finPeriodoZafra();
    inicioPeriodoDestileria();
    finPeriodoDestileria();
    inicioPeriodoAnhidro();
    finPeriodoAnhidro();
    inicioPeriodoZafraComparativa();
    finPeriodoZafraComparativa();
    inicioPeriodoDestileriaComparativa();
    finPeriodoDestileriaComparativa();
    inicioPeriodoAnhidroComparativa();
    finPeriodoAnhidroComparativa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateInicioIngenios, dateFinIngenios, zafraParteDiario, dataEnd]);

  let inicioZafra1 = new Date("3/10/2100");
  let finZafra1 = new Date("1/1/1910");

  const inicioPeriodoZafra = () => {
    for (let i = 0; i < dateInicioIngenios?.length; i++) {
      inicioZafra1 =
        new Date(dateInicioIngenios[i].inicio_zafra) < inicioZafra1
          ? new Date(dateInicioIngenios[i].inicio_zafra)
          : inicioZafra1;
      setInicioZafra(inicioZafra1);
    }
  };
  const finPeriodoZafra = () => {
    for (let i = 0; i < dateInicioIngenios?.length; i++) {
      if (dateInicioIngenios[i].fin_zafra === null) {
        setFinZafra(null);
        return;
      } else {
        finZafra1 =
          new Date(dateInicioIngenios[i].fin_zafra) > finZafra1
            ? new Date(dateInicioIngenios[i].fin_zafra)
            : finZafra1;
        setFinZafra(finZafra1);
      }
    }
  };
  let inicioDestileria1 = new Date("3/10/2100");
  let finDestileria1 = new Date("1/1/1910");
  const inicioPeriodoDestileria = () => {
    for (let i = 0; i < dateInicioIngenios?.length; i++) {
      if (dateInicioIngenios[i].inicio_destileria !== null) {
        inicioDestileria1 =
          new Date(dateInicioIngenios[i].inicio_destileria) < inicioDestileria1
            ? new Date(dateInicioIngenios[i].inicio_destileria)
            : inicioDestileria1;
        setInicioDestileria(inicioDestileria1);
      } else {
        setInicioDestileria(undefined);
      }
    }
  };
  const finPeriodoDestileria = () => {
    for (let i = 0; i < dateInicioIngenios?.length; i++) {
      if (
        dateInicioIngenios[i].inicio_destileria !== null &&
        dateInicioIngenios[i].fin_destileria === null
      ) {
        setFinDestileria("");
      }
      if (
        dateInicioIngenios[i].inicio_destileria !== null &&
        dateInicioIngenios[i].fin_destileria !== null
      ) {
        finDestileria1 =
          new Date(dateInicioIngenios[i].fin_destileria) > finDestileria1
            ? new Date(dateInicioIngenios[i].fin_destileria)
            : finDestileria1;
        setFinDestileria(finDestileria1);
      }
    }
  };

  /** INICIO|FIN Anhidro **/
  let inicioAnhidro1 = new Date("3/10/2100");
  const inicioPeriodoAnhidro = () => {
    for (let i = 0; i < dateInicioIngenios?.length; i++) {
      if (dateInicioIngenios[i].inicio_anhidro !== null) {
        inicioAnhidro1 =
          new Date(dateInicioIngenios[i].inicio_anhidro) < inicioAnhidro1
            ? new Date(dateInicioIngenios[i].inicio_anhidro)
            : inicioAnhidro1;
        setInicioAnhidro(inicioAnhidro1);
      } else {
        setInicioAnhidro(undefined);
      }
    }
  };
  const finPeriodoAnhidro = () => {
    if (dateInicioIngenios && dateInicioIngenios.length > 0) {
      if (dateInicioIngenios.some((reg) => reg.fin_anhidro === null)) {
        setFinAnhidro(null);
        return;
      }
      const fechaCierre = dateInicioIngenios.reduce(
        (max, reg) =>
          new Date(reg.fin_anhidro) > new Date(max) ? reg.fin_anhidro : max,
        dateInicioIngenios[0].fin_anhidro
      );
      setFinAnhidro(fechaCierre);
      return;
    }
  };
  /**************************/

  let inicioZafra2 = new Date("3/10/2100");
  let finZafra2 = new Date("1/1/1910");
  const inicioPeriodoZafraComparativa = () => {
    for (let i = 0; i < dateFinIngenios?.length; i++) {
      inicioZafra2 =
        new Date(dateFinIngenios[i].inicio_zafra) < inicioZafra2
          ? new Date(dateFinIngenios[i].inicio_zafra)
          : inicioZafra2;
      setInicioZafraComparativa(inicioZafra2);
    }
  };
  const finPeriodoZafraComparativa = () => {
    for (let i = 0; i < dateFinIngenios?.length; i++) {
      if (dateFinIngenios[i].fin_zafra === null) {
        setFinZafraComparativa("");
        return;
      } else {
        finZafra2 =
          new Date(dateFinIngenios[i].fin_zafra) > finZafra2
            ? new Date(dateFinIngenios[i].fin_zafra)
            : finZafra2;
        setFinZafraComparativa(finZafra2);
      }
    }
  };
  let inicioDestileria2 = new Date("3/10/2100");
  let finDestileria2 = new Date("1/1/1910");
  const inicioPeriodoDestileriaComparativa = () => {
    for (let i = 0; i < dateFinIngenios?.length; i++) {
      if (dateFinIngenios[i].inicio_destileria !== null) {
        inicioDestileria2 =
          new Date(dateFinIngenios[i].inicio_destileria) < inicioDestileria2
            ? new Date(dateFinIngenios[i].inicio_destileria)
            : inicioDestileria2;
        setInicioDestileriaComparativa(inicioDestileria2);
      }
    }
  };
  const finPeriodoDestileriaComparativa = () => {
    for (let i = 0; i < dateFinIngenios?.length; i++) {
      if (
        dateFinIngenios[i].inicio_destileria !== null &&
        dateFinIngenios[i].fin_destileria === null
      ) {
        setFinDestileriaComparativa(null);
        return;
      }
      if (
        dateFinIngenios[i].inicio_destileria !== null &&
        dateFinIngenios[i].fin_destileria !== null
      ) {
        finDestileria2 =
          new Date(dateFinIngenios[i].fin_destileria) > finDestileria2
            ? new Date(dateFinIngenios[i].fin_destileria)
            : finDestileria2;
        setFinDestileriaComparativa(finDestileria2);
      }
    }
  };

  /*** INICIO|FIN Anhidro comparativo ***/
  let inicioAnhidro2 = new Date("3/10/2100");
  let finAnhidro2 = new Date("1/1/1910");
  const inicioPeriodoAnhidroComparativa = () => {
    for (let i = 0; i < dateFinIngenios?.length; i++) {
      if (dateFinIngenios[i].inicio_anhidro !== null) {
        inicioAnhidro2 =
          new Date(dateFinIngenios[i].inicio_anhidro) < inicioAnhidro2
            ? new Date(dateFinIngenios[i].inicio_anhidro)
            : inicioAnhidro2;
        setInicioAnhidroComparativo(inicioAnhidro2);
      }
    }
  };
  const finPeriodoAnhidroComparativa = () => {
    if (dateFinIngenios && dateFinIngenios.length > 0) {
      if (dateFinIngenios.some((reg) => reg.fin_anhidro === null)) {
        setFinAnhidroComparativo(null);
        return;
      }
      const fechaCierre = dateFinIngenios.reduce(
        (max, reg) =>
          new Date(reg.fin_anhidro) > new Date(max) ? reg.fin_anhidro : max,
        dateFinIngenios[0].fin_anhidro
      );
      setFinAnhidroComparativo(fechaCierre);
      return;
    }
  };
  /*************************************/
  function obtenerPeriodos(data) {
  const periodos = {
    inicio_zafra: null,
    fin_zafra: null,
    inicio_destileria: null,
    fin_destileria: null,
    inicio_anhidro: null,
    fin_anhidro: null
  };

  data?.forEach(item => {
    // Zafra
    if (item.inicio_zafra) {
      const inicio = new Date(item.inicio_zafra);
      periodos.inicio_zafra = !periodos.inicio_zafra || inicio < new Date(periodos.inicio_zafra)
        ? inicio.toString()
        : periodos.inicio_zafra;
    }
    if (item.fin_zafra) {
      const fin = new Date(item.fin_zafra);
      periodos.fin_zafra = !periodos.fin_zafra || fin > new Date(periodos.fin_zafra)
        ? fin.toString()
        : periodos.fin_zafra;
    }

    // Destilería
    if (item.inicio_destileria) {
      const inicio = new Date(item.inicio_destileria);
      periodos.inicio_destileria = !periodos.inicio_destileria || inicio < new Date(periodos.inicio_destileria)
        ? inicio.toString()
        : periodos.inicio_destileria;
    }
    if (item.fin_destileria) {
      const fin = new Date(item.fin_destileria);
      periodos.fin_destileria = !periodos.fin_destileria || fin > new Date(periodos.fin_destileria)
        ? fin.toString()
        : periodos.fin_destileria;
    }

    // Anhidro
    if (item.inicio_anhidro) {
      const inicio = new Date(item.inicio_anhidro);
      periodos.inicio_anhidro = !periodos.inicio_anhidro || inicio < new Date(periodos.inicio_anhidro)
        ? inicio.toString()
        : periodos.inicio_anhidro;
    }
    if (item.fin_anhidro) {
      const fin = new Date(item.fin_anhidro);
      periodos.fin_anhidro = !periodos.fin_anhidro || fin > new Date(periodos.fin_anhidro)
        ? fin.toString()
        : periodos.fin_anhidro;
    }
  });

  return periodos;
}

// Ejemplo de uso:
const periodosActual = obtenerPeriodos(dateInicioIngenios);
const periodosComparativo = obtenerPeriodos(dateFinIngenios);

console.log('Periodo Año Actual:', periodosActual);
console.log('Periodo Año Comparativo:', periodosComparativo);

  /***************************************/
  
  const actualizarPartesDiarios = async () => {
    try {
      setLoading(true);
      const data = await getActualizarPartesDiarios();
      if(data.status === 200) {
        toast.success(data?.data?.message)
      }
      if(data.response.status === 500 ){
        toast.error(`Error: ${data?.response?.data?.error}`);
      }
    } catch (error) {
    } finally {
      setLoading(false);
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

      <TitlePage
        titlePage="Parte Diario Directorio"
        btnOnClick={true}
        titleBtnOnClick="Actualizar partes diarios"
        functionOnClick={actualizarPartesDiarios}
        lastUpdated={lastUpdated}
      />
      <hr className="mx-3 mt-1" />
      {dataParteDiariosHistoricos === null || !dataParteDiariosHistoricos ? (
        errorServer ? (
          <MsgErrorServerJSON
            msg1={msgErrorServer}
            btnLink="/admin/parte-diario"
          />
        ) : (
          <div className="d-flex justify-content-center align-items-center text-center">
            <Spinn type="data" />
          </div>
        )
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
            zafraParteDiario={zafraParteDiario}
            setZafraParteDiario={setZafraParteDiario}
          />
          <ParteDiario
            dataEnd={dataEnd}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            dataParteDiariosHistoricos={dataParteDiariosHistoricos}
            dataImport={dataImport}
            dataImportComparativa={dataImportComparativa}
            dataImportDestileria={dataImportDestileria}
            dataImportDestileriaComparativa={dataImportDestileriaComparativa}
            dataImportAnhidro={dataImportAnhidro}
            dataImportAnhidroComparativa={dataImportAnhidroComparativa}
            setBanderaDataNull={setBanderaDataNull}
            setDataImport={setDataImport}
            setDataImportComparativa={setDataImportComparativa}
            setDataImportDestileria={setDataImportDestileria}
            setDataImportDestileriaComparativa={
              setDataImportDestileriaComparativa
            }
            setDataImportAnhidro={setDataImportAnhidro}
            setDataImportAnhidroComparativa={setDataImportAnhidroComparativa}
            dateInicioIngenios={dateInicioIngenios}
            dateFinIngenios={dateFinIngenios}
            dataIngenios={dataIngenios}
            zafraParteDiario={zafraParteDiario}
          />
        </>
      )}
      {loading && (
        <div className="loader-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </Container>
  );
};
export default ParteDiarioContainer;
