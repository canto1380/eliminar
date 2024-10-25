import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "antd";
const ListHeader = ({ title, btnLink }) => {
  return (
    <div className="pt-4 pb-3 px-4">
      <div className="menuContainer mb-0 d-flex justify-content-between align-items-center">
        <div>
          <p className="fw-bolder mb-0">{title}</p>
        </div>
        {btnLink && (
          <div>
            <Button
              href={btnLink}
              type="primary"
              icon={<AiOutlinePlus className="" />}
            >
              Agregar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListHeader;
