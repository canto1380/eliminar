import { Container } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import "../../components/Admin/Sidebar/Sidebar.css";
import Spinn from "../../components/Spinner";
import Title from "../../components/Title";
import Sidebar from "../../components/Admin/Sidebar";
import DataComparativaContainer from "./DataComparativaContainer";
import Unauthorized from "../../components/Unauthorized";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { User } from "../../context/UserProvider";
import { inactivityTime } from "../../helpers/inactivityTime";

const DataComparativa = () => {
  const [loading, setLoading] = useState(false);
  const [inactivo, setInactivo] = useState(false);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);

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
          <Title title={"Datos Comparativos"} />
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
            <div className={`${inactivo ? `parte2Inactivo` : `parte2`}`}>
              <DataComparativaContainer tokenAuth={tokenAuth} routeAPI={'dataComparativa'}/>
            </div>
          {modalUnauthorized && (
            <div>
              <Unauthorized />
            </div>
          )}
          </Container>
        </>
      )}
    </div>
  );
};
export default DataComparativa;
