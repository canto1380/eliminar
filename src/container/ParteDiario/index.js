import { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import Title from "../../components/Title";
import "../../components/Admin/Sidebar/Sidebar.css";
import ParteDiarioContainer from "../../container/ParteDiario/ParteDiarioContainer";
import Sidebar from "../../components/Admin/Sidebar";
import { getToken, getTokenLS } from "../../helpers/helpers";
import Unauthorized from "../../components/Unauthorized";
import Spinn from "../../components/Spinner";
import { User } from "../../context/UserProvider";
import { inactivityTime } from "../../helpers/inactivityTime";

const ContainerIndexParteDiario = () => {
  const [inactivo, setInactivo] = useState(false);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);

  const { dataUser } = useContext(User);
  useEffect(() => {
    const token = getToken();
    const tokenLS = getTokenLS();
    if (token === tokenLS) {
      setTokenAuth(token);
    }
  setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tokenAuth === null && dataUser) {
      setTokenAuth(dataUser)
      setModalUnauthorized(false);
    } 
    if(tokenAuth === null && !dataUser) {
      setModalUnauthorized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  useEffect(() => {
    inactivityTime(setModalUnauthorized)
    
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center text-center divCenter">
          <Spinn />
        </div>
      ) : (
        <>
          <Title title={`Parte Diario`} />
          <Container
            fluid
            className={`containerAdmin p-0 d-flex justify-content-end`}
          >
            <Sidebar
              inactivo={inactivo}
              setInactivo={setInactivo}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${inactivo ? `parte2Inactivo` : `parte2`} `}>
              <ParteDiarioContainer tokenAuth={tokenAuth} />
            </div>
            {modalUnauthorized && (
              <div className="">
                <Unauthorized />
              </div>
            )}
          </Container>
        </>
      )}
    </div>
  );
};
export default ContainerIndexParteDiario;
