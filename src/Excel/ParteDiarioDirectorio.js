import ExcelJS from 'exceljs'
import moment from 'moment'

export const CreateExcelWorkbook = async (
  setLoadingDownload,
  dataEnd,
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
  setDataImportDestileria,
  setDataImportDestileriaComparativa,
  dataIngenios,
  finZafra,
  finZafraComparativa,
  dataComparativa,
  fechaInicioDestileria,
  zafraParteDiario
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
    const anioData = zafraParteDiario
    const dateFormat = moment(date).format('DD-MM-YYYY')
  
    
    /** Fecha hasta comparativa **/
    const anioDataComparativo = date.getFullYear()
    let dateComparativa = new Date(date)
    if(anioData === anioDataComparativo){
      dateComparativa.setFullYear(anioData-1)
    } else {
      dateComparativa.setFullYear(anioData)
    }
    const dateComparativaFormat = moment(dateComparativa).format('DD-MM-YYYY')
    console.log(dateFormat, dateComparativaFormat)
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
        paperSize: 8,
        orientation: 'landscape',
        scale: 75,
        fitToPage: false,
        fitToWidth: 1,
        // margins: {
        //   left: 0.7, right: 0.7, top: 0.75, bottom: 0.75
        // }
      },
      properties: { tabColor: { argb: '0000B2' } },
    })
    page1.headerFooter.differentFirst = true
    

    const page2 = workbook.addWorksheet('Azúcar y Alcohol discriminado', {
      pageSetup: {
        paperSize: 8,
        orientation: 'landscape',
        scale: 75,
        fitToPage: false,
        fitToWidth: 1,
        // margins: {
        //   left: 0.7, right: 0.7, top: 0.75, bottom: 0.75
        // }
      },
      properties: { tabColor: { argb: '0000B2' } },
    })
    page2.headerFooter.differentFirst = true

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
      ref: 'F31:O32',
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

    /***** ESTILOS GENERALES *****/
    const functionFont = (name, bold, size) => {
      return { name, bold, size }
    }
    for (let i = 6; i <= 28; i++) {
      page1.getColumn(i).width = '17'
    }
    page1.getColumn(1).width = '18'
    page1.getColumn(2).width = '18'
    page1.getColumn(3).width = '18'
    page1.getColumn(4).width = '13'
    page1.getColumn(5).width = '13'

    for (let i = 1; i <= 4; i++) {
      page1.getRow(i).height = '27'
    }
    page1.getRow(5).height = '28'
    page1.getRow(8).height = '36'
    for (let i = 10; i <= 26; i++) {
      page1.getRow(i).height = '28'
    }
    page1.getRow(27).height = '27'
    page1.getRow(28).height = '30'
    page1.getRow(30).height = '37'
    page1.getRow(31).height = '37'
    page1.getRow(32).height = '37'

    for (let i = 34; i <= 37; i++) {
      page1.getRow(i).height = '28'
    }
    for(let i=34;i<=37;i++) {
      page1.getCell(`A${i}`).font = {size: 15}
      page1.getCell(`F${i}`).font = {size: 15}
      page1.getCell(`G${i}`).font = {size: 15}
      page1.getCell(`O${i}`).font = {size: 15}
      page1.getCell(`V${i}`).font = {size: 15}
      page1.getCell(`X${i}`).font = {size: 15}
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

    for (let i = 6; i <= 15; i++) {
      page1.getCell(7, i).fill = bgVerde
      page1.getCell(9, i).fill = bgVerde
    }

    for (let i = 19; i <= 28; i++) {
      page1.getCell(7, i).fill = bgAzul
      page1.getCell(9, i).fill = bgAzul
    }
    for (let i = 1; i < 29; i++) {
      page1.getCell(27, i).fill = bgAzul
    }
    for (let i = 1; i < 29; i++) {
      page1.getCell(7, i).fill = bgGris
    }

    /***** FILAS *****/
    page1.getRow(6).alignment = alignCenter
    page1.getRow(7).alignment = alignCenter
    page1.getRow(8).alignment = alignCenter
    page1.getRow(9).alignment = alignCenter
    for (let i = 10; i <= 26; i++) {
      page1.getRow(i).font = functionFont('Calibri', true, 15)
    }
    page1.getRow(26).font = functionFont('Calibri', true, 18)
    page1.getRow(31).font = functionFont('Calibri', true, 17)
    page1.getRow(31).alignment = alignCenter
    page1.getRow(32).alignment = alignCenter
    page1.getRow(32).font = functionFont('Calibri', true, 17)


    /***** BORDES *****/
    const borders = (t1, t2, l1, l2, b1, b2, r1, r2) => {
      return {
        top: { style: t1, color: { argb: t2 } },
        left: { style: l1, color: { argb: l2 } },
        bottom: { style: b1, color: { argb: b2 } },
        right: { style: r1, color: { argb: r2 } },
      }
    }

    for (let i = 1; i < 27; i++) {
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
    page1.getRow(26).border = borders(
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

    for (let i = 1; i <= 28; i++) {
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
    for (let i = 6; i <= 8; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }
    page1.getColumn(9).numFmt = '0.##0'
    page1.getColumn(10).numFmt = '0.##0'
    for (let i = 11; i <= 15; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }
    for (let i = 19; i <= 21; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }
    page1.getColumn(22).numFmt = '0.##0'
    page1.getColumn(23).numFmt = '0.##0'
    for (let i = 24; i <= 28; i++) {
      page1.getColumn(i).numFmt = '#,##0'
    }

    for (let i = 6; i <= 15; i++) {
      page1.getCell(32, i).numFmt = '0.000%'
    }

    page1.getCell('U32').numFmt = '0.##%'
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
    page1.mergeCells('A1:F4')
    page1.getCell('F4').value = 'Icono IPAAT'
    page1.getCell('F4').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'medium', color: { argb: '000000' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'medium', color: { argb: '000000' } },
    }

    page1.mergeCells('G1:W2')
    page1.getCell(
      'W2'
    ).value = `COMPARATIVO ZAFRA ${anioData}/${anioDataComparativo-1}`
    page1.getCell('W2').alignment = { horizontal: 'center' }
    page1.getCell('W2').font = { name: 'Calibri', bold: true, size: 24 }

    page1.mergeCells('G3:W4')
    page1.getCell(
      'W4'
    ).value = `DATOS PRODUCTIVOS SEGÚN PARTE DIARIO ${Math.ceil(dataDiasZafra)}`
    page1.getCell('W4').font = { name: 'Calibri', bold: true, size: 20 }
    page1.getCell('W4').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    }

    page1.mergeCells('X1:AB4')
    page1.getCell('X1').value = 'Icono Tucuman'

    page1.mergeCells('A5:F5')
    page1.getCell('E5').value = 'Fecha de Reunión de Directorio'
    page1.getCell('E5').alignment = { horizontal: 'start' }
    page1.getCell('E5').font = { name: 'Calirbi', bold: true, size: 18 }

    page1.mergeCells('G5:AB5')

    /** ENCABEZADOS Y COLUMNAS DE TABLA **/
    page1.mergeCells('A6:B9')
    page1.getCell('A9').value = 'INGENIOS DE LA PROVINCIA DE TUCUMÁN'
    page1.getCell('A9').font = { name: 'Calibri', bold: true, size: 15 }

    page1.mergeCells('C6:O6')
    page1.getCell('O6').value = `ZAFRA ${anioData}`
    page1.getCell('O6').font = { name: 'Calibri', bold: true, size: 18 }

    page1.mergeCells('P6:AB6')
    page1.getCell('AB6').value = `ZAFRA ${zafraParteDiario-1}`
    page1.getCell('AB6').font = { name: 'Calibri', bold: true, size: 18 }

    /** Zafra 2023 **/

    page1.mergeCells('C7:C9')
    page1.getCell('C9').value = `Inicio de Zafra ${anioData}`
    page1.getCell('C9').font = { name: 'Calibri', bold: true, size: 15 }

    page1.mergeCells('D7:D9')
    page1.getCell('D9').value = 'N° Días de avance'
    page1.getCell('D9').font = { name: 'Calibri', bold: true, size: 15 }

    page1.mergeCells('E7:E9')
    page1.getCell('E9').value = `fin de zafra ${anioData}`
    page1.getCell('E9').font = { name: 'Calibri', bold: true, size: 15 }

    page1.mergeCells('F7:F8')
    page1.getCell('F8').value = 'Caña Molida Bruta (C.M.B.)'
    page1.mergeCells('G7:G8')
    page1.getCell('G8').value = 'Caña Molida Neta (C.M.N.) '
    page1.mergeCells('H7:H8')
    page1.getCell('H8').value = 'Azúcar Equivalente'
    page1.mergeCells('I7:I8')
    page1.getCell('I8').value = `Rto % CMB Total `
    page1.mergeCells('J7:J8')
    page1.getCell('J8').value = `Rto % CMN Total`
    page1.mergeCells('K7:K8')
    page1.getCell('K8').value = 'Total Azúcar Blanco'
    page1.mergeCells('L7:L8')
    page1.getCell('L8').value = 'Total Azúcar Crudo'
    page1.mergeCells('M7:M8')
    page1.getCell('M8').value = 'Total Azúcar Elaborada'
    page1.mergeCells('N7:N8')
    page1.getCell('N8').value = 'MELAZA'
    page1.mergeCells('O7:O8')
    page1.getCell('O8').value = 'ALCOHOL TOTAL HIDRATADO'
    page1.getCell('F9').value = '[Tn]'
    page1.getCell('G9').value = '[Tn]'
    page1.getCell('H9').value = '[Tn]'
    page1.getCell('I9').value = '%'
    page1.getCell('J9').value = '%'
    page1.getCell('K9').value = '[Tn]'
    page1.getCell('L9').value = '[Tn]'
    page1.getCell('M9').value = '[Tn]'
    page1.getCell('N9').value = '[Tn]'
    page1.getCell('O9').value = '[m3]'

    /** Zafra 2022 **/
    page1.mergeCells('P7:P9')
    page1.getCell('P9').value = `Inicio de Zafra ${zafraParteDiario-1}`
    page1.getCell('P9').font = { name: 'Calibri', bold: true, size: 15 }

    page1.mergeCells('Q7:Q9')
    page1.getCell('Q9').value = 'N° Días de Avance'
    page1.getCell('Q9').font = { name: 'Calibri', bold: true, size: 15 }

    page1.mergeCells('R7:R9')
    page1.getCell('R9').value = `Fin de Zafra ${zafraParteDiario-1}`
    page1.getCell('R9').font = { name: 'Calibri', bold: true, size: 15 }

    page1.mergeCells('S7:S8')
    page1.getCell('S8').value = 'Caña Molida Bruta (C.M.B.)'
    page1.mergeCells('T7:T8')
    page1.getCell('T8').value = 'Caña Molida Neta (C.M.N.) '
    page1.mergeCells('U7:U8')
    page1.getCell('U8').value = 'Azúcar Equivalente'
    page1.mergeCells('V7:V8')
    page1.getCell('V8').value = `Rto % CMB Total `
    page1.mergeCells('W7:W8')
    page1.getCell('W8').value = `Rto % CMN Total`
    page1.mergeCells('X7:X8')
    page1.getCell('X8').value = 'Total Azúcar Blanco'
    page1.mergeCells('Y7:Y8')
    page1.getCell('Y8').value = 'Total Azúcar Crudo'
    page1.mergeCells('Z7:Z8')
    page1.getCell('Z8').value = 'Total Azúcar Elaborada'
    page1.mergeCells('AA7:AA8')
    page1.getCell('AA8').value = 'MELAZA'
    page1.mergeCells('AB7:AB8')
    page1.getCell('AB8').value = 'ALCOHOL TOTAL HIDRATADO'
    page1.getCell('S9').value = '[Tn]'
    page1.getCell('T9').value = '[Tn]'
    page1.getCell('U9').value = '[Tn]'
    page1.getCell('V9').value = '%'
    page1.getCell('W9').value = '%'
    page1.getCell('X9').value = '[Tn]'
    page1.getCell('Y9').value = '[Tn]'
    page1.getCell('Z9').value = '[Tn]'
    page1.getCell('AA9').value = '[Tn]'
    page1.getCell('AB9').value = '[m3]'

    for(let i=7; i<=9;i++) {
      page1.getRow(i).font = {name: 'Calibri', bold: true, size: 15}
    }

    /** COLUMNA TABLA - INGENIOS **/
    for (let i = 10; i <= 25; i++) {
      page1.mergeCells(`A${i}:B${i}`)
    }
    page1.getCell('A10').value = 'Aguilares'
    page1.getCell('A10').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A11').value = 'Cruz Alta'
    page1.getCell('A11').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A12').value = 'La Florida'
    page1.getCell('A12').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A13').value = 'Gpo. Los Balcanes'
    page1.getCell('A14').value = 'Concepción'
    page1.getCell('A14').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A15').value = 'Marapa'
    page1.getCell('A15').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A16').value = 'Gpo. CASS(*)'
    page1.getCell('A17').value = 'Bella Vista'
    page1.getCell('A17').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A18').value = 'Famaillá'
    page1.getCell('A18').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A19').value = 'La Corona'
    page1.getCell('A19').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A20').value = 'La Providencia'
    page1.getCell('A20').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A21').value = 'La Trinidad'
    page1.getCell('A21').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A22').value = 'Leales'
    page1.getCell('A22').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A23').value = 'Ñuñorco'
    page1.getCell('A23').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A24').value = 'Santa Bárbara'
    page1.getCell('A24').font = { name: 'Calibri', bold: false, size: 15 }
    page1.getCell('A25').value = 'Santa Rosa'
    page1.getCell('A25').font = { name: 'Calibri', bold: false, size: 15 }
    // page1.getCell('A26').value = 'San Juan'
    // page1.getCell('A26').font = { name: 'Calibri', bold: false, size: 13 }
    page1.getCell('A26').value = 'TOTALES'

    /** COLUMNAS FECHA PROBABLE INICIO - INGENIOS **/

    /** COLUMNA FECHA INICIO 2023**/

    page1.getCell('C10').value = fechasInicioIngenios.Cell10
      ? moment(fechasInicioIngenios.Cell10).format('DD/MM/YYYY')
      : null
    page1.getCell('C10').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C11').value = fechasInicioIngenios.Cell11
      ? moment(fechasInicioIngenios.Cell11).format('DD/MM/YYYY')
      : null
    page1.getCell('C11').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C12').value = fechasInicioIngenios.Cell12
      ? moment(fechasInicioIngenios.Cell12).format('DD/MM/YYYY')
      : null
    page1.getCell('C12').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C14').value = fechasInicioIngenios.Cell14
      ? moment(fechasInicioIngenios.Cell14).format('DD/MM/YYYY')
      : null
    page1.getCell('C14').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C15').value = fechasInicioIngenios.Cell15
      ? moment(fechasInicioIngenios.Cell15).format('DD/MM/YYYY')
      : null
    page1.getCell('C15').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C17').value = fechasInicioIngenios.Cell17
      ? moment(fechasInicioIngenios.Cell17).format('DD/MM/YYYY')
      : null
    page1.getCell('C17').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C18').value = fechasInicioIngenios.Cell18
      ? moment(fechasInicioIngenios.Cell18).format('DD/MM/YYYY')
      : null
    page1.getCell('C18').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C19').value = fechasInicioIngenios.Cell19
      ? moment(fechasInicioIngenios.Cell19).format('DD/MM/YYYY')
      : null
    page1.getCell('C19').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C20').value = fechasInicioIngenios.Cell20
      ? moment(fechasInicioIngenios.Cell20).format('DD/MM/YYYY')
      : null
    page1.getCell('C20').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C21').value = fechasInicioIngenios.Cell21
      ? moment(fechasInicioIngenios.Cell21).format('DD/MM/YYYY')
      : null
    page1.getCell('C21').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C22').value = fechasInicioIngenios.Cell22
      ? moment(fechasInicioIngenios.Cell22).format('DD/MM/YYYY')
      : null
    page1.getCell('C22').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C23').value = fechasInicioIngenios.Cell23
      ? moment(fechasInicioIngenios.Cell23).format('DD/MM/YYYY')
      : null
    page1.getCell('C23').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C24').value = fechasInicioIngenios.Cell24
      ? moment(fechasInicioIngenios.Cell24).format('DD/MM/YYYY')
      : null
    page1.getCell('C24').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('C25').value = fechasInicioIngenios.Cell25
      ? moment(fechasInicioIngenios.Cell25).format('DD/MM/YYYY')
      : null
    page1.getCell('C25').font = { name: 'Calibri', bold: true, size: 15 }

    // page1.getCell('C26').value = fechasInicioIngenios.Cell26
    //   ? moment(fechasInicioIngenios.Cell26).format('DD/MM/YYYY')
    //   : null
    // page1.getCell('C26').font = { name: 'Calibri', bold: true, size: 13 }

    /** COLUMNA FIN DE ZAFRA 2023 **/
    page1.getCell('E10').value =
      fechasInicioIngenios?.Cell10 === undefined
        ? null
        : fechasInicioIngenios?.Cell10 && fechasInicioIngenios?.CellE10 === null
          ? null
          : moment(fechasInicioIngenios?.CellE10).format('DD/MM/YYYY')

    page1.getCell('E10').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E11').value =
      fechasInicioIngenios?.Cell11 === undefined
        ? null
        : fechasInicioIngenios?.Cell11 && fechasInicioIngenios?.CellE11 === null
          ? null
          : moment(fechasInicioIngenios?.CellE11).format('DD/MM/YYYY')
    page1.getCell('E11').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E12').value =
      fechasInicioIngenios?.Cell12 === undefined
        ? null
        : fechasInicioIngenios?.Cell12 && fechasInicioIngenios?.CellE12 === null
          ? null
          : moment(fechasInicioIngenios?.CellE12).format('DD/MM/YYYY')
    page1.getCell('E12').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E14').value =
      fechasInicioIngenios?.Cell14 === undefined
        ? null
        : fechasInicioIngenios?.Cell14 && fechasInicioIngenios?.CellE14 === null
          ? null
          : moment(fechasInicioIngenios?.CellE14).format('DD/MM/YYYY')
    page1.getCell('E14').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E15').value =
      fechasInicioIngenios?.Cell15 === undefined
        ? null
        : fechasInicioIngenios?.Cell15 && fechasInicioIngenios?.CellE15 === null
          ? null
          : moment(fechasInicioIngenios?.CellE15).format('DD/MM/YYYY')
    page1.getCell('E15').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E17').value =
      fechasInicioIngenios?.Cell17 === undefined
        ? null
        : fechasInicioIngenios?.Cell17 && fechasInicioIngenios?.CellE17 === null
          ? null
          : moment(fechasInicioIngenios?.CellE17).format('DD/MM/YYYY')
    page1.getCell('E17').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E18').value =
      fechasInicioIngenios?.Cell18 === undefined
        ? null
        : fechasInicioIngenios?.Cell18 && fechasInicioIngenios?.CellE18 === null
          ? null
          : moment(fechasInicioIngenios?.CellE18).format('DD/MM/YYYY')
    page1.getCell('E18').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E19').value =
      fechasInicioIngenios?.Cell19 === undefined
        ? null
        : fechasInicioIngenios?.Cell19 && fechasInicioIngenios?.CellE19 === null
          ? null
          : moment(fechasInicioIngenios?.CellE19).format('DD/MM/YYYY')
    page1.getCell('E19').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E20').value =
      fechasInicioIngenios?.Cell20 === undefined
        ? null
        : fechasInicioIngenios?.Cell20 && fechasInicioIngenios?.CellE20 === null
          ? null
          : moment(fechasInicioIngenios?.CellE20).format('DD/MM/YYYY')
    page1.getCell('E20').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E21').value =
      fechasInicioIngenios?.Cell21 === undefined
        ? null
        : fechasInicioIngenios?.Cell21 && fechasInicioIngenios?.CellE21 === null
          ? null
          : moment(fechasInicioIngenios?.CellE21).format('DD/MM/YYYY')
    page1.getCell('E21').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E22').value =
      fechasInicioIngenios?.Cell22 === undefined
        ? null
        : fechasInicioIngenios?.Cell22 && fechasInicioIngenios?.CellE22 === null
          ? null
          : moment(fechasInicioIngenios?.CellE22).format('DD/MM/YYYY')
    page1.getCell('E22').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E23').value =
      fechasInicioIngenios?.Cell23 === undefined
        ? null
        : fechasInicioIngenios?.Cell23 && fechasInicioIngenios?.CellE23 === null
          ? null
          : moment(fechasInicioIngenios?.CellE23).format('DD/MM/YYYY')
    page1.getCell('E23').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E24').value =
      fechasInicioIngenios?.Cell24 === undefined
        ? null
        : fechasInicioIngenios?.Cell24 && fechasInicioIngenios?.CellE24 === null
          ? null
          : moment(fechasInicioIngenios?.CellE24).format('DD/MM/YYYY')
    page1.getCell('E24').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('E25').value =
      fechasInicioIngenios?.Cell25 === undefined
        ? null
        : fechasInicioIngenios?.Cell25 && fechasInicioIngenios?.CellE25 === null
          ? null
          : moment(fechasInicioIngenios?.CellE25).format('DD/MM/YYYY')
    page1.getCell('E25').font = { name: 'Calibri', bold: true, size: 15 }

    // page1.getCell('E26').value =
    //   fechasInicioIngenios?.Cell26 === undefined
    //     ? null
    //     : fechasInicioIngenios?.Cell26 && fechasInicioIngenios?.CellE26 === null
    //       ? null
    //       : moment(fechasInicioIngenios?.CellE26).format('DD/MM/YYYY')
    // page1.getCell('E26').font = { name: 'Calibri', bold: true, size: 13 }

    /** COLUMNA DIAS DE AVANCE 2023**/
    if (fechasInicioIngenios.Cell10) {
      page1.getCell('D10').value = {
        formula: '=if(E10="",(C27-C10)+1,(E10-C10)+1)',
        result: 7,
      }
    }
    page1.getCell('D10').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell11) {
      page1.getCell('D11').value = {
        formula: '=if(E11="",(C27-C11)+1,(E11-C11)+1)',
        result: 7,
      }
    }
    page1.getCell('D11').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell12) {
      page1.getCell('D12').value = {
        formula: '=if(E12="",(C27-C12)+1,(E12-C12)+1)',
        result: 7,
      }
    }
    page1.getCell('D12').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('D13').value = ''

    if (fechasInicioIngenios.Cell14) {
      page1.getCell('D14').value = {
        formula: '=if(E14="",(C27-C14)+1,(E14-C14)+1)',
        result: 7,
      }
    }
    page1.getCell('D14').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell15) {
      page1.getCell('D15').value = {
        formula: '=if(E15="",(C27-C15)+1,(E15-C15)+1)',
        result: 7,
      }
    }
    page1.getCell('D15').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('D16').value = ''

    if (fechasInicioIngenios.Cell17) {
      page1.getCell('D17').value = {
        formula: '=if(E17="",(C27-C17)+1,(E17-C17)+1)',
        result: 7,
      }
    }
    page1.getCell('D17').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell18) {
      page1.getCell('D18').value = {
        formula: '=if(E18="",(C27-C18)+1,(E18-C18)+1)',
        result: 7,
      }
    }
    page1.getCell('D18').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell19) {
      page1.getCell('D19').value = {
        formula: '=if(E19="",(C27-C19)+1,(E19-C19)+1)',
        result: 7,
      }
    }
    page1.getCell('D19').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell20) {
      page1.getCell('D20').value = {
        formula: '=if(E20="",(C27-C20)+1,(E20-C20)+1)',
        result: 7,
      }
    }
    page1.getCell('D20').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell21) {
      page1.getCell('D21').value = {
        formula: '=if(E21="",(C27-C21)+1,(E21-C21)+1)',
        result: 7,
      }
    }
    page1.getCell('D21').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell22) {
      page1.getCell('D22').value = {
        formula: '=if(E22="",(C27-C22)+1,(E22-C22)+1)',
        result: 7,
      }
    }
    page1.getCell('D22').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell23) {
      page1.getCell('D23').value = {
        formula: '=if(E23="",(C27-C23)+1,(E23-C23)+1)',
        result: 7,
      }
    }
    page1.getCell('D23').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell24) {
      page1.getCell('D24').value = {
        formula: '=if(E24="",(C27-C24)+1,(E24-C24)+1)',
        result: 7,
      }
    }
    page1.getCell('D24').font = { name: 'Calibri', bold: true, size: 15 }

    if (fechasInicioIngenios.Cell25) {
      page1.getCell('D25').value = {
        formula: '=if(E25="",(C27-C25)+1,(E25-C25)+1)',
        result: 7,
      }
    }
    page1.getCell('D25').font = { name: 'Calibri', bold: true, size: 15 }

    // if (fechasInicioIngenios.Cell26) {
    //   page1.getCell('D26').value = {
    //     formula: '=if(E26="",(C28-C26)+1,(E26-C26)+1)',
    //     result: 7,
    //   }
    // }
    // page1.getCell('D26').font = { name: 'Calibri', bold: true, size: 13 }

    /** COLUMNA FECHA INICIO 2022 **/

    page1.getCell('P10').value = moment(
      fechasInicioIngeniosComparativa.Cell10
    ).format('DD/MM/YYYY')
    page1.getCell('P10').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P11').value = moment(
      fechasInicioIngeniosComparativa.Cell11
    ).format('DD/MM/YYYY')
    page1.getCell('P11').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P12').value = moment(
      fechasInicioIngeniosComparativa.Cell12
    ).format('DD/MM/YYYY')
    page1.getCell('P12').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P14').value = moment(
      fechasInicioIngeniosComparativa.Cell14
    ).format('DD/MM/YYYY')
    page1.getCell('P14').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P15').value = moment(
      fechasInicioIngeniosComparativa.Cell15
    ).format('DD/MM/YYYY')
    page1.getCell('P15').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P17').value = moment(
      fechasInicioIngeniosComparativa.Cell17
    ).format('DD/MM/YYYY')
    page1.getCell('P17').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P18').value = moment(
      fechasInicioIngeniosComparativa.Cell18
    ).format('DD/MM/YYYY')
    page1.getCell('P18').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P19').value = moment(
      fechasInicioIngeniosComparativa.Cell19
    ).format('DD/MM/YYYY')
    page1.getCell('P19').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P20').value = moment(
      fechasInicioIngeniosComparativa.Cell20
    ).format('DD/MM/YYYY')
    page1.getCell('P20').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P21').value = moment(
      fechasInicioIngeniosComparativa.Cell21
    ).format('DD/MM/YYYY')
    page1.getCell('P21').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P22').value = moment(
      fechasInicioIngeniosComparativa.Cell22
    ).format('DD/MM/YYYY')
    page1.getCell('P22').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P23').value = moment(
      fechasInicioIngeniosComparativa.Cell23
    ).format('DD/MM/YYYY')
    page1.getCell('P23').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P24').value = moment(
      fechasInicioIngeniosComparativa.Cell24
    ).format('DD/MM/YYYY')
    page1.getCell('P24').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P25').value = moment(
      fechasInicioIngeniosComparativa.Cell25
    ).format('DD/MM/YYYY')
    page1.getCell('P25').font = { name: 'Calibri', bold: true, size: 15 }
    // page1.getCell('P26').value = moment(
    //   fechasInicioIngeniosComparativa.Cell26
    // ).format('DD/MM/YYYY')
    // page1.getCell('P26').font = { name: 'Calibri', bold: true, size: 13 }

    /** COLUMNA FIN DE ZAFRA 2022 **/
    page1.getCell('R10').value = moment(
      fechasInicioIngeniosComparativa?.CellR10
    ).format('DD/MM/YYYY')
    page1.getCell('R10').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R11').value = moment(
      fechasInicioIngeniosComparativa?.CellR11
    ).format('DD/MM/YYYY')
    page1.getCell('R11').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R12').value = moment(
      fechasInicioIngeniosComparativa?.CellR12
    ).format('DD/MM/YYYY')
    page1.getCell('R12').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R14').value = moment(
      fechasInicioIngeniosComparativa?.CellR14
    ).format('DD/MM/YYYY')
    page1.getCell('R14').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R15').value = moment(
      fechasInicioIngeniosComparativa?.CellR15
    ).format('DD/MM/YYYY')
    page1.getCell('R15').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R17').value = moment(
      fechasInicioIngeniosComparativa?.CellR17
    ).format('DD/MM/YYYY')
    page1.getCell('R17').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R18').value = moment(
      fechasInicioIngeniosComparativa?.CellR18
    ).format('DD/MM/YYYY')
    page1.getCell('R18').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R19').value = moment(
      fechasInicioIngeniosComparativa?.CellR19
    ).format('DD/MM/YYYY')
    page1.getCell('R19').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R20').value = moment(
      fechasInicioIngeniosComparativa?.CellR20
    ).format('DD/MM/YYYY')
    page1.getCell('R20').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R21').value = moment(
      fechasInicioIngeniosComparativa?.CellR21
    ).format('DD/MM/YYYY')
    page1.getCell('R21').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R22').value = moment(
      fechasInicioIngeniosComparativa?.CellR22
    ).format('DD/MM/YYYY')
    page1.getCell('R22').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R23').value = moment(
      fechasInicioIngeniosComparativa?.CellR23
    ).format('DD/MM/YYYY')
    page1.getCell('R23').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R24').value = moment(
      fechasInicioIngeniosComparativa?.CellR24
    ).format('DD/MM/YYYY')
    page1.getCell('R24').font = { name: 'Calibri', bold: true, size: 15 }

    page1.getCell('R25').value = moment(
      fechasInicioIngeniosComparativa?.CellR25
    ).format('DD/MM/YYYY')
    page1.getCell('R25').font = { name: 'Calibri', bold: true, size: 15 }

    // page1.getCell('R26').value = moment(
    //   fechasInicioIngeniosComparativa?.CellR26
    // ).format('DD/MM/YYYY')
    // page1.getCell('R26').font = { name: 'Calibri', bold: true, size: 13 }
    /************/

    /** COLUMNA DIAS DE AVANCE 2022**/
    page1.getCell('Q10').value = {
      formula: '=if(R10="",R27-P10,R10-P10)',
      result: 7,
    }
    page1.getCell('Q10').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q11').value = {
      formula: '=if(R11="",R27-P11,R11-P11)',
      result: 7,
    }
    page1.getCell('Q11').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q12').value = {
      formula: '=if(R12="",R27-P12,R12-P12)',
      result: 7,
    }
    page1.getCell('Q12').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q13').value = ''
    page1.getCell('Q14').value = {
      formula: '=if(R14="",R27-P14,R14-P14)',
      result: 7,
    }
    page1.getCell('Q14').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q15').value = {
      formula: '=if(R15="",R27-P15,R15-P15)',
      result: 7,
    }
    page1.getCell('Q15').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q16').value = ''
    page1.getCell('Q17').value = {
      formula: '=if(R17="",R27-P17,R17-P17)',
      result: 7,
    }
    page1.getCell('Q17').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q18').value = {
      formula: '=if(R18="",R27-P18,R18-P18)',
      result: 7,
    }
    page1.getCell('Q18').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q19').value = {
      formula: '=if(R19="",R27-P19,R19-P19)',
      result: 7,
    }
    page1.getCell('Q19').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q20').value = {
      formula: '=if(R20="",R27-P20,R20-P20)',
      result: 7,
    }
    page1.getCell('Q20').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q21').value = {
      formula: '=if(R21="",R27-P21,R21-P21)',
      result: 7,
    }
    page1.getCell('Q21').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q22').value = {
      formula: '=if(R22="",R27-P22,R22-P22)',
      result: 7,
    }
    page1.getCell('Q22').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q23').value = {
      formula: '=if(R23="",R27-P23,R23-P23)',
      result: 7,
    }
    page1.getCell('Q23').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q24').value = {
      formula: '=if(R24="",R27-P24,R24-P24)',
      result: 7,
    }
    page1.getCell('Q24').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('Q25').value = {
      formula: '=if(R25="",R27-P25,R25-P25)',
      result: 7,
    }
    page1.getCell('Q25').font = { name: 'Calibri', bold: true, size: 15 }

    // page1.getCell('Q26').value = {
    //   formula: '=if(R26="",R28-P26,R26-P26)',
    //   result: 7,
    // }
    // page1.getCell('Q26').font = { name: 'Calibri', bold: true, size: 13 }
    /*****************/

    /**TOTAL AZUCAR **/
    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 }
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 }
    }
    for (let i = 17; i <= 26; i++) {
      page1.getCell(i, 13).value = { formula: `SUM(K${i}:L${i})`, result: 7 }
    }

    for (let i = 10; i <= 12; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 }
    }
    for (let i = 14; i <= 15; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 }
    }
    for (let i = 17; i <= 26; i++) {
      page1.getCell(i, 26).value = { formula: `SUM(X${i}:Y${i})`, result: 7 }
    }

    /** FILA LOS BALCANES **/
    page1.getCell('F13').value = { formula: '=SUM(F10:F12)', result: 7 }
    page1.getCell('G13').value = { formula: '=SUM(G10:G12)', result: 7 }
    page1.getCell('H13').value = { formula: '=SUM(H10:H12)', result: 7 }
    page1.getCell('K13').value = { formula: '=SUM(K10:K12)', result: 7 }
    page1.getCell('L13').value = { formula: '=SUM(L10:L12)', result: 7 }
    page1.getCell('M13').value = { formula: '=SUM(M10:M12)', result: 7 }
    page1.getCell('N13').value = { formula: '=SUM(N10:N12)', result: 7 }
    page1.getCell('O13').value = { formula: '=SUM(O10:O12)', result: 7 }

    page1.getCell('S13').value = { formula: '=SUM(S10:S12)', result: 7 }
    page1.getCell('T13').value = { formula: '=SUM(T10:T12)', result: 7 }
    page1.getCell('U13').value = { formula: '=SUM(U10:U12)', result: 7 }
    page1.getCell('X13').value = { formula: '=SUM(X10:X12)', result: 7 }
    page1.getCell('Y13').value = { formula: '=SUM(Y10:Y12)', result: 7 }
    page1.getCell('Z13').value = { formula: '=SUM(Z10:Z12)', result: 7 }
    page1.getCell('AA13').value = { formula: '=SUM(AA10:AA12)', result: 7 }
    page1.getCell('AB13').value = { formula: '=SUM(AB10:AB12)', result: 7 }

    /** FILA CASS **/
    page1.getCell('F16').value = { formula: '=SUM(F14:F15)', result: 7 }
    page1.getCell('G16').value = { formula: '=SUM(G14:G15)', result: 7 }
    page1.getCell('H16').value = { formula: '=SUM(H14:H15)', result: 7 }
    page1.getCell('K16').value = { formula: '=SUM(K14:K15)', result: 7 }
    page1.getCell('L16').value = { formula: '=SUM(L14:L15)', result: 7 }
    page1.getCell('M16').value = { formula: '=SUM(M14:M15)', result: 7 }
    page1.getCell('N16').value = { formula: '=SUM(N14:N15)', result: 7 }
    page1.getCell('O16').value = { formula: '=SUM(O14:O15)', result: 7 }

    page1.getCell('S16').value = { formula: '=SUM(S14:S15)', result: 7 }
    page1.getCell('T16').value = { formula: '=SUM(T14:T15)', result: 7 }
    page1.getCell('U16').value = { formula: '=SUM(U14:U15)', result: 7 }
    page1.getCell('X16').value = { formula: '=SUM(X14:X15)', result: 7 }
    page1.getCell('Y16').value = { formula: '=SUM(Y14:Y15)', result: 7 }
    page1.getCell('Z16').value = { formula: '=SUM(Z14:Z15)', result: 7 }
    page1.getCell('AA16').value = { formula: '=SUM(AA14:AA15)', result: 7 }
    page1.getCell('AB16').value = { formula: '=SUM(AB14:AB15)', result: 7 }

    /** FILA TOTALES  2023**/
    page1.mergeCells('B26:C26')
    page1.getCell('C26').value = `Inicio desde el 1° Ingenio: ${Math.ceil(dataDiasZafra)}`
    page1.getCell('C26').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('C26').alignment = {
      horizontal: 'start',
      vertical: 'middle',
    }
    // page1.getCell('D27').value = Math.ceil(dataDiasZafra)
    // page1.getCell('D27').font = { name: 'Calibri', bold: true, size: 14 }

    page1.getCell('F26').value = {
      formula: '=SUM(F10:F12,F14:F15,F17:F25)',
      result: 7,
    }
    page1.getCell('G26').value = {
      formula: '=SUM(G10:G12,G14:G15,G17:G25)',
      result: 7,
    }
    page1.getCell('H26').value = {
      formula: '=SUM(H10:H12,H14:H15,H17:H25)',
      result: 7,
    }
    page1.getCell('I26').value = {
      formula: 'if(F27=0, 0,H27/F27*100)',
      result: 7,
    }
    page1.getCell('J26').value = {
      formula: 'if(G27=0, 0,H27/G27*100)',
      result: 7,
    }
    page1.getCell('K26').value = {
      formula: '=SUM(K10:K12,K14:K15,K17:K25)',
      result: 7,
    }
    page1.getCell('L26').value = {
      formula: '=L24+L22+L21+L20+L19+L18+L17+L15+L14+L12+L11+L10+L25',
      result: 7,
    }
    page1.getCell('M26').value = {
      formula: '=SUM(M10:M12,M14:M15,M17:M25)',
      result: 7,
    }
    page1.getCell('N26').value = {
      formula: '=SUM(N10:N12,N14:N15,N17:N25)',
      result: 7,
    }
    page1.getCell('O26').value = {
      formula: '=O24+O25+O22+O21+O19+O18+O17+O15+O14+O12+O25',
      result: 7,
    }
    /** FILAS TOTALES 2022 2*/
    page1.getCell('Q26').value = Math.ceil(dataDiasZafraComparativa)
    page1.getCell('Q26').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('S26').value = {
      formula: '=SUM(S10:S12,S14:S15,S17:S25)',
      result: 7,
    }
    page1.getCell('T26').value = {
      formula: '=SUM(T10:T12,T14:T15,T17:T25)',
      result: 7,
    }
    page1.getCell('U26').value = {
      formula: '=SUM(U10:U12,U14:U15,U17:U25)',
      result: 7,
    }
    page1.getCell('V26').value = {
      formula: 'if(S26=0,0,U26/S26*100)',
      result: 7,
    }
    page1.getCell('W26').value = {
      formula: 'if(T26=0,0,U26/T26*100)',
      result: 7,
    }
    page1.getCell('X26').value = {
      formula: '=SUM(X10:X12,X14:X15,X17:X25)',
      result: 7,
    }
    page1.getCell('Y26').value = {
      formula: '=Y24+Y22+Y21+Y20+Y19+Y18+Y17+Y15+Y14+Y12+Y11+Y10',
      result: 7,
    }
    page1.getCell('Z26').value = {
      formula: '=SUM(Z10:Z12,Z14:Z15,Z17:Z25)',
      result: 7,
    }
    page1.getCell('AA26').value = {
      formula: '=SUM(AA10:AA12,AA14:AA15,AA17:AA25)',
      result: 7,
    }
    page1.getCell('AB26').value = {
      formula: '=AB24+AB25+AB22+AB21+AB19+AB18+AB17+AB15+AB14+AB12+AB25',
      result: 7,
    }
    /***********/

    page1.mergeCells('A27:B27')
    page1.getCell('A27').value = `Datos hasta la fecha: `
    page1.getCell('A27').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.getCell('A27').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('A27').alignment = {
      horizontal: 'right',
      vertical: 'middle',
    }
    page1.getCell('C27').value = dateFormat
    page1.getCell('C27').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('C27').alignment = {
      horizontal: 'start',
      vertical: 'middle',
    }
    page1.getCell('C27').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.mergeCells('F27:O27')
    page1.getCell('F27').value = `ACUMULADO HASTA ${dateFormat}`
    page1.getCell('F27').font = { name: 'Calibri', bold: true, size: 16 }
    page1.getCell('F27').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    }

    page1.mergeCells('P27:Q27')
    page1.getCell('P27').value = 'Datos hasta la fecha: '
    page1.getCell('P27').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('P27').alignment = {
      horizontal: 'right',
      vertical: 'middle',
    }
    page1.getCell('P27').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.getCell('R27').value = dateComparativaFormat
    page1.getCell('R27').font = { name: 'Calibri', bold: true, size: 15 }
    page1.getCell('R27').alignment = {
      horizontal: 'start',
      vertical: 'middle',
    }
    page1.getCell('R27').border = {
      top: { style: 'medium', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: 'FFFFFF' } },
      bottom: { style: 'medium', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: 'FFFFFF' } },
    }
    page1.mergeCells('S27:AB27')
    page1.getCell('S27').value = `ACUMULADO HASTA ${dateComparativaFormat}`
    page1.getCell('S27').font = { name: 'Calibri', bold: true, size: 16 }
    page1.getCell('S27').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    }

    /** COMPARATIVOS **/
    page1.mergeCells('A30:O30')
    page1.getCell(
      'A30'
    ).value = `COMPARATIVO ZAFRA ${anioData}/${zafraParteDiario-1} - VARIACIÓN %  HASTA EL ${dateFormat}`
    page1.getCell('A30').alignment = alignCenter
    page1.getCell('A30').font = functionFont('Calibri', true, 17)

    page1.mergeCells('A31:E31')
    page1.getCell('A31').value = 'DIFERENCIA'

    page1.getCell('F31').value = { formula: 'F26-S26' }
    page1.getCell('G31').value = { formula: 'G26-T26' }
    page1.getCell('H31').value = { formula: 'H26-U26' }
    page1.getCell('I31').value = { formula: 'I26-V26' }
    page1.getCell('J31').value = { formula: 'J26-W26' }
    page1.getCell('K31').value = { formula: 'K26-X26' }
    page1.getCell('L31').value = { formula: 'L26-Y26' }
    page1.getCell('M31').value = { formula: 'M26-Z26' }
    page1.getCell('N31').value = { formula: 'N26-AA26' }
    page1.getCell('O31').value = { formula: 'O26-AB26' }

    page1.mergeCells('A32:E32')
    page1.getCell('A32').value = '%'
    page1.getCell('A32').alignment = alignCenter

    page1.getCell('F32').value = {
      formula: '=if(S26=0,"100%",F31/S26)',
      result: 7,
    }
    page1.getCell('G32').value = {
      formula: '=if(T26=0,"100%",G31/T26)',
      result: 7,
    }
    page1.getCell('H32').value = {
      formula: '=if(U26=0,"100%",H31/U26)',
      result: 7,
    }
    page1.getCell('I32').value = {
      formula: '=if(V26=0,"100%",I31/V26)',
      result: 7,
    }
    page1.getCell('J32').value = {
      formula: '=if(W26=0,"100%",J31/W26)',
      result: 7,
    }
    page1.getCell('K32').value = {
      formula: '=if(X26=0,"100%",K31/X26)',
      result: 7,
    }
    page1.getCell('L32').value = {
      formula: '=if(Y26=0,"100%",L31/Y26)',
      result: 7,
    }
    page1.getCell('M32').value = {
      formula: '=if(Z26=0,"100%",M31/Z26)',
      result: 7,
    }
    page1.getCell('N32').value = {
      formula: '=if(AA26=0,"100%",N31/AA26)',
      result: 7,
    }
    page1.getCell('O32').value = {
      formula: '=if(AB26=0,"100%",O31/AB26)',
      result: 7,
    }

    page1.mergeCells('P30:V31')
    page1.getCell('P30').value = `Inicio de zafra ${anioData}: ${inicioZafra !== null ? moment(inicioZafra).format('DD/MM/YYYY') : ''
      }
Inicio de zafra ${zafraParteDiario-1}: ${moment(inicioZafraComparativa).format(
        'DD/MM/YYYY'
      )}`
    page1.getCell('P30').alignment = alignStart
    page1.getCell('P30').font ={name: 'Calibri', bold: true, size: 15}

    page1.mergeCells('W30:AB31')
    page1.getCell('W30').value = `Fin de zafra ${anioData}: ${finZafra !== '' ? moment(finZafra).format('DD/MM/YYYY') : ''
      }
Fin de zafra ${zafraParteDiario-1}: ${moment(finZafraComparativa).format(
        'DD/MM/YYYY'
      )}`
    page1.getCell('W30').alignment = alignStart
    page1.getCell('W30').font ={name: 'Calibri', bold: true, size: 15}

    page1.mergeCells('P32:T32')
    page1.getCell('P32').value = 'Diferencia de Grado de avance'
    page1.getCell('P32').font = functionFont('Calibri', true, 17)
    page1.getCell('P32').alignment = alignStart
    page1.mergeCells('U32:V32')
    page1.getCell('U32').font = functionFont('Calibri', true, 17)
    page1.getCell('U32').value = { formula: '(V36-F36)/100' }
    page1.getCell('U32').alignment = alignStart

    page1.mergeCells('W32:AB32')

    /*** ESTIMACIONES ***/

    // const dataComparativa = dataConstante.dataComparativa;
    let estimacionEEAOC
    let CMBporDDJJ
    dataComparativa?.forEach((d) => {
      if (d.anio_zafra === anioData) {
        estimacionEEAOC = d.estimacion_EEAOC
      }
      if (d.anio_zafra === (zafraParteDiario-1)) {
        CMBporDDJJ = d.CMB_DDJJ
      }
    })

    for (let i = 34; i <= 37; i++) {
      page1.mergeCells(`A${i}:E${i}`)
      page1.mergeCells(`F${i}:G${i}`)
    }
    page1.getCell('A34').value = 'Estimación EEAOC Materia prima bruta'
    page1.getCell('A35').value = `Caña Molida bruta hasta el ${dateFormat}`
    page1.getCell('A36').value =
      'Grado de Avance con respecto a la previsión por E.E.A.O.C.'
    page1.getCell('A37').value = 'Diferencia'
    page1.getCell('F34').value = parseInt(estimacionEEAOC)
    page1.getCell('F35').value = { formula: 'F67' }
    page1.getCell('F36').value = { formula: 'if(F34=0,0,F35/F34*100)' }
    page1.getCell('F37').value = { formula: 'F36-100' }
    page1.getCell('H34').value = 'Tn'
    page1.getCell('H35').value = 'Tn'
    page1.getCell('H36').value = '%'
    page1.getCell('H37').value = '%'

    page1.mergeCells('I34:J37')
    page1.getCell('I34').value = `ZAFRA ${anioData}`
    page1.getCell('I34').font = functionFont('Calibri', true, 18)
    page1.getCell('I34').alignment = alignCenter
    page1.getCell('I34').fill = bgVerde

    page1.mergeCells('K34:K37')
    page1.getCell('K34').value = 'Producción Alcohol etílico anhidro [m3]'
    page1.getCell('K34').font = functionFont('Calibri', true, 14)
    page1.getCell('K34').alignment = alignCenter
    page1.getCell('K34').fill = bgVerde

    page1.mergeCells('L34:N37')
    const alcoholTotal = parseInt(d1['R44'])
      + parseInt(d6['R45']
        + parseInt(d4['R46'])
        + parseInt(d2['R47'])
        + parseInt(d7['R48'])
        + parseInt(d8['R49'])
        + parseInt(d3['R50'])
        + parseInt(d9['R51'])
        + parseInt(d10['R52'])
        + parseInt(d11['R53'])
        + parseInt(d5['R54'])
        + parseInt(d12['R55'])
        + parseInt(d13['R56'])
        + parseInt(d14['R57'])
      );
    page1.getCell('L34').value = alcoholTotal
    page1.getCell('L34').font = functionFont('Calibri', true, 24)
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
    page1.getCell('V34').value = parseInt(CMBporDDJJ)
    page1.getCell('V35').value = { formula: 'S26' }
    page1.getCell('V36').value = { formula: 'V35/V34*100' }
    page1.getCell('V37').value = { formula: '100-V36' }
    page1.getCell('X34').value = 'Tn'
    page1.getCell('X35').value = 'Tn'
    page1.getCell('X36').value = '%'
    page1.getCell('X37').value = '%'

    page1.mergeCells('Y34:AB37')
    page1.getCell('Y34').value = `ZAFRA ${anioDataComparativo-1}`
    page1.getCell('Y34').font = functionFont('Calibri', true, 18)
    page1.getCell('Y34').alignment = alignCenter
    page1.getCell('Y34').fill = bgAzul

    /**** BORDES + ****/
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
    for (let i = 3; i < 6; i++) {
      page1.getCell(7, i).border = borders(
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
    for (let i = 16; i < 19; i++) {
      page1.getCell(7, i).border = borders(
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

    for (let j = 1; j <= 1000; j++) {
      for (let i = 29; i <= 1000; i++) {
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
    for (let j = 38; j <= 1000; j++) {
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

    /***** *****/

    /*********  DATOS  *********/
    /** DATOS 2023 **/
    if (parteDiarioData.length > 0) {
      /** AGUILARES **/
      page1.getCell('F10').value = parseInt(d1['E10'])
      page1.getCell('G10').value = parseInt(d1['F10'])
      page1.getCell('H10').value = parseFloat(d1['G10'])
      page1.getCell('K10').value = parseInt(d1['J10'])
      page1.getCell('L10').value = parseInt(d1['K10'])
      page1.getCell('N10').value = parseInt(d1['M10'])
      page1.getCell('O10').value = parseInt(d1['N10'])

      /** Cruz Alta **/
      page1.getCell('F11').value = parseInt(d2['E11'])
      page1.getCell('G11').value = parseInt(d2['F11'])
      page1.getCell('H11').value = parseFloat(d2['G11'])
      page1.getCell('K11').value = parseInt(d2['J11'])
      page1.getCell('L11').value = parseInt(d2['K11'])
      page1.getCell('N11').value = parseInt(d2['M11'])
      page1.getCell('O11').value = parseInt(d2['N11'])

      /** La Florida **/
      page1.getCell('F12').value = parseInt(d3['E12'])
      page1.getCell('G12').value = parseInt(d3['F12'])
      page1.getCell('H12').value = parseFloat(d3['G12'])
      page1.getCell('K12').value = parseInt(d3['J12'])
      page1.getCell('L12').value = parseInt(d3['K12'])
      page1.getCell('N12').value = parseInt(d3['M12'])
      page1.getCell('O12').value = parseInt(d3['N12'])

      /** Concepcion **/
      page1.getCell('F14').value = parseInt(d4['E14'])
      page1.getCell('G14').value = parseInt(d4['F14'])
      page1.getCell('H14').value = parseFloat(d4['G14'])
      page1.getCell('K14').value = parseInt(d4['J14'])
      page1.getCell('L14').value = parseInt(d4['K14'])
      page1.getCell('N14').value = parseInt(d4['M14'])
      page1.getCell('O14').value = parseInt(d4['N14'])

      /** Marapa **/
      page1.getCell('F15').value = parseInt(d5['E15'])
      page1.getCell('G15').value = parseInt(d5['F15'])
      page1.getCell('H15').value = parseFloat(d5['G15'])
      page1.getCell('K15').value = parseInt(d5['J15'])
      page1.getCell('L15').value = parseInt(d5['K15'])
      page1.getCell('N15').value = parseInt(d5['M15'])
      page1.getCell('O15').value = parseInt(d5['N15'])

      /** Bella Vista **/
      page1.getCell('F17').value = parseInt(d6['E17'])
      page1.getCell('G17').value = parseInt(d6['F17'])
      page1.getCell('H17').value = parseFloat(d6['G17'])
      page1.getCell('K17').value = parseInt(d6['J17'])
      page1.getCell('L17').value = parseInt(d6['K17'])
      page1.getCell('N17').value = parseInt(d6['M17'])
      page1.getCell('O17').value = parseInt(d6['N17'])

      /** Famailla **/
      page1.getCell('F18').value = parseInt(d7['E18'])
      page1.getCell('G18').value = parseInt(d7['F18'])
      page1.getCell('H18').value = parseFloat(d7['G18'])
      page1.getCell('K18').value = parseInt(d7['J18'])
      page1.getCell('L18').value = parseInt(d7['K18'])
      page1.getCell('N18').value = parseInt(d7['M18'])
      page1.getCell('O18').value = parseInt(d7['N18'])

      /** La Corona **/
      page1.getCell('F19').value = parseInt(d8['E19'])
      page1.getCell('G19').value = parseInt(d8['F19'])
      page1.getCell('H19').value = parseFloat(d8['G19'])
      page1.getCell('K19').value = parseInt(d8['J19'])
      page1.getCell('L19').value = parseInt(d8['K19'])
      page1.getCell('N19').value = parseInt(d8['M19'])
      page1.getCell('O19').value = parseInt(d8['N19'])

      /** La Providencia **/
      page1.getCell('F20').value = parseInt(d9['E20'])
      page1.getCell('G20').value = parseInt(d9['F20'])
      page1.getCell('H20').value = parseFloat(d9['G20'])
      page1.getCell('K20').value = parseInt(d9['J20'])
      page1.getCell('L20').value = parseInt(d9['K20'])
      // if(anioData === 2023) page1.getCell('L20').note = 'FALTA AZ ORGANICO Y OTOS AZ'
      page1.getCell('N20').value = parseInt(d9['M20'])
      page1.getCell('O20').value = parseInt(d9['N20'])

      /** La Trinidad **/
      page1.getCell('F21').value = parseInt(d10['E21'])
      page1.getCell('G21').value = parseInt(d10['F21'])
      page1.getCell('H21').value = parseFloat(d10['G21'])
      page1.getCell('K21').value = parseInt(d10['J21'])
      page1.getCell('L21').value = parseInt(d10['K21'])
      page1.getCell('N21').value = parseInt(d10['M21'])
      page1.getCell('O21').value = parseInt(d10['N21'])

      /** Leales **/
      page1.getCell('F22').value = parseInt(d11['E22'])
      page1.getCell('G22').value = parseInt(d11['F22'])
      page1.getCell('H22').value = parseFloat(d11['G22'])
      page1.getCell('K22').value = parseInt(d11['J22'])
      page1.getCell('L22').value = parseInt(d11['K22'])
      page1.getCell('N22').value = parseInt(d11['M22'])
      page1.getCell('O22').value = parseInt(d11['N22'])

      /** Nunorco **/
      page1.getCell('F23').value = parseInt(d12['E23'])
      page1.getCell('G23').value = parseInt(d12['F23'])
      page1.getCell('H23').value = parseFloat(d12['G23'])
      page1.getCell('K23').value = parseInt(d12['J23'])
      page1.getCell('L23').value = parseInt(d12['K23'])
      page1.getCell('N23').value = parseInt(d12['M23'])
      page1.getCell('O23').value = parseInt(d12['N23'])

      /** Santa Barbara **/
      page1.getCell('F24').value = parseInt(d13['E24'])
      page1.getCell('G24').value = parseInt(d13['F24'])
      page1.getCell('H24').value = parseFloat(d13['G24'])
      page1.getCell('K24').value = parseInt(d13['J24'])
      page1.getCell('L24').value = parseInt(d13['K24'])
      page1.getCell('N24').value = parseInt(d13['M24'])
      page1.getCell('O24').value = parseInt(d13['N24'])

      /** Sta Rosa **/
      page1.getCell('F25').value = parseInt(d14['E25'])
      page1.getCell('G25').value = parseInt(d14['F25'])
      page1.getCell('H25').value = parseFloat(d14['G25'])
      page1.getCell('K25').value = parseInt(d14['J25'])
      page1.getCell('L25').value = parseInt(d14['K25'])
      page1.getCell('N25').value = parseInt(d14['M25'])
      page1.getCell('O25').value = parseInt(d14['N25'])

      /** San Juan */
      // page1.getCell('F26').value = parseInt(d15['E26'])
      // page1.getCell('G26').value = parseInt(d15['F26'])
      // page1.getCell('H26').value = parseFloat(d15['G26'])
      // page1.getCell('K26').value = parseInt(d15['J26'])
      // page1.getCell('L26').value = parseInt(d15['K26'])
      // page1.getCell('N26').value = parseInt(d15['M26'])
      // page1.getCell('O26').value = parseInt(d15['N26'])
    }

    /** DATOS 2022 **/
    /** AGUILARES **/
    page1.getCell('S10').value = parseInt(dc1['R10'])
    page1.getCell('T10').value = parseInt(dc1['S10'])
    page1.getCell('U10').value = parseFloat(dc1['T10'])
    page1.getCell('X10').value = parseInt(dc1['W10'])
    page1.getCell('Y10').value = parseInt(dc1['X10'])
    page1.getCell('AA10').value = parseInt(dc1['Z10'])
    page1.getCell('AB10').value = parseInt(dc1['AA10'])

    /** Cruz Alta **/
    page1.getCell('S11').value = parseInt(dc2['R11'])
    page1.getCell('T11').value = parseInt(dc2['S11'])
    page1.getCell('U11').value = parseFloat(dc2['T11'])
    page1.getCell('X11').value = parseInt(dc2['W11'])
    page1.getCell('Y11').value = parseInt(dc2['X11'])
    page1.getCell('AA11').value = parseInt(dc2['Z11'])
    page1.getCell('AB11').value = parseInt(dc2['AA11'])

    /** La Florida **/
    page1.getCell('S12').value = parseInt(dc3['R12'])
    page1.getCell('T12').value = parseInt(dc3['S12'])
    page1.getCell('U12').value = parseFloat(dc3['T12'])
    page1.getCell('X12').value = parseInt(dc3['W12'])
    page1.getCell('Y12').value = parseInt(dc3['X12'])
    page1.getCell('AA12').value = parseInt(dc3['Z12'])
    page1.getCell('AB12').value = parseInt(dc3['AA12'])

    /** Concepcion **/
    page1.getCell('S14').value = parseInt(dc4['R14'])
    page1.getCell('T14').value = parseInt(dc4['S14'])
    page1.getCell('U14').value = parseFloat(dc4['T14'])
    page1.getCell('X14').value = parseInt(dc4['W14'])
    if (anioDataComparativo === 2023)
      page1.getCell('X14').note = 'FALTA AZ REFINADO'
    page1.getCell('Y14').value = parseInt(dc4['X14'])
    page1.getCell('AA14').value = parseInt(dc4['Z14'])
    page1.getCell('AB14').value = parseInt(dc4['AA14'])

    /** Marapa **/
    page1.getCell('S15').value = parseInt(dc5['R15'])
    page1.getCell('T15').value = parseInt(dc5['S15'])
    page1.getCell('U15').value = parseFloat(dc5['T15'])
    page1.getCell('X15').value = parseInt(dc5['W15'])
    page1.getCell('Y15').value = parseInt(dc5['X15'])
    page1.getCell('AA15').value = parseInt(dc5['Z15'])
    page1.getCell('AB15').value = parseInt(dc5['AA15'])

    /** Bella Vista **/
    page1.getCell('S17').value = parseInt(dc6['R17'])
    page1.getCell('T17').value = parseInt(dc6['S17'])
    page1.getCell('U17').value = parseFloat(dc6['T17'])
    page1.getCell('X17').value = parseInt(dc6['W17'])
    page1.getCell('Y17').value = parseInt(dc6['X17'])
    page1.getCell('AA17').value = parseInt(dc6['Z17'])
    page1.getCell('AB17').value = parseInt(dc6['AA17'])

    /** Famailla **/
    page1.getCell('S18').value = parseInt(dc7['R18'])
    page1.getCell('T18').value = parseInt(dc7['S18'])
    page1.getCell('U18').value = parseFloat(dc7['T18'])
    page1.getCell('X18').value = parseInt(dc7['W18'])
    if (anioDataComparativo === 2023)
      page1.getCell('X18').note = 'FALTA AZ REFINADO'
    page1.getCell('Y18').value = parseInt(dc7['X18'])
    page1.getCell('AA18').value = parseInt(dc7['Z18'])
    page1.getCell('AB18').value = parseInt(dc7['AA18'])

    /** La Corona **/
    page1.getCell('S19').value = parseInt(dc8['R19'])
    page1.getCell('T19').value = parseInt(dc8['S19'])
    page1.getCell('U19').value = parseFloat(dc8['T19'])
    page1.getCell('X19').value = parseInt(dc8['W19'])
    page1.getCell('Y19').value = parseInt(dc8['X19'])
    page1.getCell('AA19').value = parseInt(dc8['Z19'])
    page1.getCell('AB19').value = parseInt(dc8['AA19'])

    /** La Providencia **/
    page1.getCell('S20').value = parseInt(dc9['R20'])
    page1.getCell('T20').value = parseInt(dc9['S20'])
    page1.getCell('U20').value = parseFloat(dc9['T20'])
    page1.getCell('X20').value = parseInt(dc9['W20'])
    page1.getCell('Y20').value = parseInt(dc9['X20'])
    if (anioDataComparativo === 2023)
      page1.getCell('Y20').note = 'FALTA AZ ORGANICO Y OTOS AZ'
    page1.getCell('AA20').value = parseInt(dc9['Z20'])
    page1.getCell('AB20').value = parseInt(dc9['AA20'])

    /** La Trinidad **/
    page1.getCell('S21').value = parseInt(dc10['R21'])
    page1.getCell('T21').value = parseInt(dc10['S21'])
    page1.getCell('U21').value = parseFloat(dc10['T21'])
    page1.getCell('X21').value = parseInt(dc10['W21'])
    page1.getCell('Y21').value = parseInt(dc10['X21'])
    page1.getCell('AA21').value = parseInt(dc10['Z21'])
    page1.getCell('AB21').value = parseInt(dc10['AA21'])

    /** Leales **/
    page1.getCell('S22').value = parseInt(dc11['R22'])
    page1.getCell('T22').value = parseInt(dc11['S22'])
    page1.getCell('U22').value = parseFloat(dc11['T22'])
    page1.getCell('X22').value = parseInt(dc11['W22'])
    if (anioDataComparativo === 2023)
      page1.getCell('X22').note = 'FALTA AZ REFINADO'
    page1.getCell('Y22').value = parseInt(dc11['X22'])
    page1.getCell('AA22').value = parseInt(dc11['Z22'])
    page1.getCell('AB22').value = parseInt(dc11['AA22'])

    /** Nunorco **/
    page1.getCell('S23').value = parseInt(dc12['R23'])
    page1.getCell('T23').value = parseInt(dc12['S23'])
    page1.getCell('U23').value = parseFloat(dc12['T23'])
    page1.getCell('X23').value = parseInt(dc12['W23'])
    page1.getCell('Y23').value = parseInt(dc12['X23'])
    page1.getCell('AA23').value = parseInt(dc12['Z23'])
    page1.getCell('AB23').value = parseInt(dc12['AA23'])

    /** Santa Barbara **/
    page1.getCell('S24').value = parseInt(dc13['R24'])
    page1.getCell('T24').value = parseInt(dc13['S24'])
    page1.getCell('U24').value = parseFloat(dc13['T24'])
    page1.getCell('X24').value = parseInt(dc13['W24'])
    page1.getCell('Y24').value = parseInt(dc13['X24'])
    page1.getCell('AA24').value = parseInt(dc13['Z24'])
    page1.getCell('AB24').value = parseInt(dc13['AA24'])

    /** Sta Rosa **/
    page1.getCell('S25').value = parseInt(dc14['R25'])
    page1.getCell('T25').value = parseInt(dc14['S25'])
    page1.getCell('U25').value = parseFloat(dc14['T25'])
    page1.getCell('X25').value = parseInt(dc14['W25'])
    page1.getCell('Y25').value = parseInt(dc14['X25'])
    page1.getCell('AA25').value = parseInt(dc14['Z25'])
    page1.getCell('AB25').value = parseInt(dc14['AA25'])

    /** San Juan **/
    // page1.getCell('S26').value = parseInt(dc15['R26'])
    // page1.getCell('T26').value = parseInt(dc15['S26'])
    // page1.getCell('U26').value = parseFloat(dc15['T26'])
    // page1.getCell('X26').value = parseInt(dc15['W26'])
    // page1.getCell('Y26').value = parseInt(dc15['X26'])
    // page1.getCell('AA26').value = parseInt(dc15['Z26'])
    // page1.getCell('AB26').value = parseInt(dc15['AA26'])

    /*******************/


    /**COLUMNA RTO CMB */
    for (let i = 10; i <= 26; i++) {
      if (page1.getCell(i, 6).value === 0) {
        page1.getCell(i, 9).value = 0
        page1.getCell(i, 10).value = 0
      } else {
        page1.getCell(i, 9).value = { formula: `=H${i}/F${i}*100`, result: 7 }
        page1.getCell(i, 10).value = { formula: `=H${i}/G${i}*100`, result: 7 }
      }
    }
    for (let i = 10; i <= 25; i++) {
      if (page1.getCell(i, 19).value === 0) {
        page1.getCell(i, 22).value = 0
        page1.getCell(i, 23).value = 0
      } else {
        page1.getCell(i, 22).value = { formula: `=U${i}/S${i}*100`, result: 7 }
        page1.getCell(i, 23).value = { formula: `=U${i}/T${i}*100`, result: 7 }
      }
    }

    page1.getCell('I13').value = {
      formula: 'if(F13=0, 0,H13/F13*100)',
      result: 14,
    }
    page1.getCell('J13').value = {
      formula: 'if(G13=0, 0,H13/G13*100)',
      result: 14,
    }

    page1.getCell('I16').value = {
      formula: 'if(F16=0, 0,H16/F16*100)',
      result: 14,
    }
    page1.getCell('J16').value = {
      formula: 'if(G16=0, 0,H16/G16*100)',
      result: 14,
    }

    page1.getCell('V13').value = {
      formula: 'if(S13=0, 0,U13/S13*100)',
      result: 14,
    }
    page1.getCell('W13').value = {
      formula: 'if(T13=0, 0,U13/T13*100)',
      result: 14,
    }

    page1.getCell('V16').value = {
      formula: 'if(S16=0, 0,U16/S16*100)',
      result: 14,
    }
    page1.getCell('W16').value = {
      formula: 'if(T16=0, 0,U16/T16*100)',
      result: 14,
    }
    page1.mergeCells('A28:AB29')

    page1.pageSetup.printArea = 'A1:AB37'
    page1.pageSetup.scale = 100
    page1.pageSetup.margins = {
      left: 0.1,
      right: 0.1,
      top: 0.75,
      bottom: 0.2,
      header: 0.2,
      footer: 0.1,
    }
    // page1.lastRow=37
    // page1.lastColumn = 28
    /******************************** PAGINA 2 ********************************/

    page2.getRow(20).font = functionFont('Calibri', true, 24)

    /** Tamanos filas y columnas **/
    page2.getColumn(1).width = '17'
    for (let i = 2; i <= 27; i++) {
      page2.getColumn(i).width = '17'
    }
    page2.getColumn(15).width = '19'
    page2.getColumn(28).width = '19'

    page2.getRow(1).height = '24'
    page2.getRow(2).height = '24'
    page2.getRow(3).height = '42'
    page2.getRow(5).height = '26'
    for (let i = 6; i <= 19; i++) {
      page2.getRow(i).height = '54'
    }

    page2.getRow(4).font = functionFont('Calibri', true, 16)
    page2.getRow(4).alignment = alignStart
    for (let i = 1; i <= 20; i++) {
      page2.getCell(6, i).fill = bgGris
      page2.getCell(9, i).fill = bgGris
      page2.getCell(13, i).fill = bgGris
      page2.getCell(17, i).fill = bgGris
    }

    /*** Alineaciones ***/
    for(let i =6; i<=19; i++) {
      page2.getRow(i).alignment = alignCenter
    }

    /*** Formato de numeros ***/
    for(let i=6;i<=19;i++){ 
      for(let j=3;j<=7;j++) {
        page2.getCell(i,j).numFmt = "#,##0"
      }
    }

    for(let i=6;i<=19;i++){ 
      for(let j=12;j<=20;j++) {
        page2.getCell(i,j).numFmt = "#,##0"
      }
    }

    /** Bordes **/
    page2.getRow(1).border = borders(
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000',
      'medium',
      '000000'
    )

    for (let i = 2; i <= 20; i++) {
      page2.getRow(i).border = borders(
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

    for (let i = 1; i <= 28; i++) {
      page2.getColumn(i).border = {
        top: { style: 'thin', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'thin', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      }
    }
    for (let i = 5; i <= 13; i++) {
      page2.getColumn(i).border = {
        top: { style: 'thin', color: { argb: '000000' } },
        left: { style: 'thin', color: { argb: '000000' } },
        bottom: { style: 'thin', color: { argb: '000000' } },
        right: { style: 'thin', color: { argb: '000000' } },
      }
    }
    page2.mergeCells('AC1:DD100')
    page2.mergeCells('A21:AB100')
    for (let j = 1; j <= 1000; j++) {
      for (let i = 29; i <= 1000; i++) {
        page2.getCell(j, i).border = borders(
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
    for (let j = 21; j <= 1000; j++) {
      for (let i = 1; i <= 1000; i++) {
        page2.getCell(j, i).border = borders(
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

    /**** AZUCARES ****/
    page2.mergeCells('A1:G2')
    page2.getCell(
      'A1'
    ).value = `PRODUCCIÓN DE AZÚCAR DISCRIMINADA POR TIPOLOGÍA ZAFRA ${anioData}`
    page2.getCell('A1').font = functionFont('Calibri', true, 18)
    page2.getCell('A1').alignment = alignCenter
    page2.getCell('A1').fill = bgVerde

    page2.mergeCells('A3:B5')
    page2.getCell('A3').value = 'Ingenios'
    page2.getCell('A3').font = functionFont('Calibri', true, 16)
    page2.getCell('A3').alignment = alignCenter

    page2.mergeCells('C3:G3')
    page2.getCell(
      'C3'
    ).value = `TIPOS DE AZÚCARES Y SUS CANTIDADES EN TONELADAS HASTA ${dateFormat}`
    page2.getCell('C3').font = functionFont('Calibri', true, 14)
    page2.getCell('C3').alignment = alignCenter
    page2.getCell('C3').fill = bgGris

    page2.mergeCells('C4:C5')
    page2.getCell('C4').value = `Común Tipo "A"`
    page2.getCell('C4').font = functionFont('Calibri', true, 16)
    page2.getCell('C4').alignment = alignCenter

    page2.mergeCells('D4:D5')
    page2.getCell('D4').value = 'Refinado'
    page2.getCell('D4').font = functionFont('Calibri', true, 16)
    page2.getCell('D4').alignment = alignCenter

    page2.mergeCells('E4:E5')
    page2.getCell('E4').value = 'Crudo'
    page2.getCell('E4').font = functionFont('Calibri', true, 16)
    page2.getCell('E4').alignment = alignCenter

    page2.mergeCells('F4:F5')
    page2.getCell('F4').value = 'Orgánico'
    page2.getCell('F4').font = functionFont('Calibri', true, 16)
    page2.getCell('F4').alignment = alignCenter

    page2.mergeCells('G4:G5')
    page2.getCell('G4').value = 'Otros'
    page2.getCell('G4').font = functionFont('Calibri', true, 16)
    page2.getCell('G4').alignment = alignCenter

    for (let i = 6; i <= 20; i++) {
      page2.mergeCells(`A${i}:B${i}`)
    }
    const ingenios = dataIngenios.filter((d) => d.nombre_ingenio !== 'San Juan')
    ingenios.forEach((d, i) => {
        page2.getCell(`A${i + 6}`).value = d?.nombre_ingenio
        page2.getCell(`A${i + 6}`).font = functionFont('Calibri', false, 16)
        page2.getCell(`A${i + 6}`).alignment = alignStart
    })
    page2.getCell('A20').value = 'Acumulado'
    page2.getCell('A20').font = functionFont('Calibri', true, 24)
    page2.getCell('A20').alignment = alignStart

    for (let i = 3; i <= 7; i++) {
      const asd = ['n', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
      page2.getCell(20, i).value = { formula: `SUM(${asd[i]}6:${asd[i]}19)` }
      page2.getCell(20, i).numFmt = "#,##0"
    }

    /**** ALCOHOL ****/
    page2.mergeCells('H1:T2')
    page2.getCell(
      'H1'
    ).value = `PRODUCCIÓN DE ALCOHOL ETÍLICO DISCRIMINADO POR TIPO -  CAMPAÑA ${anioData} (INICIO: ${fechaInicioDestileria !== null ? moment(fechaInicioDestileria).format('DD/MM/YYYY') : ''})`
    page2.getCell('H1').font = functionFont('Calibri', true, 18)
    page2.getCell('H1').alignment = alignCenter
    page2.getCell('H1').fill = bgAzul

    page2.mergeCells('H3:K4')
    page2.getCell('H3').value = 'Proceso de Destilacion'
    page2.getCell('H3').font = functionFont('Calibri', true, 20)
    page2.getCell('H3').alignment = alignCenter

    page2.mergeCells('L3:T3')
    page2.getCell(
      'L3'
    ).value = `TIPOS DE ALCOHOLES Y SUS VOLÚMENES EN METROS CÚBICOS HASTA ${dateFormat}`
    page2.getCell('L3').font = functionFont('Calibri', true, 14)
    page2.getCell('L3').alignment = alignCenter
    page2.getCell('L3').fill = bgGris

    for (let i = 5; i <= 19; i++) {
      page2.mergeCells(`H${i}:I${i}`)
      page2.getCell(`H${i}`).alignment = alignCenter
      page2.mergeCells(`J${i}:K${i}`)
      page2.getCell(`J${i}`).alignment = alignCenter
    }
    page2.getCell('H5').value = 'Destilería'
    page2.getCell('H5').font = functionFont('Calibri', true, 20)
    page2.getCell('J5').value = 'Anhidradora'
    page2.getCell('J5').font = functionFont('Calibri', true, 20)

    page2.getCell('H6').value = 'No posee'
    page2.getCell('H6').font = functionFont('Calibri', false,16)
    page2.getCell('J6').value = 'No posee'
    page2.getCell('J6').font = functionFont('Calibri', false,16)

    page2.getCell('H7').value = 'José Minetti y Cía. Ltda. SACI'
    page2.getCell('H7').font = functionFont('Calibri', false,16)
    page2.getCell('J7').value = 'Fronterita Energía S.A.'
    page2.getCell('J7').font = functionFont('Calibri', false,16)

    page2.getCell('H8').value =
      'Complejo Alimenticio San Salvador S.A.-Banda de Río Salí'
    page2.getCell('H8').font = functionFont('Calibri', false,16)
    page2.getCell('J8').value = 'Bio Atar  S.A.'
    page2.getCell('J8').font = functionFont('Calibri', false,16)

    page2.getCell('H9').value = 'No posee'
    page2.getCell('H9').font = functionFont('Calibri', false,16)
    page2.getCell('J9').value = 'No posee'
    page2.getCell('J9').font = functionFont('Calibri', false,16)

    page2.getCell('H10').value = 'Destilería Salta Refrescos S.A.'
    page2.getCell('H10').font = functionFont('Calibri', false,16)
    page2.getCell('J10').value = 'No posee'
    page2.getCell('J10').font = functionFont('Calibri', false,16)

    page2.getCell('H11').value = 'Sucroalcoholera del Sur S.A.'
    page2.getCell('H11').font = functionFont('Calibri', false,16)
    page2.getCell('J11').value = 'Bioenergía La Corona S.A.'
    page2.getCell('J11').font = functionFont('Calibri', false,16)

    page2.getCell('H12').value = 'Compañía Azucarera Los Balcanes S.A.'
    page2.getCell('H12').font = functionFont('Calibri', false,16)
    page2.getCell('J12').value = 'Compañía Azucarera Los Balcanes S.A.'
    page2.getCell('J12').font = functionFont('Calibri', false,16)

    page2.getCell('H13').value = 'No posee'
    page2.getCell('H13').font = functionFont('Calibri', false,16)
    page2.getCell('J13').value = 'No posee'
    page2.getCell('J13').font = functionFont('Calibri', false,16)

    page2.getCell('H14').value = 'Ansonnaud, Ricardo Sixto'
    page2.getCell('H14').font = functionFont('Calibri', false,16)
    page2.getCell('J14').value = 'Bio Trinidad S.A.'
    page2.getCell('J14').font = functionFont('Calibri', false,16)

    page2.getCell('H15').value = 'Compañía Inversora Industrial S.A.'
    page2.getCell('H15').font = functionFont('Calibri', false,16)
    page2.getCell('J15').value = 'Bioenergética Leales S.A.'
    page2.getCell('J15').font = functionFont('Calibri', false,16)

    page2.getCell('H16').value =
      'Complejo Alimenticio San Salvador S.A. Juan Bautista Alberdi (Sin funcionar)'
    page2.getCell('H16').font = functionFont('Calibri', false,16)
    page2.getCell('H16').alignment = alignCenter
    page2.getCell('J16').value = 'No posee'
    page2.getCell('J16').font = functionFont('Calibri', false,16)

    page2.getCell('H17').value = 'Industrias Santa Bárbara S.R.L.'
    page2.getCell('H17').font = functionFont('Calibri', false,16)
    page2.getCell('J17').value =
      'Energías Ecológicas del Tucumán S.A. (Sin funcionar)'
    page2.getCell('J17').font = functionFont('Calibri', false,16)

    page2.getCell('H18').value = 'No posee'
    page2.getCell('H18').font = functionFont('Calibri', false,16)
    page2.getCell('J18').value = 'Anhidradora Bioenergía Santa Rosa S.A. (*)'
    page2.getCell('J18').font = functionFont('Calibri', false,16)

    page2.getCell('H19').value = 'No posee'
    page2.getCell('H19').font = functionFont('Calibri', false,16)
    page2.getCell('J19').value = 'No posee'
    page2.getCell('J19').font = functionFont('Calibri', false,16)

    page2.mergeCells('H20:K20')
    page2.getCell('H20').value = 'Acumulado'
    page2.getCell('H20').font = functionFont('Calibri', true, 24)
    page2.getCell('H20').alignment = alignStart

    page2.mergeCells('L4:N5')
    page2.getCell('L4').value = 'Alcohol Total'
    page2.getCell('L4').font = functionFont('Calibri', true, 16)
    page2.getCell('L4').alignment = alignCenter

    page2.mergeCells('O4:Q5')
    page2.getCell('O4').value = 'Alcohol Hidratado'
    page2.getCell('O4').font = functionFont('Calibri', true, 16)
    page2.getCell('O4').alignment = alignCenter

    page2.mergeCells('R4:T5')
    page2.getCell('R4').value = 'Alcohol Anhidro'
    page2.getCell('R4').font = functionFont('Calibri', true, 16)
    page2.getCell('R4').alignment = alignCenter

    for (let i = 6; i <= 20; i++) {
      page2.mergeCells(`L${i}:N${i}`)
      page2.getCell(`L${i}`).alignment = alignCenter
      page2.mergeCells(`O${i}:Q${i}`)
      page2.getCell(`O${i}`).alignment = alignCenter
      page2.mergeCells(`R${i}:T${i}`)
      page2.getCell(`R${i}`).alignment = alignCenter
    }

    page2.getCell('L20').value = { formula: `=SUM(L6:N19)` }
    page2.getCell('L20').numFmt = "#,##0"
    page2.getCell('O20').value = {
      formula: `=O18+O16+O15+O14+O12+O11+O10+O8+O7`,
    }
    page2.getCell('O20').numFmt = "#,##0"
    page2.getCell('R20').value = { formula: `=R19+R15+R14+R12+R11+R8+R7` }
    page2.getCell('R20').numFmt = "#,##0"

    /**** EXPORTACIONES ****/
    page2.mergeCells('U1:Y2')
    page2.getCell(
      'U1'
    ).value = `MERCADO EXTERNO DEL AZÚCAR - ZAFRA ${anioData} Al ${dateFormat}`
    page2.getCell('U1').alignment = alignCenter
    page2.getCell('U1').font = functionFont('Calibri', true, 16)

    page2.mergeCells('Z1:AB2')
    page2.getCell('Z1').value = 'Acumulado: '
    page2.getCell('Z1').alignment = alignCenter
    page2.getCell('Z1').font = functionFont('Calibri', true, 16)

    page2.mergeCells('U3:AB20')

    page2.getRow(1).alignment = { horizontal: 'center', vertical: 'middle' }

    /*********  ********/
    for(let i=6; i<=19;i++) {
      page2.getRow(i).font = {size: 15}
    }

    /**** PRODUCCION AZUCAR DISCRIMINADA ****/
    page2.getCell('C6').value = parseInt(d1['J10'])
    page2.getCell('D6').value = parseInt(d1['D43'])
    page2.getCell('E6').value = parseFloat(d1['K10'])
    page2.getCell('F6').value = parseInt(d1['F43'])
    page2.getCell('G6').value = parseInt(d1['G43'])

    page2.getCell('C7').value = parseInt(d6['J17'])
    page2.getCell('D7').value = parseInt(d6['D45'])
    page2.getCell('E7').value = parseFloat(d6['K17'])
    page2.getCell('F7').value = parseInt(d6['F45'])
    page2.getCell('G7').value = parseInt(d6['G45'])

    page2.getCell('C8').value = parseInt(d4['C46'])
    page2.getCell('D8').value = parseInt(d4['D46'])
    page2.getCell('E8').value = parseFloat(d4['K14'])
    page2.getCell('F8').value = parseInt(d4['F46'])
    page2.getCell('G8').value = parseInt(d4['G46'])

    page2.getCell('C9').value = parseInt(d2['J11'])
    page2.getCell('D9').value = parseInt(d2['D47'])
    page2.getCell('E9').value = parseFloat(d2['K11'])
    page2.getCell('F9').value = parseInt(d2['F47'])
    page2.getCell('G9').value = parseInt(d2['G47'])

    page2.getCell('C10').value = parseInt(d7['C48'])
    page2.getCell('D10').value = parseInt(d7['D48'])
    page2.getCell('E10').value = parseFloat(d7['K18'])
    page2.getCell('F10').value = parseInt(d7['F48'])
    page2.getCell('G10').value = parseInt(d7['G48'])

    page2.getCell('C11').value = parseInt(d8['J19'])
    page2.getCell('D11').value = parseInt(d8['D49'])
    page2.getCell('E11').value = parseFloat(d8['K19'])
    page2.getCell('F11').value = parseInt(d8['F49'])
    page2.getCell('G11').value = parseInt(d8['G49'])

    page2.getCell('C12').value = parseInt(d3['J12'])
    page2.getCell('D12').value = parseInt(d3['D50'])
    page2.getCell('E12').value = parseFloat(d3['K12'])
    page2.getCell('F12').value = parseInt(d3['F50'])
    page2.getCell('G12').value = parseInt(d3['G50'])

    page2.getCell('C13').value = parseInt(d9['J20'])
    page2.getCell('D13').value = parseInt(d9['D51'])
    page2.getCell('E13').value = parseFloat(d9['E51'])
    page2.getCell('F13').value = parseInt(d9['F51'])
    page2.getCell('G13').value = parseInt(d9['G51'])

    page2.getCell('C14').value = parseInt(d10['J21'])
    page2.getCell('D14').value = parseInt(d10['D52'])
    page2.getCell('E14').value = parseFloat(d10['K21'])
    page2.getCell('F14').value = parseInt(d10['F52'])
    page2.getCell('G14').value = parseInt(d10['G52'])

    page2.getCell('C15').value = parseInt(d11['C53'])
    page2.getCell('D15').value = parseInt(d11['D53'])
    page2.getCell('E15').value = parseFloat(d11['K22'])
    page2.getCell('F15').value = parseInt(d11['F53'])
    page2.getCell('G15').value = parseInt(d11['G53'])

    page2.getCell('C16').value = parseInt(d5['J15'])
    page2.getCell('D16').value = parseInt(d5['D54'])
    page2.getCell('E16').value = parseFloat(d5['K15'])
    page2.getCell('F16').value = parseInt(d5['F54'])
    page2.getCell('G16').value = parseInt(d5['G54'])

    page2.getCell('C17').value = parseInt(d13['J24'])
    page2.getCell('D17').value = parseInt(d13['D56'])
    page2.getCell('E17').value = parseFloat(d13['K24'])
    page2.getCell('F17').value = parseInt(d13['F56'])
    page2.getCell('G17').value = parseInt(d13['G56'])

    page2.getCell('C18').value = parseInt(d14['J25'])
    page2.getCell('D18').value = parseInt(d14['D57'])
    page2.getCell('E18').value = parseFloat(d14['K25'])
    page2.getCell('F18').value = parseInt(d14['F57'])
    page2.getCell('G18').value = parseInt(d14['G57'])

    page2.getCell('C19').value = parseInt(d12['J23'])
    page2.getCell('D19').value = parseInt(d12['D55'])
    page2.getCell('E19').value = parseFloat(d12['K23'])
    page2.getCell('F19').value = parseInt(d12['F55'])
    page2.getCell('G19').value = parseInt(d12['G55'])
    /************/

    /****** PRODUCCION DE ALCOHOL ******/
    page2.getCell('L6').value = parseInt(d1['N10'])
    page2.getCell('O6').value = parseInt(d1['O44'])
    page2.getCell('R6').value = parseFloat(d1['R44'])

    page2.getCell('L7').value = parseInt(d6['N17'])
    page2.getCell('O7').value = parseInt(d6['O45'])
    page2.getCell('R7').value = parseFloat(d6['R45'])

    page2.getCell('L8').value = parseInt(d4['N14'])
    page2.getCell('O8').value = parseInt(d4['O46'])
    page2.getCell('R8').value = parseFloat(d4['R46'])

    page2.getCell('L9').value = parseInt(d2['N11'])
    page2.getCell('O9').value = parseInt(d2['O47'])
    page2.getCell('R9').value = parseFloat(d2['R47'])

    page2.getCell('L10').value = parseInt(d7['N18'])
    page2.getCell('O10').value = parseInt(d7['O48'])
    page2.getCell('R10').value = parseFloat(d7['R48'])

    page2.getCell('L11').value = parseInt(d8['N19'])
    page2.getCell('O11').value = parseInt(d8['O49'])
    page2.getCell('R11').value = parseFloat(d8['R49'])

    page2.getCell('L12').value = parseInt(d3['N12'])
    page2.getCell('O12').value = parseInt(d3['O50'])
    page2.getCell('R12').value = parseFloat(d3['R50'])

    page2.getCell('L13').value = parseInt(d9['N20'])
    page2.getCell('O13').value = parseInt(d9['O51'])
    page2.getCell('R13').value = parseFloat(d9['R51'])

    page2.getCell('L14').value = parseInt(d10['N21'])
    page2.getCell('O14').value = parseInt(d10['O52'])
    page2.getCell('R14').value = parseFloat(d10['R52'])

    page2.getCell('L15').value = parseInt(d11['N22'])
    page2.getCell('O15').value = parseInt(d11['O53'])
    page2.getCell('R15').value = parseFloat(d11['R53'])

    page2.getCell('L16').value = parseInt(d5['N15'])
    page2.getCell('O16').value = parseInt(d5['O54'])
    page2.getCell('R16').value = parseFloat(d5['R54'])

    page2.getCell('L17').value = parseInt(d13['N24'])
    page2.getCell('O17').value = parseInt(d13['O56'])
    page2.getCell('R17').value = parseFloat(d13['R56'])

    page2.getCell('L18').value = parseInt(d14['N25'])
    page2.getCell('O18').value = parseInt(d14['O57'])
    page2.getCell('R18').value = parseFloat(d14['R57'])

    page2.getCell('L19').value = parseInt(d12['N23'])
    page2.getCell('O19').value = parseInt(d12['O55'])
    page2.getCell('R19').value = parseFloat(d12['R55'])

    /****************************************************************************************/


    page2.pageSetup.printArea = 'A1:AB20'
    page2.pageSetup.scale = 100
    page2.pageSetup.margins = {
      left: 0.1,
      right: 0.1,
      top: 0.75,
      bottom: 0.2,
      header: 0.2,
      footer: 0.1,
    }
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
        window.location.href = '/admin/home'
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
        window.location.href = '/admin/home'
      }
      setLoadingDownload(false)
      setDataImport(null)
      setDataImportComparativa(null)
      setDataImportDestileria(null)
      setDataImportDestileriaComparativa(null)
    } catch (error) {
      console.log(error)
    }
  }
}
