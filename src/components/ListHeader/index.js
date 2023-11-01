import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "antd";
const ListHeader = ({
  title,
  formAdd,
  setFormAdd,
  loading,
  setLoading,
  formEdit,
  setFormEdit,
  resetValuesEdit,
}) => {
  return (
    <div className="pt-4 pb-3 px-4">
      <div className="menuContainer mb-0 d-flex justify-content-between align-items-center">
        <div>
          <p className="fw-bolder mb-0">{title}</p>
        </div>
        <div>
          <Button
            href="/admin/datos-comparativos/nuevo"
            type="primary"
            icon={<AiOutlinePlus className="" />}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ListHeader;
