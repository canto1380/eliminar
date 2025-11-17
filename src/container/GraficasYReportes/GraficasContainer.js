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
import GraficasLinealComponent from "../../components/Graficas/TabsGraficasPeriodos/GraficaLineal"
import { DatabaseFilled } from "@ant-design/icons"
import { Tabs } from "antd"
import { itemsRportes } from "./ItemsGraficas"
import { getIngenios } from "../../utils/queryAPI/ingenios"

const GraficasDataContainer = ({ tokenAuth, dataUserRegister, routeAPI }) => {
    const [anioZafra, setAnioZafra] = useState(null)
    const [periodosZafra, setPeriodosZafra] = useState(undefined)
    const [datePeriodoStart, setDatePeriodoStart] = useState(undefined)
    const [datePeriodoEnd, setDatePeriodoEnd] = useState(undefined)
    const [ingenio, setIngenio] = useState(undefined)
    const [region, setRegion] = useState(undefined)
    const [dataParteDiarios, setDataParteDiarios] = useState([]);
    const [dataParteDiariosNorte, setDataParteDiariosNorte] = useState([]);
    const [dataZafraGrafica, setDataZafraGrafica] = useState(undefined)
    const [dataDestilacionGrafica, setDataDestilacionGrafica] = useState(undefined)
    const [dataAnhidroGrafica, setDataAnhidroGrafica] = useState(undefined)
    const [anioStart, setAnioStart] = useState(undefined)
    const [anioEnd, setAnioEnd] = useState(undefined)
    const [itemsComaprativosZafra, setItemsComaprativosZafra] = useState(['CMB'])
    const [periodosAnioStart, setPeriodosAnioStart] = useState(undefined)
    const [periodosAnioEnd, setPeriodosAnioEnd] = useState(undefined)

    const [dataAnioStartZafraTucuman, setDataAnioStartZafraTucuman] = useState(undefined)
    const [dataAnioStartDestileriaTucuman, setDataAnioStartDestileriaTucuman] = useState(undefined)
    const [dataAnioStartAnhidroTucuman, setDataAnioStartAnhidroTucuman] = useState(undefined)
    const [dataAnioEndZafraTucuman, setDataAnioEndZafraTucuman] = useState(undefined)
    const [dataAnioEndDestileriaTucuman, setDataAnioEndDestileriaTucuman] = useState(undefined)
    const [dataAnioEndAnhidroTucuman, setDataAnioEndAnhidroTucuman] = useState(undefined)

    const [dataAnioStartZafraNorte, setDataAnioStartZafraNorte] = useState(undefined)
    const [dataAnioStartDestileriaNorte, setDataAnioStartDestileriaNorte] = useState(undefined)
    const [dataAnioStartAnhidroNorte, setDataAnioStartAnhidroNorte] = useState(undefined)
    const [dataAnioEndZafraNorte, setDataAnioEndZafraNorte] = useState(undefined)
    const [dataAnioEndDestileriaNorte, setDataAnioEndDestileriaNorte] = useState(undefined)
    const [dataAnioEndAnhidroNorte, setDataAnioEndAnhidroNorte] = useState(undefined)

    const [dataZafraGraficaFilter, setDataZafraGraficaFilter] = useState(undefined)
    const [dataDestilacionGraficaFilter, setDataDestilacionGraficaFilter] = useState(undefined)
    const [dataAnhidroGraficaFilter, setDataAnhidroGraficaFilter] = useState(undefined)


    /*** PARTES DIARIOS DB - TUCUMAN Y NORTE ***/
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

    const normalize = (str) =>
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    /** FILTRA POR INGENIO AL ELEGIR SELECT **/
    useEffect(() => {
        if (!dataZafraGrafica || !dataDestilacionGrafica || !dataAnhidroGrafica) return;

        // Copias de los datos originales
        let zafraFiltered = [...dataZafraGrafica];
        let destilacionFiltered = [...dataDestilacionGrafica];
        let anhidroFiltered = [...dataAnhidroGrafica];

        if (ingenio) {
            const periodoIngenioSeleccionado = periodosZafra.filter((d) => normalize(d.nombre_ingenio) === normalize(ingenio))

            const inicioZafra = new Date(periodoIngenioSeleccionado[0].inicio_zafra);
            const finZafra = periodoIngenioSeleccionado[0].fin_zafra
                ? new Date(periodoIngenioSeleccionado[0].fin_zafra)
                : new Date();

            const inicioDestileria = new Date(periodoIngenioSeleccionado[0].inicio_destileria);
            const finDestileria = periodoIngenioSeleccionado[0].fin_destileria
                ? new Date(periodoIngenioSeleccionado[0].fin_destileria)
                : new Date();

            const inicioAnhidro = new Date(periodoIngenioSeleccionado[0].inicio_anhidro);
            const finAnhidro = periodoIngenioSeleccionado[0].fin_anhidro
                ? new Date(periodoIngenioSeleccionado[0].fin_anhidro)
                : new Date();

            zafraFiltered = zafraFiltered.filter((a) => {
                const dateRegistro = new Date(a.fechaParte)
                return (
                    normalize(a.ingenioNombre) === normalize(ingenio) &&
                    dateRegistro >= inicioZafra &&
                    dateRegistro <= finZafra
                )
            });
            destilacionFiltered = destilacionFiltered.filter((a) => {
                const dateRegistro = new Date(a.fechaParte)
                return (
                    normalize(a.ingenioNombre) === normalize(ingenio) &&
                    dateRegistro >= inicioDestileria &&
                    dateRegistro <= finDestileria
                )
            });
            anhidroFiltered = anhidroFiltered.filter((a) => {
                const dateRegistro = new Date(a.fechaParte)
                return (
                    normalize(a.ingenioNombre) === normalize(ingenio) &&
                    dateRegistro >= inicioAnhidro &&
                    dateRegistro <= finAnhidro
                )
            });
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

    /********************************************************* TABS 2 *******************************************************/

    useEffect(() => {
        periodosZafraCadaAnio()
    }, [anioEnd])

    const periodosZafraCadaAnio = async () => {
        if (!anioStart || !anioEnd) return; // evitar consulta sin año definido
        const params1 = { anio: anioStart };
        const data1 = await getPeriodoZafra(params1);
        setPeriodosAnioStart(data1);

        const params2 = { anio: anioEnd };
        const data2 = await getPeriodoZafra(params2);
        setPeriodosAnioEnd(data2);
    }

    /** FILTRA PERIODO Y DATOS EN PERIODO ELEGIDO POR ANIO **/
    useEffect(() => {

        if (dataParteDiarios && periodosAnioStart && periodosAnioEnd) {
            // Normalizar el valor de región (puede venir como string o número)
            const regionId = typeof region === 'string' && region !== 'Todos' ? parseInt(region) : region;

            // Si no hay región seleccionada o es 'Todos', mostrar ambas regiones
            const mostrarTucuman = !region || region === 'Todos' || regionId === 1;
            const mostrarNorte = !region || region === 'Todos' || regionId === 2;

            if (mostrarTucuman) {
                const periodoStartTucuman = obtenerPeriodos(periodosAnioStart, 1)
                const { dataZafra1, dataDestileria1, dataAnhidro1 } =
                    filtrarRegistrosPorPeriodos(periodoStartTucuman, dataParteDiarios, new Date())

                setDataAnioStartZafraTucuman(dataZafra1)
                setDataAnioStartDestileriaTucuman(dataDestileria1)
                setDataAnioStartAnhidroTucuman(dataAnhidro1)

                const periodoEndTucuman = obtenerPeriodos(periodosAnioEnd, 1)
                const { dataZafra1: dataZafra2, dataDestileria1: dataDestileria2, dataAnhidro1: dataAnhidro2 } =
                    filtrarRegistrosPorPeriodos(periodoEndTucuman, dataParteDiarios, new Date())

                setDataAnioEndZafraTucuman(dataZafra2)
                setDataAnioEndDestileriaTucuman(dataDestileria2)
                setDataAnioEndAnhidroTucuman(dataAnhidro2)
            } else {
                // Limpiar datos de Tucumán si no se debe mostrar
                setDataAnioStartZafraTucuman(undefined)
                setDataAnioStartDestileriaTucuman(undefined)
                setDataAnioStartAnhidroTucuman(undefined)
                setDataAnioEndZafraTucuman(undefined)
                setDataAnioEndDestileriaTucuman(undefined)
                setDataAnioEndAnhidroTucuman(undefined)
            }

            /** NORTE **/
            if (mostrarNorte) {
                const periodoStartNorte = obtenerPeriodos(periodosAnioStart, 2)
                const { dataZafra1: dataZafra3, dataDestileria1: dataDestileria3, dataAnhidro1: dataAnhidro3 } =
                    filtrarRegistrosPorPeriodos(periodoStartNorte, dataParteDiariosNorte, new Date())
                setDataAnioStartZafraNorte(dataZafra3)
                setDataAnioStartDestileriaNorte(dataDestileria3)
                setDataAnioStartAnhidroNorte(dataAnhidro3)

                const periodoEndNorte = obtenerPeriodos(periodosAnioEnd, 2)
                const { dataZafra1: dataZafra4, dataDestileria1: dataDestileria4, dataAnhidro1: dataAnhidro4 } =
                    filtrarRegistrosPorPeriodos(periodoEndNorte, dataParteDiariosNorte, new Date())
                setDataAnioEndZafraNorte(dataZafra4)
                setDataAnioEndDestileriaNorte(dataDestileria4)
                setDataAnioEndAnhidroNorte(dataAnhidro4)
            } else {
                // Limpiar datos del Norte si no se debe mostrar
                setDataAnioStartZafraNorte(undefined)
                setDataAnioStartDestileriaNorte(undefined)
                setDataAnioStartAnhidroNorte(undefined)
                setDataAnioEndZafraNorte(undefined)
                setDataAnioEndDestileriaNorte(undefined)
                setDataAnioEndAnhidroNorte(undefined)
            }

        }
    }, [dataParteDiarios, periodosAnioEnd, periodosAnioStart, region])

    return (
        <Container fluid>
            <TitlePage titlePage="Gráficos" />
            <hr className="mx-3 mt-1" />
            {!periodosZafra || !dataZafraGrafica || !dataDestilacionGrafica || !dataAnhidroGrafica || !anioZafra ? (
                <div className="d-flex justify-content-center align-items-center text-center">
                    <Spinn type="data" />
                </div>
            ) : (
                <>
                    <Tabs
                        defaultActiveKey="1"
                        items={itemsRportes({
                            anioZafra,
                            setAnioZafra,
                            setDatePeriodoStart,
                            setDatePeriodoEnd,
                            setAnioStart,
                            setAnioEnd,
                            setItemsComaprativosZafra,
                            setIngenio,
                            setRegion,
                            dataZafraGraficaFilter,
                            dataDestilacionGraficaFilter,
                            dataAnhidroGraficaFilter,
                            dataUserRegister,
                            ingenio,
                            datePeriodoStart,
                            datePeriodoEnd,
                            routeAPI,
                            periodosAnioStart,
                            periodosAnioEnd,
                            dataAnioStartZafraTucuman,
                            dataAnioStartDestileriaTucuman,
                            dataAnioStartAnhidroTucuman,
                            dataAnioEndZafraTucuman,
                            dataAnioEndDestileriaTucuman,
                            dataAnioEndAnhidroTucuman,
                            dataAnioStartZafraNorte,
                            dataAnioStartDestileriaNorte,
                            dataAnioStartAnhidroNorte,
                            dataAnioEndZafraNorte,
                            dataAnioEndDestileriaNorte,
                            dataAnioEndAnhidroNorte,
                            anioStart,
                            anioEnd,
                            itemsComaprativosZafra,
                            region
                        })}
                    />
                </>
            )}
        </Container>
    )
}

export default GraficasDataContainer