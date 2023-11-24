import { Container } from "react-bootstrap";
import TitlePage from "../TitlePages";
import FormAddEditDataComparativa from "./FormAddEdit";
import Spinn from "../Spinner";

const DataComparativaHistorica = ({
  dataRegisterEdit,
  dataComparativaData,
  anio,
  aniosData,
}) => {
  return (
    <Container fluid>
      <TitlePage
        titlePage={`${
          dataRegisterEdit
            ? "Editar Dato Comparativo"
            : "Nuevo Dato Comparativo"
        }`}
        btnBack={true}
        btnLink={"/admin/datos-comparativos"}
        anio={anio}
      />
      <hr className="mx-3 mt-1" />
      {
        !dataComparativaData || !aniosData? (
          <div className="d-flex justify-content-center align-items-center text-center">
          <Spinn type="data" />
        </div>
        ) : (
          <FormAddEditDataComparativa
            dataRegisterEdit={dataRegisterEdit}
            dataComparativaData={dataComparativaData}
            anio={anio}
            aniosData={aniosData}
          />
        )
      }
    </Container>
  );
};
export default DataComparativaHistorica;
