import { useState, useEffect, useContext } from "react";
import { inactivityTime } from "../../helpers/inactivityTime";
import { getAnios } from "../../utils/queryAPI/anios";
import Spinn from "../../components/Spinner";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/Admin/Sidebar";
import Unauthorized from "../../components/Unauthorized";
import { useParams, useNavigate } from "react-router-dom";
import { User } from "../../context/UserProvider";
import { getToken, getTokenLS } from "../../helpers/helpers";
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra";
import PeriodosZafraHistorico from "../../components/PeriodosZafra";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import { SidebarContext } from "../../context/SidebarProvider";

const AddEditPeriodoContainer = () => {
  const [periodosZafra, setPeriodosZafra] = useState(undefined);
  const [dataRegisterEdit, setDataRegisterEdit] = useState(undefined);
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aniosData, setAniosData] = useState(undefined);
  const [ingeniosData, setIngeniosData] = useState(undefined)

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
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const getData = async () => {
    const data = await getPeriodoZafra();
    setPeriodosZafra(data);
    if(id) {
      const data1 = data.filter((d) => d.id === parseInt(id));
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

  useEffect(() => {
    dataIngenios()
  },[])
  const dataIngenios = async() => {
    const data = await getIngenios()
    setIngeniosData(data)
  }
  return(
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
              inactivo={sidebarStatus}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${sidebarStatus ? `parte2Inactivo` : `parte2`} `}>
              <PeriodosZafraHistorico
                dataRegisterEdit={dataRegisterEdit}
                periodosZafra={periodosZafra}
                id={id}
                aniosData={aniosData}
                ingeniosData={ingeniosData}
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
  )
}
export default AddEditPeriodoContainer