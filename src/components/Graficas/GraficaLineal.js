import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { optionsGraphic, dataGraphic } from './ConfigGrafica';
import { backgroundPlugin } from './PluginGrafica';
import './graficas.css'
import { useRef } from 'react';
import { toast } from 'react-toastify';
import GraficaLinealComponent from './GraficaLinealComponent';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    // backgroundPlugin
);

const GraficasLinealComponent = ({
    dataZafraGrafica,
    dataDestilacionGrafica,
    dataAnhidroGrafica,
    dataUserRegister,
    ingenio,
    datePeriodoStart,
    datePeriodoEnd,
    routeAPI
}) => {

    const chartRef = useRef(null)
    // Preparar datos reales a partir de dataZafraGrafica
    const registrosZafra = Array.isArray(dataZafraGrafica) ? [...dataZafraGrafica] : [];
    const registrosDestilacion = Array.isArray(dataDestilacionGrafica) ? [...dataDestilacionGrafica] : [];
    const registrosAnhidro = Array.isArray(dataAnhidroGrafica) ? [...dataAnhidroGrafica] : [];


    /*** Agrupar por fecha y sumar todas las métricas - DATOS ZAFRA ***/
    const agrupadoPorFechaZafra = registrosZafra.reduce((acc, r) => {
        const fecha = new Date(r.fechaParte).toLocaleDateString("es-AR");

        if (!acc[fecha]) {
            acc[fecha] = {
                moliendaCanaBruta: 0,
                moliendaCanaNeta: 0,
                azucarBlanco: 0,
                azucarCrudo: 0,
                azucarEquivalente: 0,
                azucarOrganico: 0,
                azucarRefinado: 0,
                azucarTotal: 0,
                otroAzucar: 0,
                rendimientoCanaBruta: 0,
                rendimientoCanaNeta: 0,
            };
        }

        acc[fecha].moliendaCanaBruta += Number(r?.moliendaCanaBruta || 0);
        acc[fecha].moliendaCanaNeta += Number(r?.moliendaCanaNeta || 0);
        acc[fecha].azucarBlanco += Number(r?.azucarBlancoProducido || 0);
        acc[fecha].azucarCrudo += Number(r?.azucarCrudoProducido || 0);
        acc[fecha].azucarEquivalente += Number(r?.azucarEquivalente || 0);
        acc[fecha].azucarOrganico += Number(r?.azucarOrganico || 0);
        acc[fecha].azucarRefinado += Number(r?.azucarRefinado || 0);
        acc[fecha].azucarTotal += Number(r?.azucarTotal || 0);
        acc[fecha].otroAzucar += Number(r?.otroAzucar || 0);
        // acc[fecha].rendimientoCanaBruta += Number(r?.rendimientoCanaBruta || 0);
        acc[fecha].rendimientoCanaBruta = acc[fecha].azucarEquivalente / acc[fecha].moliendaCanaBruta * 100
        acc[fecha].rendimientoCanaNeta = acc[fecha].azucarEquivalente / acc[fecha].moliendaCanaNeta * 100
        return acc;
    }, {});

    // Ordenar las fechas
    const fechasOrdenadas = Object.keys(agrupadoPorFechaZafra).sort(
        (a, b) => new Date(a) - new Date(b)
    );

    /** LABELS ***/
    const labelsZafra = fechasOrdenadas;

    // const labelsZafra = registrosZafra.map((r) => new Date(r?.fechaParte).toLocaleDateString('es-AR'));
    const labelsDestilacion = registrosDestilacion.map((r) => new Date(r?.fechaParte).toLocaleDateString('es-AR'));
    const labelsAnhidro = registrosAnhidro.map((r) => new Date(r?.fechaParte).toLocaleDateString('es-AR'));


    // Series
    const serieCanaMolidaBruta = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].moliendaCanaBruta);
    const serieMoliendaCanaNeta = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].moliendaCanaNeta);
    const serieAzucarBlanco = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarBlanco);
    const serieAzucarCrudo = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarCrudo);
    const serieAzucarEquivalente = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarEquivalente);
    const serieAzucarOrganico = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarOrganico);
    const serieAzucarRefinado = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarRefinado);
    const serieAzucarTotal = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarTotal);
    const serieAzucarOtros = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].otroAzucar);
    const serieRendimientoCanaBruta = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarEquivalente / agrupadoPorFechaZafra[f].moliendaCanaBruta * 100)
    const serieRendimientoCanaNeta = fechasOrdenadas.map(f => agrupadoPorFechaZafra[f].azucarEquivalente / agrupadoPorFechaZafra[f].moliendaCanaNeta * 100);


    /*** Acumulados ***/
    let acumuladoCMB = 0;
    let acumuladoCMN = 0;
    let acumuladoRCMB = 0;
    let acumuladoRCMN = 0;
    let acumuladoEquivalente = 0;
    let acumuladoOrganico = 0;
    let acumuladoRefinado = 0;
    let acumuladoTotal = 0;
    let acumuladoBlanco = 0;
    let acumuladoCrudo = 0;
    let acumuladoOtros = 0;

    const serieAcumuladoCMB = fechasOrdenadas.map((f) => {
        acumuladoCMB += agrupadoPorFechaZafra[f].moliendaCanaBruta || 0
        return acumuladoCMB;
    });
    const serieAcumuladoCMN = fechasOrdenadas.map((f) => {
        acumuladoCMN += agrupadoPorFechaZafra[f].moliendaCanaNeta || 0;
        return acumuladoCMN;
    });
    const serieAcumuladoEquivalente = fechasOrdenadas.map((f) => {
        acumuladoEquivalente += agrupadoPorFechaZafra[f].azucarEquivalente || 0;
        return acumuladoEquivalente;
    });
    const serieAcumuladoRCMB = fechasOrdenadas.map((f, idx) => {
        const equivHastaHoy = serieAcumuladoEquivalente[idx]; // acumulado hasta el día idx
        const cmbHastaHoy = serieAcumuladoCMB[idx];           // acumulado hasta el día idx
        if (cmbHastaHoy === 0) return 0; // evitar división por 0
        return (equivHastaHoy / cmbHastaHoy) * 100;

    });
    const serieAcumuladoRCMN = fechasOrdenadas.map((f, idx) => {
        const equivHastaHoy = serieAcumuladoEquivalente[idx];
        const cmnHastaHoy = serieAcumuladoCMN[idx];
        if (cmnHastaHoy === 0) return 0;
        return (equivHastaHoy / cmnHastaHoy) * 100;
    });
    const serieAcumuladoOrganico = fechasOrdenadas.map((f) => {
        acumuladoOrganico += agrupadoPorFechaZafra[f].azucarOrganico || 0;
        return acumuladoOrganico;
    });
    const serieAcumuladoRefinado = fechasOrdenadas.map((f) => {
        acumuladoRefinado += agrupadoPorFechaZafra[f].azucarRefinado || 0;
        return acumuladoRefinado;
    });
    const serieAcumuladoTotal = fechasOrdenadas.map((f) => {
        acumuladoTotal += agrupadoPorFechaZafra[f].azucarTotal || 0;
        return acumuladoTotal;
    });
    const serieAcumuladoBlanco = fechasOrdenadas.map((f) => {
        acumuladoBlanco += agrupadoPorFechaZafra[f].azucarBlanco || 0;
        return acumuladoBlanco;
    });
    const serieAcumuladoCrudo = fechasOrdenadas.map((f) => {
        acumuladoCrudo += agrupadoPorFechaZafra[f].azucarCrudo || 0;
        return acumuladoCrudo;
    });
    const serieAcumuladoOtros = fechasOrdenadas.map((f) => {
        acumuladoOtros += agrupadoPorFechaZafra[f].otroAzucar || 0;
        return acumuladoOtros;
    });

    const hayDatos = labelsZafra.length > 0 && (serieCanaMolidaBruta.some(v => v) || serieAzucarBlanco.some(v => v));


    const exportExcel = async () => {

    };

    // Exportar imagen PNG
    const exportImagen = () => {
        const link = document.createElement("a");
        link.download = `titulo.png`;
        link.href = chartRef.current.toBase64Image();
        link.click();
    };

    // Exportar ambos
    const exportAmbos = async () => {
        await exportExcel();
        exportImagen();
    };
    return (
        <>
            {!hayDatos ? (
                <div className="px-3 py-2">No hay datos para mostrar con los filtros actuales.</div>
            ) : (
                <Container fluid>
                    {/* CMB */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo="Caña Molida Bruta"
                                labels={labelsZafra}
                                valores={serieCanaMolidaBruta}
                            />

                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Caña Molida Bruta Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoCMB}
                            />
                        </Col>
                    </Row>
                    {/* CMN */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Caña Molida Neta'
                                labels={labelsZafra}
                                valores={serieMoliendaCanaNeta}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Caña Molida Neta Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoCMN}
                            />
                        </Col>
                    </Row>
                    {/* RCMB */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Rto. Caña Molida Bruta'
                                labels={labelsZafra}
                                valores={serieRendimientoCanaBruta}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Rto. Caña Molida Bruta Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoRCMB}
                            />
                        </Col>
                    </Row>
                    {/* RCMN */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Rto. Caña Molida Neta'
                                labels={labelsZafra}
                                valores={serieRendimientoCanaNeta}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Rto. Caña Molida Neta Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoRCMN}
                            />
                        </Col>
                    </Row>
                    {/* EQUIVALENTE */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Equivalente'
                                labels={labelsZafra}
                                valores={serieAzucarEquivalente}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Equivalente Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoEquivalente}
                            />
                        </Col>
                    </Row>
                    {/* CRUDO */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Crudo'
                                labels={labelsZafra}
                                valores={serieAzucarCrudo}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Crudo Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoCrudo}
                            />
                        </Col>
                    </Row>
                    {/* BLANCO */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Blanco'
                                labels={labelsZafra}
                                valores={serieAzucarBlanco}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Blanco Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoBlanco}
                            />
                        </Col>
                    </Row>
                    {/* ORGANICO */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Orgánico'
                                labels={labelsZafra}
                                valores={serieAzucarOrganico}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Orgánico Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoOrganico}
                            />
                        </Col>
                    </Row>
                    {/* REFINADO */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Refinado'
                                labels={labelsZafra}
                                valores={serieAzucarRefinado}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Refinado Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoRefinado}
                            />
                        </Col>
                    </Row>
                    {/* OTROS */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Otros Azúcares'
                                labels={labelsZafra}
                                valores={serieAzucarOtros}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Otros Azúcares Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoOtros}
                            />
                        </Col>
                    </Row>
                    {/* TOTAL */}
                    <Row className="mt-3 g-4">
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Total'
                                labels={labelsZafra}
                                valores={serieAzucarTotal}
                            />
                        </Col>
                        <Col xs={12} xl={6}>
                            <GraficaLinealComponent
                                dataUserRegister={dataUserRegister}
                                ingenio={ingenio}
                                datePeriodoStart={datePeriodoStart}
                                datePeriodoEnd={datePeriodoEnd}
                                titulo='Azúcar Total Acumulada'
                                labels={labelsZafra}
                                valores={serieAcumuladoTotal}
                            />
                        </Col>
                    </Row>

                </Container>
            )
            }
        </>
    )
}

export default GraficasLinealComponent
