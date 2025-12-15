import { Button } from "react-bootstrap"

const BtnGenerarReporte = ({ loading, onClick }) => {
  return (
    <div className="text-end mt-3">
      <Button
        variant="success"
        disabled={loading}
        onClick={onClick}
      >
        {loading ? "Generando..." : "Generar Reporte"}
      </Button>
    </div>
  )
}

export default BtnGenerarReporte
