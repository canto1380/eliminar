import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Spinn from "../../components/Spinner";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import { User } from "../../context/UserProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";
import DataComparativaHistorica from "../../components/DataComparativa";
import { getDataComparativa } from "../../utils/queryAPI/dataComparativa";
import { getAnios } from "../../utils/queryAPI/anios";

const NewData = () => {
  const [dataComparativaData, setDataComparativaData] = useState(undefined);
  const [dataRegisterEdit, setDataRegisterEdit] = useState(undefined);
  const [inactivo, setInactivo] = useState(false);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aniosData, setAniosData] = useState(undefined);
  

  const { anio } = useParams();
  const { dataUser } = useContext(User);
  let navigate = useNavigate();

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
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anio]);
  const getData = async () => {
    const data = await getDataComparativa();
    setDataComparativaData(data);
    if(anio) {
      const data1 = data.filter((d) => d.anio_zafra === parseInt(anio));
      if (data1.length === 0) {
        navigate("/admin/parte-diario");
      } else {
        setDataRegisterEdit(data1[0]);
      }
    }
  };

  useEffect(() => {
    dataAnios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dataAnios = async () => {
    const data = await getAnios();
    setAniosData(data);
  };

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
            <Sidebar
              inactivo={inactivo}
              setInactivo={setInactivo}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${inactivo ? `parte2Inactivo` : `parte2`} `}>
              <DataComparativaHistorica
                dataRegisterEdit={dataRegisterEdit}
                dataComparativaData={dataComparativaData}
                anio={anio}
                aniosData={aniosData}
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
export default NewData;
