import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Perfil from '../container/Admin/index'

const PrivateRoutes = ({ token }) => {
  return (
    <Routes>
      {/* <Route exact path='/admin/parte-diario' element={<Home />} /> */}
      {/* <Route exact path='/admin/-perfil' element={<Noticias />} /> */}
      <Route exact path='/admin/-perfil' element={< Perfil/>} />
      {token.length && window?.location?.pathname === '/' ? (
        <Route
          path='*'
          element={<Navigate to='/admin/parte-diario' replace />}
        />
      ) : null}

      <Route path='*' element={<Navigate to='/admin/parte-diario' replace />} />
    </Routes>
  )
}

export default PrivateRoutes
