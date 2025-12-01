export function filtrarRegistrosPorPeriodos(periodos, registros, dataEnd) {
const dataFin = new Date(dataEnd)
  const filtrar = (inicioStr, finStr) => {
    if (!inicioStr) return [];
    const inicio = new Date(inicioStr);
    const fin = finStr ? new Date(finStr) : dataFin;
    return registros.filter(registro => {
      const fecha = new Date(registro.fechaParte);
      return fecha >= inicio && fecha <= fin;
    });
  };
  return {
    dataZafra1: filtrar(periodos.inicio_zafra, new Date(periodos.fin_zafra) >= new Date(periodos.fin_datos_zafra) ? periodos.fin_zafra : periodos.fin_datos_zafra),
    dataDestileria1: filtrar(periodos.inicio_destileria, periodos.fin_destileria),
    dataAnhidro1: filtrar(periodos.inicio_anhidro, periodos.fin_anhidro)
  };
}

