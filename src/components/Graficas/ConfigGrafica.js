import { colorsGraphics } from "./PluginGrafica";

const colores = colorsGraphics()

export const optionsGraphic = (title) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
            /*titulo principal */
            title: {
                display: true,
                text: title,
                // color: "rgb(1, 26, 75)",
                color: colores.tituloPrincipal,
                font: {
                    size: 18,
                    weight: "bold"
                }
            },
            /* leyenda */
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: colores.leyenda,
                    font: {
                        size: 0,
                    }
                }
            },
            tooltip: {
                backgroundColor: colores.tooltipBG,
                borderColor: colores.tooltipBorde,
                borderWidth: 0,
                titleColor: colores.tooltipTitulo,
                bodyColor: "#E5E7EB",
            },
        },
        scales: {
            x: {
                /* formato eje x */
                title: {
                    display: true,
                    text: "Fecha",
                    color: colores.tituloEjes,
                    font: {
                        size: 14,      
                        weight: "bold",
                      },
                },
                /*valores del eje x */
                ticks: {
                    color: colores.valoresEjes,
                    maxRotation: 25,
                    autoSkip: true,
                    font: {
                      size: 12,      
                    },
                  },
                  grid: { color: colores.lineasEjes },
            },
            y: {
                title: {
                    display: true,
                    text: "Toneladas",
                    color: colores.tituloEjes,
                    font: {
                      size: 14,      // 🔹 tamaño del título del eje Y
                      weight: "bold",
                    },
                  },
                  ticks: {
                    color: colores.valoresEjes,
                    font: {
                      size: 12,      // 🔹 valores en el eje Y
                    },
                  },
                  grid: { color: colores.lineasEjes },
            },
        },
    };

    return options;
};

export const dataGraphic = (labels, title, dataGraphic) => {
    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: dataGraphic,
                borderColor: 'rgb(120, 120, 120)',
                backgroundColor:  'rgb(120, 120, 120)',
                hoverBackgroundColor: colores.tituloEjes,
                yAxisID: 'y',
                tension: 0,
                pointRadius: 0,
                fill: true,
                borderWidth: 2,
            },

        ],
    }
    return data
}