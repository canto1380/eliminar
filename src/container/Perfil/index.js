import { Container } from "react-bootstrap"
import Spinn from "../../components/Spinner"
import Title from "../../components/Title"
import Sidebar from "../../components/Admin/Sidebar"
import { useContext, useState, useEffect } from "react"
import { User } from "../../context/UserProvider"
import Unauthorized from "../../components/Unauthorized"
import { getToken, getTokenLS } from "../../helpers/helpers"
import { inactivityTime } from "../../helpers/inactivityTime"
import PerfilContainer from "./PerfilContainer"
import Cookies from "js-cookie"
import { getUsuariosById } from "../../utils/queryAPI/usuarios"

const Perfil = () => {
  const [loading, setLoading] = useState(false)
  const [inactivo, setInactivo] = useState(false)
  const [tokenAuth, setTokenAuth] = useState(null)
  const [modalUnauthorized, setModalUnauthorized] = useState(false)
  const [userData, setUserData] = useState(null)

  const {dataUser} = useContext(User)
  const id = Cookies.get('idUser')
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
  useEffect(() => {
    getDataUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const getDataUser = async() => {
    const data = await getUsuariosById(id, tokenAuth)
    setUserData(data)
  }

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center algin-items-center text-center divCenter">
          <Spinn />
          </div>
      ): (
        <>
        <Title title={"Perfil"}/>
        <Container fluid className={`containerAdmin p-0 d-flex justify-content-end`}>
          <Sidebar 
          inactivo={inactivo}
          setInactivo={setInactivo}
          tokenAuth={tokenAuth}
          dataUser={dataUser}
          />
          <div className={`${inactivo ? `parte2Inactivo` : `parte2`}`}>
          <PerfilContainer tokenAuth={tokenAuth} routerAPI={'usuarios'} userData={userData}/>
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
  )
}
export default Perfil