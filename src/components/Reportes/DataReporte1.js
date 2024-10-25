export const dataRegistro1 = (
  dataImport,
  setAnio2014,
  setAnio2015,
  setAnio2016,
  setAnio2017,
  setAnio2018,
  setAnio2019,
  setAnio2020,
  setAnio2021,
  setAnio2022,
  setAnio2023,
  setAnio2024,
  setAnio2025,
  setDataTabla
) => {
  let data2014 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2015 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2016 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2017 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2018 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2019 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2020 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2021 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2022 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2023 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2024 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let data2025 = { anio: 0, CMB: 0, azEquiv: 0, rtoCMB: 0, alcohol: 0, melaza: 0 };
  let datos = [];

  dataImport?.forEach((d) => {
    const [dia, mes, año] = d.FechaParte.split("/");
    const parsedAño = parseInt(año);

    const moliendaCanaBruta = parseInt(d.MoliendaCanaBruta) || 0;
    const azucarEquivalente = parseFloat(d.AzucarEquivalente) || 0;
    const rtoCMB = parseFloat(d.RendimientoCanaBruta) || 0;
    const alcoholProducido = parseInt(d.AlcoholProducido) || 0;
    const melaza = parseInt(d.MelazaProducida) || 0;

    if (parsedAño === 2014) {
      window.CMB2014 = window.CMB2014 + moliendaCanaBruta;
      window.AzEquiv2014 = window.AzEquiv2014 + azucarEquivalente;
      window.RtoCMB2014 = window.RtoCMB2014 + rtoCMB;
      window.Alcohol2014 = window.Alcohol2014 + alcoholProducido;
      window.Melaza2014 = window.Melaza2014 + melaza;
      data2014 = {
        anio: 2014,
        CMB: window.CMB2014.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2014.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2014,
        alcohol: window.Alcohol2014.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2014.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2015) {
      window.CMB2015 = window.CMB2015 + moliendaCanaBruta;
      window.AzEquiv2015 = window.AzEquiv2015 + azucarEquivalente;
      window.RtoCMB2015 = window.RtoCMB2015 + rtoCMB;
      window.Alcohol2015 = window.Alcohol2015 + alcoholProducido;
      window.Melaza2015 = window.Melaza2015 + melaza;
      data2015 = {
        anio: 2015,
        CMB: window.CMB2015.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2015.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2015,
        alcohol: window.Alcohol2015.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2015.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2016) {
      window.CMB2016 = window.CMB2016 + moliendaCanaBruta;
      window.AzEquiv2016 = window.AzEquiv2016 + azucarEquivalente;
      window.RtoCMB2016 = window.RtoCMB2016 + rtoCMB;
      window.Alcohol2016 = window.Alcohol2016 + alcoholProducido;
      window.Melaza2016 = window.Melaza2016 + melaza;
      data2016 = {
        anio: 2016,
        CMB: window.CMB2016.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2016.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2016,
        alcohol: window.Alcohol2016.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2016.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2017) {
      window.CMB2017 = window.CMB2017 + moliendaCanaBruta;
      window.AzEquiv2017 = window.AzEquiv2017 + azucarEquivalente;
      window.RtoCMB2017 = window.RtoCMB2017 + rtoCMB;
      window.Alcohol2017 = window.Alcohol2017 + alcoholProducido;
      window.Melaza2017 = window.Melaza2017 + melaza;
      data2017 = {
        anio: 2017,
        CMB: window.CMB2017.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2017.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2017,
        alcohol: window.Alcohol2017.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2017.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2018) {
      window.CMB2018 = window.CMB2018 + moliendaCanaBruta;
      window.AzEquiv2018 = window.AzEquiv2018 + azucarEquivalente;
      window.RtoCMB2018 = window.RtoCMB2018 + rtoCMB;
      window.Alcohol2018 = window.Alcohol2018 + alcoholProducido;
      window.Melaza2018 = window.Melaza2018 + melaza;
      data2018 = {
        anio: 2018,
        CMB: window.CMB2018.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2018.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2018,
        alcohol: window.Alcohol2018.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2018.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2019) {
      window.CMB2019 = window.CMB2019 + moliendaCanaBruta;
      window.AzEquiv2019 = window.AzEquiv2019 + azucarEquivalente;
      window.RtoCMB2019 = window.RtoCMB2019 + rtoCMB;
      window.Alcohol2019 = window.Alcohol2019 + alcoholProducido;
      window.Melaza2019 = window.Melaza2019 + melaza;
      data2019 = {
        anio: 2019,
        CMB: window.CMB2019.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2019.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2019,
        alcohol: window.Alcohol2019.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2019.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2020) {
      window.CMB2020 = window.CMB2020 + moliendaCanaBruta;
      window.AzEquiv2020 = window.AzEquiv2020 + azucarEquivalente;
      window.RtoCMB2020 = window.RtoCMB2020 + rtoCMB;
      window.Alcohol2020 = window.Alcohol2020 + alcoholProducido;
      window.Melaza2020 = window.Melaza2020 + melaza;
      data2020 = {
        anio: 2020,
        CMB: window.CMB2020.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2020.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2020,
        alcohol: window.Alcohol2020.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2020.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2021) {
      window.CMB2021 = window.CMB2021 + moliendaCanaBruta;
      window.AzEquiv2021 = window.AzEquiv2021 + azucarEquivalente;
      window.RtoCMB2021 = window.RtoCMB2021 + rtoCMB;
      window.Alcohol2021 = window.Alcohol2021 + alcoholProducido;
      window.Melaza2021 = window.Melaza2021 + melaza;
      data2021 = {
        anio: 2021,
        CMB: window.CMB2021.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2021.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2021,
        alcohol: window.Alcohol2021.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2021.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2022) {
      window.CMB2022 = window.CMB2022 + moliendaCanaBruta;
      window.AzEquiv2022 = window.AzEquiv2022 + azucarEquivalente;
      window.RtoCMB2022 = window.RtoCMB2022 + rtoCMB;
      window.Alcohol2022 = window.Alcohol2022 + alcoholProducido;
      window.Melaza2022 = window.Melaza2022 + melaza;
      data2022 = {
        anio: 2022,
        CMB: window.CMB2022.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2022.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2022,
        alcohol: window.Alcohol2022.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2022.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2023) {
      window.CMB2023 = window.CMB2023 + moliendaCanaBruta;
      window.AzEquiv2023 = window.AzEquiv2023 + azucarEquivalente;
      window.RtoCMB2023 = window.RtoCMB2023 + rtoCMB;
      window.Alcohol2023 = window.Alcohol2023 + alcoholProducido;
      window.Melaza2023 = window.Melaza2023 + melaza;
      data2023 = {
        anio: 2023,
        CMB: window.CMB2023.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2023.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        alcohol: window.Alcohol2023.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2023.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2024) {
      window.CMB2024 = window.CMB2024 + moliendaCanaBruta;
      window.AzEquiv2024 = window.AzEquiv2024 + azucarEquivalente;
      window.RtoCMB2024 = window.RtoCMB2024 + rtoCMB;
      window.Alcohol2024 = window.Alcohol2024 + alcoholProducido;
      window.Melaza2024 = window.Melaza2024 + melaza;
      data2024 = {
        anio: 2024,
        CMB: window.CMB2024.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2024.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2024,
        alcohol: window.Alcohol2024.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2024.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
    if (parsedAño === 2025) {
      window.CMB2025 = window.CMB2023 + moliendaCanaBruta;
      window.AzEquiv2025 = window.AzEquiv2023 + azucarEquivalente;
      window.RtoCMB2025 = window.RtoCMB2023 + rtoCMB;
      window.Alcohol2025 = window.Alcohol2023 + alcoholProducido;
      window.Melaza2025 = window.Melaza2023 + melaza;
      data2025 = {
        anio: 2025,
        CMB: window.CMB2025.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        azEquiv: window.AzEquiv2025.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        rtoCMB: window.RtoCMB2025,
        alcohol: window.Alcohol2025.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        melaza: window.Melaza2025.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      };
    }
  });
  if(data2014.CMB !== 0) {
    const cmbFormat = parseInt(data2014?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2014.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2014.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2015.CMB !== 0) {
    const cmbFormat = parseInt(data2015?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2015.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2015.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2016.CMB !== 0) {
    const cmbFormat = parseInt(data2016?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2016.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2016.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2017.CMB !== 0) {
    const cmbFormat = parseInt(data2017?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2017.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2017.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2018.CMB !== 0) {
    const cmbFormat = parseInt(data2018?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2018.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2018.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2019.CMB !== 0) {
    const cmbFormat = parseInt(data2019?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2019.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2019.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2020.CMB !== 0) {
    const cmbFormat = parseInt(data2020?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2020.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2020.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2021.CMB !== 0) {
    const cmbFormat = parseInt(data2021?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2021.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2021.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2022.CMB !== 0) {
    const cmbFormat = parseInt(data2022?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2022.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2022.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2023.CMB !== 0) {
    const cmbFormat = parseInt(data2023?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2023.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2023.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2024.CMB !== 0) {
    const cmbFormat = parseInt(data2024?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2024.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2024.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  if(data2025.CMB !== 0) {
    const cmbFormat = parseInt(data2025?.CMB.replace(/\./g, ''), 10)
    const azEquivFormat = parseFloat(data2025.azEquiv.replace(/\./g, ''), 10)
    const rtoCMBFormat = azEquivFormat / cmbFormat  * 100
    data2025.rtoCMB = rtoCMBFormat.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  setAnio2014(data2014);
  setAnio2015(data2015);
  setAnio2016(data2016);
  setAnio2017(data2017);
  setAnio2018(data2018);
  setAnio2019(data2019);
  setAnio2020(data2020);
  setAnio2021(data2021);
  setAnio2022(data2022);
  setAnio2023(data2023);
  setAnio2024(data2024);
  setAnio2025(data2025);
  datos = [
    data2014,
    data2015,
    data2016,
    data2017,
    data2018,
    data2019,
    data2020,
    data2021,
    data2022,
    data2023,
    data2024,
    data2025
  ];
  const isObjectZero = (obj) =>
    Object.values(obj).every((value) => value === 0);
  const combinedArray = datos.filter((obj) => !isObjectZero(obj));
  setDataTabla(combinedArray);
};
