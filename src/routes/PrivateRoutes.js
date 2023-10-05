import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Perfil from '../container/Admin/index'
import ContainerIndexParteDiario from '../container/ParteDiario'

const PrivateRoutes = ({ token }) => {
  return (
    <Routes>
      {(window?.location?.pathname === "/" || window?.location?.pathname === "/login") ? (
        <Route path="*" element={<Navigate to="/admin/parte-diario" replace />} />
      ) : null}
      {/* <Route exact path='/admin/perfil' element={<Perfil />} /> */}
      <Route exact path='/admin/parte-diario' element={<ContainerIndexParteDiario />} />

      <Route path='*' element={<Navigate to='/admin/parte-diario' replace />} />
    </Routes>
  )
}

export default PrivateRoutes
