import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
import './titlePage.css'
const TitlePage = ({
  titlePage,
  btnBack,
  btnLink,
  btnOnClick,
  titleBtnOnClick,
  functionOnClick,
  lastUpdated,
  type
}) => {
  return (
    <Row className="d-flex justify-content-between align-items-center ">
      <Col xs={btnOnClick ? 12 : 8} sm={8} className="mt-3 ">
        <div className={`pt-4 pb-1 px-4`}>
          <h3>{titlePage}</h3>
        </div>
      </Col>
      {btnBack && (
        <Col xs={4} className="mt-3 ">
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
      {btnOnClick && (
        <Col xs={12} md={4} className="mt-3 container-button-update">
          <div className={`pt-4 pb-1 px-2 text-end button-update`}>
            <Button
              type="secondary"
              // style={{ background: "rgb(64, 64, 64)", color: "white" }}
              className="btn-actualizar"
              onClick={functionOnClick}
            >
              {titleBtnOnClick}
            </Button>
          </div>
          <div className={`ps-4 pe-3 text-end info-update`}>
            <p className={`mb-1`}>{type === 'parteDiario' ? 'Última actualización: ' : 'DDJJ hasta: '}{lastUpdated}</p>
          </div>
        </Col>
      )}
    </Row>
  );
};
export default TitlePage;
