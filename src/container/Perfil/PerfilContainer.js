import { Container } from "react-bootstrap";
import TitlePage from "../../components/TitlePages";
import Spinn from "../../components/Spinner";
import FormAddEditUsuarios from "../../components/Usuarios/FormAddEdit";
import FormPass from "../../components/Usuarios/FormPassword";

const PerfilContainer = ({ tokenAuth, routerAPI, userData }) => {
  return (
    <Container fluid>
      <TitlePage titlePage="Perfil" />
      <hr className="mx-3 mt-1" />
      {!userData || userData.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center text-center divCenter">
          <Spinn />
        </div>
      ) : (
        <>
        <div className="pb-1 pt-3 px-4">
          <FormAddEditUsuarios tokenAuth={tokenAuth} routerAPI={'usuarios'} dataRegisterEdit={userData} />
        </div>
        <hr className="mx-3 mt-1"/>
        <div className="pb-1 pt-3 px-4">
          <FormPass tokenAuth={tokenAuth} routerAPI={'usuarios'} dataRegisterEdit={userData} /> 
        </div>
        </>
      )}
    </Container>
  );
};
export default PerfilContainer;
