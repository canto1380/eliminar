import { Col, Row } from "react-bootstrap"
import moment from "moment"
import { useEffect, useState } from "react"
import { datosAcumuladosDDJJHook } from "./hooks/AcumulativosDDJJHook"

const DdjjComponent = ({
  anioZafra,
  fechaDesdeInformacion,
  fechaHastaInformacion,
  ddjjInformacionFilter,
  ddjjInformacionParseada,
  setDdjjInformacionParseada
}) => {

  useEffect(() => {

    const returnData = datosAcumuladosDDJJHook(
      ddjjInformacionFilter
    )
    setDdjjInformacionParseada(returnData)
  }, [ddjjInformacionFilter])

  console.log(ddjjInformacionParseada)

  return (
    <Row className="d-flex justify-content-start align-items-center px-4 pb-4 pt-2">
      <Col xs={12} className="mb-2">
        <Row className="justify-content-start">
          <Col className="mb-1 encabezados-panel fw-bolder">
            {fechaDesdeInformacion && fechaHastaInformacion
              ? `Periodo: ${fechaDesdeInformacion ? moment(fechaDesdeInformacion).format("DD-MM-YYYY") : ""}
                         | ${fechaHastaInformacion ? moment(fechaHastaInformacion).format("DD-MM-YYYY") : ""}`
              : `Periodo: ${anioZafra}`
            }

          </Col>
          <Col className="mb-1 encabezados-panel fw-bolder">
            Total DDJJ: {ddjjInformacionFilter.length}
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
            {ddjjInformacionParseada?.totales?.cmb?.toLocaleString("es-ES")} [tn]
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Az. Crudo
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {ddjjInformacionParseada?.totales?.azCrudo?.toLocaleString("es-ES")} [tn]
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Az. Blanco
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {ddjjInformacionParseada?.totales?.azBlanco?.toLocaleString("es-ES")} [tn]
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Az. Refinado
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {ddjjInformacionParseada?.totales?.azRefinado?.toLocaleString("es-ES")} [tn]
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Az. Orgánico
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {ddjjInformacionParseada?.totales?.azOrganico?.toLocaleString("es-ES")} [tn]
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Az. Físico
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {ddjjInformacionParseada?.totales?.azFisico?.toLocaleString("es-ES")} [tn]
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Az. Equivalente
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {ddjjInformacionParseada?.totales?.azEquivalente?.toLocaleString("es-ES")} [tn]
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Rto. Az. Equivalente
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {((ddjjInformacionParseada?.totales?.azEquivalente / ddjjInformacionParseada?.totales?.cmb) * 100).toFixed(2)} (%)
          </p>
        </div>
      </Col>
      <Col className="align-items-center col-valores p-2 mx-2">
        <div>
          <p className="text-center fw-bolder mb-1 t-panel">
            Alcohol Producido
          </p>
        </div>
        <div>
          <p className="text-center mb-1 dato-panel">
            {ddjjInformacionParseada?.totales?.alcoholElaborado?.toLocaleString("es-ES")} [L]
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default DdjjComponent