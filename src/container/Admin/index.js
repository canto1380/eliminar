import React, { useState, useEffect } from 'react'
// import LoginComponent from '../../components/Login'
import './AdminContainer.module.css'
import { Container } from 'react-bootstrap'
// import Sidebar from '../../components/Admin/Sidebar'
// import Unauthorized from '../../components/Unauthorized'

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
      dasdas
    </Container>
  )
}

export default PanelAdmin
