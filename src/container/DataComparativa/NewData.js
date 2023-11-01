import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import dataComparativa from "../../Excel/dataConstanteParteDiario.json";
import Spinn from "../../components/Spinner";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import { User } from "../../context/UserProvider";
import Title from "../../components/Title";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";
import DataComparativaHistorica from "../../components/DataComparativa";

const NewData = () => {
  const [dataRegisterEdit, setDataRegisterEdit] = useState(undefined);
  const [inactivo, setInactivo] = useState(false);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inactivoUser, setInactivoUser] = useState(false);

  const { anio } = useParams();
  const {dataUser} = useContext(User)
  
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
    inactivityTime(setModalUnauthorized, setInactivoUser)
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anio]);
  const getData = () => {
    const data = dataComparativa?.dataComparativa;
    if (anio !== undefined) {
      const aa = data.filter((d) => d.anio === anio);
      setDataRegisterEdit(aa);
    }
  };
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center text-center divCenter">
          <Spinn />
        </div>
      ) : (
        <>
          <Title
            titlePage={`${anio ? "Editar registro" : "Nuevo registro"} `}
          />
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
            <DataComparativaHistorica dataRegisterEdit={dataRegisterEdit} />
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
export default NewData;
