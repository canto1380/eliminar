import React, { useContext, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import FiltrosReportes from "./FiltrosReportes";
import { DatosHistoricosZafraExcel } from "../../Excel/DatosHistoricosZafra";
import { User } from "../../context/UserProvider";

const DatosHistoricosZafra = ({
  setDataZafraInicio,
  setDataZafraFin,
  dataZafraInicio,
  dataZafraFin,
  dataImport,
  setDataImport,
  setBanderaDataNull,
}) => {
  const [loadingDownload, setLoadingDownload] = useState(false);

  const { dataUser } = useContext(User);
 
  return (
    <Container fluid>
      <FiltrosReportes
        title="Filtros"
        setDataZafraInicio={setDataZafraInicio}
        setDataZafraFin={setDataZafraFin}
        dataZafraInicio={dataZafraInicio}
        dataZafraFin={dataZafraFin}
      />
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        <Col xs={12} className="text-start mb-5 mt-4">
          
          <Button 
            className={`${(!dataZafraInicio || !dataZafraFin) && "disabled"}`}
            onClick={() =>
              DatosHistoricosZafraExcel(
                dataUser,
                dataImport,
                setDataImport,
                setBanderaDataNull,
                setLoadingDownload
              )
            }
          >
            {!dataZafraInicio || !dataZafraFin ? (
              "Elija el periodo"
            ) : dataZafraInicio && dataZafraFin && dataImport === null ? (
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
    </Container>
  );
};

export default DatosHistoricosZafra;
