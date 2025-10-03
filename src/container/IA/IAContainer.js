import { Container } from "react-bootstrap"
import MsgError from "../../components/Messages/MsgError"
import TitlePage from "../../components/TitlePages"
import Filtros from "../../components/Filtros"
import { useEffect, useState } from "react"
import { getPeriodoZafra } from "../../utils/queryAPI/periodosZafra"
import Spinn from "../../components/Spinner"
import { obtenerPeriodos } from "../ParteDiario/hooks/ObtenerPeriodos"
import { filtrarRegistrosPorPeriodos } from "../ParteDiario/hooks/RegistrosPorPeriodo"
import { getParteDiariosNorte } from "../../utils/queryAPI/ParteDiariosNorte"
import { getParteDiarios } from "../../utils/queryAPI/parteDiarios"
import IAComponent from "../../components/IA"

const IADataContainer = ({ tokenAuth, dataUserRegister, routeAPI }) => {
    const [modalUnauthorized, setModalUnauthorized] = useState(false);
    const [ingenio, setIngenio] = useState(undefined)

    return (
        <Container fluid>
            <TitlePage titlePage="Bot" />
            <hr className="mx-3 mt-1" />
            {1 = 2 ? (
                <div className="d-flex justify-content-center align-items-center text-center">
                    <Spinn type="data" />
                </div>
            ) : (
                <>
                    <Filtros
                        dataZafra={anioZafra}
                        setDataZafra={setAnioZafra}
                        setDatePeriodoStart={setDatePeriodoStart}
                        setDatePeriodoEnd={setDatePeriodoEnd}
                        setIngenio={setIngenio}
                        bandFilterZafraAnio={true}
                        bandFilterPeriodo={true}
                        bandFilterIngenio={true}
                        bandFilterIngenioRegion={1}
                    />
                    <IAComponent
                        dataUserRegister={dataUserRegister}
                    />
                </>
            )}
        </Container>
    )
}

export default IADataContainer