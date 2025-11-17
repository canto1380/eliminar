import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
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
import { Line } from 'react-chartjs-2';
import { optionsGraphic, dataGraphic } from '../ConfigGrafica';
import '../graficas.css'
import { Dropdown } from "react-bootstrap";
import moment from "moment";
import { toast } from "react-toastify";
import { apiExportExcel } from "../../../utils/apiExportExcel";
import { message } from "antd";

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

const GraficaLinealComponent = forwardRef(({
    dataUserRegister,
    ingenio,
    datePeriodoStart,
    datePeriodoEnd,
    titulo,
    labels,
    valores,
    routeAPI,
    onSeleccionarGrafica
}, ref) => {
    const chartRef = useRef(null);
    const [checked, setChecked] = useState(false);

    useEffect(() => {

    }, [ingenio])

    const dateNow = new Date()
    const dateFormat = moment(dateNow).format("DD-MM-YYYY")
    const datePeriodoStartFormat = moment(datePeriodoStart).format("DD-MM-YYYY")
    const datePeriodoEndFormat = moment(datePeriodoEnd).format("DD-MM-YYYY")

    // Exportar datos a Excel
    const exportExcel = async () => {
        try {
            const dataSend = [{
                dateFormat,
                titulo,
                labels,
                valores,
                dataUserRegister,
                ingenio,
                datePeriodoStart,
                datePeriodoEnd,
                datePeriodoStartFormat,
                datePeriodoEndFormat
            }]

            const res = await apiExportExcel("POST", `${routeAPI}/descargarGrafica`, dataSend)
            if (res.status === 200) {
                const blob = new Blob([res.data], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                })
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                const name = `${dateFormat} - Informe ${ingenio ? `${ingenio}` : ""}`
                link.download = name;
                link.click();
                link.remove();
                window.URL.revokeObjectURL(link);
                message.success("Descarga realizada correctamente", 5);
                window.location.reload();
            } else {
                toast.error("Error al generar el excel");
            }

        } catch (error) {
            toast.error('Error en el servidor: ', error)
        }
    };

    // Exportar imagen PNG
    const exportImagen = () => {
        const link = document.createElement("a");
        link.download = `${titulo}.png`;
        link.href = chartRef.current.toBase64Image();
        link.click();
    };

    const handleCheck = (e) => {
        const newChecked = e.target.checked;
        setChecked(newChecked);

        onSeleccionarGrafica({
            dateFormat,
            titulo,
            labels,
            valores,
            dataUserRegister,
            ingenio,
            datePeriodoStart,
            datePeriodoEnd,
            datePeriodoStartFormat,
            datePeriodoEndFormat
        }, newChecked);
    };

    /** METODO PARA EL FORWARD REF TRAIDO DEL PADRE **/
    useImperativeHandle(ref, () => ({
        resetCheckbox: () => setChecked(false)
    }));

    return (
        <div className="containerGrafica position-relative p-2">
            <div className="position-absolute top-0 start-0 m-2">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheck}
                    title="Seleccionar para exportar"
                    style={{ transform: "scale(1.3)" }}
                />
            </div>
            {/* Botón de menú */}
            <div className="position-absolute top-0 end-0 m-2">
                <Dropdown
                    style={{ transform: "scale(0.9)" }}
                >
                    <Dropdown.Toggle variant="dark" size="sm">⋮</Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-export'>
                        <Dropdown.Item onClick={exportExcel}>📊 Exportar Excel</Dropdown.Item>
                        <Dropdown.Item onClick={exportImagen}>🖼️ Exportar Imagen</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Gráfico */}
            <Line
                ref={chartRef}
                options={optionsGraphic(titulo)}
                data={dataGraphic(labels, titulo, valores)}
            />
        </div>
    );
});


export default GraficaLinealComponent