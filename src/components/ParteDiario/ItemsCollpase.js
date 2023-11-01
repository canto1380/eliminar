import ListadoDatos from './ListadoDatos'
import { useState, useEffect } from 'react'
import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { dateConverted } from '../../helpers/helpers'
import { columns } from './ColumnasTablaListadoDatos'

const ItemCollpse = ({
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  dataParteDiariosHistoricos,
}) => {
  const [dataQuincenal, setDataQuincenal] = useState([])
  const [aguilares, setAguilares] = useState([])
  const [bellaVista, setBellaVista] = useState([])
  const [concepcion, setConcepcion] = useState([])
  const [cruzAlta, setCruzAlta] = useState([])
  const [famailla, setFamailla] = useState([])
  const [laCorona, setLaCorona] = useState([])
  const [laFlorida, setLaFlorida] = useState([])
  const [laProvidencia, setLaProvidencia] = useState([])
  const [laTrinidad, setLaTrinidad] = useState([])
  const [leales, setLeales] = useState([])
  const [marapa, setMarapa] = useState([])
  const [santaBarbara, setSantaBarbara] = useState([])
  const [santaRosa, setSantaRosa] = useState([])
  const [nunorco, setNunorco] = useState([])
  
  const panelStyle = {
    marginBottom: 24,
    border: 'none',
  }

  useEffect(() => {
    dataPorQuincena()
  }, [dataZafra, dataAnio, dataMes, dataQuincena])

  const dataPorQuincena = () => {
    let arr = []
    
    dataParteDiariosHistoricos?.forEach((data) => {
      const newDate = dateConverted(data.FechaParte)
      function getLastDayOfMonth(month) {
        const date = new Date();
        date.setMonth(month);
        date.setDate(0);
        return date.getDate();
      }

      /**FORMATO (OBJECT):  Sat Sep 16 2023 00:00:00 GMT-0300 (hora estándar de Argentina)  **/
      const fechaParametro1 = new Date(
        `${dataMes}/${dataQuincena === 1 ? 1 : 16}/${dataAnio}`
      )
      const fechaParametro2 = new Date(
        `${dataMes}/${dataQuincena === 1 ? 15 : getLastDayOfMonth(dataMes)}/${dataAnio}`
      )
      if (newDate >= fechaParametro1 && newDate <= fechaParametro2) {
        arr.push(data)
      }
    })
    setDataQuincenal(arr)
    setAguilares(arr.filter((d) => d.IngenioNombre === 'Aguilares'))
    setBellaVista(arr.filter((d) => d.IngenioNombre === 'Bella Vista'))
    setConcepcion(arr.filter((d) => d.IngenioNombre === 'Concepción'))
    setCruzAlta(arr.filter((d) => d.IngenioNombre === 'Cruz Alta'))
    setFamailla(arr.filter((d) => d.IngenioNombre === 'Famaillá'))
    setLaCorona(arr.filter((d) => d.IngenioNombre === 'La Corona'))
    setLaFlorida(arr.filter((d) => d.IngenioNombre === 'La Florida'))
    setLaProvidencia(arr.filter((d) => d.IngenioNombre === 'La Providencia'))
    setLaTrinidad(arr.filter((d) => d.IngenioNombre === 'La Trinidad'))
    setLeales(arr.filter((d) => d.IngenioNombre === 'Leales'))
    setMarapa(arr.filter((d) => d.IngenioNombre === 'Marapa'))
    setSantaBarbara(arr.filter((d) => d.IngenioNombre === 'Santa Barbara'))
    setSantaRosa(arr.filter((d) => d.IngenioNombre === 'Santa Rosa'))
    setNunorco(arr.filter((d) => d.IngenioNombre === 'Ñuñorco'))
  }

  const getItems = () => [
    {
      key: '1',
      label: 'Aguilares',
      children: <ListadoDatos columns={columns} scroll={2000} data={aguilares} />,
    },
    {
      key: '2',
      label: 'Bella Vista',
      children: <ListadoDatos columns={columns} scroll={2000} data={bellaVista} />,
    },
    {
      key: '3',
      label: 'Concepción',
      children: <ListadoDatos columns={columns} scroll={2000} data={concepcion} />,
    },
    {
      key: '4',
      label: 'Cruz Alta',
      children: <ListadoDatos columns={columns} scroll={2000} data={cruzAlta} />,
    },
    {
      key: '5',
      label: 'Famaillá',
      children: <ListadoDatos columns={columns} scroll={2000} data={famailla} />,
    },
    {
      key: '6',
      label: 'La Corona',
      children: <ListadoDatos columns={columns} scroll={2000} data={laCorona} />,
    },
    {
      key: '7',
      label: 'La Florida',
      children: <ListadoDatos columns={columns} scroll={2000} data={laFlorida} />,
    },
    {
      key: '8',
      label: 'La Providencia',
      children: <ListadoDatos columns={columns} scroll={2000} data={laProvidencia} />,
    },
    {
      key: '9',
      label: 'La Trinidad',
      children: <ListadoDatos columns={columns} scroll={2000} data={laTrinidad} />,
    },
    {
      key: '10',
      label: 'Leales',
      children: <ListadoDatos columns={columns} scroll={2000} data={leales} />,
    },
    {
      key: '11',
      label: 'Marapa',
      children: <ListadoDatos columns={columns} scroll={2000} data={marapa} />,
    },
    {
      key: '12',
      label: 'Santa Barbara',
      children: <ListadoDatos columns={columns} scroll={2000} data={santaBarbara} />,
    },
    {
      key: '13',
      label: 'Santa Rosa',
      children: <ListadoDatos columns={columns} scroll={2000} data={santaRosa} />,
    },
    {
      key: '14',
      label: 'Ñuñorco',
      children: <ListadoDatos columns={columns} scroll={2000} data={nunorco} />,
    },
  ]
  return (
    <Collapse
      bordered={false}
      expandIconPosition='end'
      defaultActiveKey={['0']}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        width: '100%',
        fontSize: 18,
        fontWeight: 600,
      }}
      items={getItems(panelStyle)}
    />
  )
}
export default ItemCollpse
