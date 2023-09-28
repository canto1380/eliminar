import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsNewspaper,
} from 'react-icons/bs'
import { BiUserCircle, BiLogOut, BiTime } from 'react-icons/bi'
import styles from './Sidebar.module.css'
import {
  deleteCookies,
  deleteToken,
  getDataToken,
} from '../../../helpers/helpers'
// import { useRouter } from 'next/router'
import Link from 'next/link'

const Sidebar = ({ inactivo, setInactivo, dataAuth, dataUser }) => {
  const [initial, setInitial] = useState('')
  const [initialSurname, setInitialSurname] = useState('')
  // const { push } = useRouter()

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
    window.location.href = "/admin/login";
    // await push('/admin/login')
  }

  const itemsSideBar = [
    {
      title: 'parte-diario',
      iconName: <BsNewspaper className='sizeIcon' />,
      name: 'Parte diario',
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
          ? `${styles.sidebarInactivo} text-light bg-dark h-100`
          : `${styles.sidebar} text-light bg-dark h-100`
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
              ? `justify-content-center px-0 ${styles.imgContainer}`
              : `text-center px-0`
          }`}
        >
          <div className={`${styles.imgProfile} text-center`}>
            {initial}
            {initialSurname}
          </div>
        </Col>
        <Col xs={6} className='px-1'>
          <p className={`${inactivo ? `${styles.inactivo}` : 'mb-0'}`}>
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
                className={`${styles.sizeIcon} cursorPointer`}
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
        className={`text-decoration-none list-unstyled ${styles.sidebarList}`}
      >
        {itemsSideBar.map((items, i) => (
          <Link
            key={i}
            className='text-white text-decoration-none'
            href={`/admin/${items.title}`}
          >
            <li
              // onClick={() => changeTab(items.title)}
              title={items.title}
              className={`${
                inactivo
                  ? `${styles.sidebarListRow} d-flex justify-content-center align-items-center`
                  : `${styles.sidebarListRow} d-flex justify-content-start px-3 align-items-center`
              }`}
            >
              <div className=''>{items.iconName}</div>
              <div className={` ${inactivo ? `${styles.inactivo}` : 'ms-3'}`}>
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
              ? `${styles.sidebarListRow} d-flex justify-content-center align-items-center`
              : `${styles.sidebarListRow} d-flex justify-content-start px-3 align-items-center`
          }`}
        >
          <div className=''>
            <BiLogOut className={`${styles.sizeIcon}`} />
          </div>
          <div className={` ${inactivo ? `${styles.inactivo}` : 'ms-3'}`}>
            Salir
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
