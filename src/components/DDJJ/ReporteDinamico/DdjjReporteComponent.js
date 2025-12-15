import { useEffect, useMemo } from "react"
import './reporteDinamico.css'

const DdjjReporteComponent = ({ data, filtros, setDataParseada }) => {
    console.log(data)
    console.log(filtros)

    const normalizarReporte = (data, filtros) => {
        const { zafras, ingenios, quincenas, items } = filtros
        console.log(data, filtros)
        const resultado = {}

        data.forEach(reg => {
            if (!zafras.includes(reg.anioZafra)) return
            if (!ingenios.includes(reg.ingenioNombre)) return

            // const quincenaLabel = `${reg.diaZafra <= 15 ? '1' : '2'} ${new Date(reg.fechaDesde).toLocaleString('es-ES', { month: 'long' })}`
            const fecha = new Date(reg.fechaDesde)

            const quincena = reg.diaZafra <= 15 ? '1° quincena' : '2° quincena'
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
        return normalizarReporte(data, filtros)
    }, [data, filtros])

    // useEffect(() => {
    //     setDataParseada(dataNormalizada)
    // }, [dataNormalizada])
    useEffect(() => {
        if (dataNormalizada) {
            setDataParseada(prev =>
                prev === dataNormalizada ? prev : dataNormalizada
            )
        }
    }, [dataNormalizada, setDataParseada])

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
                                className="text-center bg-light"
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
                                    className="text-center"
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
                                    <th key={`${zafra}-${q}-${item}`} className="text-center small">
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
                            <td><strong>{ingenio}</strong></td>

                            {columnas.map(({ zafra, quincena, item }) => (
                                <td key={`${ingenio}-${zafra}-${quincena}-${item}`} className="text-end">
                                    {porZafra?.[zafra]?.[quincena]?.[item] ?? '-'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default DdjjReporteComponent
