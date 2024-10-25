export const columns = [
  {
    title: "Fecha",
    dataIndex: "FechaParte",
    key: "FechaParte",
    sorter: (a, b) => a.FechaParte > b.FechaParte,
  },
  {
    title: "CMB [Tn]",
    dataIndex: "MoliendaCanaBruta",
    key: "MoliendaCanaBruta",
    sorter: (a, b) => a.MoliendaCanaBruta > b.MoliendaCanaBruta,
    render: (text) => new Intl.NumberFormat('es-AR').format(text),
  },
  {
    title: "Az. Equiv. [Tn]",
    dataIndex: "AzucarEquivalente",
    key: "AzucarEquivalente",
    sorter: (a, b) => a.AzucarEquivalente > b.AzucarEquivalente,
    render: (value) => value?.toLocaleString('es-AR', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
  },
  {
    title: "Rto CMB (%)",
    dataIndex: "RendimientoCanaBruta",
    key: "RendimientoCanaBruta",
    sorter: (a, b) => a.RendimientoCanaBruta > b.RendimientoCanaBruta,
    render: (value) => value?.toLocaleString('es-AR', { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
  },
  {
    title: "Alcohol (m3)",
    dataIndex: "AlcoholProducido",
    key: "AlcoholProducido",
    sorter: (a, b) => a.AlcoholProducido > b.AlcoholProducido,
    render: (text) => new Intl.NumberFormat('es-AR').format(text),
  },
  {
    title: "Melaza [Tn]",
    dataIndex: "MelazaProducida",
    key: "MelazaProducida",
    sorter: (a, b) => a.MelazaProducida > b.MelazaProducida,
    render: (text) => new Intl.NumberFormat('es-AR').format(text),
  },
];
