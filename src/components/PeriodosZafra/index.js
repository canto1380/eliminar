import { Container } from "react-bootstrap"
import TitlePage from "../TitlePages"
import Spinn from "../Spinner"
import FormAddEditPeriodos from "./FormAddEditPeriodos"

const PeriodosZafraHistorico = ({
  dataRegisterEdit,
  periodosZafra,
  id,
  aniosData,
  ingeniosData
}) => {
  return (
    <Container fluid>
      <TitlePage
        titlePage={`${
          dataRegisterEdit
            ? "Editar Periodo"
            : "Nuevo Periodo"
        }`}
        btnBack={true}
        btnLink={"/admin/periodos-zafra"}
        id={id}
      />
      <hr className="mx-3 mt-1" />
      {
        !periodosZafra || !aniosData? (
          <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
        ) : (
          <FormAddEditPeriodos
            dataRegisterEdit={dataRegisterEdit}
            periodosZafra={periodosZafra}
            id={id}
            aniosData={aniosData}
            ingeniosData={ingeniosData}
          />
        )
      }
    </Container>
  )
}
export default PeriodosZafraHistorico