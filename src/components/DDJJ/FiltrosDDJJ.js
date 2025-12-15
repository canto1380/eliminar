import { Col } from 'react-bootstrap'
import { Select } from "antd";
import '../Filtros/filtros.css'
import { optionsDDJJEstado, optionsQuincenal } from '../Filtros/dataFilter';

const FiltrosDDJJ = ({
  estadoDDJJInformacion,
  setFechaDesdeInformacion,
  setFechaHastaInformacion,
  setEstadoDDJJInformacion,
}) => {

  return (
    <>
      <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
        <span className="me-4">Desde:</span>
        <Select
          onChange={(v) => {
            const [month, quincena] = v.split("-");
            setFechaDesdeInformacion({
              month: Number(month),
              quincena: Number(quincena)
            });
          }}
          style={{ width: "100%" }}
          placeholder="Busque o seleccione"
          optionFilterProp="label"
          optionLabelProp="label"   // <- CLAVE
          labelInValue={false}
          options={optionsQuincenal}
        />
      </Col>
      <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
        <span className="me-4">Hasta:</span>
        <Select
          onChange={(v) => {
            const [month, quincena] = v.split("-");
            setFechaHastaInformacion({
              month: Number(month),
              quincena: Number(quincena)
            });
          }}
          style={{ width: "100%" }}
          placeholder="Busque o seleccione"
          optionFilterProp="label"
          optionLabelProp="label"   // <- CLAVE
          labelInValue={false}
          options={optionsQuincenal}
        />
      </Col>
      <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
        <span className="me-4">Estado:</span>
        <Select
          onChange={(v) => { setEstadoDDJJInformacion(v) }}
          style={{ width: "100%" }}
          placeholder="Busque o seleccione"
          optionFilterProp="label"
          optionLabelProp="label"   // <- CLAVE
          labelInValue={false}
          options={optionsDDJJEstado}
          value={estadoDDJJInformacion}
        />
      </Col>
    </>
  )
}

export default FiltrosDDJJ