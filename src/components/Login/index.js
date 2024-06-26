import { useState } from "react";
import { Button, Form, Input } from "antd";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import { validaEmail, validaClave } from "../../utils/validations/validation";
import Cookies from "js-cookie";
import { setToken, setDataToken } from "../../helpers/helpers";
import MsgError from "../../components/Messages/MsgError";
import "./Login.css";
import { Link } from "react-router-dom";
import { redirectBase } from "../../helpers/redirect";
import ImageLogo from "../../images/IPAAT-10-anios.png";
import loginAPI from "../../utils/authentication/login.js";

export const COOKIES = {
  authToken: "token-ipaat-v2",
  authId: "idUser",
};

const Login = ({ banderaLogin, setBanderaLogin }) => {
  const [loading, setLoading] = useState(false);

  const [dataError, setDataError] = useState(false);
  const [msgDataError, setMsgDataError] = useState("");
  const [errorServer, setErrorServer] = useState(false);
  const [errorValid, setErrorValid] = useState(false);

  const handleSubmit = (values) => {
    try {
      if (validaEmail(values.email) && validaClave(values.clave)) {
        login(values);
      } else {
        setErrorValid(true);
        setTimeout(() => {
          setErrorValid(false);
        }, 3000);
      }
    } catch (error) {
      setErrorServer(true);
      setTimeout(() => {
        setErrorServer(false);
      }, 3000);
    }
  };

  const claveCookie =  process.env.REACT_APP_API ? process.env.REACT_APP_API : process.env.REACT_APP_PRODUCTION
  const login = async (values) => {
    try {
    
      const res = await loginAPI(values);
      if (res.status === 200) {
        const {
          token,
          user: { id },
        } = res.data;
        Cookies.set(COOKIES.authToken, token, claveCookie, {
          expires: 1,
        });
        Cookies.set(COOKIES.authId, id, claveCookie, {
          expires: 1,
        });
        setToken(res?.data?.token);
        setDataToken(res?.data?.user);

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setBanderaLogin(!banderaLogin);
        }, 3000);
        redirectBase("admin/parte-diario");
      }
      if (res?.response?.status === 404) {
        setDataError(true);
        setMsgDataError(res?.response?.data?.error);
        setTimeout(() => {
          setDataError(false);
        }, 3000);
      }
    } catch (error) {}
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={`containerLogin`}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={10} sm={8} md={6} className={`containerForm`}>
            <div
              className={`d-flex justify-content-between align-items-center pb-4`}
            >
              <div className="">
                <h2 className={`titleLogin text-center mb-0`}>Inciar sesión</h2>
              </div>
              <div>
                <Link to="/login" target="_parent">
                  <Image
                    src={ImageLogo}
                    alt="Clara Calzados"
                    height="70"
                    width="70"
                  />
                </Link>
              </div>
            </div>
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 22 }}
              initialValues={{ remember: true }}
              // onSubmit={handleSubmit}
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Usuario"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar un email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Clave"
                name="clave"
                rules={[
                  { required: true, message: "Debe ingresar su clave!" },
                  {
                    max: 14,
                    message: "Hasta 14 caracteres",
                  },
                  {
                    min: 8,
                    message: "Minimo 8 caracteres",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{ offset: 1, span: 22 }}
                className="text-center pt-4"
              >
                {loading ? (
                  <Button disabled type="primary" htmlType="submit">
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="ms-2">Ingresando</span>
                  </Button>
                ) : (
                  <Button type="primary" htmlType="submit">
                    Ingresar
                  </Button>
                )}
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className={`justify-content-center align-items-center alert`}>
        {dataError && (
          <MsgError text1="Datos incorrectos." text2={msgDataError} />
        )}
        {errorValid && (
          <MsgError
            text1="Datos incorrectos."
            text2="Ingrese un mail y clave valida."
          />
        )}
        {errorServer && (
          <MsgError
            text1="Hubo un problema en el servidor."
            text2="Intente mas tarde"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
