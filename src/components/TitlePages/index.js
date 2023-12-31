import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
const TitlePage = ({ titlePage, btnBack, btnLink }) => {
  return (
    <Row className="d-flex justify-content-between align-items-center">
      <Col xs={8} className="mt-3">
        <div className={`pt-4 pb-1 px-4`}>
          <h3>{titlePage}</h3>
        </div>
      </Col>
      {btnBack && (
        <Col xs={4} className="mt-3">
          <div className={`pt-4 pb-1 px-4 text-end`}>
            <Button
              type="secondary"
              style={{ background: "rgb(64, 64, 64)", color: "white" }}
              href={`${btnLink}`}
            >
              Volver
            </Button>
          </div>
        </Col>
      )}
    </Row>
  );
};
export default TitlePage;
