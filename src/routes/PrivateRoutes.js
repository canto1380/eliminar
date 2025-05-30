import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Perfil from '../container/Perfil/index'
import ContainerIndexParteDiario from '../container/ParteDiario'
import DataComparativa from '../container/DataComparativa'
import NewData from '../container/DataComparativa/NewData'
import PeriodosZafra from '../container/PeriodosZafra'
import AddEditPeriodoContainer from '../container/PeriodosZafra/AddEditPeriodo'
import ReportesContainer from '../container/Reportes'
import DiasParada from '../container/DiasParda'
import AddEditDiasParada from '../container/DiasParda/AddEditDiasParada'

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
      <Route exact path='/admin/periodos-zafra' element={<PeriodosZafra />} />
      <Route exact path='/admin/periodos-zafra/nuevo' element={<AddEditPeriodoContainer />} />
      <Route exact path='/admin/periodos-zafra/editar/:id' element={<AddEditPeriodoContainer />} />
      <Route exact path='/admin/reportes' element={<ReportesContainer />} />
      <Route exact path='/admin/dias-parada' element={<DiasParada />} />
      <Route exact path='/admin/dias-parada/nuevo' element={<AddEditDiasParada />} />
      <Route exact path='/admin/dias-parada/editar/:id' element={<AddEditDiasParada />} />

      <Route path='*' element={<Navigate to='/admin/parte-diario' replace />} />
    </Routes>
  )
}

export default PrivateRoutes
