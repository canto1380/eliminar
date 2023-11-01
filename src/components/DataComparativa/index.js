import { Container } from "react-bootstrap"
import TitlePage from "../TitlePages"
import FormAddEditDataComparativa from "./FormAddEdit"
import { useEffect, useState } from "react"
import dataComparativa from "../../Excel/dataConstanteParteDiario.json";

const DataComparativaHistorica = ({dataRegisterEdit}) => {
  const [dataComparativaJSON, setDataComparativaJSON] = useState(undefined)
  useEffect(() => {
    getData()
  },[])
  const getData = () => {
    const data = dataComparativa?.dataComparativa;
      setDataComparativaJSON(data);
  };
return (
  <Container fluid>
    <TitlePage titlePage={`${dataRegisterEdit ? 'Editar Dato Comparativo' : 'Nuevo Dato Comparativo'}`} btnBack={true} btnLink={'/admin/datos-comparativos'} />
    <hr className='mx-3 mt-1' />
    <FormAddEditDataComparativa dataRegisterEdit={dataRegisterEdit} dataComparativaJSON={dataComparativaJSON} />
  </Container>
)
}
export default DataComparativaHistorica