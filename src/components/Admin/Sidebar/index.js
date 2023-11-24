import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsNewspaper,
  BsClipboardData
} from 'react-icons/bs'
import { BiUserCircle, BiLogOut } from 'react-icons/bi'
import './Sidebar.css'
import {
  deleteCookies,
  deleteToken,
  getDataToken,
} from '../../../helpers/helpers'
import { Link } from 'react-router-dom'

const Sidebar = ({ inactivo, setInactivo, dataAuth, dataUser }) => {
  const [initial, setInitial] = useState('')
  const [initialSurname, setInitialSurname] = useState('')

  useEffect(() => {
    const data = getDataToken()
    const a = data?.name?.toUpperCase()
    const b = data?.surname?.toUpperCase()
    setInitial(a?.substr(0, 1))
    setInitialSurname(b?.substr(0, 1))
  }, [dataUser])

  const cerrarSesion = async (e) => {
    deleteToken()
    deleteCookies()
    window.location.href = '/admin/login'
  }

  const itemsSideBar = [
    {
      title: 'parte-diario',
      iconName: <BsNewspaper className='sizeIcon' />,
      name: 'Parte diario',
    },
    {
      title: 'datos-comparativos',
      iconName: <BsClipboardData className='sizeIcon' />,
      name: 'Datos comparativos',
    },
    {
      title: 'periodos-zafra',
      iconName: <BsClipboardData className='sizeIcon' />,
      name: 'Periodos Ingenios',
    },
    {
      title: 'perfil',
      iconName: <BiUserCircle className='sizeIcon' />,
      name: 'Cuenta',
    },
  ]

  return (
    <div
      className={`${
        inactivo
          ? `sidebarInactivo text-light bg-dark h-100`
          : `sidebar text-light bg-dark h-100`
      }`}
    >
      <Row
        className={`${
          inactivo
            ? 'pt-4 pb-2 d-flex justify-content-center align-items-center m-0'
            : 'pt-4 pb-2 d-flex justify-content-center align-items-center m-0'
        }`}
      >
        <Col
          xs={3}
          className={` ${
            inactivo
              ? `justify-content-center px-0 imgContainer`
              : `text-center px-0`
          }`}
        >
          <div className={`imgProfile text-center`}>
            {initial}
            {initialSurname}
          </div>
        </Col>
        <Col xs={6} className='px-1'>
          <p className={`${inactivo ? `inactivo` : 'mb-0'}`}>
            {dataAuth?.nickname}
          </p>
        </Col>

        {inactivo ? (
          <Col
            xs={12}
            className={`text-light mt-3 text-center px-0`}
            onClick={() => setInactivo(!inactivo)}
          >
            {
              <BsFillCaretRightFill
                title='Desplegar'
                className={`sizeIcon cursorPointer`}
              />
            }
          </Col>
        ) : (
          <Col
            xs={2}
            className={`p-0 text-light`}
            onClick={() => setInactivo(!inactivo)}
          >
            {
              <BsFillCaretLeftFill
                title='Minimizar'
                className='sizeIcon cursorPointer'
              />
            }
          </Col>
        )}
      </Row>
      <hr />
      <ul
        className={`text-decoration-none list-unstyled sidebarList`}
      >
        {itemsSideBar.map((items, i) => (
          <Link
            key={i}
            className='text-white text-decoration-none'
            to={`/admin/${items.title}`}
          >
            <li
              title={items.title}
              className={`${
                inactivo
                  ? `sidebarListRow d-flex justify-content-center align-items-center`
                  : `sidebarListRow d-flex justify-content-start px-3 align-items-center`
              }`}
            >
              <div className=''>{items.iconName}</div>
              <div className={` ${inactivo ? `inactivo` : 'ms-3'}`}>
                {items.name}
              </div>
            </li>
          </Link>
        ))}

        <li
          onClick={() => cerrarSesion()}
          title='Salir'
          className={`${
            inactivo
              ? `sidebarListRow d-flex justify-content-center align-items-center`
              : `sidebarListRow d-flex justify-content-start px-3 align-items-center`
          }`}
        >
          <div className=''>
            <BiLogOut className={`sizeIcon`} />
          </div>
          <div className={` ${inactivo ? `inactivo` : 'ms-3'}`}>
            Salir
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
