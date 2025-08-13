export function obtenerPeriodos(data, regionId) {
  const periodos = {
    inicio_zafra: null,
    fin_zafra: null,
    inicio_destileria: null,
    fin_destileria: null,
    inicio_anhidro: null,
    fin_anhidro: null
  };

  // Filtrar los datos por regionId antes del forEach
  const datosFiltrados = data?.filter(item => item.id_region_ingenios === regionId) || [];

  datosFiltrados.forEach(item => {
    // Zafra
    if (item.inicio_zafra) {
      const inicio = new Date(item.inicio_zafra);
      periodos.inicio_zafra = !periodos.inicio_zafra || inicio < new Date(periodos.inicio_zafra)
        ? inicio.toString()
        : periodos.inicio_zafra;
    }
    if (item.fin_zafra) {
      const fin = new Date(item.fin_zafra);
      periodos.fin_zafra = !periodos.fin_zafra || fin > new Date(periodos.fin_zafra)
        ? fin.toString()
        : periodos.fin_zafra;
    }

    // Destilería
    if (item.inicio_destileria) {
      const inicio = new Date(item.inicio_destileria);
      periodos.inicio_destileria = !periodos.inicio_destileria || inicio < new Date(periodos.inicio_destileria)
        ? inicio.toString()
        : periodos.inicio_destileria;
    }
    if (item.fin_destileria) {
      const fin = new Date(item.fin_destileria);
      periodos.fin_destileria = !periodos.fin_destileria || fin > new Date(periodos.fin_destileria)
        ? fin.toString()
        : periodos.fin_destileria;
    }

    // Anhidro
    if (item.inicio_anhidro) {
      const inicio = new Date(item.inicio_anhidro);
      periodos.inicio_anhidro = !periodos.inicio_anhidro || inicio < new Date(periodos.inicio_anhidro)
        ? inicio.toString()
        : periodos.inicio_anhidro;
    }
    if (item.fin_anhidro) {
      const fin = new Date(item.fin_anhidro);
      periodos.fin_anhidro = !periodos.fin_anhidro || fin > new Date(periodos.fin_anhidro)
        ? fin.toString()
        : periodos.fin_anhidro;
    }
  });

  return periodos;
}