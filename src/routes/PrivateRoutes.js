import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Perfil from '../container/Perfil/index'
import ContainerIndexParteDiario from '../container/ParteDiario'
import DataComparativa from '../container/DataComparativa'
import NewData from '../container/DataComparativa/NewData'

const PrivateRoutes = ({ token }) => {
  return (
    <Routes>
      {(window?.location?.pathname === "/" || window?.location?.pathname === "/login") ? (
        <Route path="*" element={<Navigate to="/admin/parte-diario" replace />} />
      ) : null}
      <Route exact path='/admin/perfil' element={<Perfil />} />
      <Route exact path='/admin/parte-diario' element={<ContainerIndexParteDiario />} />
      <Route exact path='/admin/datos-comparativos' element={<DataComparativa />} />
      <Route exact path='/admin/datos-comparativos/nuevo' element={<NewData />} />
      <Route exact path='/admin/datos-comparativos/editar/:anio' element={<NewData />} />

      <Route path='*' element={<Navigate to='/admin/parte-diario' replace />} />
    </Routes>
  )
}

export default PrivateRoutes
