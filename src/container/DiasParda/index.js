import { Container } from "react-bootstrap";
import Spinn from "../../components/Spinner";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import { useEffect, useState, useContext } from "react";
import { User } from "../../context/UserProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";
import DiasParadaContainer from "./DiasParadaContainer";
import { SidebarContext } from "../../context/SidebarProvider";
import Title from "../../components/Title";
import { message } from "antd";

const DiasParada = () => {
  const [loading, setLoading] = useState(false);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);

  const { dataUser } = useContext(User);
  const { sidebarStatus } = useContext(SidebarContext)

  useEffect(() => {
  }, [sidebarStatus])

  useEffect(() => {
  tokenData()    
  }, []);

  const tokenData = () => {
    try {
      setLoading(true)
      const token = getToken();
    const tokenLS = getTokenLS();
    if (token === tokenLS) {
      setTokenAuth(token);
    }
    } catch (error) {
      message.error("Error al obtener datos del usuario.")
    } finally {
      setLoading(false)
    }
  }

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
          <Title title={"Días de paradas"} />
          <Container
            fluid
            className={`containerAdmin p-0 d-flex justify-content-end`}
          >
            <Sidebar
              inactivo={sidebarStatus}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${sidebarStatus ? `parte2Inactivo` : `parte2`}`}>
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
