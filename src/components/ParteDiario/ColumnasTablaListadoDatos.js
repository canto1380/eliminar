// Función helper para renderizar fechas o texto
const renderFechaOTexto = (text) => {
  if (text === undefined || text === null) return '';
  
  // Si es texto que no parece fecha (como "Total quincena"), devolver el texto tal como está
  if (typeof text === 'string' && !Date.parse(text)) {
    return text;
  }
  
  // Intentar convertir a fecha
  const date = new Date(text);
  if (!isNaN(date.getTime())) {
    return date.toLocaleDateString('es-AR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    });
  }
  
  // Fallback: devolver el valor original
  return text;
};

export const columns = [
  {
    key: 'fecha',
    title: 'Fecha',
    dataIndex: 'fechaParte',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.fechaParte > b.fechaParte,
    render: renderFechaOTexto,
  },
  {
    key: 'Id',
    title: 'Caña Molida Bruta (C.M.B.)',
    dataIndex: 'moliendaCanaBruta',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.moliendaCanaBruta > b.moliendaCanaBruta,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  {
    key: 'Id',
    title: 'Rto % CMB Total',
    dataIndex: 'rendimientoCanaBruta',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.rendimientoCanaBruta > b.rendimientoCanaBruta,
    render: (value) => value?.toLocaleString('es-AR', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
  },
  {
    key: 'Id',
    title: 'Caña Molida Neta (C.M.N.) ',
    dataIndex: 'moliendaCanaNeta',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.moliendaCanaNeta > b.moliendaCanaNeta,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) :0,
  },
  {
    key: 'Id',
    title: 'Rto % CMN Total',
    dataIndex: 'rendimientoCanaNeta',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.rendimientoCanaNeta > b.rendimientoCanaNeta,
    render: (value) => value?.toLocaleString('es-AR', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
  },
  {
    key: 'Id',
    title: 'Azúcar Equivalente',
    dataIndex: 'azucarEquivalente',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.azucarEquivalente > b.azucarEquivalente,
    render: (value) => value !== undefined ? value?.toLocaleString('es-AR', { minimumFractionDigits: 3, maximumFractionDigits: 3 }) :0 ,
    
  },
  {
    key: 'Id',
    title: 'Total Azúcar Blanco',
    dataIndex: 'azucarBlancoProducido',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.azucarBlancoProducido > b.azucarBlancoProducido,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  {
    key: 'Id',
    title: 'Total Azúcar Crudo',
    dataIndex: 'azucarCrudoProducido',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.azucarCrudoProducido > b.azucarCrudoProducido,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  {
    key: 'Id',
    title: 'Azúcar Refinada',
    dataIndex: 'azucarRefinado',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.azucarRefinado > b.azucarRefinado,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  {
    key: 'Id',
    title: 'Azúcar orgnánica',
    dataIndex: 'azucarOrganico',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.azucarOrganico > b.azucarOrganico,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  {
    key: 'Id',
    title: 'Otros Azúcares',
    dataIndex: 'otroAzucar',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.otroAzucar > b.otroAzucar,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  {
    key: 'Id',
    title: 'Melaza',
    dataIndex: 'melazaProducida',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.melazaProducida > b.melazaProducida,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  {
    key: 'Id',
    title: 'Alcohol Total Hidratado',
    dataIndex: 'alcoholProducido',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.alcoholProducido > b.alcoholProducido,
    render: (text) => text !== undefined ? new Intl.NumberFormat('es-AR').format(text) : 0,
  },
  

]
