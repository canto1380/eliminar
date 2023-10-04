import React, { useState, useEffect } from 'react'
// import LoginComponent from '../../components/Login'
import './AdminContainer.css'
import { Container } from 'react-bootstrap'
import Sidebar from '../../components/Admin/Sidebar'
import Unauthorized from '../../components/Unauthorized'

const PanelAdmin = () => {
  const [inactivo, setInactivo] = useState(false)
  const [tokenAuth, setTokenAuth] = useState([])
  const [dataAuth, setDataAuth] = useState([])
  const [userData, setUserData] = useState([])
  const [modalUnauthorized, setModalUnauthorized] = useState(false)
  return (
    <Container
      fluid
      className={`containerAdmin p-0 d-flex justify-content-start`}
    >
      <Sidebar
        inactivo={inactivo}
        setInactivo={setInactivo}
        tokenAuth={tokenAuth}
        // dataUser={dataUser} CONTEXTT
        // dataAuth={dataAuth}
      />
      <div className={`${inactivo ? `parte2Inactivo` : `parte2`}  `}>
        <PanelAdmin />
      </div>
      {modalUnauthorized && (
        <div>
          <Unauthorized />
        </div>
      )}
    </Container>
  )
}

export default PanelAdmin
