import ExcelJS from "exceljs";
import moment from "moment";
import dataConstante from "./dataConstanteParteDiario.json";

export const CreateExcelWorkbook = async (
  setLoadingDownload,
  dataEnd,
  setDataEnd,
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
  d13,
  d14,
  d15,
  dc1,
  dc2,
  dc3,
  dc4,
  dc5,
  dc6,
  dc7,
  dc8,
  dc9,
  dc10,
  dc11,
  dc12,
  dc13,
  dc14,
  dc15,
  dataImport,
  dataImportComparativa,
  dataUser,
  setBanderaDataNull,
  inicioZafra,
  inicioZafraComparativa,
  fechasInicioIngenios,
  dataDiasZafra,
  fechasInicioIngeniosComparativa,
  dataDiasZafraComparativa,
  setDataImport,
  setDataImportComparativa,
  dataIngenios,
  finZafra,
  finZafraComparativa,
  dataComparativa
) => {
  setLoadingDownload(true);
  const parteDiarioData = dataImport ? dataImport : undefined;
  const parteDiarioDataComparativa = dataImportComparativa
    ? dataImportComparativa
    : undefined;
  if (!parteDiarioData || !parteDiarioDataComparativa) {
    setBanderaDataNull(true);
    setTimeout(() => {
      setBanderaDataNull(false);
    }, 2000);
  } else {
    const workbook = new ExcelJS.Workbook();
    /** Fecha Hasta parte Dairio **/
    const date = dataEnd !== null ? new Date(dataEnd) : new Date();
    const anioData = new Date(date) < new Date(`${date.getFullYear()}-04-25`) ? date.getFullYear() - 1 : date.getFullYear() ;
    /** Anio Comparativo **/
    const anioDataComparativo = new Date(date) < new Date(`${date.getFullYear()}-04-25`) ? date.getFullYear() - 2 : date.getFullYear() - 1;
    console.log(anioData, anioDataComparativo)
    /** Fecha hasta comparativa **/
    const dateComparativa = new Date(date);
    dateComparativa.setFullYear(anioDataComparativo);
    /** Formatos **/
    const dateFormat = moment(date).format("DD-MM-YYYY");
    const dateComparativaFormat = moment(dateComparativa).format("DD-MM-YYYY");
    workbook.creator = `${dataUser?.name} ${dataUser?.surname}`;
    workbook.created = date;
    workbook.modified = date;
    workbook.views = [
      {
        x: 0,
        y: 0,
        width: 10000,
        height: 20000,
        firstSheet: 0,
        activeTab: 0,
        visibility: "visible",
      },
    ];
    const page1 = workbook.addWorksheet("Parte Diario Directorio", {
      pageSetup: {
        paperSize: 8,
        orientation: "landscape",
        scale: 75,
        fitToPage: false,
        fitToWidth: 1,
        // margins: {
        //   left: 0.7, right: 0.7, top: 0.75, bottom: 0.75
        // }
      },
      properties: { tabColor: { argb: "0000B2" } },
    });
    page1.headerFooter.differentFirst = true;
    

    /***** FORMATO CONDICIONAL *****/

    const rulesFgRed = [
      {
        type: "cellIs",
        operator: "lessThan",
        formulae: ["0"],
        style: {
          fill: {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "CB6B6B" },
          },
          font: {
            color: { argb: "CB6B6B" },
          },
        },
      },
    ];
    page1.addConditionalFormatting({
      ref: "F31:O32",
      rules: rulesFgRed,
    });

    /***** ALINEACIONES *****/
    const alignStart = {
      wrapText: true,
      horizontal: "left",
      vertical: "middle",
    };
    const alignCenter = {
      wrapText: true,
      horizontal: "center",
      vertical: "middle",
    };

    /***** ESTILOS GENERALES *****/
    const functionFont = (name, bold, size) => {
      return { name, bold, size };
    };
    page1.getColumn(1).width = "16";
    for (let i = 2; i <= 27; i++) {
      page1.getColumn(i).width = "17";
    }
    page1.getColumn(15).width = "19";
    page1.getColumn(28).width = "19";

    for(let i=1; i<=4; i++) {
      page1.getRow(i).height = '27'
    }
    page1.getRow(8).height ="34";
    for (let i = 10; i <= 26; i++) {
      page1.getRow(i).height = "18.75";
    }
    page1.getRow(13).height = "19.5";
    page1.getRow(17).height = "19.5";
    page1.getRow(27).height = "21.75";
    page1.getRow(28).height = "24.75";
    page1.getRow(30).height = "19.5";
    page1.getRow(31).height = "18.75";
    page1.getRow(32).height = "34.5";

    for (let i = 34; i <= 37; i++) {
      page1.getRow(i).height = "21";
    }

    page1.getRow(41).height = "38";
    for (let i = 44; i <= 57; i++) {
      page1.getRow(i).height = "50";
    }

    /***** RELLENO *****/
    page1.getCell("A6").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "BFBFBF" },
    };

    page1.getCell("A6").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "BFBFBF" },
    };

    const bgGris = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "BFBFBF" },
    };
    const bgVerde = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "E2EFDA" },
    };
    const bgAzul = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D9E1F2" },
    };

    for (let i = 6; i <= 15; i++) {
      page1.getCell(7, i).fill = bgVerde;
      page1.getCell(9, i).fill = bgVerde;
    }

    for (let i = 19; i <= 28; i++) {
      page1.getCell(7, i).fill = bgAzul;
      page1.getCell(9, i).fill = bgAzul;
    }
    for (let i = 1; i < 29; i++) {
      page1.getCell(28, i).fill = bgAzul;
    }
    for (let i = 1; i < 29; i++) {
      page1.getCell(7, i).fill = bgGris;
    }

    /***** FILAS *****/
    page1.getRow(6).alignment = alignCenter;
    page1.getRow(7).alignment = alignCenter;
    page1.getRow(7).font = functionFont("Calibri", true, 11);
    page1.getRow(8).alignment = alignCenter;
    page1.getRow(9).alignment = alignCenter;
    page1.getRow(9).font = functionFont("Calibri", true, 11);
    page1.getRow(13).font = functionFont("Calibri", true, 11);
    page1.getRow(16).font = functionFont("Calibri", true, 11);
    page1.getRow(27).font = functionFont("Arial", true, 16);
    page1.getRow(31).font = functionFont("Arial Narrow", true, 12);
    page1.getRow(31).alignment = alignCenter;
    page1.getRow(32).alignment = alignCenter;
    page1.getRow(32).font = functionFont("Arial Narrow", true, 14);
    page1.getRow(42).font = functionFont("Calibri", true, 14);
    page1.getRow(42).alignment = alignStart;
    for (let i = 1; i <= 20; i++) {
      page1.getCell(44, i).fill = bgGris;
      page1.getCell(47, i).fill = bgGris;
      page1.getCell(51, i).fill = bgGris;
      page1.getCell(55, i).fill = bgGris;
    }

    page1.getRow(58).font = functionFont("Calibri", true, 22);

    /***** BORDES *****/
    const borders = (t1, t2, l1, l2, b1, b2, r1, r2) => {
      return {
        top: { style: t1, color: { argb: t2 } },
        left: { style: l1, color: { argb: l2 } },
        bottom: { style: b1, color: { argb: b2 } },
        right: { style: r1, color: { argb: r2 } },
      };
    };

    for (let i = 1; i < 29; i++) {
      page1.getCell(1, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }

    page1.getRow(3).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(5).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(6).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(13).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(7).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "thin",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(9).border = borders(
      "thin",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(16).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(27).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(28).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(30).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(31).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(32).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(34).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(35).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(36).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(37).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );
    page1.getRow(39).border = borders(
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000",
      "medium",
      "000000"
    );

    for (let i = 40; i <= 59; i++) {
      page1.getRow(i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }

    for (let i = 1; i <= 28; i++) {
      page1.getColumn(i).border = {
        top: { style: "thin", color: { argb: "000000" } },
        left: { style: "medium", color: { argb: "000000" } },
        bottom: { style: "thin", color: { argb: "000000" } },
        right: { style: "medium", color: { argb: "000000" } },
      };
    }
    for (let i = 5; i <= 13; i++) {
      page1.getColumn(i).border = {
        top: { style: "thin", color: { argb: "000000" } },
        left: { style: "thin", color: { argb: "000000" } },
        bottom: { style: "thin", color: { argb: "000000" } },
        right: { style: "thin", color: { argb: "000000" } },
      };
    }

    /***** FORMATO DE NUMEROS *****/
    for (let i = 6; i <= 8; i++) {
      page1.getColumn(i).numFmt = "#,##0";
    }
    page1.getColumn(9).numFmt = "0.##0";
    page1.getColumn(10).numFmt = "0.##0";
    for (let i = 11; i <= 15; i++) {
      page1.getColumn(i).numFmt = "#,##0";
    }
    for (let i = 19; i <= 21; i++) {
      page1.getColumn(i).numFmt = "#,##0";
    }
    page1.getColumn(22).numFmt = "#.##0";
    page1.getColumn(23).numFmt = "#.##0";
    for (let i = 24; i <= 28; i++) {
      page1.getColumn(i).numFmt = "#,##0";
    }

    for (let i = 6; i <= 15; i++) {
      page1.getCell(32, i).numFmt = "0.000%";
    }

    page1.getCell("U32").numFmt = "#.##%";
    page1.getCell("F34").numFmt = "#,##0";
    page1.getCell("F35").numFmt = "#,##0";
    page1.getCell("F36").numFmt = "0.00";
    page1.getCell("F37").numFmt = "0.00";
    page1.getCell("L34").numFmt = "#,##0.##0";
    page1.getCell("V34").numFmt = "#,##0";
    page1.getCell("V35").numFmt = "#,##0";
    page1.getCell("V36").numFmt = "0.00";
    page1.getCell("V37").numFmt = "0.00";

    /** CELDAS ENCABEZADOS **/
    page1.mergeCells("A1:F4");
    page1.getCell("F4").value = "Icono IPAAT";
    page1.getCell("F4").border = {
      top: { style: "medium", color: { argb: "000000" } },
      left: { style: "medium", color: { argb: "000000" } },
      bottom: { style: "medium", color: { argb: "000000" } },
      right: { style: "medium", color: { argb: "000000" } },
    };

    page1.mergeCells("G1:W2");
    page1.getCell("W2").value = `COMPARATIVO ZAFRA ${anioData}/${
      anioDataComparativo
    }`;
    page1.getCell("W2").alignment = { horizontal: "center" };
    page1.getCell("W2").font = { name: "Bodoni MT", bold: true, size: 24 };

    page1.mergeCells("G3:W4");
    page1.getCell(
      "W4"
    ).value = `DATOS PRODUCTIVOS SEGÚN PARTE DIARIO ${Math.ceil(
      dataDiasZafra
    )}`;
    page1.getCell("W4").font = { name: "Calibri", bold: true, size: 16 };
    page1.getCell("W4").alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    page1.mergeCells("X1:AB4");
    page1.getCell("X1").value = "Icono Tucuman";

    page1.mergeCells("A5:E5");
    page1.getCell("E5").value = "Fecha de Reunión de Directorio";
    page1.getCell("E5").alignment = { horizontal: "start" };
    page1.getCell("E5").font = { name: "Calirbi", bold: false, size: 12 };

    // page1.getCell('G5').value = new Date()
    // page1.getCell('G5').alignment = { horizontal: 'center' }
    // page1.getCell('G5').font = { name: 'Calirbi', bold: true, size: 12 }

    page1.mergeCells("G5:AB5");

    /** ENCABEZADOS Y COLUMNAS DE TABLA **/
    page1.mergeCells("A6:B9");
    page1.getCell("A9").value = "INGENIOS DE LA PROVINCIA DE TUCUMÁN";
    page1.getCell("A9").font = { name: "Calibri", bold: true, size: 11 };

    page1.mergeCells("C6:O6");
    page1.getCell("O6").value = `ZAFRA ${anioData}`;
    page1.getCell("O6").font = { name: "Bodoni MT", bold: true, size: 18 };

    page1.mergeCells("P6:AB6");
    page1.getCell("AB6").value = `ZAFRA ${anioDataComparativo}`;
    page1.getCell("AB6").font = { name: "Bodoni MT", bold: true, size: 18 };

    /** Zafra 2023 **/
    // page1.mergeCells('B7:B9')
    // page1.getCell('B9').value = 'Fechas Probables de Inicio'
    // page1.getCell('B9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells("C7:C9");
    page1.getCell("C9").value = `Inicio de Zafra ${anioData}`;
    page1.getCell("C9").font = { name: "Calibri", bold: true, size: 11 };

    page1.mergeCells("D7:D9");
    page1.getCell("D9").value = "N° Días de avance";
    page1.getCell("D9").font = { name: "Calibri", bold: true, size: 11 };

    page1.mergeCells("E7:E9");
    page1.getCell("E9").value = `fin de zafra ${anioData}`;
    page1.getCell("E9").font = { name: "Calibri", bold: true, size: 11 };

    page1.mergeCells("F7:F8");
    page1.getCell("F8").value = "Caña Molida Bruta (C.M.B.)";
    page1.mergeCells("G7:G8");
    page1.getCell("G8").value = "Caña Molida Neta (C.M.N.) ";
    page1.mergeCells("H7:H8");
    page1.getCell("H8").value = "Azúcar Equivalente";
    page1.mergeCells("I7:I8");
    page1.getCell("I8").value = `Rto % CMB Total `;
    page1.mergeCells("J7:J8");
    page1.getCell("J8").value = `Rto % CMN Total`;
    page1.mergeCells("K7:K8");
    page1.getCell("K8").value = "Total Azúcar Blanco";
    page1.mergeCells("L7:L8");
    page1.getCell("L8").value = "Total Azúcar Crudo";
    page1.mergeCells("M7:M8");
    page1.getCell("M8").value = "Total Azúcar Elaborada";
    page1.mergeCells("N7:N8");
    page1.getCell("N8").value = "MELAZA";
    page1.mergeCells("O7:O8");
    page1.getCell("O8").value = "ALCOHOL TOTAL HIDRATADO";
    page1.getCell("F9").value = "[Tn]";
    page1.getCell("G9").value = "[Tn]";
    page1.getCell("H9").value = "[Tn]";
    page1.getCell("I9").value = "%";
    page1.getCell("J9").value = "%";
    page1.getCell("K9").value = "[Tn]";
    page1.getCell("L9").value = "[Tn]";
    page1.getCell("M9").value = "[Tn]";
    page1.getCell("N9").value = "[Tn]";
    page1.getCell("O9").value = "[m3]";

    /** Zafra 2022 **/
    page1.mergeCells("P7:P9");
    page1.getCell("P9").value = `Inicio de Zafra ${anioDataComparativo}`;
    page1.getCell("P9").font = { name: "Calibri", bold: true, size: 11 };

    page1.mergeCells("Q7:Q9");
    page1.getCell("Q9").value = "N° Días de Avance";
    page1.getCell("Q9").font = { name: "Calibri", bold: true, size: 11 };

    page1.mergeCells("R7:R9");
    page1.getCell("R9").value = `Fin de Zafra ${anioDataComparativo}`;
    page1.getCell("R9").font = { name: "Calibri", bold: true, size: 11 };

    page1.mergeCells("S7:S8");
    page1.getCell("S8").value = "Caña Molida Bruta (C.M.B.)";
    page1.mergeCells("T7:T8");
    page1.getCell("T8").value = "Caña Molida Neta (C.M.N.) ";
    page1.mergeCells("U7:U8");
    page1.getCell("U8").value = "Azúcar Equivalente";
    page1.mergeCells("V7:V8");
    page1.getCell("V8").value = `Rto % CMB Total `;
    page1.mergeCells("W7:W8");
    page1.getCell("W8").value = `Rto % CMN Total`;
    page1.mergeCells("X7:X8");
    page1.getCell("X8").value = "Total Azúcar Blanco";
    page1.mergeCells("Y7:Y8");
    page1.getCell("Y8").value = "Total Azúcar Crudo";
    page1.mergeCells("Z7:Z8");
    page1.getCell("Z8").value = "Total Azúcar Elaborada";
    page1.mergeCells("AA7:AA8");
    page1.getCell("AA8").value = "MELAZA";
    page1.mergeCells("AB7:AB8");
    page1.getCell("AB8").value = "ALCOHOL TOTAL HIDRATADO";
    page1.getCell("S9").value = "[Tn]";
    page1.getCell("T9").value = "[Tn]";
    page1.getCell("U9").value = "[Tn]";
    page1.getCell("V9").value = "%";
    page1.getCell("W9").value = "%";
    page1.getCell("X9").value = "[Tn]";
    page1.getCell("Y9").value = "[Tn]";
    page1.getCell("Z9").value = "[Tn]";
    page1.getCell("AA9").value = "[Tn]";
    page1.getCell("AB9").value = "[m3]";

    /** COLUMNA TABLA - INGENIOS **/
    for (let i = 10; i <= 26; i++) {
      page1.mergeCells(`A${i}:B${i}`);
    }
    page1.getCell("A10").value = "Aguilares";
    page1.getCell("A10").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A11").value = "Cruz Alta";
    page1.getCell("A11").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A12").value = "La Florida";
    page1.getCell("A12").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A13").value = "Gpo. Los Balcanes";
    page1.getCell("A14").value = "Concepción";
    page1.getCell("A14").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A15").value = "Marapa";
    page1.getCell("A15").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A16").value = "Gpo. CASS(*)";
    page1.getCell("A17").value = "Bella Vista";
    page1.getCell("A17").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A18").value = "Famaillá";
    page1.getCell("A18").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A19").value = "La Corona";
    page1.getCell("A19").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A20").value = "La Providencia";
    page1.getCell("A20").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A21").value = "La Trinidad";
    page1.getCell("A21").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A22").value = "Leales";
    page1.getCell("A22").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A23").value = "Ñuñorco";
    page1.getCell("A23").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A24").value = "Santa Bárbara";
    page1.getCell("A24").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A25").value = "Santa Rosa";
    page1.getCell("A25").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A26").value = "San Juan";
    page1.getCell("A26").font = { name: "Calibri", bold: false, size: 11 };
    page1.getCell("A27").value = "TOTALES";

    /** COLUMNAS FECHA PROBABLE INICIO - INGENIOS **/

    /** COLUMNA FECHA INICIO 2023**/

    page1.getCell("C10").value = moment(fechasInicioIngenios.Cell10).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C10").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C11").value = moment(fechasInicioIngenios.Cell11).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C11").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C12").value = moment(fechasInicioIngenios.Cell12).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C12").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C14").value = moment(fechasInicioIngenios.Cell14).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C14").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C15").value = moment(fechasInicioIngenios.Cell15).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C15").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C17").value = moment(fechasInicioIngenios.Cell17).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C17").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C18").value = moment(fechasInicioIngenios.Cell18).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C18").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C19").value = moment(fechasInicioIngenios.Cell19).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C19").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C20").value = moment(fechasInicioIngenios.Cell20).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C20").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C21").value = moment(fechasInicioIngenios.Cell21).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C21").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C22").value = moment(fechasInicioIngenios.Cell22).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C22").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C23").value = moment(fechasInicioIngenios.Cell23).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C23").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C24").value = moment(fechasInicioIngenios.Cell24).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C24").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C25").value = moment(fechasInicioIngenios.Cell25).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C25").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("C26").value = moment(fechasInicioIngenios.Cell26).format(
      "DD/MM/YYYY"
    );
    page1.getCell("C26").font = { name: "Calibri", bold: true, size: 11 };


    /** COLUMNA FIN DE ZAFRA 2023 **/
    page1.getCell("E10").value =
      fechasInicioIngenios?.CellE10 !== null
        ? moment(fechasInicioIngenios?.CellE10).format("DD/MM/YYYY")
        : "";
    page1.getCell("E10").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E11").value =
      fechasInicioIngenios?.CellE11 !== null
        ? moment(fechasInicioIngenios?.CellE11).format("DD/MM/YYYY")
        : "";
    page1.getCell("E11").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E12").value =
      fechasInicioIngenios?.CellE12 !== null
        ? moment(fechasInicioIngenios?.CellE12).format("DD/MM/YYYY")
        : "";
    page1.getCell("E12").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E14").value =
      fechasInicioIngenios?.CellE14 !== null
        ? moment(fechasInicioIngenios?.CellE14).format("DD/MM/YYYY")
        : "";
    page1.getCell("E14").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E15").value =
      fechasInicioIngenios?.CellE15 !== null
        ? moment(fechasInicioIngenios?.CellE15).format("DD/MM/YYYY")
        : "";
    page1.getCell("E15").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E17").value =
      fechasInicioIngenios?.CellE17 !== null
        ? moment(fechasInicioIngenios?.CellE17).format("DD/MM/YYYY")
        : "";
    page1.getCell("E17").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E18").value =
      fechasInicioIngenios?.CellE18 !== null
        ? moment(fechasInicioIngenios?.CellE18).format("DD/MM/YYYY")
        : "";
    page1.getCell("E18").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E19").value =
      fechasInicioIngenios?.CellE19 !== null
        ? moment(fechasInicioIngenios?.CellE19).format("DD/MM/YYYY")
        : "";
    page1.getCell("E19").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E20").value =
      fechasInicioIngenios?.CellE20 !== null
        ? moment(fechasInicioIngenios?.CellE20).format("DD/MM/YYYY")
        : "";
    page1.getCell("E20").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E21").value =
      fechasInicioIngenios?.CellE21 !== null
        ? moment(fechasInicioIngenios?.CellE21).format("DD/MM/YYYY")
        : "";
    page1.getCell("E21").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E22").value =
      fechasInicioIngenios?.CellE22 !== null
        ? moment(fechasInicioIngenios?.CellE22).format("DD/MM/YYYY")
        : "";
    page1.getCell("E22").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E23").value =
      fechasInicioIngenios?.CellE23 !== null
        ? moment(fechasInicioIngenios?.CellE23).format("DD/MM/YYYY")
        : "";
    page1.getCell("E23").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E24").value = moment(fechasInicioIngenios?.CellE24).format(
      "DD/MM/YYYY"
    );
    page1.getCell("E24").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E25").value = moment(fechasInicioIngenios?.CellE25).format(
      "DD/MM/YYYY"
    );
    page1.getCell("E25").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("E26").value = moment(fechasInicioIngenios?.CellE26).format(
      "DD/MM/YYYY"
    );
    page1.getCell("E26").font = { name: "Calibri", bold: true, size: 11 };

    /** COLUMNA DIAS DE AVANCE 2023**/
    page1.getCell("D10").value = {
      formula: '=if(E10="",(C28-C10)+1,(E10-C10)+1)',
      result: 7,
    };
    page1.getCell("D10").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D11").value = {
      formula: '=if(E11="",(C28-C11)+1,(E11-C11)+1)',
      result: 7,
    };
    page1.getCell("D11").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D12").value = {
      formula: '=if(E12="",(C28-C12)+1,(E12-C12)+1)',
      result: 7,
    };
    page1.getCell("D12").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D13").value = "";
    page1.getCell("D14").value = {
      formula: '=if(E14="",(C28-C14)+1,(E14-C14)+1)',
      result: 7,
    };
    page1.getCell("D14").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D15").value = {
      formula: '=if(E15="",(C28-C15)+1,(E15-C15)+1)',
      result: 7,
    };
    page1.getCell("D15").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D16").value = "";
    page1.getCell("D17").value = {
      formula: '=if(E17="",(C28-C17)+1,(E17-C17)+1)',
      result: 7,
    };
    page1.getCell("D17").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D18").value = {
      formula: '=if(E18="",(C28-C18)+1,(E18-C18)+1)',
      result: 7,
    };
    page1.getCell("D18").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D19").value = {
      formula: '=if(E19="",(C28-C19)+1,(E19-C19)+1)',
      result: 7,
    };
    page1.getCell("D19").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D20").value = {
      formula: '=if(E20="",(C28-C20)+1,(E20-C20)+1)',
      result: 7,
    };
    page1.getCell("D20").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D21").value = {
      formula: '=if(E21="",(C28-C21)+1,(E21-C21)+1)',
      result: 7,
    };
    page1.getCell("D21").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D22").value = {
      formula: '=if(E22="",(C28-C22)+1,(E22-C22)+1)',
      result: 7,
    };
    page1.getCell("D22").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D23").value = {
      formula: '=if(E23="",(C28-C23)+1,(E23-C23)+1)',
      result: 7,
    };
    page1.getCell("D23").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D24").value = {
      formula: '=if(E24="",(C28-C24)+1,(E24-C24)+1)',
      result: 7,
    };
    page1.getCell("D24").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D25").value = {
      formula: '=if(E25="",(C28-C25)+1,(E25-C25)+1)',
      result: 7,
    };
    page1.getCell("D25").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("D26").value = {
      formula: '=if(E26="",(C28-C26)+1,(E26-C26)+1)',
      result: 7,
    };
    page1.getCell("D26").font = { name: "Calibri", bold: true, size: 11 };

    /** COLUMNA FECHA INICIO 2022 **/

    page1.getCell("P10").value = moment(fechasInicioIngeniosComparativa.Cell10).format(
      "DD/MM/YYYY");
    page1.getCell("P10").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P11").value = moment(fechasInicioIngeniosComparativa.Cell11).format(
      "DD/MM/YYYY");
    page1.getCell("P11").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P12").value = moment(fechasInicioIngeniosComparativa.Cell12).format(
      "DD/MM/YYYY");
    page1.getCell("P12").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P14").value = moment(fechasInicioIngeniosComparativa.Cell14).format(
      "DD/MM/YYYY");
    page1.getCell("P14").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P15").value = moment(fechasInicioIngeniosComparativa.Cell15).format(
      "DD/MM/YYYY");
    page1.getCell("P16").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P17").value = moment(fechasInicioIngeniosComparativa.Cell17).format(
      "DD/MM/YYYY");
    page1.getCell("P17").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P18").value = moment(fechasInicioIngeniosComparativa.Cell18).format(
      "DD/MM/YYYY");
    page1.getCell("P18").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P19").value = moment(fechasInicioIngeniosComparativa.Cell19).format(
      "DD/MM/YYYY");
    page1.getCell("P19").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P20").value = moment(fechasInicioIngeniosComparativa.Cell20).format(
      "DD/MM/YYYY");
    page1.getCell("P20").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P21").value = moment(fechasInicioIngeniosComparativa.Cell21).format(
      "DD/MM/YYYY");
    page1.getCell("P21").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P22").value = moment(fechasInicioIngeniosComparativa.Cell22).format(
      "DD/MM/YYYY");
    page1.getCell("P22").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P23").value = moment(fechasInicioIngeniosComparativa.Cell23).format(
      "DD/MM/YYYY");
    page1.getCell("P23").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P24").value = moment(fechasInicioIngeniosComparativa.Cell24).format(
      "DD/MM/YYYY");
    page1.getCell("P24").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P25").value = moment(fechasInicioIngeniosComparativa.Cell25).format(
      "DD/MM/YYYY");
    page1.getCell("P25").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("P26").value = moment(fechasInicioIngeniosComparativa.Cell26).format(
      "DD/MM/YYYY");
    page1.getCell("P26").font = { name: "Calibri", bold: true, size: 11 };

    /** COLUMNA FIN DE ZAFRA 2022 **/
    page1.getCell("R10").value = moment(fechasInicioIngeniosComparativa?.CellR10).format("DD/MM/YYYY");
    page1.getCell("R10").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R11").value = moment(fechasInicioIngeniosComparativa?.CellR11).format("DD/MM/YYYY");
    page1.getCell("R11").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R12").value = moment(fechasInicioIngeniosComparativa?.CellR12).format("DD/MM/YYYY");
    page1.getCell("R12").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R14").value = moment(fechasInicioIngeniosComparativa?.CellR14).format("DD/MM/YYYY");
    page1.getCell("R14").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R15").value = moment(fechasInicioIngeniosComparativa?.CellR15).format("DD/MM/YYYY");
    page1.getCell("R16").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R17").value = moment(fechasInicioIngeniosComparativa?.CellR17).format("DD/MM/YYYY");
    page1.getCell("R17").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R18").value = moment(fechasInicioIngeniosComparativa?.CellR18).format("DD/MM/YYYY");
    page1.getCell("R18").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R19").value = moment(fechasInicioIngeniosComparativa?.CellR19).format("DD/MM/YYYY");
    page1.getCell("R19").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R20").value = moment(fechasInicioIngeniosComparativa?.CellR20).format("DD/MM/YYYY");
    page1.getCell("R20").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R21").value = moment(fechasInicioIngeniosComparativa?.CellR21).format("DD/MM/YYYY");
    page1.getCell("R21").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R22").value = moment(fechasInicioIngeniosComparativa?.CellR22).format("DD/MM/YYYY");
    page1.getCell("R22").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R23").value = moment(fechasInicioIngeniosComparativa?.CellR23).format("DD/MM/YYYY");
    page1.getCell("R23").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R24").value = moment(fechasInicioIngeniosComparativa?.CellR24).format("DD/MM/YYYY");
    page1.getCell("R24").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R25").value = moment(fechasInicioIngeniosComparativa?.CellR25).format("DD/MM/YYYY");
    page1.getCell("R25").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("R26").value = moment(fechasInicioIngeniosComparativa?.CellR26).format("DD/MM/YYYY");
    page1.getCell("R26").font = { name: "Calibri", bold: true, size: 11 };
    /************/

    /** COLUMNA DIAS DE AVANCE 2022**/
    page1.getCell("Q10").value = {
      formula: '=if(R10="",R28-P10,R10-P10)',
      result: 7,
    };
    page1.getCell("Q10").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q11").value = {
      formula: '=if(R11="",R28-P11,R11-P11)',
      result: 7,
    };
    page1.getCell("Q11").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q12").value = {
      formula: '=if(R12="",R28-P12,R12-P12)',
      result: 7,
    };
    page1.getCell("Q12").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q13").value = "";
    page1.getCell("Q14").value = {
      formula: '=if(R14="",R28-P14,R14-P14)',
      result: 7,
    };
    page1.getCell("Q14").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q15").value = {
      formula: '=if(R15="",R28-P15,R15-P15)',
      result: 7,
    };
    page1.getCell("Q15").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q16").value = "";
    page1.getCell("Q17").value = {
      formula: '=if(R17="",R28-P17,R17-P17)',
      result: 7,
    };
    page1.getCell("Q17").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q18").value = {
      formula: '=if(R18="",R28-P18,R18-P18)',
      result: 7,
    };
    page1.getCell("Q18").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q19").value = {
      formula: '=if(R19="",R28-P19,R19-P19)',
      result: 7,
    };
    page1.getCell("Q19").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q20").value = {
      formula: '=if(R20="",R28-P20,R20-P20)',
      result: 7,
    };
    page1.getCell("Q20").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q21").value = {
      formula: '=if(R21="",R28-P21,R21-P21)',
      result: 7,
    };
    page1.getCell("Q21").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q22").value = {
      formula: '=if(R22="",R28-P22,R22-P22)',
      result: 7,
    };
    page1.getCell("Q22").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q23").value = {
      formula: '=if(R23="",R28-P23,R23-P23)',
      result: 7,
    };
    page1.getCell("Q23").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q24").value = {
      formula: '=if(R24="",R28-P24,R24-P24)',
      result: 7,
    };
    page1.getCell("Q24").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("Q25").value = {
      formula: '=if(R25="",R28-P25,R25-P25)',
      result: 7,
    };
    page1.getCell("Q25").font = { name: "Calibri", bold: true, size: 11 };

    page1.getCell("Q26").value = {
      formula: '=if(R26="",R28-P26,R26-P26)',
      result: 7,
    };
    page1.getCell("Q26").font = { name: "Calibri", bold: true, size: 11 };
    /*****************/

    /**TOTAL AZUCAR **/
    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 };
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 };
    }
    for (let i = 17; i <= 25; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 };
    }

    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 };
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 };
    }
    for (let i = 17; i <= 25; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 };
    }

    /** FILA LOS BALCANES **/
    page1.getCell("F13").value = { formula: "=SUM(F10:F12)", result: 7 };
    page1.getCell("G13").value = { formula: "=SUM(G10:G12)", result: 7 };
    page1.getCell("H13").value = { formula: "=SUM(H10:H12)", result: 7 };
    page1.getCell("K13").value = { formula: "=SUM(K10:K12)", result: 7 };
    page1.getCell("L13").value = { formula: "=SUM(L10:L12)", result: 7 };
    page1.getCell("M13").value = { formula: "=SUM(M10:M12)", result: 7 };
    page1.getCell("N13").value = { formula: "=SUM(N10:N12)", result: 7 };
    page1.getCell("O13").value = { formula: "=SUM(O10:O12)", result: 7 };

    page1.getCell("S13").value = { formula: "=SUM(S10:S12)", result: 7 };
    page1.getCell("T13").value = { formula: "=SUM(T10:T12)", result: 7 };
    page1.getCell("U13").value = { formula: "=SUM(U10:U12)", result: 7 };
    page1.getCell("X13").value = { formula: "=SUM(X10:X12)", result: 7 };
    page1.getCell("Y13").value = { formula: "=SUM(Y10:Y12)", result: 7 };
    page1.getCell("Z13").value = { formula: "=SUM(Z10:Z12)", result: 7 };
    page1.getCell("AA13").value = { formula: "=SUM(AA10:AA12)", result: 7 };
    page1.getCell("AB13").value = { formula: "=SUM(AB10:AB12)", result: 7 };

    /** FILA CASS **/
    page1.getCell("F16").value = { formula: "=SUM(F14:F15)", result: 7 };
    page1.getCell("G16").value = { formula: "=SUM(G14:G15)", result: 7 };
    page1.getCell("H16").value = { formula: "=SUM(H14:H15)", result: 7 };
    page1.getCell("K16").value = { formula: "=SUM(K14:K15)", result: 7 };
    page1.getCell("L16").value = { formula: "=SUM(L14:L15)", result: 7 };
    page1.getCell("M16").value = { formula: "=SUM(M14:M15)", result: 7 };
    page1.getCell("N16").value = { formula: "=SUM(N14:N15)", result: 7 };
    page1.getCell("O16").value = { formula: "=SUM(O14:O15)", result: 7 };

    page1.getCell("S16").value = { formula: "=SUM(S14:S15)", result: 7 };
    page1.getCell("T16").value = { formula: "=SUM(T14:T15)", result: 7 };
    page1.getCell("U16").value = { formula: "=SUM(U14:U15)", result: 7 };
    page1.getCell("X16").value = { formula: "=SUM(X14:X15)", result: 7 };
    page1.getCell("Y16").value = { formula: "=SUM(Y14:Y15)", result: 7 };
    page1.getCell("Z16").value = { formula: "=SUM(Z14:Z15)", result: 7 };
    page1.getCell("AA16").value = { formula: "=SUM(AA14:AA15)", result: 7 };
    page1.getCell("AB16").value = { formula: "=SUM(AB14:AB15)", result: 7 };

    /** FILA TOTALES  2023**/
    page1.mergeCells("B27:C27");
    page1.getCell("C27").value = "Inicio desde el 1° Ingenio";
    page1.getCell("C27").font = { name: "Calibri", bold: true, size: 11 };
    page1.getCell("C27").alignment = {
      horizontal: "start",
      vertical: "middle",
    };
    page1.getCell("D27").value = Math.ceil(dataDiasZafra);
    page1.getCell("D27").font = { name: "Calibri", bold: true, size: 12 };

    page1.getCell("F27").value = {
      formula: "=SUM(F10:F12,F14:F15,F17:F26)",
      result: 7,
    };
    page1.getCell("G27").value = {
      formula: "=SUM(G10:G12,G14:G15,G17:G26)",
      result: 7,
    };
    page1.getCell("H27").value = {
      formula: "=SUM(H10:H12,H14:H15,H17:H26)",
      result: 7,
    };
    page1.getCell("I27").value = { formula: "=H27/F27*100", result: 7 };
    page1.getCell("J27").value = { formula: "=H27/G27*100", result: 7 };
    page1.getCell("K27").value = {
      formula: "=SUM(K10:K12,K14:K15,K17:K26)",
      result: 7,
    };
    page1.getCell("L27").value = {
      formula: "=L24+L22+L21+L20+L19+L18+L17+L15+L14+L12+L11+L10+L26",
      result: 7,
    };
    page1.getCell("M27").value = {
      formula: "=SUM(M10:M12,M14:M15,M17:M26)",
      result: 7,
    };
    page1.getCell("N27").value = {
      formula: "=SUM(N10:N12,N14:N15,N17:N26)",
      result: 7,
    };
    page1.getCell("O27").value = {
      formula: "=O24+O25+O22+O21+O19+O18+O17+O15+O14+O12+O26",
      result: 7,
    };
    /** FILAS TOTALES 2022 2*/
    page1.getCell("Q27").value = Math.ceil(dataDiasZafraComparativa);
    page1.getCell("Q27").font = { name: "Calibri", bold: true, size: 12 };
    page1.getCell("S27").value = {
      formula: "=SUM(S10:S12,S14:S15,S17:S26)",
      result: 7,
    };
    page1.getCell("T27").value = {
      formula: "=SUM(T10:T12,T14:T15,T17:T26)",
      result: 7,
    };
    page1.getCell("U27").value = {
      formula: "=SUM(U10:U12,U14:U15,U17:U26)",
      result: 7,
    };
    page1.getCell("V27").value = { formula: "=U27/S27*100", result: 7 };
    page1.getCell("W27").value = { formula: "=U27/T27*100", result: 7 };
    page1.getCell("X27").value = {
      formula: "=SUM(X10:X12,X14:X15,X17:X26)",
      result: 7,
    };
    page1.getCell("Y27").value = {
      formula: "=Y24+Y22+Y21+Y20+Y19+Y18+Y17+Y15+Y14+Y12+Y11+Y10",
      result: 7,
    };
    page1.getCell("Z27").value = {
      formula: "=SUM(Z10:Z12,Z14:Z15,Z17:Z26)",
      result: 7,
    };
    page1.getCell("AA27").value = {
      formula: "=SUM(AA10:AA12,AA14:AA15,AA17:AA26)",
      result: 7,
    };
    page1.getCell("AB27").value = {
      formula: "=AB24+AB25+AB22+AB21+AB19+AB18+AB17+AB15+AB14+AB12+AB26",
      result: 7,
    };
    /***********/

    page1.mergeCells("A28:B28");
    page1.getCell("A28").value = `Datos hasta la fecha: `;
    page1.getCell("A28").border = {
      top: { style: "medium", color: { argb: "000000" } },
      left: { style: "thin", color: { argb: "FFFFFF" } },
      bottom: { style: "medium", color: { argb: "000000" } },
      right: { style: "thin", color: { argb: "FFFFFF" } },
    };
    page1.getCell("A28").font = { name: "Calibri", bold: true, size: 12 };
    page1.getCell("A28").alignment = {
      horizontal: "right",
      vertical: "middle",
    };
    page1.getCell("C28").value = dateFormat;
    page1.getCell("C28").font = { name: "Calibri", bold: true, size: 12 };
    page1.getCell("C28").alignment = {
      horizontal: "start",
      vertical: "middle",
    };
    page1.getCell("C28").border = {
      top: { style: "medium", color: { argb: "000000" } },
      left: { style: "thin", color: { argb: "FFFFFF" } },
      bottom: { style: "medium", color: { argb: "000000" } },
      right: { style: "thin", color: { argb: "FFFFFF" } },
    };
    page1.mergeCells("F28:O28");
    page1.getCell("F28").value = `ACUMULADO HASTA ${dateFormat}`;
    page1.getCell("F28").font = { name: "Calibri", bold: true, size: 14 };
    page1.getCell("F28").alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    page1.mergeCells("P28:Q28");
    page1.getCell("P28").value = "Datos hasta la fecha: ";
    page1.getCell("P28").font = { name: "Calibri", bold: true, size: 12 };
    page1.getCell("P28").alignment = {
      horizontal: "right",
      vertical: "middle",
    };
    page1.getCell("P28").border = {
      top: { style: "medium", color: { argb: "000000" } },
      left: { style: "thin", color: { argb: "FFFFFF" } },
      bottom: { style: "medium", color: { argb: "000000" } },
      right: { style: "thin", color: { argb: "FFFFFF" } },
    };
    page1.getCell("R28").value = dateComparativaFormat;
    page1.getCell("R28").font = { name: "Calibri", bold: true, size: 12 };
    page1.getCell("R28").alignment = {
      horizontal: "start",
      vertical: "middle",
    };
    page1.getCell("R28").border = {
      top: { style: "medium", color: { argb: "000000" } },
      left: { style: "thin", color: { argb: "FFFFFF" } },
      bottom: { style: "medium", color: { argb: "000000" } },
      right: { style: "thin", color: { argb: "FFFFFF" } },
    };
    page1.mergeCells("S28:AB28");
    page1.getCell("S28").value = `ACUMULADO HASTA ${dateComparativaFormat}`;
    page1.getCell("S28").font = { name: "Calibri", bold: true, size: 14 };
    page1.getCell("S28").alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    /** COMPARATIVOS **/
    page1.mergeCells("A30:O30");
    page1.getCell("A30").value = `COMPARATIVO ZAFRA ${anioData}/${
      anioDataComparativo
    } - VARIACIÓN %  HASTA EL ${dateFormat}`;
    page1.getCell("A30").alignment = alignCenter;
    page1.getCell("A30").font = functionFont("Calibri", true, 14);

    page1.mergeCells("A31:E31");
    page1.getCell("A31").value = "DIFERENCIA";

    page1.getCell("F31").value = { formula: "F27-S27" };
    page1.getCell("G31").value = { formula: "G27-T27" };
    page1.getCell("H31").value = { formula: "H27-U27" };
    page1.getCell("I31").value = { formula: "I27-V27" };
    page1.getCell("J31").value = { formula: "J27-W27" };
    page1.getCell("K31").value = { formula: "K27-X27" };
    page1.getCell("L31").value = { formula: "L27-Y27" };
    page1.getCell("M31").value = { formula: "M27-Z27" };
    page1.getCell("N31").value = { formula: "N27-AA27" };
    page1.getCell("O31").value = { formula: "O27-AB27" };

    page1.mergeCells("A32:E32");
    page1.getCell("A32").value = "%";
    page1.getCell("A32").alignment = alignCenter;

    page1.getCell("F32").value = {
      formula: '=if(S27=0,"100%",F31/S27)',
      result: 7,
    };
    page1.getCell("G32").value = {
      formula: '=if(T27=0,"100%",G31/T27)',
      result: 7,
    };
    page1.getCell("H32").value = {
      formula: '=if(U27=0,"100%",H31/U27)',
      result: 7,
    };
    page1.getCell("I32").value = {
      formula: '=if(V27=0,"100%",I31/V27)',
      result: 7,
    };
    page1.getCell("J32").value = {
      formula: '=if(W27=0,"100%",J31/W27)',
      result: 7,
    };
    page1.getCell("K32").value = {
      formula: '=if(X27=0,"100%",K31/X27)',
      result: 7,
    };
    page1.getCell("L32").value = {
      formula: '=if(Y27=0,"100%",L31/Y27)',
      result: 7,
    };
    page1.getCell("M32").value = {
      formula: '=if(Z27=0,"100%",M31/Z27)',
      result: 7,
    };
    page1.getCell("N32").value = {
      formula: '=if(AA27=0,"100%",N31/AA27)',
      result: 7,
    };
    page1.getCell("O32").value = {
      formula: '=if(AB27=0,"100%",O31/AB27)',
      result: 7,
    };

    page1.mergeCells("P30:V31");
    page1.getCell("P30").value = `Inicio de zafra ${anioData}: ${
      inicioZafra !== null ? moment(inicioZafra).format("DD/MM/YYYY") : ""
    }
Inicio de zafra ${anioDataComparativo}: ${moment(inicioZafraComparativa).format("DD/MM/YYYY")}`;
    page1.getCell("P30").alignment = alignStart;

    page1.mergeCells("W30:AB31");
    page1.getCell("W30").value = `Fin de zafra ${anioData}: ${
      finZafra !== "" ? moment(finZafra).format("DD/MM/YYYY") : ""
    }
Fin de zafra ${anioDataComparativo}: ${moment(finZafraComparativa).format("DD/MM/YYYY")}`;
    page1.getCell("W30").alignment = alignStart;

    page1.mergeCells("P32:T32");
    page1.getCell("P32").value = "Diferencia de Grado de avance";
    page1.getCell("P32").font = functionFont("Bodoni MT", true, 18);
    page1.getCell("P32").alignment = alignStart;
    page1.mergeCells("U32:V32");
    page1.getCell("U32").font = functionFont("Bodoni MT", true, 18);
    page1.getCell("U32").value = { formula: "(V36-F36)/100" };
    page1.getCell("U32").alignment = alignStart;

    page1.mergeCells("W32:AB32");

    /*** ESTIMACIONES ***/

    // const dataComparativa = dataConstante.dataComparativa;
    let estimacionEEAOC;
    let CMBporDDJJ;
    dataComparativa.forEach((d) => {
      if (d.anio_zafra === anioData) {
        estimacionEEAOC = d.estimacion_EEAOC;
      }
      if (d.anio_zafra === anioDataComparativo) {
        CMBporDDJJ = d.CMB_DDJJ;
      }
    });


    for (let i = 34; i <= 37; i++) {
      page1.mergeCells(`A${i}:E${i}`);
      page1.mergeCells(`F${i}:G${i}`);
    }
    page1.getCell("A34").value = "Estimación EEAOC Materia prima bruta";
    page1.getCell("A35").value = `Caña Molida bruta hasta el ${dateFormat}`;
    page1.getCell("A36").value =
      "Grado de Avance con respecto a la previsión por E.E.A.O.C.";
    page1.getCell("A37").value = "Diferencia";
    page1.getCell("F34").value = parseInt(estimacionEEAOC);
    page1.getCell("F35").value = { formula: "F27" };
    page1.getCell("F36").value = { formula: "F35/F34*100" };
    page1.getCell("F37").value = { formula: "F36-100" };
    page1.getCell("H34").value = "Tn";
    page1.getCell("H35").value = "Tn";
    page1.getCell("H36").value = "%";
    page1.getCell("H37").value = "%";

    page1.mergeCells("I34:J37");
    page1.getCell("I34").value = `ZAFRA ${anioData}`;
    page1.getCell("I34").font = functionFont("Calibri", true, 16);
    page1.getCell("I34").alignment = alignCenter;
    page1.getCell("I34").fill = bgVerde;

    page1.mergeCells("K34:K37");
    page1.getCell("K34").value = "Producción Alcohol etílico anhidro [m3]";
    page1.getCell("K34").font = functionFont("Calibri", true, 12);
    page1.getCell("K34").alignment = alignCenter;
    page1.getCell("K34").fill = bgVerde;

    page1.mergeCells("L34:N37");
    page1.getCell("L34").value = { formula: "R58" };
    page1.getCell("L34").font = functionFont("Bodoni MT", true, 26);
    page1.getCell("L34").alignment = alignCenter;
    page1.getCell("L34").fill = bgVerde;

    for (let i = 34; i <= 37; i++) {
      page1.mergeCells(`O${i}:U${i}`);
      page1.mergeCells(`V${i}:W${i}`);
    }
    page1.getCell("O34").value = "Caña Molida bruta por DDJJ - Datos IPAAT";
    page1.getCell(
      "O35"
    ).value = `Caña Molida bruta hasta el ${dateComparativaFormat}`;
    page1.getCell("O36").value =
      "Grado de Avance con respecto a lo declarado al IPAAT, por los ingenios de Tucumán";
    page1.getCell("O37").value = "Diferencia";
    page1.getCell("V34").value = parseInt(CMBporDDJJ);
    page1.getCell("V35").value = { formula: "S27" };
    page1.getCell("V36").value = { formula: "V35/V34*100" };
    page1.getCell("V37").value = { formula: "100-V36" };
    page1.getCell("X34").value = "Tn";
    page1.getCell("X35").value = "Tn";
    page1.getCell("X36").value = "%";
    page1.getCell("X37").value = "%";

    page1.mergeCells("Y34:AB37");
    page1.getCell("Y34").value = `ZAFRA ${anioDataComparativo}`;
    page1.getCell("Y34").font = functionFont("Bodoni MT", true, 16);
    page1.getCell("Y34").alignment = alignCenter;
    page1.getCell("Y34").fill = bgAzul;

    /**** AZUCARES ****/
    page1.mergeCells("A39:G40");
    page1.getCell(
      "A39"
    ).value = `PRODUCCIÓN DE AZÚCAR DISCRIMINADA POR TIPOLOGÍA ZAFRA ${anioData}`;
    page1.getCell("A39").font = functionFont("Bodoni MT", true, 16);
    page1.getCell("A39").alignment = alignCenter;
    page1.getCell("A39").fill = bgVerde;

    page1.mergeCells("A41:B43");
    page1.getCell("A41").value = "Ingenios";
    page1.getCell("A41").font = functionFont("Calibri", true, 14);
    page1.getCell("A41").alignment = alignStart;

    page1.mergeCells("C41:G41");
    page1.getCell(
      "C41"
    ).value = `TIPOS DE AZÚCARES Y SUS CANTIDADES EN TONELADAS HASTA ${dateFormat}`;
    page1.getCell("C41").font = functionFont("Calibri", true, 12);
    page1.getCell("C41").alignment = alignCenter;
    page1.getCell("C41").fill = bgGris;

    page1.mergeCells("C42:C43");
    page1.getCell("C42").value = `Común Tipo "A"`;
    page1.getCell("C42").font = functionFont("Calibri", true, 14);
    page1.getCell("C42").alignment = alignCenter;

    page1.mergeCells("D42:D43");
    page1.getCell("D42").value = "Refinado";
    page1.getCell("D42").font = functionFont("Calibri", true, 14);
    page1.getCell("D42").alignment = alignCenter;

    page1.mergeCells("E42:E43");
    page1.getCell("E42").value = "Crudo";
    page1.getCell("E42").font = functionFont("Calibri", true, 14);
    page1.getCell("E42").alignment = alignCenter;

    page1.mergeCells("F42:F43");
    page1.getCell("F42").value = "Orgánico";
    page1.getCell("F42").font = functionFont("Calibri", true, 14);
    page1.getCell("F42").alignment = alignCenter;

    page1.mergeCells("G42:G43");
    page1.getCell("G42").value = "Otros";
    page1.getCell("G42").font = functionFont("Calibri", true, 14);
    page1.getCell("G42").alignment = alignCenter;

    for (let i = 44; i <= 58; i++) {
      page1.mergeCells(`A${i}:B${i}`);
    }
    dataIngenios.forEach((d, i) => {
      page1.getCell(`A${i + 44}`).value = d?.nombre_ingenio;
      page1.getCell(`A${i + 44}`).font = functionFont("Calibri", false, 11);
      page1.getCell(`A${i + 44}`).alignment = alignStart;
    });
    page1.getCell("A58").value = "Acumulado";
    page1.getCell("A58").font = functionFont("Calibri", true, 14);
    page1.getCell("A58").alignment = alignStart;

    for (let i = 3; i <= 7; i++) {
      const asd = ["n", "A", "B", "C", "D", "E", "F", "G"];
      page1.getCell(58, i).value = { formula: `SUM(${asd[i]}44:${asd[i]}57)` };
      page1.getCell(58, i).numFmt = "0,000";
    }

    /**** ALCOHOL ****/
    page1.mergeCells("H39:T40");
    page1.getCell("H39").value =
      "PRODUCCIÓN DE ALCOHOL ETÍLICO DISCRIMINADO POR TIPO -  CAMPAÑA 2023 (INICIO: )";
    page1.getCell("H39").font = functionFont("Bodoni MT", true, 16);
    page1.getCell("H39").alignment = alignCenter;
    page1.getCell("H39").fill = bgAzul;

    page1.mergeCells("H41:K42");
    page1.getCell("H41").value = "Proceso de Destilacion";
    page1.getCell("H41").font = functionFont("Bodoni", true, 20);
    page1.getCell("H41").alignment = alignCenter;

    page1.mergeCells("L41:T41");
    page1.getCell(
      "L41"
    ).value = `TIPOS DE ALCOHOLES Y SUS VOLÚMENES EN METROS CÚBICOS HASTA ${dateFormat}`;
    page1.getCell("L41").font = functionFont("Calibri", true, 12);
    page1.getCell("L41").alignment = alignCenter;
    page1.getCell("L41").fill = bgGris;

    for (let i = 43; i <= 57; i++) {
      page1.mergeCells(`H${i}:I${i}`);
      page1.getCell(`H${i}`).alignment = alignCenter;
      page1.mergeCells(`J${i}:K${i}`);
      page1.getCell(`J${i}`).alignment = alignCenter;
    }
    page1.getCell("H43").value = "Destilería";
    page1.getCell("H43").font = functionFont("Bodoni", true, 20);
    page1.getCell("J43").value = "Anhidradora";
    page1.getCell("J43").font = functionFont("Bodoni", true, 20);

    page1.getCell("H44").value = "No posee";
    page1.getCell("H44").font = functionFont("Calibri", false, 14);
    page1.getCell("J44").value = "No posee";
    page1.getCell("J44").font = functionFont("Calibri", false, 14);

    page1.getCell("H45").value = "José Minetti y Cía. Ltda. SACI";
    page1.getCell("H45").font = functionFont("Calibri", false, 14);
    page1.getCell("J45").value = "Fronterita Energía S.A.";
    page1.getCell("J45").font = functionFont("Calibri", false, 14);

    page1.getCell("H46").value =
      "Complejo Alimenticio San Salvador S.A.-Banda de Río Salí";
    page1.getCell("H46").font = functionFont("Calibri", false, 14);
    page1.getCell("J46").value = "Bio Atar  S.A.";
    page1.getCell("J46").font = functionFont("Calibri", false, 14);

    page1.getCell("H47").value = "No posee";
    page1.getCell("H47").font = functionFont("Calibri", false, 14);
    page1.getCell("J47").value = "No posee";
    page1.getCell("J47").font = functionFont("Calibri", false, 14);

    page1.getCell("H48").value = "Destilería Salta Refrescos S.A.";
    page1.getCell("H48").font = functionFont("Calibri", false, 14);
    page1.getCell("J48").value = "No posee";
    page1.getCell("J48").font = functionFont("Calibri", false, 14);

    page1.getCell("H49").value = "Sucroalcoholera del Sur S.A.";
    page1.getCell("H49").font = functionFont("Calibri", false, 14);
    page1.getCell("J49").value = "Bioenergía La Corona S.A.";
    page1.getCell("J49").font = functionFont("Calibri", false, 14);

    page1.getCell("H50").value = "Compañía Azucarera Los Balcanes S.A.";
    page1.getCell("H50").font = functionFont("Calibri", false, 14);
    page1.getCell("J50").value = "Compañía Azucarera Los Balcanes S.A.";
    page1.getCell("J50").font = functionFont("Calibri", false, 14);

    page1.getCell("H451").value = "No posee";
    page1.getCell("H51").font = functionFont("Calibri", false, 14);
    page1.getCell("J51").value = "No posee";
    page1.getCell("J51").font = functionFont("Calibri", false, 14);

    page1.getCell("H52").value = "Ansonnaud, Ricardo Sixto";
    page1.getCell("H52").font = functionFont("Calibri", false, 14);
    page1.getCell("J52").value = "Bio Trinidad S.A.";
    page1.getCell("J52").font = functionFont("Calibri", false, 14);

    page1.getCell("H53").value = "Compañía Inversora Industrial S.A.";
    page1.getCell("H53").font = functionFont("Calibri", false, 14);
    page1.getCell("J53").value = "Bioenergética Leales S.A.";
    page1.getCell("J53").font = functionFont("Calibri", false, 14);

    page1.getCell("H54").value =
      "Complejo Alimenticio San Salvador S.A. Juan Bautista Alberdi (Sin funcionar)";
    page1.getCell("H54").font = functionFont("Calibri", false, 14);
    page1.getCell("H54").alignment = alignCenter;
    page1.getCell("J54").value = "No posee";
    page1.getCell("J54").font = functionFont("Calibri", false, 14);

    page1.getCell("H55").value = "No posee";
    page1.getCell("H55").font = functionFont("Calibri", false, 14);
    page1.getCell("J55").value = "No posee";
    page1.getCell("J55").font = functionFont("Calibri", false, 14);

    page1.getCell("H56").value = "Industrias Santa Bárbara S.R.L.";
    page1.getCell("H56").font = functionFont("Calibri", false, 14);
    page1.getCell("J56").value =
      "Energías Ecológicas del Tucumán S.A. (Sin funcionar)";
    page1.getCell("J56").font = functionFont("Calibri", false, 14);

    page1.getCell("H57").value = "No posee";
    page1.getCell("H57").font = functionFont("Calibri", false, 14);
    page1.getCell("J57").value = "Anhidradora Bioenergía Santa Rosa S.A. (*)";
    page1.getCell("J57").font = functionFont("Calibri", false, 14);

    page1.mergeCells("H58:K58");
    page1.getCell("H58").value = "Acumulado";
    page1.getCell("H58").font = functionFont("Calibri", true, 14);
    page1.getCell("H58").alignment = alignStart;

    page1.mergeCells("L42:N43");
    page1.getCell("L42").value = "Alcohol Total";
    page1.getCell("L42").font = functionFont("Calibri", true, 14);
    page1.getCell("L42").alignment = alignCenter;

    page1.mergeCells("O42:Q43");
    page1.getCell("O42").value = "Alcohol Hidratado";
    page1.getCell("O42").font = functionFont("Calibri", true, 14);
    page1.getCell("O42").alignment = alignCenter;

    page1.mergeCells("R42:T43");
    page1.getCell("R42").value = "Alcohol Anhidro";
    page1.getCell("R42").font = functionFont("Calibri", true, 14);
    page1.getCell("R42").alignment = alignCenter;

    for (let i = 44; i <= 58; i++) {
      page1.mergeCells(`L${i}:N${i}`);
      page1.getCell(`L${i}`).alignment = alignCenter;
      page1.mergeCells(`O${i}:Q${i}`);
      page1.getCell(`O${i}`).alignment = alignCenter;
      page1.mergeCells(`R${i}:T${i}`);
      page1.getCell(`R${i}`).alignment = alignCenter;
    }

    page1.getCell("L58").value = { formula: `=SUM(L44:N57)` };
    page1.getCell("L58").numFmt = "0,000.000";
    page1.getCell("O58").value = {
      formula: `=O56+O54+O53+O52+O50+O49+O48+O46+O45`,
    };
    page1.getCell("O58").numFmt = "0,000.000";
    page1.getCell("R58").value = { formula: `=R57+R53+R52+R50+R49+R46+R45` };
    page1.getCell("R58").numFmt = "0,000.000";

    /**** EXPORTACIONES ****/
    page1.mergeCells("U39:Y40");
    page1.getCell(
      "U39"
    ).value = `MERCADO EXTERNO DEL AZÚCAR - ZAFRA ${anioData} Al ${dateFormat}`;
    page1.getCell("U39").alignment = alignCenter;
    page1.getCell("U39").font = functionFont("Bodoni MT", true, 12);

    page1.mergeCells("Z39:AB40");
    page1.getCell("Z39").value = "Acumulado: ";
    page1.getCell("Z39").alignment = alignCenter;
    page1.getCell("Z39").font = functionFont("Bodoni MT", true, 12);

    page1.mergeCells("U41:AB63");

    page1.getRow(1).alignment = { horizontal: "center", vertical: "middle" };

    /**** BORDES + ****/
    page1.getRow(29).border = borders(
      "medium",
      "000000",
      "thin",
      "EAEAEA",
      "medium",
      "000000",
      "thin",
      "EAEAEA"
    );
    page1.getRow(33).border = borders(
      "medium",
      "000000",
      "thin",
      "EAEAEA",
      "medium",
      "000000",
      "thin",
      "EAEAEA"
    );
    page1.getRow(38).border = borders(
      "medium",
      "000000",
      "thin",
      "EAEAEA",
      "medium",
      "000000",
      "thin",
      "EAEAEA"
    );
    for (let i = 3; i < 6; i++) {
      page1.getCell(7, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }
    for (let i = 16; i < 19; i++) {
      page1.getCell(7, i).border = borders(
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000",
        "medium",
        "000000"
      );
    }

    for (let j = 1; j <= 1000; j++) {
      for (let i = 29; i <= 1000; i++) {
        page1.getCell(j, i).border = borders(
          "thin",
          "EAEAEA",
          "thin",
          "EAEAEA",
          "thin",
          "EAEAEA",
          "thin",
          "EAEAEA"
        );
      }
    }
    for (let j = 64; j <= 1000; j++) {
      for (let i = 1; i <= 1000; i++) {
        page1.getCell(j, i).border = borders(
          "thin",
          "EAEAEA",
          "thin",
          "EAEAEA",
          "thin",
          "EAEAEA",
          "thin",
          "EAEAEA"
        );
      }
    }

    /***** ACLARACIONES *****/
    page1.mergeCells("A59:I63");
    page1.mergeCells("J59:T63");

    /***** *****/

    /*********  DATOS  *********/
    /** DATOS 2023 **/
    if (parteDiarioData.length > 0) {
      /** AGUILARES **/
      page1.getCell("F10").value = parseInt(d1["E10"]);
      page1.getCell("G10").value = parseInt(d1["F10"]);
      page1.getCell("H10").value = parseFloat(d1["G10"]);
      page1.getCell("K10").value = parseInt(d1["J10"]);
      page1.getCell("L10").value = parseInt(d1["K10"]);
      page1.getCell("N10").value = parseInt(d1["M10"]);
      page1.getCell("O10").value = parseInt(d1["N10"]);

      /** Cruz Alta **/
      page1.getCell("F11").value = parseInt(d2["E11"]);
      page1.getCell("G11").value = parseInt(d2["F11"]);
      page1.getCell("H11").value = parseFloat(d2["G11"]);
      page1.getCell("K11").value = parseInt(d2["J11"]);
      page1.getCell("L11").value = parseInt(d2["K11"]);
      page1.getCell("N11").value = parseInt(d2["M11"]);
      page1.getCell("O11").value = parseInt(d2["N11"]);

      /** La Florida **/
      page1.getCell("F12").value = parseInt(d3["E12"]);
      page1.getCell("G12").value = parseInt(d3["F12"]);
      page1.getCell("H12").value = parseFloat(d3["G12"]);
      page1.getCell("K12").value = parseInt(d3["J12"]);
      page1.getCell("L12").value = parseInt(d3["K12"]);
      page1.getCell("N12").value = parseInt(d3["M12"]);
      page1.getCell("O12").value = parseInt(d3["N12"]);

      /** Concepcion **/
      page1.getCell("F14").value = parseInt(d4["E14"]);
      page1.getCell("G14").value = parseInt(d4["F14"]);
      page1.getCell("H14").value = parseFloat(d4["G14"]);
      page1.getCell("K14").value = parseInt(d4["J14"]);
      page1.getCell("L14").value = parseInt(d4["K14"]);
      page1.getCell("N14").value = parseInt(d4["M14"]);
      page1.getCell("O14").value = parseInt(d4["N14"]);

      /** Marapa **/
      page1.getCell("F15").value = parseInt(d5["E15"]);
      page1.getCell("G15").value = parseInt(d5["F15"]);
      page1.getCell("H15").value = parseFloat(d5["G15"]);
      page1.getCell("K15").value = parseInt(d5["J15"]);
      page1.getCell("L15").value = parseInt(d5["K15"]);
      page1.getCell("N15").value = parseInt(d5["M15"]);
      page1.getCell("O15").value = parseInt(d5["N15"]);

      /** Bella Vista **/
      page1.getCell("F17").value = parseInt(d6["E17"]);
      page1.getCell("G17").value = parseInt(d6["F17"]);
      page1.getCell("H17").value = parseFloat(d6["G17"]);
      page1.getCell("K17").value = parseInt(d6["J17"]);
      page1.getCell("L17").value = parseInt(d6["K17"]);
      page1.getCell("N17").value = parseInt(d6["M17"]);
      page1.getCell("O17").value = parseInt(d6["N17"]);

      /** Famailla **/
      page1.getCell("F18").value = parseInt(d7["E18"]);
      page1.getCell("G18").value = parseInt(d7["F18"]);
      page1.getCell("H18").value = parseFloat(d7["G18"]);
      page1.getCell("K18").value = parseInt(d7["J18"]);
      page1.getCell("L18").value = parseInt(d7["K18"]);
      page1.getCell("N18").value = parseInt(d7["M18"]);
      page1.getCell("O18").value = parseInt(d7["N18"]);

      /** La Corona **/
      page1.getCell("F19").value = parseInt(d8["E19"]);
      page1.getCell("G19").value = parseInt(d8["F19"]);
      page1.getCell("H19").value = parseFloat(d8["G19"]);
      page1.getCell("K19").value = parseInt(d8["J19"]);
      page1.getCell("L19").value = parseInt(d8["K19"]);
      page1.getCell("N19").value = parseInt(d8["M19"]);
      page1.getCell("O19").value = parseInt(d8["N19"]);

      /** La Providencia **/
      page1.getCell("F20").value = parseInt(d9["E20"]);
      page1.getCell("G20").value = parseInt(d9["F20"]);
      page1.getCell("H20").value = parseFloat(d9["G20"]);
      page1.getCell("K20").value = parseInt(d9["J20"]);
      page1.getCell("L20").value = parseInt(d9["K20"]);
      // if(anioData === 2023) page1.getCell('L20').note = 'FALTA AZ ORGANICO Y OTOS AZ'
      page1.getCell("N20").value = parseInt(d9["M20"]);
      page1.getCell("O20").value = parseInt(d9["N20"]);

      /** La Trinidad **/
      page1.getCell("F21").value = parseInt(d10["E21"]);
      page1.getCell("G21").value = parseInt(d10["F21"]);
      page1.getCell("H21").value = parseFloat(d10["G21"]);
      page1.getCell("K21").value = parseInt(d10["J21"]);
      page1.getCell("L21").value = parseInt(d10["K21"]);
      page1.getCell("N21").value = parseInt(d10["M21"]);
      page1.getCell("O21").value = parseInt(d10["N21"]);

      /** Leales **/
      page1.getCell("F22").value = parseInt(d11["E22"]);
      page1.getCell("G22").value = parseInt(d11["F22"]);
      page1.getCell("H22").value = parseFloat(d11["G22"]);
      page1.getCell("K22").value = parseInt(d11["J22"]);
      page1.getCell("L22").value = parseInt(d11["K22"]);
      page1.getCell("N22").value = parseInt(d11["M22"]);
      page1.getCell("O22").value = parseInt(d11["N22"]);

      /** Nunorco **/
      page1.getCell("F23").value = parseInt(d12["E23"]);
      page1.getCell("G23").value = parseInt(d12["F23"]);
      page1.getCell("H23").value = parseFloat(d12["G23"]);
      page1.getCell("K23").value = parseInt(d12["J23"]);
      page1.getCell("L23").value = parseInt(d12["K23"]);
      page1.getCell("N23").value = parseInt(d12["M23"]);
      page1.getCell("O23").value = parseInt(d12["N23"]);

      /** Santa Barbara **/
      page1.getCell("F24").value = parseInt(d13["E24"]);
      page1.getCell("G24").value = parseInt(d13["F24"]);
      page1.getCell("H24").value = parseFloat(d13["G24"]);
      page1.getCell("K24").value = parseInt(d13["J24"]);
      page1.getCell("L24").value = parseInt(d13["K24"]);
      page1.getCell("N24").value = parseInt(d13["M24"]);
      page1.getCell("O24").value = parseInt(d13["N24"]);

      /** Sta Rosa **/
      page1.getCell("F25").value = parseInt(d14["E25"]);
      page1.getCell("G25").value = parseInt(d14["F25"]);
      page1.getCell("H25").value = parseFloat(d14["G25"]);
      page1.getCell("K25").value = parseInt(d14["J25"]);
      page1.getCell("L25").value = parseInt(d14["K25"]);
      page1.getCell("N25").value = parseInt(d14["M25"]);
      page1.getCell("O25").value = parseInt(d14["N25"]);

      /** San Juan */
      page1.getCell("F26").value = parseInt(d15["E26"]);
      page1.getCell("G26").value = parseInt(d15["F26"]);
      page1.getCell("H26").value = parseFloat(d15["G26"]);
      page1.getCell("K26").value = parseInt(d15["J26"]);
      page1.getCell("L26").value = parseInt(d15["K26"]);
      page1.getCell("N26").value = parseInt(d15["M26"]);
      page1.getCell("O26").value = parseInt(d15["N26"]);
    }

    /** DATOS 2022 **/
    /** AGUILARES **/
    page1.getCell("S10").value = parseInt(dc1["R10"]);
    page1.getCell("T10").value = parseInt(dc1["S10"]);
    page1.getCell("U10").value = parseFloat(dc1["T10"]);
    page1.getCell("X10").value = parseInt(dc1["W10"]);
    page1.getCell("Y10").value = parseInt(dc1["X10"]);
    page1.getCell("AA10").value = parseInt(dc1["Z10"]);
    page1.getCell("AB10").value = parseInt(dc1["AA10"]);

    /** Cruz Alta **/
    page1.getCell("S11").value = parseInt(dc2["R11"]);
    page1.getCell("T11").value = parseInt(dc2["S11"]);
    page1.getCell("U11").value = parseFloat(dc2["T11"]);
    page1.getCell("X11").value = parseInt(dc2["W11"]);
    page1.getCell("Y11").value = parseInt(dc2["X11"]);
    page1.getCell("AA11").value = parseInt(dc2["Z11"]);
    page1.getCell("AB11").value = parseInt(dc2["AA11"]);

    /** La Florida **/
    page1.getCell("S12").value = parseInt(dc3["R12"]);
    page1.getCell("T12").value = parseInt(dc3["S12"]);
    page1.getCell("U12").value = parseFloat(dc3["T12"]);
    page1.getCell("X12").value = parseInt(dc3["W12"]);
    page1.getCell("Y12").value = parseInt(dc3["X12"]);
    page1.getCell("AA12").value = parseInt(dc3["Z12"]);
    page1.getCell("AB12").value = parseInt(dc3["AA12"]);

    /** Concepcion **/
    page1.getCell("S14").value = parseInt(dc4["R14"]);
    page1.getCell("T14").value = parseInt(dc4["S14"]);
    page1.getCell("U14").value = parseFloat(dc4["T14"]);
    page1.getCell("X14").value = parseInt(dc4["W14"]);
    if (anioDataComparativo === 2023)
      page1.getCell("X14").note = "FALTA AZ REFINADO";
    page1.getCell("Y14").value = parseInt(dc4["X14"]);
    page1.getCell("AA14").value = parseInt(dc4["Z14"]);
    page1.getCell("AB14").value = parseInt(dc4["AA14"]);

    /** Marapa **/
    page1.getCell("S15").value = parseInt(dc5["R15"]);
    page1.getCell("T15").value = parseInt(dc5["S15"]);
    page1.getCell("U15").value = parseFloat(dc5["T15"]);
    page1.getCell("X15").value = parseInt(dc5["W15"]);
    page1.getCell("Y15").value = parseInt(dc5["X15"]);
    page1.getCell("AA15").value = parseInt(dc5["Z15"]);
    page1.getCell("AB15").value = parseInt(dc5["AA15"]);

    /** Bella Vista **/
    page1.getCell("S17").value = parseInt(dc6["R17"]);
    page1.getCell("T17").value = parseInt(dc6["S17"]);
    page1.getCell("U17").value = parseFloat(dc6["T17"]);
    page1.getCell("X17").value = parseInt(dc6["W17"]);
    page1.getCell("Y17").value = parseInt(dc6["X17"]);
    page1.getCell("AA17").value = parseInt(dc6["Z17"]);
    page1.getCell("AB17").value = parseInt(dc6["AA17"]);

    /** Famailla **/
    page1.getCell("S18").value = parseInt(dc7["R18"]);
    page1.getCell("T18").value = parseInt(dc7["S18"]);
    page1.getCell("U18").value = parseFloat(dc7["T18"]);
    page1.getCell("X18").value = parseInt(dc7["W18"]);
    if (anioDataComparativo === 2023)
      page1.getCell("X18").note = "FALTA AZ REFINADO";
    page1.getCell("Y18").value = parseInt(dc7["X18"]);
    page1.getCell("AA18").value = parseInt(dc7["Z18"]);
    page1.getCell("AB18").value = parseInt(dc7["AA18"]);

    /** La Corona **/
    page1.getCell("S19").value = parseInt(dc8["R19"]);
    page1.getCell("T19").value = parseInt(dc8["S19"]);
    page1.getCell("U19").value = parseFloat(dc8["T19"]);
    page1.getCell("X19").value = parseInt(dc8["W19"]);
    page1.getCell("Y19").value = parseInt(dc8["X19"]);
    page1.getCell("AA19").value = parseInt(dc8["Z19"]);
    page1.getCell("AB19").value = parseInt(dc8["AA19"]);

    /** La Providencia **/
    page1.getCell("S20").value = parseInt(dc9["R20"]);
    page1.getCell("T20").value = parseInt(dc9["S20"]);
    page1.getCell("U20").value = parseFloat(dc9["T20"]);
    page1.getCell("X20").value = parseInt(dc9["W20"]);
    page1.getCell("Y20").value = parseInt(dc9["X20"]);
    if (anioDataComparativo === 2023)
      page1.getCell("Y20").note = "FALTA AZ ORGANICO Y OTOS AZ";
    page1.getCell("AA20").value = parseInt(dc9["Z20"]);
    page1.getCell("AB20").value = parseInt(dc9["AA20"]);

    /** La Trinidad **/
    page1.getCell("S21").value = parseInt(dc10["R21"]);
    page1.getCell("T21").value = parseInt(dc10["S21"]);
    page1.getCell("U21").value = parseFloat(dc10["T21"]);
    page1.getCell("X21").value = parseInt(dc10["W21"]);
    page1.getCell("Y21").value = parseInt(dc10["X21"]);
    page1.getCell("AA21").value = parseInt(dc10["Z21"]);
    page1.getCell("AB21").value = parseInt(dc10["AA21"]);

    /** Leales **/
    page1.getCell("S22").value = parseInt(dc11["R22"]);
    page1.getCell("T22").value = parseInt(dc11["S22"]);
    page1.getCell("U22").value = parseFloat(dc11["T22"]);
    page1.getCell("X22").value = parseInt(dc11["W22"]);
    if (anioDataComparativo === 2023)
      page1.getCell("X22").note = "FALTA AZ REFINADO";
    page1.getCell("Y22").value = parseInt(dc11["X22"]);
    page1.getCell("AA22").value = parseInt(dc11["Z22"]);
    page1.getCell("AB22").value = parseInt(dc11["AA22"]);

    /** Nunorco **/
    page1.getCell("S23").value = parseInt(dc12["R23"]);
    page1.getCell("T23").value = parseInt(dc12["S23"]);
    page1.getCell("U23").value = parseFloat(dc12["T23"]);
    page1.getCell("X23").value = parseInt(dc12["W23"]);
    page1.getCell("Y23").value = parseInt(dc12["X23"]);
    page1.getCell("AA23").value = parseInt(dc12["Z23"]);
    page1.getCell("AB23").value = parseInt(dc12["AA23"]);

    /** Santa Barbara **/
    page1.getCell("S24").value = parseInt(dc13["R24"]);
    page1.getCell("T24").value = parseInt(dc13["S24"]);
    page1.getCell("U24").value = parseFloat(dc13["T24"]);
    page1.getCell("X24").value = parseInt(dc13["W24"]);
    page1.getCell("Y24").value = parseInt(dc13["X24"]);
    page1.getCell("AA24").value = parseInt(dc13["Z24"]);
    page1.getCell("AB24").value = parseInt(dc13["AA24"]);

    /** Sta Rosa **/
    page1.getCell("S25").value = parseInt(dc14["R25"]);
    page1.getCell("T25").value = parseInt(dc14["S25"]);
    page1.getCell("U25").value = parseFloat(dc14["T25"]);
    page1.getCell("X25").value = parseInt(dc14["W25"]);
    page1.getCell("Y25").value = parseInt(dc14["X25"]);
    page1.getCell("AA25").value = parseInt(dc14["Z25"]);
    page1.getCell("AB25").value = parseInt(dc14["AA25"]);

    /** San Juan **/
    page1.getCell("S26").value = parseInt(dc15["R26"]);
    page1.getCell("T26").value = parseInt(dc15["S26"]);
    page1.getCell("U26").value = parseFloat(dc15["T26"]);
    page1.getCell("X26").value = parseInt(dc15["W26"]);
    page1.getCell("Y26").value = parseInt(dc15["X26"]);
    page1.getCell("AA26").value = parseInt(dc15["Z26"]);
    page1.getCell("AB26").value = parseInt(dc15["AA26"]);

    /*******************/

    /**** PRODUCCION AZUCAR DISCRIMINADA ****/
    page1.getCell("C44").value = parseInt(d1["J10"]);
    page1.getCell("D44").value = parseInt(d1["D43"]);
    page1.getCell("E44").value = parseFloat(d1["K10"]);
    page1.getCell("F44").value = parseInt(d1["F43"]);
    page1.getCell("G44").value = parseInt(d1["G43"]);

    page1.getCell("C45").value = parseInt(d6["J17"]);
    page1.getCell("D45").value = parseInt(d6["D45"]);
    page1.getCell("E45").value = parseFloat(d6["K17"]);
    page1.getCell("F45").value = parseInt(d6["F45"]);
    page1.getCell("G45").value = parseInt(d6["G45"]);

    page1.getCell("C46").value = parseInt(d4["C46"]);
    page1.getCell("D46").value = parseInt(d4["D46"]);
    page1.getCell("E46").value = parseFloat(d4["K14"]);
    page1.getCell("F46").value = parseInt(d4["F46"]);
    page1.getCell("G46").value = parseInt(d4["G46"]);

    page1.getCell("C47").value = parseInt(d2["J11"]);
    page1.getCell("D47").value = parseInt(d2["D47"]);
    page1.getCell("E47").value = parseFloat(d2["K11"]);
    page1.getCell("F47").value = parseInt(d2["F47"]);
    page1.getCell("G47").value = parseInt(d2["G47"]);

    page1.getCell("C48").value = parseInt(d7["C48"]);
    page1.getCell("D48").value = parseInt(d7["D48"]);
    page1.getCell("E48").value = parseFloat(d7["K18"]);
    page1.getCell("F48").value = parseInt(d7["F48"]);
    page1.getCell("G48").value = parseInt(d7["G48"]);

    page1.getCell("C49").value = parseInt(d8["J19"]);
    page1.getCell("D49").value = parseInt(d8["D49"]);
    page1.getCell("E49").value = parseFloat(d8["K19"]);
    page1.getCell("F49").value = parseInt(d8["F49"]);
    page1.getCell("G49").value = parseInt(d8["G49"]);

    page1.getCell("C50").value = parseInt(d3["J12"]);
    page1.getCell("D50").value = parseInt(d3["D50"]);
    page1.getCell("E50").value = parseFloat(d3["K12"]);
    page1.getCell("F50").value = parseInt(d3["F50"]);
    page1.getCell("G50").value = parseInt(d3["G50"]);

    page1.getCell("C51").value = parseInt(d9["J20"]);
    page1.getCell("D51").value = parseInt(d9["D51"]);
    page1.getCell("E51").value = parseFloat(d9["E51"]);
    page1.getCell("F51").value = parseInt(d9["F51"]);
    page1.getCell("G51").value = parseInt(d9["G51"]);

    page1.getCell("C52").value = parseInt(d10["J21"]);
    page1.getCell("D52").value = parseInt(d10["D52"]);
    page1.getCell("E52").value = parseFloat(d10["K21"]);
    page1.getCell("F52").value = parseInt(d10["F52"]);
    page1.getCell("G52").value = parseInt(d10["G52"]);

    page1.getCell("C53").value = parseInt(d11["C53"]);
    page1.getCell("D53").value = parseInt(d11["D53"]);
    page1.getCell("E53").value = parseFloat(d11["K22"]);
    page1.getCell("F53").value = parseInt(d11["F53"]);
    page1.getCell("G53").value = parseInt(d11["G53"]);

    page1.getCell("C54").value = parseInt(d5["J15"]);
    page1.getCell("D54").value = parseInt(d5["D54"]);
    page1.getCell("E54").value = parseFloat(d5["K15"]);
    page1.getCell("F54").value = parseInt(d5["F54"]);
    page1.getCell("G54").value = parseInt(d5["G54"]);

    page1.getCell("C55").value = parseInt(d12["J23"]);
    page1.getCell("D55").value = parseInt(d12["D55"]);
    page1.getCell("E55").value = parseFloat(d12["K23"]);
    page1.getCell("F55").value = parseInt(d12["F55"]);
    page1.getCell("G55").value = parseInt(d12["G55"]);

    page1.getCell("C56").value = parseInt(d13["J24"]);
    page1.getCell("D56").value = parseInt(d13["D56"]);
    page1.getCell("E56").value = parseFloat(d13["K24"]);
    page1.getCell("F56").value = parseInt(d13["F56"]);
    page1.getCell("G56").value = parseInt(d13["G56"]);

    page1.getCell("C57").value = parseInt(d14["J25"]);
    page1.getCell("D57").value = parseInt(d14["D57"]);
    page1.getCell("E57").value = parseFloat(d14["K25"]);
    page1.getCell("F57").value = parseInt(d14["F57"]);
    page1.getCell("G57").value = parseInt(d14["G57"]);
    /************/

    /****** PRODUCCION DE ALCOHOL ******/
    page1.getCell("L44").value = parseInt(d1["N10"]);
    page1.getCell("O44").value = parseInt(d1["O44"]);
    page1.getCell("R44").value = parseFloat(d1["R44"]);

    page1.getCell("L45").value = parseInt(d6["N17"]);
    page1.getCell("O45").value = parseInt(d6["O45"]);
    page1.getCell("R45").value = parseFloat(d6["R45"]);

    page1.getCell("L46").value = parseInt(d4["N14"]);
    page1.getCell("O46").value = parseInt(d4["O46"]);
    page1.getCell("R46").value = parseFloat(d4["R46"]);

    page1.getCell("L47").value = parseInt(d2["N11"]);
    page1.getCell("O47").value = parseInt(d2["O47"]);
    page1.getCell("R47").value = parseFloat(d2["R47"]);

    page1.getCell("L48").value = parseInt(d7["N18"]);
    page1.getCell("O48").value = parseInt(d7["O48"]);
    page1.getCell("R48").value = parseFloat(d7["R48"]);

    page1.getCell("L49").value = parseInt(d8["N19"]);
    page1.getCell("O49").value = parseInt(d8["O49"]);
    page1.getCell("R49").value = parseFloat(d8["R49"]);

    page1.getCell("L50").value = parseInt(d3["N12"]);
    page1.getCell("O50").value = parseInt(d3["O50"]);
    page1.getCell("R50").value = parseFloat(d3["R50"]);

    page1.getCell("L51").value = parseInt(d9["N20"]);
    page1.getCell("O51").value = parseInt(d9["O51"]);
    page1.getCell("R51").value = parseFloat(d9["R51"]);

    page1.getCell("L52").value = parseInt(d10["N21"]);
    page1.getCell("O52").value = parseInt(d10["O52"]);
    page1.getCell("R52").value = parseFloat(d10["R52"]);

    page1.getCell("L53").value = parseInt(d11["N22"]);
    page1.getCell("O53").value = parseInt(d11["O53"]);
    page1.getCell("R53").value = parseFloat(d11["R53"]);

    page1.getCell("L54").value = parseInt(d5["N15"]);
    page1.getCell("O54").value = parseInt(d5["O54"]);
    page1.getCell("R54").value = parseFloat(d5["R54"]);

    page1.getCell("L55").value = parseInt(d12["N23"]);
    page1.getCell("O55").value = parseInt(d12["O55"]);
    page1.getCell("R55").value = parseFloat(d12["R55"]);

    page1.getCell("L56").value = parseInt(d13["N24"]);
    page1.getCell("O56").value = parseInt(d13["O56"]);
    page1.getCell("R56").value = parseFloat(d13["R56"]);

    page1.getCell("L57").value = parseInt(d14["N25"]);
    page1.getCell("O57").value = parseInt(d14["O57"]);
    page1.getCell("R57").value = parseFloat(d14["R57"]);

    /************/

    /**COLUMNA RTO CMB */
    for (let i = 10; i <= 25; i++) {
      if (page1.getCell(i, 6).value === 0) {
        page1.getCell(i, 9).value = 0;
        page1.getCell(i, 10).value = 0;
      } else {
        page1.getCell(i, 9).value = { formula: `=H${i}/F${i}*100`, result: 7 };
        page1.getCell(i, 10).value = { formula: `=H${i}/G${i}*100`, result: 7 };
      }
    }
    for (let i = 10; i <= 25; i++) {
      if (page1.getCell(i, 19).value === 0) {
        page1.getCell(i, 22).value = 0;
        page1.getCell(i, 23).value = 0;
      } else {
        page1.getCell(i, 22).value = { formula: `=U${i}/S${i}*100`, result: 7 };
        page1.getCell(i, 23).value = { formula: `=U${i}/T${i}*100`, result: 7 };
      }
    }
    page1.pageSetup.printArea = 'A1:AB63';
    page1.pageSetup.scale= 100
    page1.pageSetup.margins = {
      left: 0.1, right: 0.1,
      top: 0.75, bottom: 0.2,
      header: 0.2, footer: 0.1
    };
    try {
      const buffer = await workbook.xlsx.writeBuffer();
      const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const EXCEL_EXTENSION = ".xlsx";
      const blob = new Blob([buffer], { type: fileType });
      if (navigator.msSaveBlog) {
        navigator.msSaveBlog(
          blob,
          `Parte diario directorio - ${dateFormat}` + EXCEL_EXTENSION
          );
          window.location.href='/admin/home'
      } else {
        const link = document.createElement("a");
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute(
            "download",
            `Parte diario directorio - ${dateFormat}` + EXCEL_EXTENSION
          );
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        window.location.href='/admin/home'
      }
      setLoadingDownload(false);
      setDataImport(null);
      setDataImportComparativa(null);
    } catch (error) {
      console.log(error);
    }

    // const workbook1 = new ExcelJS.Workbook();

    // // Agregar una hoja al libro
    // const worksheet = workbook1.addWorksheet('Hoja 1');

    // // Agregar una imagen a una celda
    // const image = workbook1.addImage({
    //     filename: 'ruta/a/la/imagen.png',
    //     extension: 'png',
    // });

    // worksheet.addImage(image, {
    //     tl: { col: 2, row: 2 },
    //     br: { col: 6, row: 6 },
    // });

    // // Crear el archivo Excel
    // const buffer = await workbook1.xlsx.writeBuffer();

    // // Descargar el archivo Excel
    // saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'archivo_excel.xlsx');
  }
};
