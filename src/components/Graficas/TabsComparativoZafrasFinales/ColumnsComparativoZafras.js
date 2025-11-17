import { Typography, Tag } from "antd";

const { Text } = Typography;

// 🧮 Función para formatear valores según el tipo de item
const formatValue = (item, value) => {
    if (value === null || value === undefined || isNaN(value)) return "-";

    // 🔹 CMB, CMN, AZ, EQUIVALENTE → enteros con separador de miles
    if (["CMB", "CMN", "ORGANICO", "MELAZA", 'EQUIVALENTE', 'BLANCO', 'CRUDO', 'OTROS', 'AZTOTAL'].includes(item)) {
        return Math.round(value).toLocaleString("es-AR");
    }

    // 🔹 RCMB, RCMN → porcentaje con dos decimales
    if (["RCMB", "RCMN"].includes(item)) {
        return `${Number(value).toFixed(2)}%`;
    }

    // 🔹 Valor por defecto (entero con separador)
    return Math.round(value).toLocaleString("es-AR");
};

export const columnsTable = (items, periodosAnioStart, periodosAnioEnd) => {
    const columns = [
        {
            title: "Ingenio",
            dataIndex: "ingenio",
            key: "ingenio",
            fixed: "left",
            width: 150,
        },
        ...items.map((item) => ({
            title: item.charAt(0).toUpperCase() + item.slice(1),
            children: [
                {
                    title: periodosAnioEnd,
                    dataIndex: [`${item}_${periodosAnioEnd}`],
                    align: "right",
                    width: 90,
                    render: (value) => formatValue(item, value),
                },
                {
                    title: periodosAnioStart,
                    dataIndex: [`${item}_${periodosAnioStart}`],
                    align: "right",
                    width: 90,
                    render: (value) => formatValue(item, value),
                },
                {
                    title: "+/-",
                    dataIndex: [`${item}_diff`],
                    align: "right",
                    width: 80,
                    render: (value) => (
                        <Text type={value >= 0 ? "success" : "danger"}>
                            {value >= 0 ? `+${formatValue(item, value)}` : formatValue(item, value)}
                        </Text>
                    ),
                },
                // {
                //     title: "%",
                //     dataIndex: [`${item}_percent`],
                //     align: "right",
                //     width: 80,
                //     render: (value) => (
                //         <Tag color={value >= 0 ? "green" : "volcano"}>{value}%</Tag>
                //     ),
                // },
                {
                    title: "%",
                    dataIndex: [`${item}_percent`],
                    align: "right",
                    width: 80,
                    render: (value) => {
                        if (value === null || value === undefined || isNaN(value)) return "-";
                        const num = Number(value);
                        return (
                            <Tag color={num >= 0 ? "green" : "volcano"}>
                                {num.toFixed(2)}%
                            </Tag>
                        );
                    },
                },
            ],
        })),
    ];
    return columns
}