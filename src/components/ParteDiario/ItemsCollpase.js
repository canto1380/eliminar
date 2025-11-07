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
    // Limpiar todos los estados antes de procesar nuevos datos
    setAguilares([]);
    setAguilaresMensual([]);
    setAguilaresZafra([]);
    setBellaVista([]);
    setBellaVistaMensual([]);
    setBellaVistaZafra([]);
    setConcepcion([]);
    setConcepcionMensual([]);
    setConcepcionZafra([]);
    setCruzAlta([]);
    setCruzAltaMensual([]);
    setCruzAltaZafra([]);
    setFamailla([]);
    setFamaillaMensual([]);
    setFamaillaZafra([]);
    setLaCorona([]);
    setLaCoronaMensual([]);
    setLaCoronaZafra([]);
    setLaFlorida([]);
    setLaFloridaMensual([]);
    setLaFloridaZafra([]);
    setLaProvidencia([]);
    setLaProvidenciaMensual([]);
    setLaProvidenciaZafra([]);
    setLaTrinidad([]);
    setLaTrinidadMensual([]);
    setLaTrinidadZafra([]);
    setLeales([]);
    setLealesMensual([]);
    setLealesZafra([]);
    setMarapa([]);
    setMarapaMensual([]);
    setMarapaZafra([]);
    setSantaBarbara([]);
    setSantaBarbaraMensual([]);
    setSantaBarbaraZafra([]);
    setSantaRosa([]);
    setSantaRosaMensual([]);
    setSantaRosaZafra([]);
    setNunorco([]);
    setNunorcoMensual([]);
    setNunorcoZafra([]);

    // Procesar los nuevos datos
    dataPorQuincena();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafra, dataAnio, dataMes, dataQuincena, dataParteDiariosHistoricos]);

  const dataPorQuincena = () => {
    // Limpiar arrays antes de procesar nuevos datos
    let arrQuincenal = [];
    let arrMensual = [];
    let arrZafra = [];

    // Función para eliminar duplicados por fecha e ingenio
    const eliminarDuplicados = (array) => {
      if (!Array.isArray(array) || array.length === 0) {
        return [];
      }

      const seen = new Map();
      return array.filter(item => {
        if (!item || !item.fechaParte || !item.ingenioNombre) {
          return false; // Excluir elementos inválidos
        }

        const key = `${item.fechaParte}_${item.ingenioNombre}`;
        if (seen.has(key)) {
          return false;
        }
        seen.set(key, true);
        return true;
      });
    };

    dataParteDiariosHistoricos?.forEach((data) => {
      const newDate = new Date(data.fechaParte);
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
        `${dataMes}/${dataQuincena === 1 ? 15 : getLastDayOfMonth(dataMes)
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
      if (newDate <= fechaParametro2) {
        arrZafra.push(data);
      }
    });

    // Eliminar duplicados de cada array
    arrQuincenal = eliminarDuplicados(arrQuincenal);
    arrMensual = eliminarDuplicados(arrMensual);
    arrZafra = eliminarDuplicados(arrZafra);


    // Función helper para filtrar por ingenio y eliminar duplicados
    const filtrarPorIngenio = (array, nombreIngenio) => {
      return eliminarDuplicados(array.filter((d) => d.ingenioNombre === nombreIngenio));
    };

    setAguilares(filtrarPorIngenio(arrQuincenal, "Aguilares"));
    setAguilaresMensual(filtrarPorIngenio(arrMensual, "Aguilares"));
    setAguilaresZafra(filtrarPorIngenio(arrZafra, "Aguilares"));

    setBellaVista(filtrarPorIngenio(arrQuincenal, "Bella Vista"));
    setBellaVistaMensual(filtrarPorIngenio(arrMensual, "Bella Vista"));
    setBellaVistaZafra(filtrarPorIngenio(arrZafra, "Bella Vista"));

    setConcepcion(filtrarPorIngenio(arrQuincenal, "Concepción"));
    setConcepcionMensual(filtrarPorIngenio(arrMensual, "Concepción"));
    setConcepcionZafra(filtrarPorIngenio(arrZafra, "Concepción"));

    setCruzAlta(filtrarPorIngenio(arrQuincenal, "Cruz Alta"));
    setCruzAltaMensual(filtrarPorIngenio(arrMensual, "Cruz Alta"));
    setCruzAltaZafra(filtrarPorIngenio(arrZafra, "Cruz Alta"));

    setFamailla(filtrarPorIngenio(arrQuincenal, "Famaillá"));
    setFamaillaMensual(filtrarPorIngenio(arrMensual, "Famaillá"));
    setFamaillaZafra(filtrarPorIngenio(arrZafra, "Famaillá"));

    setLaCorona(filtrarPorIngenio(arrQuincenal, "La Corona"));
    setLaCoronaMensual(filtrarPorIngenio(arrMensual, "La Corona"));
    setLaCoronaZafra(filtrarPorIngenio(arrZafra, "La Corona"));

    setLaFlorida(filtrarPorIngenio(arrQuincenal, "La Florida"));
    setLaFloridaMensual(filtrarPorIngenio(arrMensual, "La Florida"));
    setLaFloridaZafra(filtrarPorIngenio(arrZafra, "La Florida"));

    setLaProvidencia(filtrarPorIngenio(arrQuincenal, "La Providencia"));
    setLaProvidenciaMensual(filtrarPorIngenio(arrMensual, "La Providencia"));
    setLaProvidenciaZafra(filtrarPorIngenio(arrZafra, "La Providencia"));

    setLaTrinidad(filtrarPorIngenio(arrQuincenal, "La Trinidad"));
    setLaTrinidadMensual(filtrarPorIngenio(arrMensual, "La Trinidad"));
    setLaTrinidadZafra(filtrarPorIngenio(arrZafra, "La Trinidad"));

    setLeales(filtrarPorIngenio(arrQuincenal, "Leales"));
    setLealesMensual(filtrarPorIngenio(arrMensual, "Leales"));
    setLealesZafra(filtrarPorIngenio(arrZafra, "Leales"));

    setMarapa(filtrarPorIngenio(arrQuincenal, "Marapa"));
    setMarapaMensual(filtrarPorIngenio(arrMensual, "Marapa"));
    setMarapaZafra(filtrarPorIngenio(arrZafra, "Marapa"));

    setSantaBarbara(filtrarPorIngenio(arrQuincenal, "Santa Barbara"));
    setSantaBarbaraMensual(filtrarPorIngenio(arrMensual, "Santa Barbara"));
    setSantaBarbaraZafra(filtrarPorIngenio(arrZafra, "Santa Barbara"));

    setSantaRosa(filtrarPorIngenio(arrQuincenal, "Santa Rosa"));
    setSantaRosaMensual(filtrarPorIngenio(arrMensual, "Santa Rosa"));
    setSantaRosaZafra(filtrarPorIngenio(arrZafra, "Santa Rosa"));

    setNunorco(filtrarPorIngenio(arrQuincenal, "Ñuñorco"));
    setNunorcoMensual(filtrarPorIngenio(arrMensual, "Ñuñorco"));
    setNunorcoZafra(filtrarPorIngenio(arrZafra, "Ñuñorco"));
  };

  /********** CALCULO TOTALES **********/
  const totalQuincenaAguilares = aguilares.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalMesAguilares = aguilaresMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraAguilares = aguilaresZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaBellaVista = bellaVista.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalMesBellaVista = bellaVistaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalZafraBellaVista = bellaVistaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaConcepcion = concepcion.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesConcepcion = concepcionMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraConcepcion = concepcionZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaCruzAlta = cruzAlta.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesCruzAlta = cruzAltaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraCruzAlta = cruzAltaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaFamailla = famailla.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesFamailla = famaillaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraFamailla = famaillaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaCorona = laCorona.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesLaCorona = laCoronaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraLaCorona = laCoronaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaFlorida = laFlorida.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesLaFlorida = laFloridaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraLaFlorida = laFloridaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaProvidencia = laProvidencia.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesLaProvidencia = laProvidenciaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraLaProvidencia = laProvidenciaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaLaTrinidad = laTrinidad.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesLaTrinidad = laTrinidadMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraLaTrinidad = laTrinidadZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaLeales = leales.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesLeales = lealesMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraLeales = lealesZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaMarapa = marapa.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesMarapa = marapaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraMarapa = marapaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaStaBarbara = santaBarbara.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesStaBarbara = santaBarbaraMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraStaBarbara = santaBarbaraZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaStaRosa = santaRosa.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesStaRosa = santaRosaMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraStaRosa = santaRosaZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  const totalQuincenaNunorco = nunorco.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalMesNunorco = nunorcoMensual.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});
  const totalZafraNunorco = nunorcoZafra.reduce((acc, item) => {
    Object.keys(item).forEach((key) => {
      const value = Number(item[key]);
      if (!isNaN(value)) { // solo suma si el valor es numérico
        acc[key] = (acc[key] || 0) + value;
      }
    });
    return acc;
  }, {});

  /********** FILA TOTALES **********/
  const aguilaresConTotales = [
    ...aguilares,
    { key: "total-quincena-aguilares", fechaParte: "Total quincena", ...totalQuincenaAguilares },
    { key: "total-mes-aguilares", fechaParte: "Total mes", ...totalMesAguilares },
    { key: "total-zafra-aguilares", fechaParte: "Total zafra", ...totalZafraAguilares },
  ];
  const bellaVistaConTotales = [
    ...bellaVista,
    { key: "total-quincena-bellavista", fechaParte: "Total quincena", ...totalQuincenaBellaVista },
    { key: "total-mes-bellavista", fechaParte: "Total mes", ...totalMesBellaVista },
    { key: "total-zafra-bellavista", fechaParte: "Total zafra", ...totalZafraBellaVista },
  ];
  const concepcionConTotales = [
    ...concepcion,
    { key: "total-quincena-concepcion", fechaParte: "Total quincena", ...totalQuincenaConcepcion },
    { key: "total-mes-concepcion", fechaParte: "Total mes", ...totalMesConcepcion },
    { key: "total-zafra-concepcion", fechaParte: "Total zafra", ...totalZafraConcepcion },
  ];
  const cruzAltaConTotales = [
    ...cruzAlta,
    { key: "total-quincena-cruzalta", fechaParte: "Total quincena", ...totalQuincenaCruzAlta },
    { key: "total-mes-cruzalta", fechaParte: "Total mes", ...totalMesCruzAlta },
    { key: "total-zafra-cruzalta", fechaParte: "Total zafra", ...totalZafraCruzAlta },
  ];
  const famaillaConTotales = [
    ...famailla,
    { key: "total-quincena-famailla", fechaParte: "Total quincena", ...totalQuincenaFamailla },
    { key: "total-mes-famailla", fechaParte: "Total mes", ...totalMesFamailla },
    { key: "total-zafra-famailla", fechaParte: "Total zafra", ...totalZafraFamailla },
  ];
  const laCoronaConTotales = [
    ...laCorona,
    { key: "total-quincena-lacorona", fechaParte: "Total quincena", ...totalQuincenaLaCorona },
    { key: "total-mes-lacorona", fechaParte: "Total mes", ...totalMesLaCorona },
    { key: "total-zafra-lacorona", fechaParte: "Total zafra", ...totalZafraLaCorona },
  ];
  const laFloridaConTotales = [
    ...laFlorida,
    { key: "total-quincena-laflorida", fechaParte: "Total quincena", ...totalQuincenaLaFlorida },
    { key: "total-mes-laflorida", fechaParte: "Total mes", ...totalMesLaFlorida },
    { key: "total-zafra-laflorida", fechaParte: "Total zafra", ...totalZafraLaFlorida },
  ];
  const laProvidenciaConTotales = [
    ...laProvidencia,
    {
      key: "total-quincena-laprovidencia",
      fechaParte: "Total quincena",
      ...totalQuincenaLaProvidencia,
    },
    { key: "total-mes-laprovidencia", fechaParte: "Total mes", ...totalMesLaProvidencia },
    { key: "total-zafra-laprovidencia", fechaParte: "Total zafra", ...totalZafraLaProvidencia },
  ];
  const laTrinidadConTotales = [
    ...laTrinidad,
    { key: "total-quincena-latrinidad", fechaParte: "Total quincena", ...totalQuincenaLaTrinidad },
    { key: "total-mes-latrinidad", fechaParte: "Total mes", ...totalMesLaTrinidad },
    { key: "total-zafra-latrinidad", fechaParte: "Total zafra", ...totalZafraLaTrinidad },
  ];
  const lealesConTotales = [
    ...leales,
    { key: "total-quincena-leales", fechaParte: "Total quincena", ...totalQuincenaLeales },
    { key: "total-mes-leales", fechaParte: "Total mes", ...totalMesLeales },
    { key: "total-zafra-leales", fechaParte: "Total zafra", ...totalZafraLeales },
  ];
  const marapaConTotales = [
    ...marapa,
    { key: "total-quincena-marapa", fechaParte: "Total quincena", ...totalQuincenaMarapa },
    { key: "total-mes-marapa", fechaParte: "Total mes", ...totalMesMarapa },
    { key: "total-zafra-marapa", fechaParte: "Total zafra", ...totalZafraMarapa },
  ];
  const nunorcoConTotales = [
    ...nunorco,
    { key: "total-quincena-nunorco", fechaParte: "Total quincena", ...totalQuincenaNunorco },
    { key: "total-mes-nunorco", fechaParte: "Total mes", ...totalMesNunorco },
    { key: "total-zafra-nunorco", fechaParte: "Total zafra", ...totalZafraNunorco },
  ];
  const santaBarbaraConTotales = [
    ...santaBarbara,
    { key: "total-quincena-santabarbara", fechaParte: "Total quincena", ...totalQuincenaStaBarbara },
    { key: "total-mes-santabarbara", fechaParte: "Total mes", ...totalMesStaBarbara },
    { key: "total-zafra-santabarbara", fechaParte: "Total zafra", ...totalZafraStaBarbara },
  ];
  const santaRosaConTotales = [
    ...santaRosa,
    { key: "total-quincena-santarosa", fechaParte: "Total quincena", ...totalQuincenaStaRosa },
    { key: "total-mes-santarosa", fechaParte: "Total mes", ...totalMesStaRosa },
    { key: "total-zafra-santarosa", fechaParte: "Total zafra", ...totalZafraStaRosa },
  ];

  /********** CALCULO DE RENDIMIENTO **********/
  aguilaresConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);

      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  concepcionConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  cruzAltaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  famaillaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laCoronaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laFloridaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laProvidenciaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  laTrinidadConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  lealesConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  marapaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  bellaVistaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  nunorcoConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  santaBarbaraConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
    }
  });
  santaRosaConTotales.forEach((d) => {
    if (
      d.fechaParte === "Total quincena" ||
      d.fechaParte === "Total mes" ||
      d.fechaParte === "Total zafra"
    ) {
      d.rendimientoCanaBruta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaBruta) * 100).toFixed(3);
      d.rendimientoCanaNeta = !d.rendimientoCanaBruta
        ? 0
        : ((d.azucarEquivalente / d.moliendaCanaNeta) * 100).toFixed(3);
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
