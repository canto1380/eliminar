import Title from "../../components/Title"
import { Container } from "react-bootstrap"
import Sidebar from "../../components/Admin/Sidebar"
import '../../components/Admin/Sidebar//Sidebar.css'
import { useContext, useEffect, useState } from "react"
import { User } from "../../context/UserProvider"
import Unauthorized from "../../components/Unauthorized"
import GraficasDataContainer from "./IAContainer"
import { getToken, getTokenLS, getDataToken } from "../../helpers/helpers"
import Spinn from "../../components/Spinner"

const IAContainer = () => {
    const [loading, setLoading] = useState(false)
    const [inactivo, setInactivo] = useState(true)
    const [tokenAuth, setTokenAuth] = useState(null)
    const [dataUserRegister, setDataUserRegister] = useState(null)
    const [modalUnauthorized, setModalUnauthorized] = useState(false)

    const { dataUser } = useContext(User)

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
                            inactivo={inactivo}
                            setInactivo={setInactivo}
                            tokenAuth={tokenAuth}
                            dataUser={dataUser}
                        />
                        <div className={`${inactivo ? `parte2Inactivo` : `parte2`} `}>
                            <GraficasDataContainer
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