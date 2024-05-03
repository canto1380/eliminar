import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TitlePage from '../../components/TitlePages'
import ParteDiario from '../../components/ParteDiario/ParteDiario'
import Filtros from '../../components/Filtros'
import { getDataPartesDiariosBE } from '../../utils/queryAPI/partesDiariosQuery'
import Spinn from '../../components/Spinner'
import MsgError from '../../components/Messages/MsgError'
import { getPeriodoZafra } from '../../utils/queryAPI/periodosZafra'
import { getIngenios } from '../../utils/queryAPI/ingenios'

const ParteDiarioContainer = () => {
  const [dataEnd, setDataEnd] = useState(null)
  const [dataZafra, setDataZafra] = useState(null)
  const [dataAnio, setDataAnio] = useState(null)
  const [dataMes, setDataMes] = useState(null)
  const [dataQuincena, setDataQuincena] = useState(null)
  const [dataParteDiariosHistoricos, setDataParteDiariosHistoricos] =
    useState(null)
  const [dataImport, setDataImport] = useState(null)
  const [dataImportComparativa, setDataImportComparativa] = useState(null)
  const [banderaDataNull, setBanderaDataNull] = useState(false)
  const [dateInicioIngenios, setDateInicioIngenios] = useState(null)
  const [dateFinIngenios, setDateFinIngenios] = useState(null)
  const [dataIngenios, setDataIngenios] = useState(null)
  const [zafraParteDiario, setZafraParteDiario] = useState(null)

  const [inicioZafra, setInicioZafra] = useState(null)
  const [finZafra, setFinZafra] = useState(null)
  const [inicioZafraComparativa, setInicioZafraComparativa] = useState(null)
  const [finZafraComparativa, setFinZafraComparativa] = useState(undefined)

  useEffect(() => {
    if (dataZafra !== null) {
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafra])

  const getData = async () => {
    setDataParteDiariosHistoricos(null)
    const params = {
      fechadesde: `01-04-${dataZafra}`,
      fechahasta: `31-03-${dataZafra + 1}`,
    }
    /***** DESDE FRONTEND *****/
    // const data = await getDataPartesDiarios(params) DESDE FRONTEND
    // setDataParteDiariosHistoricos(data?.ParteDiarios)

    /***** DESDE BACKEND *****/
    const data = await getDataPartesDiariosBE(params, '/dataQuincenal') // DESDE BACKEND
    setDataParteDiariosHistoricos(data)
  }

  useEffect(() => {
    if (dataEnd !== null) {
      getDataImport()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dataEnd,
    inicioZafra,
    finZafra,
    inicioZafraComparativa,
    finZafraComparativa,
  ])
  const getDataImport = async () => {
    console.log(inicioZafra)
    console.log(finZafra)
    console.log(dataEnd)
    const inicio = new Date(inicioZafra)
    const fin = new Date(finZafra)

    const fechaInicio = `${inicio.getDate()}-${
      inicio.getMonth() + 1
    }-${zafraParteDiario}`
    const fechaFin =
      finZafra === ''
        ? `${dataEnd.getDate()}-${
            dataEnd.getMonth() + 1
          }-${dataEnd.getFullYear()}`
        : `${fin.getDate()}-${fin.getMonth() + 1}-${fin.getFullYear()}`

    console.log(fechaFin)
    // console.log(inicioZafra, inicioZafraComparativa)
    // console.log(inicioZafraDate.getDay() - 1)
    // console.log(inicioZafraDate.getMonth())

    const params = {
      fechadesde: fechaInicio,
      fechahasta: `31-03-${zafraParteDiario + 1}`,
    }
    const params1 = {
      fechadesde: `01-04-${zafraParteDiario - 1}`,
      fechahasta: `31-03-${zafraParteDiario}`,
    }

    /***** DESDE BACKEND *****/
    const data = await getDataPartesDiariosBE(params, '/parteDiario')
    setDataImport(data)

    const dataComparativa = await getDataPartesDiariosBE(
      params1,
      '/parteDiario'
    )
    setDataImportComparativa(dataComparativa)
  }

  useEffect(() => {
    const dataNow = new Date()
    if (dataZafra === null) {
      setDataZafra(dataNow.getFullYear())
    }

    if (dataAnio === null) {
      setDataAnio(dataNow.getFullYear())
    }
    if (dataMes === null) {
      setDataMes(dataNow.getMonth() + 1)
    }
    if (dataQuincena === null) {
      if (dataNow.getDate() <= 15) {
        setDataQuincena(1)
      } else {
        setDataQuincena(2)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (dataEnd) {
      getDataPeriodos()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataEnd])
  const getDataPeriodos = async () => {
    const params = { limit: 10000000, anio: zafraParteDiario }
    const data = await getPeriodoZafra(params)
    setDateInicioIngenios(data)

    const params1 = { limit: 10000000, anio: zafraParteDiario - 1 }
    const data1 = await getPeriodoZafra(params1)
    setDateFinIngenios(data1)
  }
  useEffect(() => {
    getDataIngenios()
  }, [])
  const getDataIngenios = async () => {
    const data = await getIngenios()
    setDataIngenios(data)
  }

  useEffect(() => {
    inicioFinPeriodos()
    inicioFinPeriodosComparativos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateInicioIngenios, dateFinIngenios])

  let inicioZafra1 = new Date('3/10/2100')
  let finZafra1 = new Date('1/1/1910')
  const inicioFinPeriodos = () => {
    for (let i = 0; i < dateInicioIngenios?.length; i++) {
      inicioZafra1 =
        new Date(dateInicioIngenios[i].inicio_zafra) < inicioZafra1
          ? new Date(dateInicioIngenios[i].inicio_zafra)
          : inicioZafra1
      setInicioZafra(inicioZafra1)

      if (dateInicioIngenios[i].fin_zafra === null) {
        setFinZafra('')
        return
      } else {
        finZafra1 =
          new Date(dateInicioIngenios[i].fin_zafra) > finZafra1
            ? new Date(dateInicioIngenios[i].fin_zafra)
            : finZafra1
        setFinZafra(finZafra1)
      }
    }
  }

  let inicioZafra2 = new Date('3/10/2100')
  let finZafra2 = new Date('1/1/1910')
  const inicioFinPeriodosComparativos = () => {
    for (let i = 0; i < dateFinIngenios?.length; i++) {
      inicioZafra2 =
        new Date(dateFinIngenios[i].inicio_zafra) < inicioZafra2
          ? new Date(dateFinIngenios[i].inicio_zafra)
          : inicioZafra2
      setInicioZafraComparativa(inicioZafra2)

      if (dateFinIngenios[i].fin_zafra === null) {
        setFinZafraComparativa('')
        return
      } else {
        finZafra2 =
          new Date(dateFinIngenios[i].fin_zafra) > finZafra2
            ? new Date(dateFinIngenios[i].fin_zafra)
            : finZafra2
        setFinZafraComparativa(finZafra2)
      }
    }
  }

  return (
    <Container fluid>
      {banderaDataNull && (
        <MsgError
          text1='Estamos procesando la información.'
          text2='Intente de nuevo.'
        />
      )}
      <TitlePage titlePage='Parte Diario Directorio' />
      <hr className='mx-3 mt-1' />
      {dataParteDiariosHistoricos === null ? (
        <div className='d-flex justify-content-center align-items-center text-center'>
          <Spinn type='data' />
        </div>
      ) : (
        <>
          <div className='px-4'>
            <span className='text-danger fw-bolder'>*</span>
            <span className='text-legend'>
              Periodos desde 01/04 al 31/03 del siguiente año
            </span>
          </div>
          <Filtros
            setDataEnd={setDataEnd}
            setDataAnio={setDataAnio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            setDataZafra={setDataZafra}
            dataEnd={dataEnd}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            bandFilterZafraAnio={true}
            bandFilterAnio={true}
            bandFilterMes={true}
            bandFilterQuincena={true}
            BandFilterDiaParteDirectorio={true}
            zafraParteDiario={zafraParteDiario}
            setZafraParteDiario={setZafraParteDiario}
          />
          <ParteDiario
            dataEnd={dataEnd}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
            setDataAnio={setDataAnio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            setDataZafra={setDataZafra}
            dataParteDiariosHistoricos={dataParteDiariosHistoricos}
            dataImport={dataImport}
            dataImportComparativa={dataImportComparativa}
            setBanderaDataNull={setBanderaDataNull}
            setDataEnd={setDataEnd}
            setDataImport={setDataImport}
            setDataImportComparativa={setDataImportComparativa}
            dateInicioIngenios={dateInicioIngenios}
            dateFinIngenios={dateFinIngenios}
            dataIngenios={dataIngenios}
          />
        </>
      )}
    </Container>
  )
}
export default ParteDiarioContainer
