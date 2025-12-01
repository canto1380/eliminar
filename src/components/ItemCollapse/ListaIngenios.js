import React from "react";
import ItemCollapseIngenio from "./ItemCollapseIngenio.js";
import { useIngeniosData } from "./hooks/useIngeniosData.js";

const ListaIngenios = ({
    dataParteDiariosHistoricos,
    dataParteDiariosHistoricosNorte,
}) => {
    const ingenios = useIngeniosData(
        dataParteDiariosHistoricos,
        dataParteDiariosHistoricosNorte
    );

    // Calculamos totals generales
    const totalsGenerales = Object.values(ingenios).reduce(
        (acc, ing) => {
            acc.zafra += ing.totals.zafra.count;
            acc.dest += ing.totals.destileria.count;
            acc.anhidro += ing.totals.anhidro.count;
            acc.total += ing.totals.totalRegistros;
            return acc;
        },
        { zafra: 0, dest: 0, anhidro: 0, total: 0 }
    );

    return (
        <div className="lista-ingenios">
            {Object.entries(ingenios).map(([nombre, data]) => (
                <ItemCollapseIngenio key={data.id} ingenio={nombre} data={data} />
            ))}

            {/* ================================ */}
            {/* Totales generales                */}
            {/* ================================ */}
            <div className="totales-generales" style={{ marginTop: 30 }}>
                <h3>Totales Generales</h3>
                <p>Zafra: {totalsGenerales.zafra}</p>
                <p>Destilería: {totalsGenerales.dest}</p>
                <p>Anhidro: {totalsGenerales.anhidro}</p>
                <p>
                    <b>Total: {totalsGenerales.total}</b>
                </p>
            </div>
        </div>
    );
};

export default ListaIngenios;
