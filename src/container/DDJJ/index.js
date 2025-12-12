import { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import Spinn from '../../components/Spinner'
import Title from '../../components/Title'
import Sidebar from '../../components/Admin/Sidebar'
import { User } from '../../context/UserProvider'
import { SidebarContext } from '../../context/SidebarProvider'
import { getToken, getTokenLS, getDataToken} from '../../helpers/helpers'
import { inactivityTime } from '../../helpers/inactivityTime'
import DDJJContainer from './DDJJContainer'
import Unauthorized from '../../components/Unauthorized'
import '../../components/Admin/Sidebar/Sidebar.css'
import { message } from 'antd'
import { toast } from 'react-toastify'


const DDJJIndex = () => {
  const [tokenAuth, setTokenAuth] = useState(null);
  const [modalUnauthorized, setModalUnauthorized] = useState(false);
  const [dataUserRegister, setDataUserRegister] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const { dataUser } = useContext(User);
  const { sidebarStatus } = useContext(SidebarContext)

  useEffect(() => {
  }, [sidebarStatus])


  /*** DATOS DEL USUARIO ***/
  useEffect(() => {
    tokenData()
  }, [])
  const tokenData = () => {
    try {
      setLoading(true)
      const token = getToken()
      const tokenLS = getTokenLS()
      if (token === tokenLS) {
        setTokenAuth(token)
      }
    } catch (error) {
      message.error("Error al obtener datos del usuario.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (tokenAuth === null && dataUser) {
      setTokenAuth(dataUser)
      setModalUnauthorized(false);
    }
    if (tokenAuth === null && !dataUser) {
      setModalUnauthorized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  useEffect(() => {
    inactivityTime(setModalUnauthorized)
  }, []);

   useEffect(() => {
    getDataUserRegister();
  }, [dataUser]);
  const getDataUserRegister = () => {
    try {
      const data = getDataToken()
      setDataUserRegister(data);
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center text-center divCenter'>
          <Spinn />
        </div>
      ) : (
        <>
          <Title title={`Declaraciones Juradas`} />
          <Container fluid className={`containerAdmin p-0 d-flex justify-content-end`}>
            <Sidebar
              inactivo={sidebarStatus}
              tokenAuth={tokenAuth}
              dataUser={dataUser}
            />
            <div className={`${sidebarStatus ? 'parte2Inactivo' : 'parte2'} `}>
              <DDJJContainer tokenAuth={tokenAuth} dataUserRegister={dataUserRegister}/>
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
export default DDJJIndex