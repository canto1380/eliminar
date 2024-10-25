import { Select } from "antd";
import React, {useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import { getAnios } from "../../utils/queryAPI/anios";

const FiltrosReportes = ({
    title,
    setDataZafraInicio,
    setDataZafraFin,
    dataZafraInicio,
    dataZafraFin
}) => {
    const [dataAnios, setDataAnios] = useState(null)

    useEffect(() => {
        dataFecha()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      const dataFecha = async () => {
        const aniosData = await getAnios()
        const dataFilterAnios = aniosData.filter((d) => d.anio_zafra !== 2013)
        setDataAnios(dataFilterAnios)
      }
    const handleZafraInicio = (e) => {
        setDataZafraInicio(e)
      }
      const handleZafraFin = (e) => {
        setDataZafraFin(e)
      }
    let optionsAnios = [];
    dataAnios?.forEach((d) => {
        const option = {
            value: d.anio_zafra,
            label: d.anio_zafra,
          }
          optionsAnios.push(option)
    })
    return (
        <>
        <Row>
        <Col className=''>
          <div className={`pt-2 pb-0 px-3`}>
            <p className='fw-bolder'>{title}</p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        <Col xs={12} md={6} className="mb-1 mt-1">
            <span className="me-4">Zafra inicio:</span>
            <Select
                onChange={handleZafraInicio}
                showSearch style={{width: '100%'}}
                placeholder='Zafra desde'
                optionsFilterProp='label'
                options={optionsAnios}
                defaultValue={dataZafraInicio}
            />
        </Col>
        <Col xs={12} md={6} className="mb-1 mt-1">
            <span className="me-4">Zafra final:</span>
            <Select
                onChange={handleZafraFin}
                showSearch style={{width: '100%'}}
                placeholder='Zafra hasta'
                optionsFilterProp='label'
                options={optionsAnios}
                defaultValue={dataZafraFin}
            />
        </Col>
      </Row>
        </>
    )
}
export default FiltrosReportes