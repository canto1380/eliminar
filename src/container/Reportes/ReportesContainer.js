import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MsgError from "../../components/Messages/MsgError";
import Spinn from "../../components/Spinner";
import TitlePage from "../../components/TitlePages";
import DatosInicioZafraHistoricos from "./dataInicioFinZafraHistoricos.json";
import DatosHistoricosZafra from "../../components/Reportes/DatosHistoricosZafra";
import FiltrosReportes from "../../components/Reportes/FiltrosReportes";
import DatosMejoresRegistros from "../../components/Reportes/DatosMejoresRegistros";
import ZafraUnificadaPorDias from "../../components/Reportes/ZafraUnificadaPorDias";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";

const ReportesDataContainer = ({
  dataReportes,
  dataZafraInicio,
  dataZafraFin,
  setDataZafraInicio,
  setDataZafraFin,
}) => {
  const [dataImport, setDataImport] = useState(undefined);
  const [banderaDataNull, setBanderaDataNull] = useState(false);
  const [fechasInformeInicio, setFechasInformeInicio] = useState(undefined);
  const [fechasInformeFin, setFechasInformeFin] = useState(undefined);
  const [periodosZafra, setPeriodosZafra] = useState(undefined)

  useEffect(() => {
    const fetchPeriodosZafra = async() => {
      const data = await getPeriodoZafra({limit: 100000})
      setPeriodosZafra(data)
    }
    fetchPeriodosZafra()
  },[])

  useEffect(() => {
    if (dataReportes) {
      busqueda();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafraFin, dataZafraInicio, dataReportes]);

  
  // useEffect(() => {
  //   if (dataZafraInicio && dataZafraFin) {
  //     fechasFiltros();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dataZafraFin, dataZafraInicio]);
  // const fechasFiltros = () => {
  //   const date1 = DatosInicioZafraHistoricos?.data.filter(
  //     (d) => d?.anio === dataZafraInicio
  //   );
  //   setFechasInformeInicio(date1[0]?.inicio);

  //   const date2 = DatosInicioZafraHistoricos?.data.filter(
  //     (d) => d?.anio === dataZafraFin
  //   );
  //   setFechasInformeFin(date2[0]?.fin);
  // };

  const busqueda = () => {
    if(dataZafraInicio && dataZafraFin) {
      const periodoInicio = periodosZafra.filter((d) => d.anio_zafra === dataZafraInicio)
      const periodoInicioFechaInicioCMB = periodoInicio.reduce((min, actual) => {
        return new Date(actual.inicio_zafra) < new Date(min.inicio_zafra) ? actual : min;
      })
      const periodoInicioFechaFinalCMB = periodoInicio.reduce((min, actual) => {
        return new Date(actual.fin_zafra) > new Date(min.fin_zafra) ? actual : min;
      })
      const periodoInicioFechaInicioALCOHOL = periodoInicio.reduce((min, actual) => {
        return new Date(actual.inicio_anhidro) < new Date(min.inicio_anhidro) ? actual : min;
      })
      const periodoInicioFechaFinalALCOHOL = periodoInicio.reduce((min, actual) => {
        return new Date(actual.fin_anhidro) > new Date(min.fin_anhidro) ? actual : min;
      })

      
      const periodoFin = periodosZafra.filter((d) => d.anio_zafra === dataZafraFin)
      const periodoFinalFechaInicioCMB = periodoFin.reduce((min, actual) => {
        return new Date(actual.inicio_zafra) < new Date(min.inicio_zafra) ? actual : min;
      })
      const PeriodoFinalFechaFinalCMB = periodoFin.reduce((min, actual) => {
        return new Date(actual.fin_zafra) > new Date(min.fin_zafra) ? actual : min;
      })
      const periodoFinalFechaInicioALCOHOL = periodoFin.reduce((min, actual) => {
        return new Date(actual.inicio_zafra) < new Date(min.inicio_zafra) ? actual : min;
      })
      const PeriodoFinalFechaFinalALCOHOL = periodoFin.reduce((min, actual) => {
        return new Date(actual.fin_zafra) > new Date(min.fin_zafra) ? actual : min;
      })

    }
  }

  function convertirStringAFecha(fechaStr) {
    const [dia, mes, año] = fechaStr.split("/");
    return new Date(año, mes - 1, dia);
  }
  return (
    <Container fluid>
      {banderaDataNull && (
        <MsgError
          text1="Estamos procesando la información."
          text2="Intente de nuevo."
        />
      )}
      <TitlePage titlePage="Reportes" />
      <hr className="mx-3 mt-1" />
      {!dataReportes ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <div className={`pt-4 pb-0 px-4`}>
            <FiltrosReportes
              title="Filtros"
              setDataZafraInicio={setDataZafraInicio}
              setDataZafraFin={setDataZafraFin}
              dataZafraInicio={dataZafraInicio}
              dataZafraFin={dataZafraFin}
            />
            <hr className="mx-3 mt-1" />
            <DatosHistoricosZafra
              dataZafraInicio={dataZafraInicio}
              dataZafraFin={dataZafraFin}
              dataImport={dataImport}
              setDataImport={setDataImport}
              setBanderaDataNull={setBanderaDataNull}
            />
            <hr className="mx-3 mt-0" />
            <DatosMejoresRegistros 
              dataZafraInicio={dataZafraInicio}
              dataZafraFin={dataZafraFin}
              dataImport={dataImport}
              setDataImport={setDataImport}
              setBanderaDataNull={setBanderaDataNull}
            />
            <hr className="mx-3 mt-0" />
            <ZafraUnificadaPorDias 
              dataZafraInicio={dataZafraInicio}
              dataZafraFin={dataZafraFin}
              dataImport={dataImport}
              setDataImport={setDataImport}
              setBanderaDataNull={setBanderaDataNull}
            />
          </div>
        </>
      )}
    </Container>
  );
};
export default ReportesDataContainer;
