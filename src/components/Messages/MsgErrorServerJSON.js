import { Space, Alert, Button } from "antd";
import { Col, Row } from "react-bootstrap";
import { LuRefreshCcw } from "react-icons/lu";
import './messages.css'

const MsgErrorServerJSON = ({ msg1, btnLink }) => {

  return (
    <Row className="d-flex justify-content-center align-items-center row-msg-error-json">
      <Col xs={12} className="col-center py-3">
        <h4>{`${msg1}`}</h4>
        {/* <Space direction="vertical" style={{ width: "100%" }}>
          <Alert
            className="text-center w-50"
            // message="Error"
            description={`${msg1}`}
            type="error"
            showIcon
          />
        </Space> */}
      </Col>
      <Col xs={12} className="col-center">
        <Button href={btnLink} type="primary" icon={LuRefreshCcw} >
          Recargar
        </Button>
      </Col>
    </Row>
  );
};

export default MsgErrorServerJSON;
