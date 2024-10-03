import { Container } from "react-bootstrap";
import TitlePage from "../TitlePages";
import Spinn from "../Spinner";
import FormAddEditDiasParada from "./FormAddEditDiasParada";

const DiasParadas = ({
  dataRegisterEdit,
  id,
  diasParadasData,
  aniosData,
  ingeniosData,
  periodosData,
}) => {
  return (
    <div>
      <Container fluid>
        <TitlePage
          titlePage={`${
            dataRegisterEdit ? "Editar Día parada" : "Nuevo Día parada"
          }`}
          btnBack={true}
          btnLink={"/admin/dias-parada"}
          id={id}
        />
        <hr className='mx-3 mt-1'/>
        {
            !diasParadasData || !aniosData || !ingeniosData ? (
                <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
            ) : (
                <FormAddEditDiasParada 
                    dataRegisterEdit={dataRegisterEdit}
                    id={id}
                    diasParadasData={diasParadasData}
                    aniosData={aniosData}
                    ingeniosData={ingeniosData}
                    periodosData={periodosData}
                />
            )
        }
      </Container>
    </div>
  );
};
export default DiasParadas;
