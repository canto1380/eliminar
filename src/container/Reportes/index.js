import React, { useState, useEffect, useContext } from "react";
import Title from "../../components/Title";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import Spinn from "../../components/Spinner";
import { User } from "../../context/UserProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";
import { getDataPartesDiariosBE } from "../../utils/queryAPI/partesDiariosQuery";
import Reportes from "../../components/Reportes";

const ReportesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [inactivo, setInactivo] = useState(true);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [dataReportes, setDataReportes] = useState(undefined);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [dataZafraInicio, setDataZafraInicio] = useState(undefined);
  const [dataZafraFin, setDataZafraFin] = useState(undefined);

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
      setTokenAuth(dataUser);
      setModalUnauthorized(false);
    }
    if (tokenAuth === null && !dataUser) {
      setModalUnauthorized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  useEffect(() => {
    inactivityTime(setModalUnauthorized);
  }, []);

  useEffect(() => {
    buscarDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataZafraInicio, dataZafraFin]);
  
  const buscarDatos = async () => {
    if (dataZafraInicio && dataZafraFin) {
      console.log('SI')
      const inicio = `25-04-${dataZafraInicio}`;
      const fin = `18-12-${dataZafraFin}`;

      const params = {
        fechadesde: inicio,
        fechahasta: fin,
      };
      const data = await getDataPartesDiariosBE(params, "/parteDiario");
      console.log(data)
      setDataReportes(data);
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
              <Reportes
                tokenAuth={tokenAuth}
                dataReportes={dataReportes}
                dataZafraInicio={dataZafraInicio}
                dataZafraFin={dataZafraFin}
                setDataZafraInicio={setDataZafraInicio}
                setDataZafraFin={setDataZafraFin}
              />
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
export default ReportesContainer;
