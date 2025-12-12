/**
 * REFERENCIAS
 * 1- todo lo que diga `informacion` (state, funciones, etc.) son para obtener el informe estatico de DDJJ
 * 2- Todo lo que diga `reporte` (state, funciones, etc.) son para obtener el reporte dinamico de DDJJ.
 * Todo lo que se va filtrando para el reporte dinamico es lo que se va mostrando en pantalla
 **/


import { useState, useEffect } from "react"
import { getDDJJ } from "../../utils/queryAPI/ddjjQuery"
import MsgError from "../../components/Messages/MsgError"
import TitlePage from "../../components/TitlePages"
import { Container } from "react-bootstrap"
import Spinn from "../../components/Spinner"
import Filtros from "../../components/Filtros"
import { getDateFromQuincena } from "../../helpers/helpers"
import '../ParteDiario/ParteDiarioContainer.css'
import DdjjComponent from "../../components/DDJJ/Ddjj"
import BtnDescargar from "../../components/Botones/BtnDescargar"
import moment from "moment"
import { apiExportExcel } from "../../utils/apiExportExcel"
import { message } from "antd"
import { toast } from "react-toastify"

const DDJJContainer = ({ tokenAuth, dataUserRegister }) => {
  const [errorServer, setErrorServer] = useState(false)
  const [msgErrorServer, setMsgErrorServer] = useState('')

  /** FILTROS DE BUSQUEDA **/
  const [zafraInformacion, setZafraInformacion] = useState(2025)
  const [quincenaDesdeInformacion, setQuincenaDesdeInformacion] = useState(undefined)
  const [quincenaHastaInformacion, setQuincenaHastaInformacion] = useState(undefined)
  // Estados para las fechas reales calculadas (Date)
  const [fechaDesdeInformacion, setFechaDesdeInformacion] = useState(undefined)
  const [fechaHastaInformacion, setFechaHastaInformacion] = useState(undefined)
  const [estadoDDJJInformacion, setEstadoDDJJInformacion] = useState('Aprobado')

  /** FILTROS PARA REPORTE **/
  const [zafraReporte, setZafraReporte] = useState(undefined)
  // Estados para las quincenas seleccionadas (objetos {month, quincena})
  const [quincenaDesdeReporte, setQuincenaDesdeReporte] = useState(undefined)
  const [quincenaHastaReporte, setQuincenaHastaReporte] = useState(undefined)
  // Estados para las fechas reales calculadas (Date)
  const [fechaDesdeReporte, setFechaDesdeReporte] = useState(undefined)
  const [fechaHastaReporte, setFechaHastaReporte] = useState(undefined)
  const [estadoDDJJReporte, setEstadoDDJJReporte] = useState(undefined)

  /** INFORMACION DE DDJJ TRAIDAS DESDE LA DB **/
  const [ddjjInformacion, setDdjjInformacion] = useState(undefined) // para info mostrada en la pagina
  const [ddjjInformacionFilter, setDdjjInformacionFilter] = useState(undefined) // para info mostrada en la pagina
  const [ddjjReporte, setDdjjReporte] = useState(undefined) // para info a exportar
  const [ddjjReporteFilter, setDdjjReporteFilter] = useState(undefined) // para info a exportar

  /** STATE DE DATOS PARSEADOS PARA EXPORTAR **/
  const [ddjjInformacionParseada, setDdjjInformacionParseada] = useState(undefined)
  const [ddjjReporteParseada, setDdjjReporteParseada] = useState(undefined)


  const [loadingDownloadReport, setLoadingDownloadReport] = useState(false);
  const [banderaDataNull, setBanderaDataNull] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(undefined)

  console.log(dataUserRegister)
  /**
   * Datos para DDJJ Infomres
   */
  useEffect(() => {
    if (zafraInformacion && zafraInformacion !== null) {
      getDataDDJJInformacion()
    }
  }, [zafraInformacion])

  const getDataDDJJInformacion = async () => {
    const params = { anioZafra: zafraInformacion }
    const dataDDJJ = await getDDJJ(params)
    if (dataDDJJ.status === 200) {
      setDdjjInformacion(dataDDJJ.data)
      setDdjjInformacionFilter(dataDDJJ.data)
    } else {
      setErrorServer(dataDDJJ.response.status)
      setMsgErrorServer(dataDDJJ.response.data.error.message)
    }
  }

  /**
   * Datos para DDJJ Reportes
   */
  useEffect(() => {
    if (zafraReporte && zafraReporte !== null) {
      getDataDDJJReporte()
    }
  }, [zafraReporte])

  const getDataDDJJReporte = async () => {
    const params = { anioZafra: zafraReporte }
    const dataDDJJ = await getDDJJ(params)
    if (dataDDJJ.status === 200) {
      setDdjjReporte(dataDDJJ.data)
      setDdjjReporteFilter(dataDDJJ.data)
    } else {
      setErrorServer(dataDDJJ.response.status)
      setMsgErrorServer(dataDDJJ.response.data.error.message)
    }
  }

  /**
  * FILTROS DE INFORMACION
  * USEEFFECT PARA PARSEAR LAS FECHAS DE DDJJ INFORMACION SEGUN LAS QUINCENAS ELEGIDAS
  **/
  useEffect(() => {
    if (quincenaDesdeInformacion && quincenaHastaInformacion && zafraInformacion) {
      // Calcular fecha desde: inicio de la quincena seleccionada en "desde"
      const fechaDesde = getDateFromQuincena({
        year: zafraInformacion,
        month: quincenaDesdeInformacion.month,
        quincena: quincenaDesdeInformacion.quincena
      });

      // Calcular fecha hasta: final de la quincena seleccionada en "hasta"
      const fechaHasta = getDateFromQuincena({
        year: zafraInformacion,
        month: quincenaHastaInformacion.month,
        quincena: quincenaHastaInformacion.quincena
      });

      if (fechaDesde && fechaHasta) {
        // Guardar el inicio de la quincena "desde"
        setFechaDesdeInformacion(fechaDesde.from);
        // Guardar el final de la quincena "hasta"
        setFechaHastaInformacion(fechaHasta.to);
      }
    } else {
      // Si no hay quincenas seleccionadas, limpiar las fechas
      setFechaDesdeInformacion(undefined);
      setFechaHastaInformacion(undefined);
    }
  }, [quincenaDesdeInformacion, quincenaHastaInformacion, zafraInformacion])

  /** 
   * FILTROS DE INFORMACION
   * FILTROS DE DDJJ INFORMACION AL CAMBIAR FECHA DESDE, FECHA HASTA Y ESTADO 
   * **/
  useEffect(() => {
    // si no hay datos originales, nada que filtrar
    if (!ddjjInformacion || !Array.isArray(ddjjInformacion)) {
      setDdjjInformacionFilter([]);
      return;
    }

    // si no hay rango definido, resetea al original
    if ((!fechaDesdeInformacion || !fechaHastaInformacion) && !estadoDDJJInformacion) {
      setDdjjInformacionFilter(ddjjInformacion);
      return;
    }
    filterDDJJInformacion();
  }, [fechaDesdeInformacion, fechaHastaInformacion, ddjjInformacion, estadoDDJJInformacion]);

  const filterDDJJInformacion = () => {
    if (!ddjjInformacion || ddjjInformacion.length === 0) return;

    const tieneRango = fechaDesdeInformacion && fechaHastaInformacion;
    const tieneEstado = estadoDDJJInformacion && estadoDDJJInformacion !== "" && estadoDDJJInformacion !== undefined;

    const desde = tieneRango ? new Date(fechaDesdeInformacion) : null;
    const hasta = tieneRango ? new Date(fechaHastaInformacion) : null;

    if (desde) desde.setHours(0, 0, 0, 0);
    if (hasta) hasta.setHours(23, 59, 59, 999);

    const filtered = ddjjInformacion.filter((item) => {
      const fechaDesde = new Date(item.fechaDesde);
      const fechaHasta = new Date(item.fechaHasta);

      // 1) Si hay rango, validar rango
      const inRange = tieneRango
        ? fechaDesde >= desde && fechaHasta <= hasta
        : true; // si NO hay rango, pasa todo

      // 2) Si hay estado, validar estado
      const inEstado = tieneEstado
        ? (estadoDDJJInformacion === 'todas'
          ? true
          : item.estado === estadoDDJJInformacion)
        : true; // si NO hay estado, pasa todo

      return inRange && inEstado;
    });

    setDdjjInformacionFilter(filtered);
  };

  /**
  * FILTROS DE REPORTE
  * USEEFFECT PARA PARSEAR LAS FECHAS DE DDJJ REPORTE SEGUN LAS QUINCENAS ELEGIDAS
  **/
  useEffect(() => {
    if (quincenaDesdeReporte && quincenaHastaReporte && zafraReporte) {
      // Calcular fecha desde: inicio de la quincena seleccionada en "desde"
      const fechaDesde = getDateFromQuincena({
        year: zafraReporte,
        month: quincenaDesdeReporte.month,
        quincena: quincenaDesdeReporte.quincena
      });

      // Calcular fecha hasta: final de la quincena seleccionada en "hasta"
      const fechaHasta = getDateFromQuincena({
        year: zafraReporte,
        month: quincenaHastaReporte.month,
        quincena: quincenaHastaReporte.quincena
      });

      if (fechaDesde && fechaHasta) {
        // Guardar el inicio de la quincena "desde"
        setFechaDesdeReporte(fechaDesde.from);
        // Guardar el final de la quincena "hasta"
        setFechaHastaReporte(fechaHasta.to);
      }
    } else {
      // Si no hay quincenas seleccionadas, limpiar las fechas
      setFechaDesdeReporte(undefined);
      setFechaHastaReporte(undefined);
    }
  }, [quincenaDesdeReporte, quincenaHastaReporte, zafraReporte])

  /** 
   * FILTROS DE REPORTE
   * FILTROS DE DDJJ REPORTE AL CAMBIAR FECHA DESDE, FECHA HASTA Y ESTADO 
   * **/
  useEffect(() => {
    // si no hay datos originales, nada que filtrar
    if (!ddjjReporte || !Array.isArray(ddjjReporte)) {
      setDdjjReporteFilter([]);
      return;
    }

    // si no hay rango definido, resetea al original
    if (!fechaDesdeReporte || !fechaHastaReporte) {
      setDdjjReporteFilter(ddjjReporte);
      return;
    }

    filterDDJJReporte();
  }, [fechaDesdeReporte, fechaHastaReporte, ddjjReporte, estadoDDJJReporte]);

  const filterDDJJReporte = () => {
    if (!ddjjReporte || ddjjReporte.length === 0) return;

    const desde = new Date(fechaDesdeReporte);
    desde.setHours(0, 0, 0, 0);
    const hasta = new Date(fechaHastaReporte);
    hasta.setHours(23, 59, 59, 999);

    const filtered = ddjjReporte.filter((item) => {
      const fechaDesde = new Date(item.fechaDesde);
      const fechaHasta = new Date(item.fechaHasta)
      if (isNaN(fechaDesde.getTime())) return false;
      const inRange = fechaDesde >= desde && fechaHasta <= hasta;

      if (estadoDDJJReporte && estadoDDJJReporte !== "" && estadoDDJJReporte !== undefined && estadoDDJJReporte !== 'todas') {
        const cumpleEstado = item.estado === estadoDDJJReporte;
        return inRange && cumpleEstado;
      }
      if (estadoDDJJReporte && estadoDDJJReporte !== "" && estadoDDJJReporte !== undefined && estadoDDJJReporte === 'todas') {
        return inRange
      }

      return inRange;
    });

    // guardamos el resultado (no mutamos el original)
    setDdjjReporteFilter(filtered);
  };

  const actualizarDDJJ = async () => {
  }
  console.log(ddjjInformacionFilter)
  const exportarDDJJInformes = async () => {
    try {
      setLoadingDownloadReport(true)
      const date = new Date()
      const titulo = `DDJJ informativo - Zafra ${zafraInformacion}`
      const dataSend = [
        {
          dataDDJJ: ddjjInformacionParseada,
          usuario: dataUserRegister,
          anioZafra: zafraInformacion,
          periodoDesde: fechaDesdeInformacion,
          periodoHasta: fechaHastaInformacion,
          titulo: titulo
        }
      ]
      const res = await apiExportExcel("POST", 'declaracionJurada/descargarInforme', dataSend)
      if (res.status === 200) {
        const blob = new Blob([res.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `DDJJ informativo - Zafra ${zafraInformacion}`; // Nombre del archivo
        link.click();
        link.remove();
        window.URL.revokeObjectURL(link);
        message.success("Descarga realizada correctamente", 5);
        window.location.reload();
      } else {
        toast.error(`Error al descargar el archivo: ${res?.data?.response?.data?.error || 'Error desconocido'}`)
      }
    } catch (error) {
      toast.error(`Error al descargar el archivo: ${error?.data?.response?.data?.error || 'Error desconocido'}`)
    } finally {
      setLoadingDownloadReport(false);
    }
}

return (
  <Container fluid>
    {banderaDataNull && (
      <MsgError
        text1='Estamos procesando la información.'
        text2='Intente de nuevo.'
      />
    )}
    <TitlePage
      titlePage="Declaraciones juradas"
      btnOnClick={true}
      titleBtnOnClick="Actualizar DDJJ"
      functionOnClick={actualizarDDJJ}
      lastUpdated={lastUpdated}
    />
    <hr className="mx-3 mt-1" />
    {!ddjjInformacion || ddjjInformacion === null ? (
      errorServer && msgErrorServer ? (
        <MsgError
          text1="Error en el servidor."
          text2={msgErrorServer}
        />
      ) : (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      )
    ) : (
      <>
        <Filtros
          bandFilterDDJJ={true} // HABILITA A MOSTRAR FILTROS DE DDJJ
          bandFilterZafraAnio={true} // FILTRO GENERAL

          /** ESTADOS **/
          setFechaDesdeInformacion={setQuincenaDesdeInformacion}
          setFechaHastaInformacion={setQuincenaHastaInformacion}
          setEstadoDDJJInformacion={setEstadoDDJJInformacion}

          dataZafra={zafraInformacion} // ESTADO DE ANIO ZAFRA. VALOR POR DEFECTO
          estadoDDJJInformacion={estadoDDJJInformacion} // STATE DE ESTADO DE DDJJ. VALOR POR DEFECTO
          setDataZafra={setZafraInformacion}

        />
        <DdjjComponent
          anioZafra={zafraInformacion}
          fechaDesdeInformacion={fechaDesdeInformacion}
          fechaHastaInformacion={fechaHastaInformacion}
          ddjjInformacionFilter={ddjjInformacionFilter}
          ddjjInformacionParseada={ddjjInformacionParseada}
          setDdjjInformacionParseada={setDdjjInformacionParseada}
        />

        <BtnDescargar
          loadingDownloadReport={loadingDownloadReport}
          dataZafra={zafraInformacion}
          data={ddjjInformacionFilter}
          funcionExportar={exportarDDJJInformes}
          bandExportDDJJInforme={true}
        />

        <Filtros
          /** Filtros reportes **/
          BandFilterReporteDDJJ={true}
          setZafraReporte={setZafraReporte}
          setFechaDesdeReporte={setFechaDesdeReporte}
          setFechaHastaReporte={setFechaHastaReporte}
        />
      </>
    )

    }
  </Container>
)
}

export default DDJJContainer