import { useEffect, useMemo } from "react"
import './reporteDinamico.css'
import { formatValue } from "../../../helpers/helpers"

const DdjjReporteComponent = ({ data, filtros }) => {

  const normalizarReporte = (data, filtros) => {
    const { zafras, ingenios, quincenas, items } = filtros
    const resultado = {}

    data.forEach(reg => {
      if (!zafras.includes(reg.anioZafra)) return
      if (!ingenios.includes(reg.ingenioNombre)) return

      // const quincenaLabel = `${reg.diaZafra <= 15 ? '1' : '2'} ${new Date(reg.fechaDesde).toLocaleString('es-ES', { month: 'long' })}`
      const fecha = new Date(reg.fechaDesde)

      const quincena = fecha.getDate() <= 15 ? '1° quincena' : '2° quincena'
      const mes = fecha.toLocaleString('es-ES', { month: 'long' })

      const quincenaLabel = `${quincena} ${mes.charAt(0).toUpperCase()}${mes.slice(1)}`


      if (quincenas.length > 0 && !quincenas.includes(quincenaLabel)) return

      if (!resultado[reg.ingenioNombre]) {
        resultado[reg.ingenioNombre] = {}
      }

      if (!resultado[reg.ingenioNombre][reg.anioZafra]) {
        resultado[reg.ingenioNombre][reg.anioZafra] = {}
      }

      if (!resultado[reg.ingenioNombre][reg.anioZafra][quincenaLabel]) {
        resultado[reg.ingenioNombre][reg.anioZafra][quincenaLabel] = {}
      }

      items.forEach(item => {
        resultado[reg.ingenioNombre][reg.anioZafra][quincenaLabel][item] =
          reg[item] ?? null
      })
    })

    return resultado
  }
  const dataNormalizada = useMemo(() => {
    if (!data || data.length === 0) return null
    const aa = normalizarReporte(data, filtros)
    return normalizarReporte(data, filtros)
  }, [data, filtros])

  const columnas = useMemo(() => {
    const cols = []

    filtros.zafras.forEach(zafra => {
      filtros.quincenas.forEach(quincena => {
        filtros.items.forEach(item => {
          cols.push({ zafra, quincena, item })
        })
      })
    })

    return cols
  }, [filtros])

  if (!dataNormalizada) {
    return null
  }


  return (
    <div className="reporte-panel mt-3">
      <div className="reporte-header">
        <h6>Reporte dinámico de Declaraciones Juradas</h6>
        <span className="reporte-subtitle">
          {filtros.zafras.join(", ")} · {filtros.quincenas.join(", ")}
        </span>
      </div>

      <div className="reporte-table-wrapper"></div>
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-sm">
          <thead>
            {/* NIVEL 1: ZAFRAS */}
            <tr>
              <th rowSpan={3}>Ingenio</th>
              {filtros.zafras.map(zafra => (
                <th
                  key={zafra}
                  colSpan={filtros.quincenas.length * filtros.items.length}
                  className="text-center bg-light header-zafra"
                >
                  {zafra}
                </th>
              ))}
            </tr>

            {/* NIVEL 2: QUINCENAS */}
            <tr>
              {filtros.zafras.map(zafra =>
                filtros.quincenas.map(q => (
                  <th
                    key={`${zafra}-${q}`}
                    colSpan={filtros.items.length}
                    className="text-center header-quincena"
                  >
                    {q}
                  </th>
                ))
              )}
            </tr>

            {/* NIVEL 3: ITEMS */}
            <tr>
              {filtros.zafras.map(zafra =>
                filtros.quincenas.map(q =>
                  filtros.items.map(item => (
                    <th key={`${zafra}-${q}-${item}`} className="text-center small header-item">
                      {item}
                    </th>
                  ))
                )
              )}
            </tr>
          </thead>


          <tbody>
            {Object.entries(dataNormalizada).map(([ingenio, porZafra]) => (
              <tr key={ingenio}>
                <td className="sticky-col"><strong>{ingenio}</strong></td>

                {columnas.map(({ zafra, quincena, item }) => (
                  <td key={`${ingenio}-${zafra}-${quincena}-${item}`} className={`text-end data-cell ${porZafra?.[zafra]?.[quincena]?.[item] == null ? "data-empty" : ""
                    }`}>
                    {formatValue(porZafra?.[zafra]?.[quincena]?.[item]) ?? '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default DdjjReporteComponent
