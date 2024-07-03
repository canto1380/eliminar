import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MsgError from "../Messages/MsgError";
import Spinn from "../Spinner";
import TitlePage from "../TitlePages";
import DatosHistoricosZafra from "./DatosHistoricosZafra";

const Reportes = ({
  dataReportes,
  dataZafraInicio,
  dataZafraFin,
  setDataZafraInicio,
  setDataZafraFin,
}) => {
  const [dataImport, setDataImport] = useState(undefined);
  const [banderaDataNull, setBanderaDataNull] = useState(false);

  useEffect(() => {
    // console.log(dataReportes)
    if(dataReportes) {
      busqueda();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataReportes, dataZafraFin, dataZafraInicio]);
  const busqueda = () => {
    const data = dataReportes?.filter(
      (d) =>
        d.IngenioNombre !== "San Juan" &&
        (d.MoliendaCanaBruta !== 0 || d.AzucarEquivalente !== 0)
    );
    if (data !== null || data.length !== 0) {
      // data.sort((a,b) => b.AlcoholProducido - a.AlcoholProducido)
      data.sort((a, b) => b.FechaParte - a.FechaParte);
      setDataImport(data.slice(0, 250));
    }
  };
  console.log(dataImport);

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
      {dataReportes === null ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
      ) : (
        <>
          <div className={`pt-4 pb-0 px-4`}>
            <p className="fw-bolder">Datos Históricos de zafra</p>
            <DatosHistoricosZafra
              setDataZafraInicio={setDataZafraInicio}
              setDataZafraFin={setDataZafraFin}
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
export default Reportes;
