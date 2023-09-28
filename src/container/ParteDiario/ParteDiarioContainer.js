import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TitlePage from '../../components/TitlePages'
import ParteDiario from '../../components/ParteDiario/ParteDiario'
import Filtros from '../../components/Filtros'
import { getDataPartesDiarios } from '../../utils/queryAPI/partesDiariosQuery'
import moment from 'moment'
import Spinn from '../../components/Spinner'
import MsgError from '../../components/Messages/MsgError'

const ParteDiarioContainer = () => {
  const [idNewsCategory, setIdNewsCategory] = useState('')
  const [dataEnd, setDataEnd] = useState(null)
  const [dataZafra, setDataZafra] = useState(null)
  const [dataAnio, setDataAnio] = useState(null)
  const [dataMes, setDataMes] = useState(null)
  const [dataQuincena, setDataQuincena] = useState(null)
  const [dataParteDiariosHistoricos, setDataParteDiariosHistoricos] =
    useState(null)
  const [dataImport, setDataImport] = useState(null)
  const [dataImportComparativa, setDataImportComparativa] = useState(null)
  const [banderaDataNull, setBanderaDataNull] = useState(false);

  useEffect(() => {
    if (dataZafra !== null) {
      getData()
    }
  }, [dataZafra])
  const getData = async () => {
    setDataParteDiariosHistoricos(null)
    const params = {
      fechadesde: `25-04-${dataZafra}`,
      fechahasta: `24-04-${dataZafra + 1}`,
    }
    const data = await getDataPartesDiarios(params)
    setDataParteDiariosHistoricos(data?.ParteDiarios)
  }

  useEffect(() => {
    if (dataEnd !== null) {
      getDataImport()
    }
  }, [dataEnd])
  const getDataImport = async () => {
    const anioDataEnd = dataEnd.getFullYear()
    const params = {
      fechadesde: `25-04-${anioDataEnd}`,
      fechahasta: `24-04-${anioDataEnd + 1}`,
    }
    const data = await getDataPartesDiarios(params)
    setDataImport(data?.ParteDiarios)

    const params1 = {
      fechadesde: `25-04-${anioDataEnd - 1}`,
      fechahasta: `24-04-${anioDataEnd}`,
    }
    const dataComparativa = await getDataPartesDiarios(params1)
    setDataImportComparativa(dataComparativa?.ParteDiarios)
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
  }, [])
  return (
    <Container fluid>
      {banderaDataNull && (
          <MsgError text1="Estamos procesando la información." text2='Intente de nuevo' />
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
              Periodos desde 25/04 al 24/04 del siguiente año
            </span>
          </div>
          <Filtros
            setIdNewsCategory={setIdNewsCategory}
            setDataEnd={setDataEnd}
            setDataAnio={setDataAnio}
            setDataMes={setDataMes}
            setDataQuincena={setDataQuincena}
            setDataZafra={setDataZafra}
            dataAnio={dataAnio}
            dataMes={dataMes}
            dataQuincena={dataQuincena}
            dataZafra={dataZafra}
          />
          <ParteDiario
            idNewsCategory={idNewsCategory}
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
          />
        </>
      )}
    </Container>
  )
}
export default ParteDiarioContainer
