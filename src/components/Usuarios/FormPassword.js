import { Form, Input, Spin, Button } from "antd";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MsgError from "../Messages/MsgError";
import { api } from "../../utils/api";

const FormPass = ({ tokenAuth, routerAPI, dataRegisterEdit }) => {
  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editBand, setEditBand] = useState(false);

  const handleSubmit = async (values) => {
    try {
      updatePass(values);
    } catch (error) {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };
  const updatePass = async (values) => {
    const res = await api(
      "PATCH",
      `${routerAPI}/${dataRegisterEdit[0]?.id}`,
      values,
      tokenAuth
    );
    if (res.status === 200) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/admin/perfil";
      }, 2500);
    }
    if (res?.response?.status === 400) {
      const arraysError = res?.response?.data?.errors;
      setMessageError(arraysError);
      setDataError(true);
      setTimeout(() => {
        setDataError(false);
      }, 3000);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="menuContainer">
      <Row className={`d-flex justify-content-between align-items-center pb-2`}>
        <Col xs={12} md={8} className={``}>
          <div className={`pb-1`}>
            <h3 className="mb-0">Clave</h3>
          </div>
        </Col>
        <Col xs={12} md={4} className={`text-end`}>
          <div className={`pb-1`}>
            <Button
              type="primary"
              className={`${editBand && "bg-secondary text-white"}`}
              onClick={() => setEditBand(!editBand)}
            >
              {" "}
              {editBand ? "Volver" : "Editar Clave"}
            </Button>
          </div>
        </Col>
      </Row>
      <Form
        labelCol={{
          span: 22,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="vertical"
        style={{
          marginLeft: "2vh",
        }}
        size={"small"}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        disabled={!editBand && true}
      >
        <Row>
          <Col xs={6}>
            <Form.Item
              label="Ingrese clave actual"
              name="clave"
              className="mb-3 w-100"
              rules={[{ required: true, message: "Debe ingresar un clave" }]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Item
              label="Ingrese una clave"
              name="claveNueva"
              className="mb-3"
              rules={[{ required: true, message: "Debe ingresar un clave" }]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
          <Col xs={12} md={6}>
            <Form.Item
              label="Repita la clave"
              name="claveNueva1"
              className="mb-3"
              rules={[{ required: true, message: "Debe coincidir" }]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          className="text-end"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 22 }}
        >
          {loading ? (
            <Button disabled type="primary" htmlType="submit">
              <Spin
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-2">{"Actualizando"}</span>
            </Button>
          ) : (
            <Button type="primary" htmlType="submit">
              {"Actualizar"}
            </Button>
          )}
        </Form.Item>

        {dataError
          ? messageError.map((e, i) => (
              <MsgError key={i} text1={""} text2={e.msg} />
            ))
          : null}
        {serverError ? <MsgError text2="Server internal Error" /> : null}
      </Form>
    </div>
  );
};
export default FormPass;
