import { Container } from "react-bootstrap";
import Spinn from "../../components/Spinner";
import Sidebar from "../../components/Admin/Sidebar";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../context/UserProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { inactivityTime } from "../../helpers/inactivityTime";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import { getAnios } from "../../utils/queryAPI/anios";
import Unauthorized from "../../components/Unauthorized";
import DiasParadas from "../../components/DiasParada";
import { getDiasParadas } from "../../utils/queryAPI/diaParadas";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";
import { SidebarContext } from "../../context/SidebarProvider";

const AddEditDiasParada = () => {
  const [diasParadasData, setDiasParadasData] = useState(undefined);
  const [ingeniosData, setIngeniosData] = useState(undefined);
  const [aniosData, setAniosData] = useState(undefined);
  const [periodosData, setPeriodosData] = useState(undefined);
  const [dataRegisterEdit, setDataRegisterEdit] = useState(undefined);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { dataUser } = useContext(User);
  const {sidebarStatus} = useContext(SidebarContext)

  useEffect(() => {
  }, [sidebarStatus])

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
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const getData = async() => {
    const data = await getDiasParadas()
    setDiasParadasData(data);
    if(id) {
        const data1 = data.filter((d) => d.id === parseInt(id));
        if(data1.length === 0) {
            navigate("/admin/dias-parada");
        } else {
            setDataRegisterEdit(data1[0]);
        }
    }
  }

  useEffect(() => {
    getIngeniosData();
    getAniosData();
    getPeriodosData()
  }, []);
  const getIngeniosData = async () => {
    const data = await getIngenios();
    setIngeniosData(data);
  };
  const getAniosData = async () => {
    const data = await getAnios();
    setAniosData(data);
  };
  const getPeriodosData = async () => {
    const data = await getPeriodoZafra();
    setPeriodosData(data);
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
            className="containerAdmin p-0 d-flex justify-content-start"
          >
            <Sidebar
              inactivo={sidebarStatus}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${sidebarStatus ? `parte2Inactivo` : `parte2`}`}>
              <DiasParadas
                dataRegisterEdit={dataRegisterEdit}
                id={id}
                diasParadasData={diasParadasData}
                aniosData={aniosData}
                ingeniosData={ingeniosData}
                periodosData={periodosData}
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
export default AddEditDiasParada;
