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
import { getDataPartesDiariosBE } from "../../utils/queryAPI/partesDiariosQuery";

const ContainerIndexParteDiario = () => {
  const [inactivo, setInactivo] = useState(true);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ dataBuscarDatos, setDataBuscarDatos] = useState([])
  
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

  // useEffect(() => {
  //   buscarDatos()
  // }, [])
  // const buscarDatos = async() => {
  //   const inicio = '30-06-2015';
  //   const fin = '23-4-2024';

  //   const params = { 
  //     fechadesde: inicio, 
  //     fechahasta: fin
  //   }
  //   const data = await getDataPartesDiariosBE(params, '/parteDiario')
  //   setDataBuscarDatos(data)
  // }

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
              <ParteDiarioContainer tokenAuth={tokenAuth} dataBuscarDatos={dataBuscarDatos}/>
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
