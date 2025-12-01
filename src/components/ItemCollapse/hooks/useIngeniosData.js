import { useMemo } from "react";
import moment from "moment";

// ===============================
// Helpers
// ===============================

// Convierte fecha Excel o string a Date real
const parseDate = (value) => {
  if (!value) return null;
  if (typeof value === "string") return new Date(value);
  if (typeof value === "number") {
    // fecha formato Excel
    const excelEpoch = new Date(1899, 11, 30);
    const ms = value * 86400000;
    return new Date(excelEpoch.getTime() + ms);
  }
  return new Date(value);
};

// Procesa un array de zafra/destilería/anhidro con fecha y cálculos
const processRows = (rows = []) => {
  if (!rows?.length) return [];

  return rows.map((item) => {
    const fecha = parseDate(item.fecha);

    return {
      ...item,
      fecha,
      fechaStr: fecha ? moment(fecha).format("DD/MM/YYYY") : "",
      // Si tenés más cálculos por fila los agregamos acá:
      rtoCMB:
        item.cmb && item.equivalente
          ? (Number(item.equivalente) / Number(item.cmb)) * 100
          : 0,
    };
  });
};

// Calcula totales de una categoría (zafra/destilería/anhidro)
const calcTotals = (rows) => {
  if (!rows?.length) return { firstDate: null, lastDate: null, count: 0 };

  const fechas = rows.map((r) => r.fecha).filter(Boolean);
  fechas.sort((a, b) => a - b);

  return {
    firstDate: fechas[0] || null,
    lastDate: fechas[fechas.length - 1] || null,
    count: rows.length,
  };
};

// ===============================
// Hook principal
// ===============================
export const useIngeniosData = (sur = [], norte = []) => {
  const ingenios = useMemo(() => {
    const all = [...sur, ...norte];
    const mapped = {};

    all.forEach((item) => {
      const { ingenio, id } = item;

      const zafra = processRows(item.zafra);
      const dest = processRows(item.destileria);
      const anh = processRows(item.anhidro);

      mapped[ingenio] = {
        id,
        zafra,
        destileria: dest,
        anhidro: anh,

        totals: {
          zafra: calcTotals(zafra),
          destileria: calcTotals(dest),
          anhidro: calcTotals(anh),
          // total general
          totalRegistros: zafra.length + dest.length + anh.length,
        },
      };
    });

    return mapped;
  }, [sur, norte]);

  return ingenios;
};
