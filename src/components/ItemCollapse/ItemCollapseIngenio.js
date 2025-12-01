import React from "react";
import moment from "moment";

const ItemCollapseIngenio = ({ ingenio, data }) => {
  const { zafra, destileria, anhidro, totals } = data;

  const renderRange = (obj) => {
    if (!obj.firstDate) return "Sin datos";
    return (
      moment(obj.firstDate).format("DD/MM/YYYY") +
      " → " +
      moment(obj.lastDate).format("DD/MM/YYYY")
    );
  };

  return (
    <div className="item-collapse" style={{ marginBottom: 20 }}>
      <h2>{ingenio}</h2>

      <div className="block">
        <h4>Zafra</h4>
        <p>Días: {totals.zafra.count}</p>
        <p>Rango: {renderRange(totals.zafra)}</p>
      </div>

      <div className="block">
        <h4>Destilería</h4>
        <p>Días: {totals.destileria.count}</p>
        <p>Rango: {renderRange(totals.destileria)}</p>
      </div>

      <div className="block">
        <h4>Anhidro</h4>
        <p>Días: {totals.anhidro.count}</p>
        <p>Rango: {renderRange(totals.anhidro)}</p>
      </div>

      <h4 style={{ marginTop: 10 }}>
        Total registros: {totals.totalRegistros}
      </h4>

      {/* ACA si querés podés renderizar tablas */}
      {/* <TablaZafra rows={zafra} /> */}
    </div>
  );
};

export default ItemCollapseIngenio;
