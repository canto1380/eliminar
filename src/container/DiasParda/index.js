import { Container } from "react-bootstrap";
import Spinn from "../../components/Spinner";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import { useEffect, useState, useContext } from "react";
import { User } from "../../context/UserProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";
import Title from "antd/es/skeleton/Title";
import DiasParadaContainer from "./DiasParadaContainer";

const DiasParada = () => {
  const [loading, setLoading] = useState(false);
  const [inactivo, setInactivo] = useState(true);
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
      setTokenAuth(dataUser);
    }
    if (tokenAuth === null && !dataUser) {
      setModalUnauthorized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  useEffect(() => {
    inactivityTime(setModalUnauthorized);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center text-center divCenter">
          <Spinn />
        </div>
      ) : (
        <>
          <Container
            fluid
            className={`containerAdmin p-0 d-flex justify-content-end`}
          >
          <Title Title={"Días de parada"} />
            <Sidebar
              inactivo={inactivo}
              setInactivo={setInactivo}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${inactivo ? `parte2Inactivo` : `parte2`}`}>
              <DiasParadaContainer
                tokenAuth={tokenAuth}
                routeAPI={"diaParada"}
              />
            </div>
            {modalUnauthorized && (
              <div>
                <Unauthorized />
              </div>
            )}
          </Container>
        </>
      )}
      paradas
    </div>
  );
};
export default DiasParada;
