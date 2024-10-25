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

  useEffect(() => {
    if (dataReportes) {
      busqueda();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fechasInformeInicio, fechasInformeFin, dataReportes]);
  // console.log(fechasInformeInicio, fechasInformeFin)
  useEffect(() => {
    if (dataZafraInicio && dataZafraFin) {
      fechasFiltros();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafraFin, dataZafraInicio]);

  const fechasFiltros = () => {
    const date1 = DatosInicioZafraHistoricos?.data.filter(
      (d) => d?.anio === dataZafraInicio
    );
    setFechasInformeInicio(date1[0]?.inicio);

    const date2 = DatosInicioZafraHistoricos?.data.filter(
      (d) => d?.anio === dataZafraFin
    );
    setFechasInformeFin(date2[0]?.fin);
  };

  const busqueda = () => {
    if (fechasInformeInicio && fechasInformeFin) {
      const data = dataReportes?.filter((d) => {
        const dataConverted = convertirStringAFecha(d.FechaParte);
        const dataConvertedInicio = convertirStringAFecha(fechasInformeInicio);
        const dataConvertedFin = convertirStringAFecha(fechasInformeFin);
        return (
          dataConverted >= dataConvertedInicio &&
          dataConverted <= dataConvertedFin &&
          (d.MoliendaCanaBruta !== 0 || d.AzucarEquivalente !== 0)
        );
      });
      setDataImport(data);
    }
  };

  function convertirStringAFecha(fechaStr) {
    const [dia, mes, año] = fechaStr.split("/");
    return new Date(año, mes - 1, dia);
  }
  console.log(dataImport)
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
