import ExcelJS from 'exceljs'
import moment from 'moment'
import { ingenios } from '../utils/seeders'
import dataConstante from './dataConstanteParteDiario.json'
import { getDataPartesDiariosBE1 } from '../utils/queryAPI/partesDiariosQuery'

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
  fechasFinIngeniosComparativa,
  setDataImport,
  setDataImportComparativa,
) => {
  setLoadingDownload(true)
  const parteDiarioData = dataImport ? dataImport : undefined
  const parteDiarioDataComparativa = dataImportComparativa
    ? dataImportComparativa
    : undefined
  if (!parteDiarioData || !parteDiarioDataComparativa) {
    setBanderaDataNull(true)
    setTimeout(() => {
      setBanderaDataNull(false)
    }, 2000)
  } else {
    const workbook = new ExcelJS.Workbook()
    /** Fecha Hasta parte Dairio **/
    const date = dataEnd !== null ? new Date(dataEnd) : new Date()
    /** Anio Comparativo **/
    const anioData = date.getFullYear() - 1
    /** Fecha hasta comparativa **/
    const dateComparativa = new Date(date)
    dateComparativa.setFullYear(anioData)
    /** Formatos **/
    const dateFormat = moment(date).format('DD-MM-YYYY')
    const dateComparativaFormat = moment(dateComparativa).format('DD-MM-YYYY')
    workbook.creator = `${dataUser?.name} ${dataUser?.surname}`
    workbook.created = date
    workbook.modified = date
    workbook.views = [
      {
        x: 0,
        y: 0,
        width: 10000,
        height: 20000,
        firstSheet: 0,
        activeTab: 0,
        visibility: 'visible',
      },
    ]
    const page1 = workbook.addWorksheet('Parte Diario Directorio', {
      pageSetup: {
        paperSize: 9,
        orientation: 'landscape',
        printArea: 'A1:AA63',
        scale: 75,
        fitToPage: true,
        fitToWidth: 1,
      },
      properties: { tabColor: { argb: '0000B2' } },
    })
    page1.headerFooter.differentFirst = true

    /***** FORMATO CONDICIONAL *****/

    const rulesFgRed = [
      {
        type: 'cellIs',
        operator: 'lessThan',
        formulae: ['0'],
        style: {
          fill: {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'CB6B6B' },
          },
          font: {
            color: { argb: 'CB6B6B' },
          },
        },
      },
    ]
    page1.addConditionalFormatting({
      ref: 'E31:N32',
      rules: rulesFgRed,
    })

    /***** ALINEACIONES *****/
    const alignStart = {
      wrapText: true,
      horizontal: 'left',
      vertical: 'middle',
    }
    const alignCenter = {
      wrapText: true,
      horizontal: 'center',
      vertical: 'middle',
    }
    // const alignEnd = {
    //   wrapText: true,
    //   horizontal: 'right',
    //   vertical: 'middle',
    // }

    /***** ESTILOS GENERALES *****/
    const functionFont = (name, bold, size) => {
      return { name, bold, size }
    }
    page1.getColumn(1).width = '15'
    for (let i = 2; i <= 27; i++) {
      page1.getColumn(i).width = '15'
    }

    for (let i = 44; i <= 57; i++) {
      page1.getRow(i).height = '50'
    }

    /***** RELLENO *****/
    page1.getCell('A6').fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'BFBFBF' },
    }

    page1.getCell('A6').fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'BFBFBF' },
    }

    const bgGris = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'BFBFBF' },
    }
    const bgVerde = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'E2EFDA' },
    }
    const bgAzul = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'D9E1F2' },
    }

    for (let i = 5; i <= 14; i++) {
      page1.getCell(7, i).fill = bgVerde
      page1.getCell(9, i).fill = bgVerde
    }

    for (let i = 18; i <= 27; i++) {
      page1.getCell(7, i).fill = bgAzul
      page1.getCell(9, i).fill = bgAzul
    }
    for (let i = 1; i < 28; i++) {
      page1.getCell(28, i).fill = bgAzul
    }
    for (let i = 1; i < 28; i++) {
      page1.getCell(7, i).fill = bgGris
    }

    /***** FILAS *****/
    page1.getRow(6).alignment = alignCenter
    page1.getRow(7).alignment = alignCenter
    page1.getRow(7).font = functionFont('Calibri', true, 11)
    page1.getRow(8).alignment = alignCenter
    page1.getRow(9).alignment = alignCenter
    page1.getRow(9).font = functionFont('Calibri', true, 11)
    page1.getRow(13).font = functionFont('Calibri', true, 11)
    page1.getRow(16).font = functionFont('Calibri', true, 11)
    page1.getRow(27).font = functionFont('Arial', true, 16)
    page1.getRow(31).font = functionFont('Arial Narrow', true, 12)
    page1.getRow(31).alignment = alignCenter
    page1.getRow(32).alignment = alignCenter
    page1.getRow(32).font = functionFont('Arial Narrow', true, 14)
    page1.getRow(42).font = functionFont('Calibri', true, 14)
    page1.getRow(42).alignment = alignStart
    for(let i =1; i<=20; i++) {
      page1.getCell(44, i).fill = bgGris
      page1.getCell(47, i).fill = bgGris
      page1.getCell(51, i).fill = bgGris
      page1.getCell(55, i).fill = bgGris
    }
    // page1.getRow(44).fill = bgGris
    // page1.getRow(47).fill = bgGris
    // page1.getRow(51).fill = bgGris
    // page1.getRow(55).fill = bgGris
    page1.getRow(58).font = functionFont('Calibri', true, 22)

    /***** BORDES *****/
    const borders = (t1, t2, l1, l2, b1, b2, r1, r2) => {
      return {
        top: { style: t1, color: { argb: t2 } },
        left: { style: l1, color: { argb: l2 } },
        bottom: { style: b1, color: { argb: b2 } },
        right: { style: r1, color: { argb: r2 } },
      }
    }

    for (let i = 1; i < 28; i++) {
      page1.getCell(1, i).border = borders(
        'medium',
        '000000',
        'medium',
        '000000',
        'medium',
        '000000',
        'medium',
        '000000'
      )
    }

    page1.getRow(3).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(5).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(6).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(13).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(7).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'thin',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(9).border = borders(
      'thin',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(16).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(27).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(28).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(30).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(31).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(32).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(34).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(35).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(36).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(37).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )
    page1.getRow(39).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )

    for (let i = 40; i <= 59; i++) {
      page1.getRow(i).border = borders(
        'medium',
        '000000',
        'medium',
        '000000',
        'medium',
        '000000',
        'medium',
        '000000'
      )
    }

    for (let i = 1; i <= 27; i++) {
      page1.getColumn(i).border = {
        top: { style: 'thin', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'thin', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      }
    }
    for (let i = 5; i <= 13; i++) {
      page1.getColumn(i).border = {
        top: { style: 'thin', color: { argb: '000000' } },
        left: { style: 'thin', color: { argb: '000000' } },
        bottom: { style: 'thin', color: { argb: '000000' } },
        right: { style: 'thin', color: { argb: '000000' } },
      }
    }

    /***** FORMATO DE NUMEROS *****/
    for (let i = 5; i <= 7; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }
    page1.getColumn(8).numFmt = '0.##0'
    page1.getColumn(9).numFmt = '0.##0'
    for (let i = 10; i <= 14; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }
    for (let i = 18; i <= 20; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }
    page1.getColumn(21).numFmt = '#.##0'
    page1.getColumn(22).numFmt = '#.##0'
    for (let i = 23; i <= 27; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }

    for (let i = 5; i <= 14; i++) {
      page1.getCell(32, i).numFmt = '0.000%'
    }

    page1.getCell('T32').numFmt = '#.##%'
    // page1.getCell('G5').numFmt = 'DD/MM/YYYY'
    page1.getCell('F34').numFmt = '#,##0'
    page1.getCell('F35').numFmt = '#,##0'
    page1.getCell('F36').numFmt = '0.00'
    page1.getCell('F37').numFmt = '0.00'
    page1.getCell('L34').numFmt = '#,##0.##0'
    page1.getCell('V34').numFmt = '#,##0'
    page1.getCell('V35').numFmt = '#,##0'
    page1.getCell('V36').numFmt = '0.00'
    page1.getCell('V37').numFmt = '0.00'


    /** CELDAS ENCABEZADOS **/
    page1.mergeCells('A1:G4')
    page1.getCell('G4').value = 'Icono IPAAT'
    page1.getCell('G4').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'medium', color: { argb: '000000' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'medium', color: { argb: '000000' } },
    }

    page1.mergeCells('H1:W2')
    page1.getCell('W2').value = `COMPARATIVO ZAFRA ${date.getFullYear()}/${
      date.getFullYear() - 1
    }`
    page1.getCell('W2').alignment = { horizontal: 'center' }
    page1.getCell('W2').font = { name: 'Bodoni MT', bold: true, size: 24 }

    page1.mergeCells('H3:W4')
    page1.getCell('W4').value = `DATOS PRODUCTIVOS SEGÚN PARTE DIARIO ${Math.ceil(dataDiasZafra)}`
    page1.getCell('W4').font = { name: 'Calibri', bold: true, size: 16 }
    page1.getCell('W4').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    }

    page1.mergeCells('X1:AA4')
    page1.getCell('AA4').value = 'Icono Tucuman'

    page1.mergeCells('A5:F5')
    page1.getCell('F5').value = 'Fecha de Reunión de Directorio'
    page1.getCell('F5').alignment = { horizontal: 'start' }
    page1.getCell('F5').font = { name: 'Calirbi', bold: false, size: 12 }

    // page1.getCell('G5').value = new Date()
    // page1.getCell('G5').alignment = { horizontal: 'center' }
    // page1.getCell('G5').font = { name: 'Calirbi', bold: true, size: 12 }

    page1.mergeCells('H5:AA5')

    /** ENCABEZADOS Y COLUMNAS DE TABLA **/
    page1.mergeCells('A6:B9')
    page1.getCell('A9').value = 'INGENIOS DE LA PROVINCIA DE TUCUMÁN'
    page1.getCell('A9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells('C6:N6')
    page1.getCell('N6').value = `ZAFRA ${date.getFullYear()}`
    page1.getCell('N6').font = { name: 'Bodoni MT', bold: true, size: 18 }

    page1.mergeCells('O6:AA6')
    page1.getCell('AA6').value = `ZAFRA ${date.getFullYear() - 1}`
    page1.getCell('AA6').font = { name: 'Bodoni MT', bold: true, size: 18 }

    /** Zafra 2023 **/
    // page1.mergeCells('B7:B9')
    // page1.getCell('B9').value = 'Fechas Probables de Inicio'
    // page1.getCell('B9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells('C7:C9')
    page1.getCell('C9').value = `Inicio de Zafra ${date.getFullYear()}`
    page1.getCell('C9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells('D7:D9')
    page1.getCell('D9').value = 'N° Días de avance'
    page1.getCell('D9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells('E7:E8')
    page1.getCell('E8').value = 'Caña Molida Bruta (C.M.B.)'
    page1.mergeCells('F7:F8')
    page1.getCell('F8').value = 'Caña Molida Neta (C.M.N.) '
    page1.mergeCells('G7:G8')
    page1.getCell('G8').value = 'Azúcar Equivalente'
    page1.mergeCells('H7:H8')
    page1.getCell('H8').value = `Rto % CMB Total `
    page1.mergeCells('I7:I8')
    page1.getCell('I8').value = `Rto % CMN Total`
    page1.mergeCells('J7:J8')
    page1.getCell('J8').value = 'Total Azúcar Blanco'
    page1.mergeCells('K7:K8')
    page1.getCell('K8').value = 'Total Azúcar Crudo'
    page1.mergeCells('L7:L8')
    page1.getCell('L8').value = 'Total Azúcar Elaborada'
    page1.mergeCells('M7:M8')
    page1.getCell('M8').value = 'MELAZA'
    page1.mergeCells('N7:N8')
    page1.getCell('N8').value = 'ALCOHOL TOTAL HIDRATADO'
    page1.getCell('E9').value = '[Tn]'
    page1.getCell('F9').value = '[Tn]'
    page1.getCell('G9').value = '[Tn]'
    page1.getCell('H9').value = '%'
    page1.getCell('I9').value = '%'
    page1.getCell('J9').value = '[Tn]'
    page1.getCell('K9').value = '[Tn]'
    page1.getCell('L9').value = '[Tn]'
    page1.getCell('M9').value = '[Tn]'
    page1.getCell('N9').value = '[m3]'

    /** Zafra 2022 **/
    page1.mergeCells('O7:O9')
    page1.getCell('O9').value = `Inicio de Zafra ${date.getFullYear() - 1}`
    page1.getCell('O9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells('P7:P9')
    page1.getCell('P9').value = 'N° Días de Avance'
    page1.getCell('P9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells('Q7:Q9')
    page1.getCell('Q9').value = `Fin de Zafra ${date.getFullYear() - 1}`
    page1.getCell('Q9').font = { name: 'Calibri', bold: true, size: 11 }

    page1.mergeCells('R7:R8')
    page1.getCell('R8').value = 'Caña Molida Bruta (C.M.B.)'
    page1.mergeCells('S7:S8')
    page1.getCell('S8').value = 'Caña Molida Neta (C.M.N.) '
    page1.mergeCells('T7:T8')
    page1.getCell('T8').value = 'Azúcar Equivalente'
    page1.mergeCells('U7:U8')
    page1.getCell('U8').value = `Rto % CMB Total `
    page1.mergeCells('V7:V8')
    page1.getCell('V8').value = `Rto % CMN Total`
    page1.mergeCells('W7:W8')
    page1.getCell('W8').value = 'Total Azúcar Blanco'
    page1.mergeCells('X7:X8')
    page1.getCell('X8').value = 'Total Azúcar Crudo'
    page1.mergeCells('Y7:Y8')
    page1.getCell('Y8').value = 'Total Azúcar Elaborada'
    page1.mergeCells('Z7:Z8')
    page1.getCell('Z8').value = 'MELAZA'
    page1.mergeCells('AA7:AA8')
    page1.getCell('AA8').value = 'ALCOHOL TOTAL HIDRATADO'
    page1.getCell('R9').value = '[Tn]'
    page1.getCell('S9').value = '[Tn]'
    page1.getCell('T9').value = '[Tn]'
    page1.getCell('U9').value = '%'
    page1.getCell('V9').value = '%'
    page1.getCell('W9').value = '[Tn]'
    page1.getCell('X9').value = '[Tn]'
    page1.getCell('Y9').value = '[Tn]'
    page1.getCell('Z9').value = '[Tn]'
    page1.getCell('AA9').value = '[m3]'

    /** COLUMNA TABLA - INGENIOS **/
    for (let i = 10; i <= 26; i++) {
      page1.mergeCells(`A${i}:B${i}`)
    }
    page1.getCell('A10').value = 'Aguilares'
    page1.getCell('A10').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A11').value = 'Cruz Alta'
    page1.getCell('A11').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A12').value = 'La Florida'
    page1.getCell('A12').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A13').value = 'Gpo. Los Balcanes'
    page1.getCell('A14').value = 'Concepción'
    page1.getCell('A14').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A15').value = 'Marapa'
    page1.getCell('A15').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A16').value = 'Gpo. CASS(*)'
    page1.getCell('A17').value = 'Bella Vista'
    page1.getCell('A17').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A18').value = 'Famaillá'
    page1.getCell('A18').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A19').value = 'La Corona'
    page1.getCell('A19').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A20').value = 'La Providencia'
    page1.getCell('A20').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A21').value = 'La Trinidad'
    page1.getCell('A21').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A22').value = 'Leales'
    page1.getCell('A22').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A23').value = 'Ñuñorco'
    page1.getCell('A23').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A24').value = 'Santa Bárbara'
    page1.getCell('A24').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A25').value = 'Santa Rosa'
    page1.getCell('A25').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A26').value = 'San Juan'
    page1.getCell('A26').font = { name: 'Calibri', bold: false, size: 11 }
    page1.getCell('A27').value = 'TOTALES'

    /** COLUMNAS FECHA PROBABLE INICIO - INGENIOS **/

    /** COLUMNA FECHA INICIO 2023**/

    page1.getCell('C10').value = fechasInicioIngenios.Cell10
    page1.getCell('C10').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C11').value = fechasInicioIngenios.Cell11
    page1.getCell('C11').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C12').value = fechasInicioIngenios.Cell12
    page1.getCell('C12').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C14').value = fechasInicioIngenios.Cell14
    page1.getCell('C14').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C15').value = fechasInicioIngenios.Cell15
    page1.getCell('C15').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C17').value = fechasInicioIngenios.Cell17
    page1.getCell('C17').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C18').value = fechasInicioIngenios.Cell18
    page1.getCell('C18').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C19').value = fechasInicioIngenios.Cell19
    page1.getCell('C19').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C20').value = fechasInicioIngenios.Cell20
    page1.getCell('C20').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C21').value = fechasInicioIngenios.Cell21
    page1.getCell('C21').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C22').value = fechasInicioIngenios.Cell22
    page1.getCell('C22').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C23').value = fechasInicioIngenios.Cell23
    page1.getCell('C23').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C24').value = fechasInicioIngenios.Cell24
    page1.getCell('C24').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('C25').value = fechasInicioIngenios.Cell25
    page1.getCell('C25').font = { name: 'Calibri', bold: true, size: 11 }

    /** COLUMNA DIAS DE AVANCE 2023**/
    page1.getCell('D10').value = { formula: '=if(C10="","",C28-C10+1)', result: 7 }
    page1.getCell('D10').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D11').value = { formula: '=if(C11="","",C28-C11+1)', result: 7 }
    page1.getCell('D11').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D12').value = { formula: '=if(C12="","",C28-C12+1)', result: 7 }
    page1.getCell('D12').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D13').value = ''
    page1.getCell('D14').value = { formula: '=if(C14="","",C28-C14+1)', result: 7 }
    page1.getCell('D14').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D15').value = { formula: '=if(C15="","",C28-C15+1)', result: 7 }
    page1.getCell('D15').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D16').value = ''
    page1.getCell('D17').value = { formula: '=if(C17="","",C28-C17+1)', result: 7 }
    page1.getCell('D17').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D18').value = { formula: '=if(C18="","",C28-C18+1)', result: 7 }
    page1.getCell('D18').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D19').value = { formula: '=if(C19="","",C28-C19+1)', result: 7 }
    page1.getCell('D19').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D20').value = { formula: '=if(C20="","",C28-C20+1)', result: 7 }
    page1.getCell('D20').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D21').value = { formula: '=if(C21="","",C28-C21+1)', result: 7 }
    page1.getCell('D21').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D22').value = { formula: '=if(C22="","",C28-C22+1)', result: 7 }
    page1.getCell('D22').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D23').value = { formula: '=if(C23="","",C28-C23+1)', result: 7 }
    page1.getCell('D23').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D24').value = { formula: '=if(C24="","",C28-C24+1)', result: 7 }
    page1.getCell('D24').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('D25').value = { formula: '=if(C25="","",C28-C25+1)', result: 7 }
    page1.getCell('D25').font = { name: 'Calibri', bold: true, size: 11 }

    /** COLUMNA FECHA INICIO 2022 **/

    page1.getCell('O10').value = fechasInicioIngeniosComparativa.Cell10
    page1.getCell('O10').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O11').value = fechasInicioIngeniosComparativa.Cell11
    page1.getCell('O11').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O12').value = fechasInicioIngeniosComparativa.Cell12
    page1.getCell('O12').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O14').value = fechasInicioIngeniosComparativa.Cell14
    page1.getCell('O14').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O15').value = fechasInicioIngeniosComparativa.Cell15
    page1.getCell('O16').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O17').value = fechasInicioIngeniosComparativa.Cell17
    page1.getCell('O17').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O18').value = fechasInicioIngeniosComparativa.Cell18
    page1.getCell('O18').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O19').value = fechasInicioIngeniosComparativa.Cell19
    page1.getCell('O19').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O20').value = fechasInicioIngeniosComparativa.Cell20
    page1.getCell('O20').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O21').value = fechasInicioIngeniosComparativa.Cell21
    page1.getCell('O21').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O22').value = fechasInicioIngeniosComparativa.Cell22
    page1.getCell('O22').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O23').value = fechasInicioIngeniosComparativa.Cell23
    page1.getCell('O23').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O24').value = fechasInicioIngeniosComparativa.Cell24
    page1.getCell('O24').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('O25').value = fechasInicioIngeniosComparativa.Cell25
    page1.getCell('O25').font = { name: 'Calibri', bold: true, size: 11 }

    /** COLUMNA FIN DE ZAFRA 2022 **/
    page1.getCell('Q10').value =
      fechasFinIngeniosComparativa?.CellQ10
    page1.getCell('Q10').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q11').value =
      fechasFinIngeniosComparativa?.CellQ11
    page1.getCell('Q11').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q12').value =
      fechasFinIngeniosComparativa?.CellQ12
    page1.getCell('Q12').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q14').value =
      fechasFinIngeniosComparativa?.CellQ14
    page1.getCell('Q14').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q15').value =
      fechasFinIngeniosComparativa?.CellQ15
    page1.getCell('Q16').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q17').value =
      fechasFinIngeniosComparativa?.CellQ17
    page1.getCell('Q17').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q18').value =
      fechasFinIngeniosComparativa?.CellQ18
    page1.getCell('Q18').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q19').value =
      fechasFinIngeniosComparativa?.CellQ19
    page1.getCell('Q19').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q20').value =
      fechasFinIngeniosComparativa?.CellQ20
    page1.getCell('Q20').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q21').value =
      fechasFinIngeniosComparativa?.CellQ21
    page1.getCell('Q21').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q22').value =
      fechasFinIngeniosComparativa?.CellQ22
    page1.getCell('Q22').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q23').value =
      fechasFinIngeniosComparativa?.CellQ23
    page1.getCell('Q23').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q24').value =
      fechasFinIngeniosComparativa?.CellQ24
    page1.getCell('Q24').font = { name: 'Calibri', bold: true, size: 11 }

    page1.getCell('Q25').value =
    fechasFinIngeniosComparativa?.CellQ25
    page1.getCell('Q25').font = { name: 'Calibri', bold: true, size: 11 }
    /************/

    /** COLUMNA DIAS DE AVANCE 2022**/
    page1.getCell('P10').value = { formula: '=if(Q10="",Q28-O10+1,Q10-O10+1)', result: 7 }
    page1.getCell('P10').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P11').value = { formula: '=if(Q11="",Q28-O11+1,Q11-O11+1)', result: 7 }
    page1.getCell('P11').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P12').value = { formula: '=if(Q12="",Q28-O12+1,Q12-O12+1)', result: 7 }
    page1.getCell('P12').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P13').value = ''
    page1.getCell('P14').value = { formula: '=if(Q14="",Q28-O14+1,Q14-O14+1)', result: 7 }
    page1.getCell('P14').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P15').value = { formula: '=if(Q15="",Q28-O15+1,Q15-O15+1)', result: 7 }
    page1.getCell('P15').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P16').value = ''
    page1.getCell('P17').value = { formula: '=if(Q17="",Q28-O17+1,Q17-O17+1)', result: 7 }
    page1.getCell('P17').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P18').value = { formula: '=if(Q18="",Q28-O18+1,Q18-O18+1)', result: 7 }
    page1.getCell('P18').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P19').value = { formula: '=if(Q19="",Q28-O19+1,Q19-O19+1)', result: 7 }
    page1.getCell('P19').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P20').value = { formula: '=if(Q20="",Q28-O20+1,Q20-O20+1)', result: 7 }
    page1.getCell('P20').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P21').value = { formula: '=if(Q21="",Q28-O21+1,Q21-O21+1)', result: 7 }
    page1.getCell('P21').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P22').value = { formula: '=if(Q22="",Q28-O22+1,Q22-O22+1)', result: 7 }
    page1.getCell('P22').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P23').value = { formula: '=if(Q23="",Q28-O23+1,Q23-O23+1)', result: 7 }
    page1.getCell('P23').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P24').value = { formula: '=if(Q24="",Q28-O24+1,Q24-O24+1)', result: 7 }
    page1.getCell('P24').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('P25').value = { formula: '=if(Q25="",Q28-O25+1,Q25-O25+1)', result: 7 }
    page1.getCell('P25').font = { name: 'Calibri', bold: true, size: 11 }
    /*****************/

    /**TOTAL AZUCAR **/
    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 12).value = { formula: `SUM(J${i}:K${i})`, result: 7 }
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 12).value = { formula: `SUM(J${i}:K${i})`, result: 7 }
    }
    for (let i = 17; i <= 25; i++) {
      page1.getCell(i, 12).value = { formula: `SUM(J${i}:K${i})`, result: 7 }
    }

    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 25).value = { formula: `SUM(W${i}:X${i})`, result: 7 }
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 25).value = { formula: `SUM(W${i}:X${i})`, result: 7 }
    }
    for (let i = 17; i <= 25; i++) {
      page1.getCell(i, 25).value = { formula: `SUM(W${i}:X${i})`, result: 7 }
    }

    /** FILA LOS BALCANES **/
    page1.getCell('E13').value = { formula: '=SUM(E10:E12)', result: 7 }
    page1.getCell('F13').value = { formula: '=SUM(F10:F12)', result: 7 }
    page1.getCell('G13').value = { formula: '=SUM(G10:G12)', result: 7 }
    page1.getCell('J13').value = { formula: '=SUM(J10:J12)', result: 7 }
    page1.getCell('K13').value = { formula: '=SUM(K10:K12)', result: 7 }
    page1.getCell('L13').value = { formula: '=SUM(L10:L12)', result: 7 }
    page1.getCell('M13').value = { formula: '=SUM(M10:M12)', result: 7 }
    page1.getCell('N13').value = { formula: '=SUM(N10:N12)', result: 7 }

    page1.getCell('R13').value = { formula: '=SUM(R10:R12)', result: 7 }
    page1.getCell('S13').value = { formula: '=SUM(S10:S12)', result: 7 }
    page1.getCell('T13').value = { formula: '=SUM(T10:T12)', result: 7 }
    page1.getCell('W13').value = { formula: '=SUM(W10:W12)', result: 7 }
    page1.getCell('X13').value = { formula: '=SUM(X10:X12)', result: 7 }
    page1.getCell('Y13').value = { formula: '=SUM(Y10:Y12)', result: 7 }
    page1.getCell('Z13').value = { formula: '=SUM(Z10:Z12)', result: 7 }
    page1.getCell('AA13').value = { formula: '=SUM(AA10:AA12)', result: 7 }

    /** FILA CASS **/
    page1.getCell('E16').value = { formula: '=SUM(E14:E15)', result: 7 }
    page1.getCell('F16').value = { formula: '=SUM(F14:F15)', result: 7 }
    page1.getCell('G16').value = { formula: '=SUM(G14:G15)', result: 7 }
    page1.getCell('J16').value = { formula: '=SUM(J14:J15)', result: 7 }
    page1.getCell('K16').value = { formula: '=SUM(K14:K15)', result: 7 }
    page1.getCell('L16').value = { formula: '=SUM(L14:L15)', result: 7 }
    page1.getCell('M16').value = { formula: '=SUM(M14:M15)', result: 7 }
    page1.getCell('N16').value = { formula: '=SUM(N14:N15)', result: 7 }

    page1.getCell('R16').value = { formula: '=SUM(R14:R15)', result: 7 }
    page1.getCell('S16').value = { formula: '=SUM(S14:S15)', result: 7 }
    page1.getCell('T16').value = { formula: '=SUM(T14:T15)', result: 7 }
    page1.getCell('W16').value = { formula: '=SUM(W14:W15)', result: 7 }
    page1.getCell('X16').value = { formula: '=SUM(X14:X15)', result: 7 }
    page1.getCell('Y16').value = { formula: '=SUM(Y14:Y15)', result: 7 }
    page1.getCell('Z16').value = { formula: '=SUM(Z14:Z15)', result: 7 }
    page1.getCell('AA16').value = { formula: '=SUM(AA14:AA15)', result: 7 }

    /** FILA TOTALES  2023**/
    page1.mergeCells('B27:C27')
    page1.getCell('C27').value = 'Inicio desde el 1° Ingenio'
    page1.getCell('C27').font = { name: 'Calibri', bold: true, size: 11 }
    page1.getCell('C27').alignment = {
      horizontal: 'start',
      vertical: 'middle',
    }
    page1.getCell('D27').value = Math.ceil(dataDiasZafra)
    page1.getCell('D27').font = { name: 'Calibri', bold: true, size: 12 }
    page1.getCell('E27').value = {
      formula: '=SUM(E10:E12,E14:E15,E17:E25)',
      result: 7,
    }
    page1.getCell('F27').value = {
      formula: '=SUM(F10:F12,F14:F15,F17:F25)',
      result: 7,
    }
    page1.getCell('G27').value = {
      formula: '=SUM(G10:G12,G14:G15,G17:G25)',
      result: 7,
    }
    page1.getCell('H27').value = { formula: '=G27/E27*100', result: 7 }
    page1.getCell('I27').value = { formula: '=G27/F27*100', result: 7 }
    page1.getCell('J27').value = {
      formula: '=SUM(J10:J12,J14:J15,J17:J25)',
      result: 7,
    }
    page1.getCell('K27').value = {
      formula: '=K24+K22+K21+K20+K19+K18+K17+K15+K14+K12+K11+K10',
      result: 7,
    }
    page1.getCell('L27').value = {
      formula: '=SUM(L10:L12,L14:L15,L17:L25)',
      result: 7,
    }
    page1.getCell('M27').value = {
      formula: '=SUM(M10:M12,M14:M15,M17:M25)',
      result: 7,
    }
    page1.getCell('N27').value = {
      formula: '=N24+N25+N22+N21+N19+N18+N17+N15+N14+N12',
      result: 7,
    }
    /** FILAS TOTALES 2022 2*/
    page1.getCell('P27').value = Math.ceil(dataDiasZafraComparativa)
    page1.getCell('P27').font = { name: 'Calibri', bold: true, size: 12 }
    page1.getCell('R27').value = {
      formula: '=SUM(R10:R12,R14:R15,R17:R25)',
      result: 7,
    }
    page1.getCell('S27').value = {
      formula: '=SUM(S10:S12,S14:S15,S17:S25)',
      result: 7,
    }
    page1.getCell('T27').value = {
      formula: '=SUM(T10:T12,T14:T15,T17:T25)',
      result: 7,
    }
    page1.getCell('U27').value = { formula: '=T27/R27*100', result: 7 }
    page1.getCell('V27').value = { formula: '=T27/S27*100', result: 7 }
    page1.getCell('W27').value = {
      formula: '=SUM(W10:W12,W14:W15,W17:W25)',
      result: 7,
    }
    page1.getCell('X27').value = {
      formula: '=X24+X22+X21+X20+X19+X18+X17+X15+X14+X12+X11+X10',
      result: 7,
    }
    page1.getCell('Y27').value = {
      formula: '=SUM(Y10:Y12,Y14:Y15,Y17:Y25)',
      result: 7,
    }
    page1.getCell('Z27').value = {
      formula: '=SUM(Z10:Z12,Z14:Z15,Z17:Z25)',
      result: 7,
    }
    page1.getCell('AA27').value = {
      formula: '=AA24+AA25+AA22+AA21+AA19+AA18+AA17+AA15+AA14+AA12',
      result: 7,
    }
    /***********/

    page1.mergeCells('A28:B28')
    page1.getCell('A28').value = `Datos hasta la fecha: `
    page1.getCell('A28').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.getCell('A28').font = { name: 'Calibri', bold: true, size: 12 }
    page1.getCell('A28').alignment = {
      horizontal: 'right',
      vertical: 'middle',
    }
    page1.getCell('C28').value = dateFormat
    page1.getCell('C28').font = { name: 'Calibri', bold: true, size: 12 }
    page1.getCell('C28').alignment = {
      horizontal: 'start',
      vertical: 'middle',
    }
    page1.getCell('C28').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.mergeCells('E28:N28')
    page1.getCell('E28').value = `ACUMULADO HASTA ${dateFormat}`
    page1.getCell('E28').font = { name: 'Calibri', bold: true, size: 14 }
    page1.getCell('E28').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    }

    page1.mergeCells('O28:P28')
    page1.getCell('O28').value = 'Datos hasta la fecha: '
    page1.getCell('O28').font = { name: 'Calibri', bold: true, size: 12 }
    page1.getCell('O28').alignment = {
      horizontal: 'right',
      vertical: 'middle',
    }
    page1.getCell('O28').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.getCell('Q28').value = dateComparativaFormat
    page1.getCell('Q28').font = { name: 'Calibri', bold: true, size: 12 }
    page1.getCell('Q28').alignment = {
      horizontal: 'start',
      vertical: 'middle',
    }
    page1.getCell('Q28').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.mergeCells('R28:AA28')
    page1.getCell('R28').value = `ACUMULADO HASTA ${dateComparativaFormat}`
    page1.getCell('R28').font = { name: 'Calibri', bold: true, size: 14 }
    page1.getCell('R28').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    }

    /** COMPARATIVOS **/
    page1.mergeCells('A30:N30')
    page1.getCell('A30').value = `COMPARATIVO ZAFRA ${date.getFullYear()}/${
      date.getFullYear() - 1
    } - VARIACIÓN %  HASTA EL ${dateFormat}`
    page1.getCell('A30').alignment = alignCenter
    page1.getCell('A30').font = functionFont('Calibri', true, 14)

    page1.mergeCells('A31:D31')
    page1.getCell('A31').value = 'DIFERENCIA'

    page1.getCell('E31').value = { formula: 'E27-R27' }
    page1.getCell('F31').value = { formula: 'F27-S27' }
    page1.getCell('G31').value = { formula: 'G27-T27' }
    page1.getCell('H31').value = { formula: 'H27-U27' }
    page1.getCell('I31').value = { formula: 'I27-V27' }
    page1.getCell('J31').value = { formula: 'J27-W27' }
    page1.getCell('K31').value = { formula: 'K27-X27' }
    page1.getCell('L31').value = { formula: 'L27-Y27' }
    page1.getCell('M31').value = { formula: 'M27-Z27' }
    page1.getCell('N31').value = { formula: 'N27-AA27' }

    page1.mergeCells('A32:D32')
    page1.getCell('A32').value = '%'
    page1.getCell('A32').alignment = alignCenter

    page1.getCell('E32').value = { formula: '=if(R27=0,"100%",E31/R27)', result: 7 }
    page1.getCell('F32').value = { formula: '=if(S27=0,"100%",F31/S27)', result: 7 }
    page1.getCell('G32').value = { formula: '=if(T27=0,"100%",G31/T27)', result: 7 }
    page1.getCell('H32').value = { formula: '=if(U27=0,"100%",H31/U27)', result: 7 }
    page1.getCell('I32').value = { formula: '=if(V27=0,"100%",I31/V27)', result: 7 }
    page1.getCell('J32').value = { formula: '=if(W27=0,"100%",J31/W27)', result: 7 }
    page1.getCell('K32').value = { formula: '=if(X27=0,"100%",K31/X27)', result: 7 }
    page1.getCell('L32').value = { formula: '=if(Y27=0,"100%",L31/Y27)', result: 7 }
    page1.getCell('M32').value = { formula: '=if(Z27=0,"100%",M31/Z27)', result: 7 }
    page1.getCell('N32').value = { formula: '=if(AA27=0,"100%",N31/AA27)', result: 7 }

    page1.mergeCells('O30:AA31')
    page1.getCell(
      'O30'
    ).value = `Inicio de zafra ${date.getFullYear()}: ${inicioZafra}
Inicio de zafra ${date.getFullYear() - 1}: ${inicioZafraComparativa}`
    page1.getCell('O30').alignment = alignStart

    page1.mergeCells('O32:S32')
    page1.getCell('O32').value = 'Diferencia de Grado de avance'
    page1.getCell('O32').font = functionFont('Bodoni MT', true, 18)
    page1.getCell('O32').alignment = alignStart
    page1.mergeCells('T32:U32')
    page1.getCell('T32').font = functionFont('Bodoni MT', true, 18)
    page1.getCell('T32').value = { formula: '(V36-F36)/100' }
    page1.getCell('T32').alignment = alignStart

    page1.mergeCells('V32:AA32')

    /*** ESTIMACIONES ***/
    for (let i = 34; i <= 37; i++) {
      page1.mergeCells(`A${i}:E${i}`)
      page1.mergeCells(`F${i}:G${i}`)
    }
    page1.getCell('A34').value = 'Estimación EEAOC Materia prima bruta'
    page1.getCell('A35').value = `Caña Molida bruta hasta el ${dateFormat}`
    page1.getCell('A36').value =
      'Grado de Avance con respecto a la previsión por E.E.A.O.C.'
    page1.getCell('A37').value = 'Diferencia'
    page1.getCell('F34').value = parseInt(dataConstante?.estimacionEEAOC2023)
    page1.getCell('F35').value = { formula: 'E27' }
    page1.getCell('F36').value = { formula: 'F35/F34*100' }
    page1.getCell('F37').value = { formula: '100-F36' }
    page1.getCell('H34').value = 'Tn'
    page1.getCell('H35').value = 'Tn'
    page1.getCell('H36').value = '%'
    page1.getCell('H37').value = '%'

    page1.mergeCells('I34:J37')
    page1.getCell('I34').value = `ZAFRA ${date.getFullYear()}`
    page1.getCell('I34').font = functionFont('Calibri', true, 16)
    page1.getCell('I34').alignment = alignCenter
    page1.getCell('I34').fill = bgVerde

    page1.mergeCells('K34:K37')
    page1.getCell('K34').value = 'Producción Alcohol etílico anhidro [m3]'
    page1.getCell('K34').font = functionFont('Calibri', true, 12)
    page1.getCell('K34').alignment = alignCenter
    page1.getCell('K34').fill = bgVerde

    page1.mergeCells('L34:N37')
    page1.getCell('L34').value = { formula: 'R58' }
    page1.getCell('L34').font = functionFont('Bodoni MT', true, 26)
    page1.getCell('L34').alignment = alignCenter
    page1.getCell('L34').fill = bgVerde

    for (let i = 34; i <= 37; i++) {
      page1.mergeCells(`O${i}:U${i}`)
      page1.mergeCells(`V${i}:W${i}`)
    }
    page1.getCell('O34').value = 'Caña Molida bruta por DDJJ - Datos IPAAT'
    page1.getCell(
      'O35'
    ).value = `Caña Molida bruta hasta el ${dateComparativaFormat}`
    page1.getCell('O36').value =
      'Grado de Avance con respecto a lo declarado al IPAAT, por los ingenios de Tucumán'
    page1.getCell('O37').value = 'Diferencia'
    page1.getCell('V34').value = parseInt(dataConstante?.CMBPorDDJJIPAAT2022)
    page1.getCell('V35').value = { formula: 'R27' }
    page1.getCell('V36').value = { formula: 'V35/V34*100' }
    page1.getCell('V37').value = { formula: '100-V36' }
    page1.getCell('X34').value = 'Tn'
    page1.getCell('X35').value = 'Tn'
    page1.getCell('X36').value = '%'
    page1.getCell('X37').value = '%'

    page1.mergeCells('Y34:AA37')
    page1.getCell('Y34').value = `ZAFRA ${date.getFullYear() - 1}`
    page1.getCell('Y34').font = functionFont('Bodoni MT', true, 16)
    page1.getCell('Y34').alignment = alignCenter
    page1.getCell('Y34').fill = bgAzul

    /**** AZUCARES ****/
    page1.mergeCells('A39:G40')
    page1.getCell('A39').value =
      `PRODUCCIÓN DE AZÚCAR DISCRIMINADA POR TIPOLOGÍA ZAFRA ${date.getFullYear()}`
    page1.getCell('A39').font = functionFont('Bodoni MT', true, 16)
    page1.getCell('A39').alignment = alignCenter
    page1.getCell('A39').fill = bgVerde

    page1.mergeCells('A41:B43')
    page1.getCell('A41').value = 'Ingenios'
    page1.getCell('A41').font = functionFont('Calibri', true, 14)
    page1.getCell('A41').alignment = alignStart

    page1.mergeCells('C41:G41')
    page1.getCell(
      'C41'
    ).value = `TIPOS DE AZÚCARES Y SUS CANTIDADES EN TONELADAS HASTA ${dateFormat}`
    page1.getCell('C41').font = functionFont('Calibri', true, 12)
    page1.getCell('C41').alignment = alignCenter
    page1.getCell('C41').fill = bgGris

    page1.mergeCells('C42:C43')
    page1.getCell('C42').value = `Común Tipo "A"`
    page1.getCell('C42').font = functionFont('Calibri', true, 12)
    page1.getCell('C42').alignment = alignCenter

    page1.mergeCells('D42:D43')
    page1.getCell('D42').value = 'Refinado'
    page1.getCell('D42').font = functionFont('Calibri', true, 12)
    page1.getCell('D42').alignment = alignCenter

    page1.mergeCells('E42:E43')
    page1.getCell('E42').value = 'Crudo'
    page1.getCell('E42').font = functionFont('Calibri', true, 12)
    page1.getCell('E42').alignment = alignCenter

    page1.mergeCells('F42:F43')
    page1.getCell('F42').value = 'Orgánico'
    page1.getCell('F42').font = functionFont('Calibri', true, 12)
    page1.getCell('F42').alignment = alignCenter

    page1.mergeCells('G42:G43')
    page1.getCell('G42').value = 'Otros'
    page1.getCell('G42').font = functionFont('Calibri', true, 12)
    page1.getCell('G42').alignment = alignCenter

    for (let i = 44; i <= 58; i++) {
      page1.mergeCells(`A${i}:B${i}`)
    }
    ingenios.forEach((d, i) => {
      page1.getCell(`A${i + 44}`).value = d?.name
      page1.getCell(`A${i + 44}`).font = functionFont('Calibri', false, 11)
      page1.getCell(`A${i + 44}`).alignment = alignStart
    })
    page1.getCell('A58').value = 'Acumulado'
    page1.getCell('A58').font = functionFont('Calibri', true, 14)
    page1.getCell('A58').alignment = alignStart

    for (let i = 3; i <= 7; i++) {
      const asd = ['n', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
      page1.getCell(58, i).value = { formula: `SUM(${asd[i]}44:${asd[i]}57)` }
      page1.getCell(58, i).numFmt = '0,000'
    }

    /**** ALCOHOL ****/
    page1.mergeCells('H39:T40')
    page1.getCell('H39').value =
      'PRODUCCIÓN DE ALCOHOL ETÍLICO DISCRIMINADO POR TIPO -  CAMPAÑA 2023 (INICIO: )'
    page1.getCell('H39').font = functionFont('Bodoni MT', true, 16)
    page1.getCell('H39').alignment = alignCenter
    page1.getCell('H39').fill = bgAzul

    page1.mergeCells('H41:K42')
    page1.getCell('H41').value = 'Proceso de Destilacion'
    page1.getCell('H41').font = functionFont('Calibri', true, 14)
    page1.getCell('H41').alignment = alignCenter

    page1.mergeCells('L41:T41')
    page1.getCell(
      'L41'
    ).value = `TIPOS DE ALCOHOLES Y SUS VOLÚMENES EN METROS CÚBICOS HASTA ${dateFormat}`
    page1.getCell('L41').font = functionFont('Calibri', true, 12)
    page1.getCell('L41').alignment = alignCenter
    page1.getCell('L41').fill = bgGris

    for (let i = 43; i <= 57; i++) {
      page1.mergeCells(`H${i}:I${i}`)
      page1.getCell(`H${i}`).alignment = alignCenter
      page1.mergeCells(`J${i}:K${i}`)
      page1.getCell(`J${i}`).alignment = alignCenter
    }
    page1.getCell('H43').value = 'Destilería'
    page1.getCell('H43').font = functionFont('Calibri', true, 14)
    page1.getCell('J43').value = 'Anhidradora'
    page1.getCell('J43').font = functionFont('Calibri', true, 14)

    page1.getCell('H44').value = 'No posee'
    page1.getCell('H44').font = functionFont('Calibri', false, 14)
    page1.getCell('J44').value = 'No posee'
    page1.getCell('J44').font = functionFont('Calibri', false, 14)

    page1.getCell('H45').value = 'José Minetti y Cía. Ltda. SACI'
    page1.getCell('H45').font = functionFont('Calibri', false, 14)
    page1.getCell('J45').value = 'Fronterita Energía S.A.'
    page1.getCell('J45').font = functionFont('Calibri', false, 14)

    page1.getCell('H46').value =
      'Complejo Alimenticio San Salvador S.A.-Banda de Río Salí'
    page1.getCell('H46').font = functionFont('Calibri', false, 14)
    page1.getCell('J46').value = 'Bio Atar  S.A.'
    page1.getCell('J46').font = functionFont('Calibri', false, 14)

    page1.getCell('H47').value = 'No posee'
    page1.getCell('H47').font = functionFont('Calibri', false, 14)
    page1.getCell('J47').value = 'No posee'
    page1.getCell('J47').font = functionFont('Calibri', false, 14)

    page1.getCell('H48').value = 'Destilería Salta Refrescos S.A.'
    page1.getCell('H48').font = functionFont('Calibri', false, 14)
    page1.getCell('J48').value = 'No posee'
    page1.getCell('J48').font = functionFont('Calibri', false, 14)

    page1.getCell('H49').value = 'Sucroalcoholera del Sur S.A.'
    page1.getCell('H49').font = functionFont('Calibri', false, 14)
    page1.getCell('J49').value = 'Bioenergía La Corona S.A.'
    page1.getCell('J49').font = functionFont('Calibri', false, 14)

    page1.getCell('H50').value = 'Compañía Azucarera Los Balcanes S.A.'
    page1.getCell('H50').font = functionFont('Calibri', false, 14)
    page1.getCell('J50').value = 'Compañía Azucarera Los Balcanes S.A.'
    page1.getCell('J50').font = functionFont('Calibri', false, 14)

    page1.getCell('H451').value = 'No posee'
    page1.getCell('H51').font = functionFont('Calibri', false, 14)
    page1.getCell('J51').value = 'No posee'
    page1.getCell('J51').font = functionFont('Calibri', false, 14)

    page1.getCell('H52').value = 'Ansonnaud, Ricardo Sixto'
    page1.getCell('H52').font = functionFont('Calibri', false, 14)
    page1.getCell('J52').value = 'Bio Trinidad S.A.'
    page1.getCell('J52').font = functionFont('Calibri', false, 14)

    page1.getCell('H53').value = 'Compañía Inversora Industrial S.A.'
    page1.getCell('H53').font = functionFont('Calibri', false, 14)
    page1.getCell('J53').value = 'Bioenergética Leales S.A.'
    page1.getCell('J53').font = functionFont('Calibri', false, 14)

    page1.getCell('H54').value =
      'Complejo Alimenticio San Salvador S.A. Juan Bautista Alberdi (Sin funcionar)'
    page1.getCell('H54').font = functionFont('Calibri', false, 14)
    page1.getCell('H54').alignment = alignCenter
    page1.getCell('J54').value = 'No posee'
    page1.getCell('J54').font = functionFont('Calibri', false, 14)

    page1.getCell('H55').value = 'No posee'
    page1.getCell('H55').font = functionFont('Calibri', false, 14)
    page1.getCell('J55').value = 'No posee'
    page1.getCell('J55').font = functionFont('Calibri', false, 14)

    page1.getCell('H56').value = 'Industrias Santa Bárbara S.R.L.'
    page1.getCell('H56').font = functionFont('Calibri', false, 14)
    page1.getCell('J56').value =
      'Energías Ecológicas del Tucumán S.A. (Sin funcionar)'
    page1.getCell('J56').font = functionFont('Calibri', false, 14)

    page1.getCell('H57').value = 'No posee'
    page1.getCell('H57').font = functionFont('Calibri', false, 14)
    page1.getCell('J57').value = 'Anhidradora Bioenergía Santa Rosa S.A. (*)'
    page1.getCell('J57').font = functionFont('Calibri', false, 14)

    page1.mergeCells('H58:K58')
    page1.getCell('H58').value = 'Acumulado'
    page1.getCell('H58').font = functionFont('Calibri', true, 14)
    page1.getCell('H58').alignment = alignStart

    page1.mergeCells('L42:N43')
    page1.getCell('L42').value = 'Alcohol Total'
    page1.getCell('L42').font = functionFont('Calibri', true, 12)
    page1.getCell('L42').alignment = alignCenter

    page1.mergeCells('O42:Q43')
    page1.getCell('O42').value = 'Alcohol Hidratado'
    page1.getCell('O42').font = functionFont('Calibri', true, 12)
    page1.getCell('O42').alignment = alignCenter

    page1.mergeCells('R42:T43')
    page1.getCell('R42').value = 'Alcohol Anhidro'
    page1.getCell('R42').font = functionFont('Calibri', true, 12)
    page1.getCell('R42').alignment = alignCenter

    for (let i = 44; i <= 58; i++) {
      page1.mergeCells(`L${i}:N${i}`)
      page1.getCell(`L${i}`).alignment = alignCenter
      page1.mergeCells(`O${i}:Q${i}`)
      page1.getCell(`O${i}`).alignment = alignCenter
      page1.mergeCells(`R${i}:T${i}`)
      page1.getCell(`R${i}`).alignment = alignCenter
    }

    page1.getCell('L58').value = { formula: `=SUM(L44:N57)` }
    page1.getCell('L58').numFmt = '0,000.000'
    page1.getCell('O58').value = {
      formula: `=O56+O54+O53+O52+O50+O49+O48+O46+O45`,
    }
    page1.getCell('O58').numFmt = '0,000.000'
    page1.getCell('R58').value = { formula: `=R57+R53+R52+R50+R49+R46+R45` }
    page1.getCell('R58').numFmt = '0,000.000'

    /**** EXPORTACIONES ****/
    page1.mergeCells('U39:X40')
    page1.getCell('U39').value =
      `MERCADO EXTERNO DEL AZÚCAR - ZAFRA ${date.getFullYear()} Al ${dateFormat}`
    page1.getCell('U39').alignment = alignCenter
    page1.getCell('U39').font = functionFont('Bodoni MT', true, 12)

    page1.mergeCells('Y39:AA40')
    page1.getCell('Y39').value = 'Acumulado: '
    page1.getCell('Y39').alignment = alignCenter
    page1.getCell('Y39').font = functionFont('Bodoni MT', true, 12)

    page1.mergeCells('U41:AA63')

    page1.getRow(1).alignment = { horizontal: 'center', vertical: 'middle' }

    page1.getRow(29).border = borders(
      'medium',
      '000000',
      'thin',
      'EAEAEA',
      'medium',
      '000000',
      'thin',
      'EAEAEA'
    )
    page1.getRow(33).border = borders(
      'medium',
      '000000',
      'thin',
      'EAEAEA',
      'medium',
      '000000',
      'thin',
      'EAEAEA'
    )
    page1.getRow(38).border = borders(
      'medium',
      '000000',
      'thin',
      'EAEAEA',
      'medium',
      '000000',
      'thin',
      'EAEAEA'
    )

    for (let j = 1; j <= 1000; j++) {
      for (let i = 28; i <= 1000; i++) {
        page1.getCell(j, i).border = borders(
          'thin',
          'EAEAEA',
          'thin',
          'EAEAEA',
          'thin',
          'EAEAEA',
          'thin',
          'EAEAEA'
        )
      }
    }
    for (let j = 64; j <= 1000; j++) {
      for (let i = 1; i <= 1000; i++) {
        page1.getCell(j, i).border = borders(
          'thin',
          'EAEAEA',
          'thin',
          'EAEAEA',
          'thin',
          'EAEAEA',
          'thin',
          'EAEAEA'
        )
      }
    }

    /***** ACLARACIONES *****/
    page1.mergeCells('A59:I63')
    page1.mergeCells('J59:T63')


    /***** *****/

    /*********  DATOS  *********/
    /** DATOS 2023 **/
    if (parteDiarioData.length > 0) {
      /** AGUILARES **/
      page1.getCell('E10').value = parseInt(d1['E10'])
      page1.getCell('F10').value = parseInt(d1['F10'])
      page1.getCell('G10').value = parseFloat(d1['G10'])
      page1.getCell('J10').value = parseInt(d1['J10'])
      page1.getCell('K10').value = parseInt(d1['K10'])
      page1.getCell('M10').value = parseInt(d1['M10'])
      page1.getCell('N10').value = parseInt(d1['N10'])

      /** Cruz Alta **/
      page1.getCell('E11').value = parseInt(d2['E11'])
      page1.getCell('F11').value = parseInt(d2['F11'])
      page1.getCell('G11').value = parseFloat(d2['G11'])
      page1.getCell('J11').value = parseInt(d2['J11'])
      page1.getCell('K11').value = parseInt(d2['K11'])
      page1.getCell('M11').value = parseInt(d2['M11'])
      page1.getCell('N11').value = parseInt(d2['N11'])

      /** La Florida **/
      page1.getCell('E12').value = parseInt(d3['E12'])
      page1.getCell('F12').value = parseInt(d3['F12'])
      page1.getCell('G12').value = parseFloat(d3['G12'])
      page1.getCell('J12').value = parseInt(d3['J12'])
      page1.getCell('K12').value = parseInt(d3['K12'])
      page1.getCell('M12').value = parseInt(d3['M12'])
      page1.getCell('N12').value = parseInt(d3['N12'])

      /** Concepcion **/
      page1.getCell('E14').value = parseInt(d4['E14'])
      page1.getCell('F14').value = parseInt(d4['F14'])
      page1.getCell('G14').value = parseFloat(d4['G14'])
      page1.getCell('J14').value = parseInt(d4['J14'])
      if(date.getFullYear() === 2023) page1.getCell('J14').note = 'FALTA AZ REFINADO'
      page1.getCell('K14').value = parseInt(d4['K14'])
      page1.getCell('M14').value = parseInt(d4['M14'])
      page1.getCell('N14').value = parseInt(d4['N14'])

      /** Marapa **/
      page1.getCell('E15').value = parseInt(d5['E15'])
      page1.getCell('F15').value = parseInt(d5['F15'])
      page1.getCell('G15').value = parseFloat(d5['G15'])
      page1.getCell('J15').value = parseInt(d5['J15'])
      page1.getCell('K15').value = parseInt(d5['K15'])
      page1.getCell('M15').value = parseInt(d5['M15'])
      page1.getCell('N15').value = parseInt(d5['N15'])

      /** Bella Vista **/
      page1.getCell('E17').value = parseInt(d6['E17'])
      page1.getCell('F17').value = parseInt(d6['F17'])
      page1.getCell('G17').value = parseFloat(d6['G17'])
      page1.getCell('J17').value = parseInt(d6['J17'])
      page1.getCell('K17').value = parseInt(d6['K17'])
      page1.getCell('M17').value = parseInt(d6['M17'])
      page1.getCell('N17').value = parseInt(d6['N17'])

      /** Famailla **/
      page1.getCell('E18').value = parseInt(d7['E18'])
      page1.getCell('F18').value = parseInt(d7['F18'])
      page1.getCell('G18').value = parseFloat(d7['G18'])
      page1.getCell('J18').value = parseInt(d7['J18'])
      if(date.getFullYear() === 2023) page1.getCell('J18').note = 'FALTA AZ REFINADO'
      page1.getCell('K18').value = parseInt(d7['K18'])
      page1.getCell('M18').value = parseInt(d7['M18'])
      page1.getCell('N18').value = parseInt(d7['N18'])

      /** La Corona **/
      page1.getCell('E19').value = parseInt(d8['E19'])
      page1.getCell('F19').value = parseInt(d8['F19'])
      page1.getCell('G19').value = parseFloat(d8['G19'])
      page1.getCell('J19').value = parseInt(d8['J19'])
      page1.getCell('K19').value = parseInt(d8['K19'])
      page1.getCell('M19').value = parseInt(d8['M19'])
      page1.getCell('N19').value = parseInt(d8['N19'])

      /** La Providencia **/
      page1.getCell('E20').value = parseInt(d9['E20'])
      page1.getCell('F20').value = parseInt(d9['F20'])
      page1.getCell('G20').value = parseFloat(d9['G20'])
      page1.getCell('J20').value = parseInt(d9['J20'])
      page1.getCell('K20').value = parseInt(d9['K20'])
      if(date.getFullYear() === 2023) page1.getCell('K20').note = 'FALTA AZ ORGANICO Y OTOS AZ'
      page1.getCell('M20').value = parseInt(d9['M20'])
      page1.getCell('N20').value = parseInt(d9['N20'])

      /** La Trinidad **/
      page1.getCell('E21').value = parseInt(d10['E21'])
      page1.getCell('F21').value = parseInt(d10['F21'])
      page1.getCell('G21').value = parseFloat(d10['G21'])
      page1.getCell('J21').value = parseInt(d10['J21'])
      page1.getCell('K21').value = parseInt(d10['K21'])
      page1.getCell('M21').value = parseInt(d10['M21'])
      page1.getCell('N21').value = parseInt(d10['N21'])

      /** Leales **/
      page1.getCell('E22').value = parseInt(d11['E22'])
      page1.getCell('F22').value = parseInt(d11['F22'])
      page1.getCell('G22').value = parseFloat(d11['G22'])
      page1.getCell('J22').value = parseInt(d11['J22'])
      if(date.getFullYear() === 2023) page1.getCell('J22').note = 'FALTA AZ REFINADO'
      page1.getCell('K22').value = parseInt(d11['K22'])
      page1.getCell('M22').value = parseInt(d11['M22'])
      page1.getCell('N22').value = parseInt(d11['N22'])

      /** Nunorco **/
      page1.getCell('E23').value = parseInt(d12['E23'])
      page1.getCell('F23').value = parseInt(d12['F23'])
      page1.getCell('G23').value = parseFloat(d12['G23'])
      page1.getCell('J23').value = parseInt(d12['J23'])
      page1.getCell('K23').value = parseInt(d12['K23'])
      page1.getCell('M23').value = parseInt(d12['M23'])
      page1.getCell('N23').value = parseInt(d12['N23'])

      /** Santa Barbara **/
      page1.getCell('E24').value = parseInt(d13['E24'])
      page1.getCell('F24').value = parseInt(d13['F24'])
      page1.getCell('G24').value = parseFloat(d13['G24'])
      page1.getCell('J24').value = parseInt(d13['J24'])
      page1.getCell('K24').value = parseInt(d13['K24'])
      page1.getCell('M24').value = parseInt(d13['M24'])
      page1.getCell('N24').value = parseInt(d13['N24'])

      /** Sta Rosa **/
      page1.getCell('E25').value = parseInt(d14['E25'])
      page1.getCell('F25').value = parseInt(d14['F25'])
      page1.getCell('G25').value = parseFloat(d14['G25'])
      page1.getCell('J25').value = parseInt(d14['J25'])
      page1.getCell('K25').value = parseInt(d14['K25'])
      page1.getCell('M25').value = parseInt(d14['M25'])
      page1.getCell('N25').value = parseInt(d14['N25'])
    }

    /** DATOS 2022 **/
    /** AGUILARES **/
    page1.getCell('R10').value = parseInt(dc1['R10'])
    page1.getCell('S10').value = parseInt(dc1['S10'])
    page1.getCell('T10').value = parseFloat(dc1['T10'])
    page1.getCell('W10').value = parseInt(dc1['W10'])
    page1.getCell('X10').value = parseInt(dc1['X10'])
    page1.getCell('Z10').value = parseInt(dc1['Z10'])
    page1.getCell('AA10').value = parseInt(dc1['AA10'])

    /** Cruz Alta **/
    page1.getCell('R11').value = parseInt(dc2['R11'])
    page1.getCell('S11').value = parseInt(dc2['S11'])
    page1.getCell('T11').value = parseFloat(dc2['T11'])
    page1.getCell('W11').value = parseInt(dc2['W11'])
    page1.getCell('X11').value = parseInt(dc2['X11'])
    page1.getCell('Z11').value = parseInt(dc2['Z11'])
    page1.getCell('AA11').value = parseInt(dc2['AA11'])

    /** La Florida **/
    page1.getCell('R12').value = parseInt(dc3['R12'])
    page1.getCell('S12').value = parseInt(dc3['S12'])
    page1.getCell('T12').value = parseFloat(dc3['T12'])
    page1.getCell('W12').value = parseInt(dc3['W12'])
    page1.getCell('X12').value = parseInt(dc3['X12'])
    page1.getCell('Z12').value = parseInt(dc3['Z12'])
    page1.getCell('AA12').value = parseInt(dc3['AA12'])

    /** Concepcion **/
    page1.getCell('R14').value = parseInt(dc4['R14'])
    page1.getCell('S14').value = parseInt(dc4['S14'])
    page1.getCell('T14').value = parseFloat(dc4['T14'])
    page1.getCell('W14').value = parseInt(dc4['W14'])
    if(date.getFullYear() -1 === 2023) page1.getCell('W14').note = 'FALTA AZ REFINADO'
    page1.getCell('X14').value = parseInt(dc4['X14'])
    page1.getCell('Z14').value = parseInt(dc4['Z14'])
    page1.getCell('AA14').value = parseInt(dc4['AA14'])

    /** Marapa **/
    page1.getCell('R15').value = parseInt(dc5['R15'])
    page1.getCell('S15').value = parseInt(dc5['S15'])
    page1.getCell('T15').value = parseFloat(dc5['T15'])
    page1.getCell('W15').value = parseInt(dc5['W15'])
    page1.getCell('X15').value = parseInt(dc5['X15'])
    page1.getCell('Z15').value = parseInt(dc5['Z15'])
    page1.getCell('AA15').value = parseInt(dc5['AA15'])

    /** Bella Vista **/
    page1.getCell('R17').value = parseInt(dc6['R17'])
    page1.getCell('S17').value = parseInt(dc6['S17'])
    page1.getCell('T17').value = parseFloat(dc6['T17'])
    page1.getCell('W17').value = parseInt(dc6['W17'])
    page1.getCell('X17').value = parseInt(dc6['X17'])
    page1.getCell('Z17').value = parseInt(dc6['Z17'])
    page1.getCell('AA17').value = parseInt(dc6['AA17'])

    /** Famailla **/
    page1.getCell('R18').value = parseInt(dc7['R18'])
    page1.getCell('S18').value = parseInt(dc7['S18'])
    page1.getCell('T18').value = parseFloat(dc7['T18'])
    page1.getCell('W18').value = parseInt(dc7['W18'])
    if(date.getFullYear() -1 === 2023) page1.getCell('W18').note = 'FALTA AZ REFINADO'
    page1.getCell('X18').value = parseInt(dc7['X18'])
    page1.getCell('Z18').value = parseInt(dc7['Z18'])
    page1.getCell('AA18').value = parseInt(dc7['AA18'])

    /** La Corona **/
    page1.getCell('R19').value = parseInt(dc8['R19'])
    page1.getCell('S19').value = parseInt(dc8['S19'])
    page1.getCell('T19').value = parseFloat(dc8['T19'])
    page1.getCell('W19').value = parseInt(dc8['W19'])
    page1.getCell('X19').value = parseInt(dc8['X19'])
    page1.getCell('Z19').value = parseInt(dc8['Z19'])
    page1.getCell('AA19').value = parseInt(dc8['AA19'])

    /** La Providencia **/
    page1.getCell('R20').value = parseInt(dc9['R20'])
    page1.getCell('S20').value = parseInt(dc9['S20'])
    page1.getCell('T20').value = parseFloat(dc9['T20'])
    page1.getCell('W20').value = parseInt(dc9['W20'])
    page1.getCell('X20').value = parseInt(dc9['X20'])
    if(date.getFullYear() -1 === 2023) page1.getCell('X20').note = 'FALTA AZ ORGANICO Y OTOS AZ'
    page1.getCell('Z20').value = parseInt(dc9['Z20'])
    page1.getCell('AA20').value = parseInt(dc9['AA20'])

    /** La Trinidad **/
    page1.getCell('R21').value = parseInt(dc10['R21'])
    page1.getCell('S21').value = parseInt(dc10['S21'])
    page1.getCell('T21').value = parseFloat(dc10['T21'])
    page1.getCell('W21').value = parseInt(dc10['W21'])
    page1.getCell('X21').value = parseInt(dc10['X21'])
    page1.getCell('Z21').value = parseInt(dc10['Z21'])
    page1.getCell('AA21').value = parseInt(dc10['AA21'])

    /** Leales **/
    page1.getCell('R22').value = parseInt(dc11['R22'])
    page1.getCell('S22').value = parseInt(dc11['S22'])
    page1.getCell('T22').value = parseFloat(dc11['T22'])
    page1.getCell('W22').value = parseInt(dc11['W22'])
    if(date.getFullYear() -1 === 2023) page1.getCell('W22').note = 'FALTA AZ REFINADO'
    page1.getCell('X22').value = parseInt(dc11['X22'])
    page1.getCell('Z22').value = parseInt(dc11['Z22'])
    page1.getCell('AA22').value = parseInt(dc11['AA22'])

    /** Nunorco **/
    page1.getCell('R23').value = parseInt(dc12['R23'])
    page1.getCell('S23').value = parseInt(dc12['S23'])
    page1.getCell('T23').value = parseFloat(dc12['T23'])
    page1.getCell('W23').value = parseInt(dc12['W23'])
    page1.getCell('X23').value = parseInt(dc12['X23'])
    page1.getCell('Z23').value = parseInt(dc12['Z23'])
    page1.getCell('AA23').value = parseInt(dc12['AA23'])

    /** Santa Barbara **/
    page1.getCell('R24').value = parseInt(dc13['R24'])
    page1.getCell('S24').value = parseInt(dc13['S24'])
    page1.getCell('T24').value = parseFloat(dc13['T24'])
    page1.getCell('W24').value = parseInt(dc13['W24'])
    page1.getCell('X24').value = parseInt(dc13['X24'])
    page1.getCell('Z24').value = parseInt(dc13['Z24'])
    page1.getCell('AA24').value = parseInt(dc13['AA24'])

    /** Sta Rosa **/
    page1.getCell('R25').value = parseInt(dc14['R25'])
    page1.getCell('S25').value = parseInt(dc14['S25'])
    page1.getCell('T25').value = parseFloat(dc14['T25'])
    page1.getCell('W25').value = parseInt(dc14['W25'])
    page1.getCell('X25').value = parseInt(dc14['X25'])
    page1.getCell('Z25').value = parseInt(dc14['Z25'])
    page1.getCell('AA25').value = parseInt(dc14['AA25'])

    /*******************/

    /**** PRODUCCION AZUCAR DISCRIMINADA ****/
    page1.getCell('C44').value = parseInt(d1['J10'])
    page1.getCell('D44').value = parseInt(d1['D43'])
    page1.getCell('E44').value = parseFloat(d1['K10'])
    page1.getCell('F44').value = parseInt(d1['F43'])
    page1.getCell('G44').value = parseInt(d1['G43'])
    
    page1.getCell('C45').value = parseInt(d6['J17'])
    page1.getCell('D45').value = parseInt(d6['D45'])
    page1.getCell('E45').value = parseFloat(d6['K17'])
    page1.getCell('F45').value = parseInt(d6['F45'])
    page1.getCell('G45').value = parseInt(d6['G45'])

    page1.getCell('C46').value = parseInt(d4['J14'])
    page1.getCell('D46').value = parseInt(d4['D46'])
    page1.getCell('E46').value = parseFloat(d4['K14'])
    page1.getCell('F46').value = parseInt(d4['F46'])
    page1.getCell('G46').value = parseInt(d4['G46'])

    page1.getCell('C47').value = parseInt(d2['J11'])
    page1.getCell('D47').value = parseInt(d2['D47'])
    page1.getCell('E47').value = parseFloat(d2['K11'])
    page1.getCell('F47').value = parseInt(d2['F47'])
    page1.getCell('G47').value = parseInt(d2['G47'])

    page1.getCell('C48').value = parseInt(d7['J18'])
    page1.getCell('D48').value = parseInt(d7['D48'])
    page1.getCell('E48').value = parseFloat(d7['K18'])
    page1.getCell('F48').value = parseInt(d7['F48'])
    page1.getCell('G48').value = parseInt(d7['G48'])

    page1.getCell('C49').value = parseInt(d8['J19'])
    page1.getCell('D49').value = parseInt(d8['D49'])
    page1.getCell('E49').value = parseFloat(d8['K19'])
    page1.getCell('F49').value = parseInt(d8['F49'])
    page1.getCell('G49').value = parseInt(d8['G49'])

    page1.getCell('C50').value = parseInt(d3['J12'])
    page1.getCell('D50').value = parseInt(d3['D50'])
    page1.getCell('E50').value = parseFloat(d3['K12'])
    page1.getCell('F50').value = parseInt(d3['F50'])
    page1.getCell('G50').value = parseInt(d3['G50'])

    page1.getCell('C51').value = parseInt(d9['J20'])
    page1.getCell('D51').value = parseInt(d9['D51'])
    page1.getCell('E51').value = parseFloat(d9['K20'])
    page1.getCell('F51').value = parseInt(d9['F51'])
    page1.getCell('G51').value = parseInt(d9['G51'])

    page1.getCell('C52').value = parseInt(d10['J21'])
    page1.getCell('D52').value = parseInt(d10['D52'])
    page1.getCell('E52').value = parseFloat(d10['K21'])
    page1.getCell('F52').value = parseInt(d10['F52'])
    page1.getCell('G52').value = parseInt(d10['G52'])

    page1.getCell('C53').value = parseInt(d11['J22'])
    page1.getCell('D53').value = parseInt(d11['D53'])
    page1.getCell('E53').value = parseFloat(d11['K22'])
    page1.getCell('F53').value = parseInt(d11['F53'])
    page1.getCell('G53').value = parseInt(d11['G53'])

    page1.getCell('C54').value = parseInt(d5['J15'])
    page1.getCell('D54').value = parseInt(d5['D54'])
    page1.getCell('E54').value = parseFloat(d5['K15'])
    page1.getCell('F54').value = parseInt(d5['F54'])
    page1.getCell('G54').value = parseInt(d5['G54'])

    page1.getCell('C55').value = parseInt(d12['J23'])
    page1.getCell('D55').value = parseInt(d12['D55'])
    page1.getCell('E55').value = parseFloat(d12['K23'])
    page1.getCell('F55').value = parseInt(d12['F55'])
    page1.getCell('G55').value = parseInt(d12['G55'])

    page1.getCell('C56').value = parseInt(d13['J24'])
    page1.getCell('D56').value = parseInt(d13['D56'])
    page1.getCell('E56').value = parseFloat(d13['K24'])
    page1.getCell('F56').value = parseInt(d13['F56'])
    page1.getCell('G56').value = parseInt(d13['G56'])

    page1.getCell('C57').value = parseInt(d14['J25'])
    page1.getCell('D57').value = parseInt(d14['D57'])
    page1.getCell('E57').value = parseFloat(d14['K25'])
    page1.getCell('F57').value = parseInt(d14['F57'])
    page1.getCell('G57').value = parseInt(d14['G57'])

    /****** ******/

    /**COLUMNA RTO CMB */
    for (let i = 10; i <= 25; i++) {
      if (page1.getCell(i, 5).value === 0) {
        page1.getCell(i, 8).value = 0
        page1.getCell(i, 9).value = 0
      } else {
        page1.getCell(i, 8).value = { formula: `=G${i}/E${i}*100`, result: 7 }
        page1.getCell(i, 9).value = { formula: `=G${i}/F${i}*100`, result: 7 }
      }
    }
    for (let i = 10; i <= 25; i++) {
      if (page1.getCell(i, 18).value === 0) {
        page1.getCell(i, 21).value = 0
        page1.getCell(i, 22).value = 0
      } else {
        page1.getCell(i, 21).value = { formula: `=T${i}/R${i}*100`, result: 7 }
        page1.getCell(i, 22).value = { formula: `=T${i}/S${i}*100`, result: 7 }
      }
    }

      // console.log(typeof workbook)
      // const res = await getDataPartesDiariosBE1( '/descargar', workbook)
      // console.log(res)
      // setLoadingDownload(false)
    try {
      const buffer = await workbook.xlsx.writeBuffer()
      const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      const EXCEL_EXTENSION = '.xlsx'
      const blob = new Blob([buffer], { type: fileType })
      if (navigator.msSaveBlog) {
        navigator.msSaveBlog(
          blob,
          `Parte diario directorio - ${dateFormat}` + EXCEL_EXTENSION
        )
      } else {
        const link = document.createElement('a')
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob)
          link.setAttribute('href', url)
          link.setAttribute(
            'download',
            `Parte diario directorio - ${dateFormat}` + EXCEL_EXTENSION
          )
          link.style.visibility = 'hidden'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }
      setLoadingDownload(false)
      setDataEnd(null)
      setDataImport(null)
      setDataImportComparativa(null)
    } catch (error) {
      console.log(error)
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
}
