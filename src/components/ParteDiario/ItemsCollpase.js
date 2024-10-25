import ListadoDatos from "./ListadoDatos";
import { useState, useEffect } from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { dateConverted } from "../../helpers/helpers";
import { columns } from "./ColumnasTablaListadoDatos";

const ItemCollpse = ({
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  dataParteDiariosHistoricos,
}) => {
  const [aguilares, setAguilares] = useState([]);
  const [aguilaresMensual, setAguilaresMensual] = useState([]);
  const [aguilaresZafra, setAguilaresZafra] = useState([]);
  const [bellaVista, setBellaVista] = useState([]);
  const [bellaVistaMensual, setBellaVistaMensual] = useState([]);
  const [bellaVistaZafra, setBellaVistaZafra] = useState([]);
  const [concepcion, setConcepcion] = useState([]);
  const [concepcionMensual, setConcepcionMensual] = useState([]);
  const [concepcionZafra, setConcepcionZafra] = useState([]);
  const [cruzAlta, setCruzAlta] = useState([]);
  const [cruzAltaMensual, setCruzAltaMensual] = useState([]);
  const [cruzAltaZafra, setCruzAltaZafra] = useState([]);
  const [famailla, setFamailla] = useState([]);
  const [famaillaMensual, setFamaillaMensual] = useState([]);
  const [famaillaZafra, setFamaillaZafra] = useState([]);
  const [laCorona, setLaCorona] = useState([]);
  const [laCoronaMensual, setLaCoronaMensual] = useState([]);
  const [laCoronaZafra, setLaCoronaZafra] = useState([]);
  const [laFlorida, setLaFlorida] = useState([]);
  const [laFloridaMensual, setLaFloridaMensual] = useState([]);
  const [laFloridaZafra, setLaFloridaZafra] = useState([]);
  const [laProvidencia, setLaProvidencia] = useState([]);
  const [laProvidenciaMensual, setLaProvidenciaMensual] = useState([]);
  const [laProvidenciaZafra, setLaProvidenciaZafra] = useState([]);
  const [laTrinidad, setLaTrinidad] = useState([]);
  const [laTrinidadMensual, setLaTrinidadMensual] = useState([]);
  const [laTrinidadZafra, setLaTrinidadZafra] = useState([]);
  const [leales, setLeales] = useState([]);
  const [lealesMensual, setLealesMensual] = useState([]);
  const [lealesZafra, setLealesZafra] = useState([]);
  const [marapa, setMarapa] = useState([]);
  const [marapaMensual, setMarapaMensual] = useState([]);
  const [marapaZafra, setMarapaZafra] = useState([]);
  const [santaBarbara, setSantaBarbara] = useState([]);
  const [santaBarbaraMensual, setSantaBarbaraMensual] = useState([]);
  const [santaBarbaraZafra, setSantaBarbaraZafra] = useState([]);
  const [santaRosa, setSantaRosa] = useState([]);
  const [santaRosaMensual, setSantaRosaMensual] = useState([]);
  const [santaRosaZafra, setSantaRosaZafra] = useState([]);
  const [nunorco, setNunorco] = useState([]);
  const [nunorcoMensual, setNunorcoMensual] = useState([]);
  const [nunorcoZafra, setNunorcoZafra] = useState([]);

  const panelStyle = {
    marginBottom: 24,
    border: "none",
  };

  useEffect(() => {
    dataPorQuincena();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafra, dataAnio, dataMes, dataQuincena]);

  const dataPorQuincena = () => {
    let arrQuincenal = [],
      arrMensual = [],
      arrZafra = [];

    dataParteDiariosHistoricos?.forEach((data) => {
      const newDate = dateConverted(data.FechaParte);
      function getLastDayOfMonth(month) {
        const date = new Date();
        date.setMonth(month);
        date.setDate(0);
        return date.getDate();
      }
      /**FORMATO (OBJECT):  Sat Sep 16 2023 00:00:00 GMT-0300 (hora estándar de Argentina)  **/
      const fechaParametro1 = new Date(
        `${dataMes}/${dataQuincena === 1 ? 1 : 16}/${dataAnio}`
      );
      const fechaParametro2 = new Date(
        `${dataMes}/${
          dataQuincena === 1 ? 15 : getLastDayOfMonth(dataMes)
        }/${dataAnio}`
      );
      if (newDate >= fechaParametro1 && newDate <= fechaParametro2) {
        arrQuincenal.push(data);
      }
      if (newDate.getMonth() + 1 === dataMes) {
        if (dataQuincena === 1) {
          if (newDate >= fechaParametro1 && newDate <= fechaParametro2) {
            arrMensual.push(data);
          }
        }
        if (dataQuincena === 2) {
          arrMensual.push(data);
        }
      }
      arrZafra.push(data);
    });

    setAguilares(arrQuincenal.filter((d) => d.IngenioNombre === "Aguilares"));
    setAguilaresMensual(
      arrMensual.filter((d) => d.IngenioNombre === "Aguilares")
    );
    setAguilaresZafra(arrZafra.filter((d) => d.IngenioNombre === "Aguilares"));

    setBellaVista(
      arrQuincenal.filter((d) => d.IngenioNombre === "Bella Vista")
    );
    setBellaVistaMensual(
      arrMensual.filter((d) => d.IngenioNombre === "Bella Vista")
    );
    setBellaVistaZafra(
      arrZafra.filter((d) => d.IngenioNombre === "Bella Vista")
    );

    setConcepcion(arrQuincenal.filter((d) => d.IngenioNombre === "Concepción"));
    setConcepcionMensual(
      arrMensual.filter((d) => d.IngenioNombre === "Concepción")
    );
    setConcepcionZafra(
      arrZafra.filter((d) => d.IngenioNombre === "Concepción")
    );

    setCruzAlta(arrQuincenal.filter((d) => d.IngenioNombre === "Cruz Alta"));
    setCruzAltaMensual(
      arrMensual.filter((d) => d.IngenioNombre === "Cruz Alta")
    );
    setCruzAltaZafra(arrZafra.filter((d) => d.IngenioNombre === "Cruz Alta"));

    setFamailla(arrQuincenal.filter((d) => d.IngenioNombre === "Famaillá"));
    setFamaillaMensual(
      arrMensual.filter((d) => d.IngenioNombre === "Famaillá")
    );
    setFamaillaZafra(arrZafra.filter((d) => d.IngenioNombre === "Famaillá"));

    setLaCorona(arrQuincenal.filter((d) => d.IngenioNombre === "La Corona"));
    setLaCoronaMensual(
      arrMensual.filter((d) => d.IngenioNombre === "La Corona")
    );
    setLaCoronaZafra(arrZafra.filter((d) => d.IngenioNombre === "La Corona"));

    setLaFlorida(arrQuincenal.filter((d) => d.IngenioNombre === "La Florida"));
    setLaFloridaMensual(
      arrMensual.filter((d) => d.IngenioNombre === "La Florida")
    );
    setLaFloridaZafra(arrZafra.filter((d) => d.IngenioNombre === "La Florida"));

    setLaProvidencia(
      arrQuincenal.filter((d) => d.IngenioNombre === "La Providencia")
    );
    setLaProvidenciaMensual(
      arrMensual.filter((d) => d.IngenioNombre === "La Providencia")
    );
    setLaProvidenciaZafra(
      arrZafra.filter((d) => d.IngenioNombre === "La Providencia")
    );

    setLaTrinidad(
      arrQuincenal.filter((d) => d.IngenioNombre === "La Trinidad")
    );
    setLaTrinidadMensual(
      arrMensual.filter((d) => d.IngenioNombre === "La Trinidad")
    );
    setLaTrinidadZafra(
      arrZafra.filter((d) => d.IngenioNombre === "La Trinidad")
    );

    setLeales(arrQuincenal.filter((d) => d.IngenioNombre === "Leales"));
    setLealesMensual(arrMensual.filter((d) => d.IngenioNombre === "Leales"));
    setLealesZafra(arrZafra.filter((d) => d.IngenioNombre === "Leales"));

    setMarapa(arrQuincenal.filter((d) => d.IngenioNombre === "Marapa"));
    setMarapaMensual(arrMensual.filter((d) => d.IngenioNombre === "Marapa"));
    setMarapaZafra(arrZafra.filter((d) => d.IngenioNombre === "Marapa"));

    setSantaBarbara(
      arrQuincenal.filter((d) => d.IngenioNombre === "Santa Barbara")
    );
    setSantaBarbaraMensual(
      arrMensual.filter((d) => d.IngenioNombre === "Santa Barbara")
    );
    setSantaBarbaraZafra(
      arrZafra.filter((d) => d.IngenioNombre === "Santa Barbara")
    );

    setSantaRosa(arrQuincenal.filter((d) => d.IngenioNombre === "Santa Rosa"));
    setSantaRosaMensual(
      arrMensual.filter((d) => d.IngenioNombre === "Santa Rosa")
    );
    setSantaRosaZafra(arrZafra.filter((d) => d.IngenioNombre === "Santa Rosa"));

    setNunorco(arrQuincenal.filter((d) => d.IngenioNombre === "Ñuñorco"));
    setNunorcoMensual(arrMensual.filter((d) => d.IngenioNombre === "Ñuñorco"));
    setNunorcoZafra(arrZafra.filter((d) => d.IngenioNombre === "Ñuñorco"));
  };

  /********** CALCULO TOTALES **********/
  const totalQuincenaAguilares = aguilares.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalMesAguilares = aguilaresMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraAguilares = aguilaresZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaBellaVista = bellaVista.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalMesBellaVista = bellaVistaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalZafraBellaVista = bellaVistaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaConcepcion = concepcion.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesConcepcion = concepcionMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraConcepcion = concepcionZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaCruzAlta = cruzAlta.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesCruzAlta = cruzAltaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraCruzAlta = cruzAltaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaFamailla = famailla.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesFamailla = famaillaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraFamailla = famaillaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaCorona = laCorona.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesLaCorona = laCoronaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraLaCorona = laCoronaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaFlorida = laFlorida.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesLaFlorida = laFloridaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraLaFlorida = laFloridaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaProvidencia = laProvidencia.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesLaProvidencia = laProvidenciaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraLaProvidencia = laProvidenciaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaTrinidad = laTrinidad.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesLaTrinidad = laTrinidadMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraLaTrinidad = laTrinidadZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaLeales = leales.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesLeales = lealesMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraLeales = lealesZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaMarapa = marapa.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesMarapa = marapaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraMarapa = marapaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaStaBarbara = santaBarbara.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesStaBarbara = santaBarbaraMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraStaBarbara = santaBarbaraZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaStaRosa = santaRosa.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesStaRosa = santaRosaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraStaRosa = santaRosaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  const totalQuincenaNunorco = nunorco.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalMesNunorco = nunorcoMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});
  const totalZafraNunorco = nunorcoZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "number") {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  /********** FILA TOTALES **********/
  const aguilaresConTotales = [
    ...aguilares,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaAguilares },
    { key: "total", FechaParte: "Total mes", ...totalMesAguilares },
    { key: "total", FechaParte: "Total zafra", ...totalZafraAguilares },
  ];
  const bellaVistaConTotales = [
    ...bellaVista,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaBellaVista },
    { key: "total", FechaParte: "Total mes", ...totalMesBellaVista },
    { key: "total", FechaParte: "Total zafra", ...totalZafraBellaVista },
  ];
  const concepcionConTotales = [
    ...concepcion,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaConcepcion },
    { key: "total", FechaParte: "Total mes", ...totalMesConcepcion },
    { key: "total", FechaParte: "Total zafra", ...totalZafraConcepcion },
  ];
  const cruzAltaConTotales = [
    ...cruzAlta,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaCruzAlta },
    { key: "total", FechaParte: "Total mes", ...totalMesCruzAlta },
    { key: "total", FechaParte: "Total zafra", ...totalZafraCruzAlta },
  ];
  const famaillaConTotales = [
    ...famailla,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaFamailla },
    { key: "total", FechaParte: "Total mes", ...totalMesFamailla },
    { key: "total", FechaParte: "Total zafra", ...totalZafraFamailla },
  ];
  const laCoronaConTotales = [
    ...laCorona,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaLaCorona },
    { key: "total", FechaParte: "Total mes", ...totalMesLaCorona },
    { key: "total", FechaParte: "Total zafra", ...totalZafraLaCorona },
  ];
  const laFloridaConTotales = [
    ...laFlorida,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaLaFlorida },
    { key: "total", FechaParte: "Total mes", ...totalMesLaFlorida },
    { key: "total", FechaParte: "Total zafra", ...totalZafraLaFlorida },
  ];
  const laProvidenciaConTotales = [
    ...laProvidencia,
    {
      key: "total",
      FechaParte: "Total quincena",
      ...totalQuincenaLaProvidencia,
    },
    { key: "total", FechaParte: "Total mes", ...totalMesLaProvidencia },
    { key: "total", FechaParte: "Total zafra", ...totalZafraLaProvidencia },
  ];
  const laTrinidadConTotales = [
    ...laTrinidad,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaLaTrinidad },
    { key: "total", FechaParte: "Total mes", ...totalMesLaTrinidad },
    { key: "total", FechaParte: "Total zafra", ...totalZafraLaTrinidad },
  ];
  const lealesConTotales = [
    ...leales,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaLeales },
    { key: "total", FechaParte: "Total mes", ...totalMesLeales },
    { key: "total", FechaParte: "Total zafra", ...totalZafraLeales },
  ];
  const marapaConTotales = [
    ...marapa,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaMarapa },
    { key: "total", FechaParte: "Total mes", ...totalMesMarapa },
    { key: "total", FechaParte: "Total zafra", ...totalZafraMarapa },
  ];
  const nunorcoConTotales = [
    ...nunorco,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaNunorco },
    { key: "total", FechaParte: "Total mes", ...totalMesNunorco },
    { key: "total", FechaParte: "Total zafra", ...totalZafraNunorco },
  ];
  const santaBarbaraConTotales = [
    ...santaBarbara,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaStaBarbara },
    { key: "total", FechaParte: "Total mes", ...totalMesStaBarbara },
    { key: "total", FechaParte: "Total zafra", ...totalZafraStaBarbara },
  ];
  const santaRosaConTotales = [
    ...santaRosa,
    { key: "total", FechaParte: "Total quincena", ...totalQuincenaStaRosa },
    { key: "total", FechaParte: "Total mes", ...totalMesStaRosa },
    { key: "total", FechaParte: "Total zafra", ...totalZafraStaRosa },
  ];

  /********** CALCULO DE RENDIMIENTO **********/
  aguilaresConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  concepcionConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  cruzAltaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  famaillaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laCoronaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laFloridaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laProvidenciaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laTrinidadConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  lealesConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  marapaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  bellaVistaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  nunorcoConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  santaBarbaraConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });
  santaRosaConTotales.forEach((d) => {
    if (
      d.FechaParte === "Total quincena" ||
      d.FechaParte === "Total mes" ||
      d.FechaParte === "Total zafra"
    ) {
      d.RendimientoCanaBruta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaBruta) * 100).toFixed(3);
      d.RendimientoCanaNeta = !d.RendimientoCanaBruta
        ? 0
        : ((d.AzucarEquivalente / d.MoliendaCanaNeta) * 100).toFixed(3);
    }
  });

  const getItems = () => [
    {
      key: "1",
      label: "Aguilares",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={aguilaresConTotales}
        />
      ),
    },
    {
      key: "2",
      label: "Bella Vista",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={bellaVistaConTotales}
        />
      ),
    },
    {
      key: "3",
      label: "Concepción",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={concepcionConTotales}
        />
      ),
    },
    {
      key: "4",
      label: "Cruz Alta",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={cruzAltaConTotales}
        />
      ),
    },
    {
      key: "5",
      label: "Famaillá",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={famaillaConTotales}
        />
      ),
    },
    {
      key: "6",
      label: "La Corona",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={laCoronaConTotales}
        />
      ),
    },
    {
      key: "7",
      label: "La Florida",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={laFloridaConTotales}
        />
      ),
    },
    {
      key: "8",
      label: "La Providencia",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={laProvidenciaConTotales}
        />
      ),
    },
    {
      key: "9",
      label: "La Trinidad",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={laTrinidadConTotales}
        />
      ),
    },
    {
      key: "10",
      label: "Leales",
      children: (
        <ListadoDatos columns={columns} scroll={1600} data={lealesConTotales} />
      ),
    },
    {
      key: "11",
      label: "Marapa",
      children: (
        <ListadoDatos columns={columns} scroll={1600} data={marapaConTotales} />
      ),
    },
    {
      key: "12",
      label: "Santa Barbara",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={santaBarbaraConTotales}
        />
      ),
    },
    {
      key: "13",
      label: "Santa Rosa",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={santaRosaConTotales}
        />
      ),
    },
    {
      key: "14",
      label: "Ñuñorco",
      children: (
        <ListadoDatos
          columns={columns}
          scroll={1600}
          data={nunorcoConTotales}
        />
      ),
    },
  ];
  return (
    <Collapse
      bordered={false}
      size="small"
      expandIconPosition="end"
      defaultActiveKey={["0"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        width: "100%",
        fontSize: 17,
        fontWeight: 600,
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default ItemCollpse;
