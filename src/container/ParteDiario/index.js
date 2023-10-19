import  { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import Title from '../../components/Title'
import  '../../components/Admin/Sidebar/Sidebar.css'
import ParteDiarioContainer from '../../container/ParteDiario/ParteDiarioContainer'
import Sidebar from '../../components/Admin/Sidebar'
import { getToken, getTokenLS } from '../../helpers/helpers'
import Unauthorized from '../../components/Unauthorized'
import Spinn from '../../components/Spinner'
import { User } from '../../context/UserProvider'
import { Helmet } from 'react-helmet'
import { logoutForInactivity } from '../../utils/logoutInactividad'

const ContainerIndexParteDiario = () => {
  const [inactivo, setInactivo] = useState(false)
  const [tokenAuth, setTokenAuth] = useState(null)
  const [modalUnauthorized, setModalUnauthorized] = useState(false)
  const [loading, setLoading] = useState(true)
  const [inactivoUser, setInactivoUser] = useState(false)

  const { state, dataUser } = useContext(User)
  useEffect(() => {
    const token = getToken()
    const tokenLS = getTokenLS()
    if (token === tokenLS) {
      setTokenAuth(token)
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (tokenAuth === null) {
      setModalUnauthorized(true)
    } else {
      setModalUnauthorized(false)
    }
  }, [tokenAuth])

  useEffect(() => {
    let tiempoInactivo;

    const reiniciarTemporizador = () => {
      clearTimeout(tiempoInactivo);
      tiempoInactivo = setTimeout(() => {
        setInactivoUser(true);
        setModalUnauthorized(true)
      }, 18000); 
    };

    reiniciarTemporizador();

    const manejarActividad = () => {
      setInactivoUser(false);
      reiniciarTemporizador();
    };

    // Agrega los event listeners necesarios para detectar la actividad del usuario
    document.addEventListener('mousemove', manejarActividad);
    document.addEventListener('keydown', manejarActividad);

    return () => {
      // Limpia los event listeners cuando el componente se desmonta
      clearTimeout(tiempoInactivo);
      document.removeEventListener('mousemove', manejarActividad);
      document.removeEventListener('keydown', manejarActividad);
    };
  }, []);


  return (
    <div>
      {loading ? (
        <div className='d-flex justify-content-center align-items-center text-center divCenter '>
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
              // dataAuth={dataAuth}
            />
            <div
              className={`${
                inactivo ? `parte2Inactivo` : `parte2`
              } `}
            >
              <ParteDiarioContainer
                tokenAuth={tokenAuth}
                // dataAuth={userInfo}
              />
            </div>
            {modalUnauthorized && (
              <div className=''>
                <Unauthorized />
              </div>
            )}
          </Container>
        </>
      )}
    </div>
  )
}
export default ContainerIndexParteDiario
