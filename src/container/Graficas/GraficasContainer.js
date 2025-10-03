import { Container } from "react-bootstrap"
import MsgError from "../../components/Messages/MsgError"
import TitlePage from "../../components/TitlePages"
import Filtros from "../../components/Filtros"
import { useEffect, useState } from "react"
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra"
import Spinn from "../../components/Spinner"
import { obtenerPeriodos } from "../ParteDiario/hooks/ObtenerPeriodos"
import { filtrarRegistrosPorPeriodos } from "../ParteDiario/hooks/RegistrosPorPeriodo"
import { getParteDiariosNorte } from "../../utils/queryAPI/ParteDiariosNorte"
import { getParteDiarios } from "../../utils/queryAPI/parteDiarios"
import GraficasLinealComponent from "../../components/Graficas/GraficaLineal"

const GraficasDataContainer = ({ tokenAuth, dataUserRegister, routeAPI }) => {
    const [anioZafra, setAnioZafra] = useState(null)
    const [periodosZafra, setPeriodosZafra] = useState(undefined)
    const [datePeriodoStart, setDatePeriodoStart] = useState(undefined)
    const [datePeriodoEnd, setDatePeriodoEnd] = useState(undefined)
    const [ingenio, setIngenio] = useState(undefined)
    const [dataParteDiarios, setDataParteDiarios] = useState([]);
    const [dataParteDiariosNorte, setDataParteDiariosNorte] = useState([]);
    const [dataZafraGrafica, setDataZafraGrafica] = useState(undefined)
    const [dataDestilacionGrafica, setDataDestilacionGrafica] = useState(undefined)
    const [dataAnhidroGrafica, setDataAnhidroGrafica] = useState(undefined)

    const [dataZafraGraficaFilter, setDataZafraGraficaFilter] = useState(undefined)
    const [dataDestilacionGraficaFilter, setDataDestilacionGraficaFilter] = useState(undefined)
    const [dataAnhidroGraficaFilter, setDataAnhidroGraficaFilter] = useState(undefined)


    /*** PARTES DIARIOS DB - TUCUMAN Y NORE ***/
    useEffect(() => {
        getDataParteDiarios();
        getDataParteDiariosNorte();
    }, []);
    const getDataParteDiarios = async () => {
        const data = await getParteDiarios();
        setDataParteDiarios(data);
    };
    const getDataParteDiariosNorte = async () => {
        const data = await getParteDiariosNorte();
        setDataParteDiariosNorte(data);
    };

    /*** PERIODOS Y DATOS POR ZAFRA ELEGIDA ***/
    useEffect(() => {
        periodosPorZafra()
    }, [anioZafra])


    const periodosPorZafra = async () => {
        if (!anioZafra) return; // evitar consulta sin año definido
        const params = { anio: anioZafra };
        const data = await getPeriodoZafra(params);
        setPeriodosZafra(data);
    }


    /** FILTRA PERIODO Y DATOS EN PERIODO ELEGIDO POR ANIO **/
    useEffect(() => {
        if (dataParteDiarios && periodosZafra) {
            const periodoActualTucuman = obtenerPeriodos(periodosZafra, 1)
            const { dataZafra1, dataDestileria1, dataAnhidro1 } =
                filtrarRegistrosPorPeriodos(periodoActualTucuman, dataParteDiarios, new Date())

            setDataZafraGrafica(dataZafra1)
            setDataDestilacionGrafica(dataDestileria1)
            setDataAnhidroGrafica(dataAnhidro1)

            setDataZafraGraficaFilter(dataZafra1)
            setDataDestilacionGraficaFilter(dataDestileria1)
            setDataAnhidroGraficaFilter(dataAnhidro1)
        }
    }, [periodosZafra, dataParteDiarios])

    /** POR DEFECTO ANIO ACTUAL **/
    useEffect(() => {
        const dataNow = new Date();
        if (anioZafra === null) {
            setAnioZafra(dataNow.getFullYear());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /** FILTRA POR INGENIO AL ELEGIR SELECT **/
    useEffect(() => {
        if (!dataZafraGrafica || !dataDestilacionGrafica || !dataAnhidroGrafica) return;

        // Copias de los datos originales
        let zafraFiltered = [...dataZafraGrafica];
        let destilacionFiltered = [...dataDestilacionGrafica];
        let anhidroFiltered = [...dataAnhidroGrafica];

        // --- FILTRO POR INGENIO ---
        if (ingenio) {
            zafraFiltered = zafraFiltered.filter((a) => a.ingenioNombre === ingenio);
            destilacionFiltered = destilacionFiltered.filter((a) => a.ingenioNombre === ingenio);
            anhidroFiltered = anhidroFiltered.filter((a) => a.ingenioNombre === ingenio);
        }

        // --- FILTRO POR PERIODO ---
        if (datePeriodoStart && datePeriodoEnd) {
            const start = new Date(datePeriodoStart);
            const end = new Date(datePeriodoEnd);

            const byDate = (a) => {
                const fecha = new Date(a.fechaParte);
                return fecha >= start && fecha <= end;
            };

            zafraFiltered = zafraFiltered.filter(byDate);
            destilacionFiltered = destilacionFiltered.filter(byDate);
            anhidroFiltered = anhidroFiltered.filter(byDate);
        }

        // --- ORDENAR POR FECHA ---
        const sortByDate = (arr) =>
            arr.sort((a, b) => new Date(a.fechaParte) - new Date(b.fechaParte));

        setDataZafraGraficaFilter(sortByDate(zafraFiltered));
        setDataDestilacionGraficaFilter(sortByDate(destilacionFiltered));
        setDataAnhidroGraficaFilter(sortByDate(anhidroFiltered));
    }, [ingenio, datePeriodoStart, datePeriodoEnd, dataZafraGrafica, dataDestilacionGrafica, dataAnhidroGrafica])


    return (
        <Container fluid>
            <TitlePage titlePage="Gráficos" />
            <hr className="mx-3 mt-1" />
            {!periodosZafra || !dataZafraGrafica || !dataDestilacionGrafica || !dataAnhidroGrafica ? (
                <div className="d-flex justify-content-center align-items-center text-center">
                    <Spinn type="data" />
                </div>
            ) : (
                <>
                    <Filtros
                        dataZafra={anioZafra}
                        setDataZafra={setAnioZafra}
                        setDatePeriodoStart={setDatePeriodoStart}
                        setDatePeriodoEnd={setDatePeriodoEnd}
                        setIngenio={setIngenio}
                        bandFilterZafraAnio={true}
                        bandFilterPeriodo={true}
                        bandFilterIngenio={true}
                        bandFilterIngenioRegion={1}
                    />
                    <GraficasLinealComponent
                        dataZafraGrafica={dataZafraGraficaFilter}
                        dataDestilacionGrafica={dataDestilacionGrafica}
                        dataAnhidroGrafica={dataAnhidroGrafica}
                        dataUserRegister={dataUserRegister}
                        ingenio={ingenio}
                        datePeriodoStart={datePeriodoStart}
                        datePeriodoEnd={datePeriodoEnd}
                        routeAPI={routeAPI}
                    />
                </>
            )}
        </Container>
    )
}

export default GraficasDataContainer