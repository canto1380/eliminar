import { Select, Checkbox } from "antd"
import '../../Filtros/filtros.css'
import { Col, Row } from "react-bootstrap"

const FiltrosReporteDDJJ = ({
    zafras, ingenios, quincenas, items,
    zafraReportes, setZafraReportes,
    ingeniosReporte, setIngeniosReporte,
    quincenasReporte, setQuincenasReporte,
    itemsReporte, setItemsReporte, itemsReporteValidos
}) => {

    return (
        <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
            <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
                <span className="me-4">Zafras:</span>
                <Select
                    mode="multiple"
                    placeholder="Zafras"
                    options={zafras.map(z => ({ label: z, value: z }))}
                    value={zafraReportes}
                    onChange={setZafraReportes}
                    style={{ width: "100%", marginBottom: 10 }}
                />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
                <span className="me-4">Ingenios:</span>
                <Select
                    mode="multiple"
                    placeholder="Ingenios"
                    options={ingenios.map(i => ({ label: i, value: i }))}
                    value={ingeniosReporte}
                    onChange={setIngeniosReporte}
                    style={{ width: "100%", marginBottom: 10 }}
                />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
                <span className="me-4">Quincenas:</span>
                <Select
                    mode="multiple"
                    placeholder="Quincenas"
                    options={quincenas.map(q => ({ label: q, value: q }))}
                    value={quincenasReporte}
                    onChange={setQuincenasReporte}
                    style={{ width: "100%", marginBottom: 10 }}
                />
            </Col>
            <Col xs={12} className="mb-1 mt-1">
                <span className="me-4">Items</span>
                <Checkbox.Group
                    options={items.map(i => ({
                        label: i.label,
                        value: i.key
                    }))}
                    value={itemsReporteValidos}
                    onChange={setItemsReporte}
                />
            </Col>

        </Row>
    )
}

export default FiltrosReporteDDJJ
