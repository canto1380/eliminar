import Title from "../../components/Title"
import { Container } from "react-bootstrap"
import Sidebar from "../../components/Admin/Sidebar"
import '../../components/Admin/Sidebar//Sidebar.css'
import { useContext, useEffect, useState } from "react"
import { User } from "../../context/UserProvider"
import Unauthorized from "../../components/Unauthorized"
import IADataContainer from "./IAContainer.js"
import { getToken, getTokenLS, getDataToken } from "../../helpers/helpers"
import Spinn from "../../components/Spinner"
import { SidebarContext } from "../../context/SidebarProvider.js"

const IAContainer = () => {
    const [loading, setLoading] = useState(false)
    const [tokenAuth, setTokenAuth] = useState(null)
    const [dataUserRegister, setDataUserRegister] = useState(null)
    const [modalUnauthorized, setModalUnauthorized] = useState(false)

    const { dataUser } = useContext(User)
    const {sidebarStatus} = useContext(SidebarContext)

  useEffect(() => {
  }, [sidebarStatus])

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
        getDataUserRegister()
    },[dataUser])

    const getDataUserRegister = () => {
        const data = getDataToken()
        setDataUserRegister(data)
    }

    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center text-center divCenter">
                    <Spinn />
                </div>
            ) : (
                <>
                    <Title title={'Chat Bot'} />
                    <Container fluid className={`containerAdmin p-0 d-flex justify-content-end`}>
                        <Sidebar
                            inactivo={sidebarStatus}
                            tokenAuth={tokenAuth}
                            dataUser={dataUser}
                        />
                        <div className={`${sidebarStatus ? `parte2Inactivo` : `parte2`} `}>
                            <IADataContainer
                                tokenAuth={tokenAuth}
                                dataUserRegister={dataUserRegister}
                                routeAPI={'ia'}
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
export default IAContainer