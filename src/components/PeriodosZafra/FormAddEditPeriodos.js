import { Form, Select, Spin, Button, DatePicker, Row, Col } from "antd";
import "./periodoZafra.css";
import { useState } from "react";
import { api } from "../../utils/api";
import MsgError from "../Messages/MsgError";
import moment from "moment";
import dayjs from 'dayjs';

const FormAddEditPeriodos = ({
  dataRegisterEdit,
  periodosZafra,
  id,
  aniosData,
  ingeniosData,
}) => {
  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [dataErrorPK, setDataErrorPK] = useState(false);
  const [errorPKDuplicate, setErrorPKDuplicate] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inicioZafra, setInicioZafra] = useState(dataRegisterEdit?.inicio_zafra)
  const [finZafra, setFinZafra] = useState(dataRegisterEdit?.fin_zafra)
  let startDate, endDate;

  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };
  
  const changeDataInicio =(e) => {
    setInicioZafra(e.target.value)
  }
  const changeFinInicio =(e) => {
    setFinZafra(e.target.value)
  }

  // const changeData1 = (e) => {
  //   const formatDate = new Date(e.$d);
  //   const year = formatDate.toLocaleString("default", { year: "numeric" });
  //   const month = formatDate.toLocaleString("default", { month: "2-digit" });
  //   const day = formatDate.toLocaleString("default", { day: "2-digit" });

  //   startDate = year + "-" + month + "-" + day;
  // };
  // const changeData2 = (e) => {
  //   const formatDate = new Date(e.$d);
  //   const year = formatDate.toLocaleString("default", { year: "numeric" });
  //   const month = formatDate.toLocaleString("default", { month: "2-digit" });
  //   const day = formatDate.toLocaleString("default", { day: "2-digit" });
  //   endDate = year + "-" + month + "-" + day;
  // };

  const handleSubmit = async (values) => {
    if (!dataRegisterEdit) {
      createPeriodo(values);
    } else {
      updatePeriodo(values);
    }
  };
  const createPeriodo = async (values) => {
    values.inicio_zafra = inicioZafra;
    values.fin_zafra = finZafra;

    try {
      const res = await api("POST", "periodoZafra", values);
      if (res.status === 201) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          window.location.href = "/admin/periodos-zafra";
        }, 2500);
      }
      if (res?.response?.status === 400) {
        handleReset();
        const arraysError = res?.response?.data?.errors;
        setMessageError(arraysError);
        setDataError(true);
        setTimeout(() => {
          setDataError(false);
        }, 3000);
      }
      if (res?.response?.status === 401) {
        handleReset();
        const arraysError = res?.response?.data?.errors;
        setErrorPKDuplicate(arraysError);
        setDataErrorPK(true);
        setTimeout(() => {
          setDataErrorPK(false);
        }, 3000);
      }
    } catch (error) {
      handleReset();
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };

  const updatePeriodo = async (values) => {
    values.inicio_zafra = inicioZafra;
    values.fin_zafra = finZafra;
    try {
      const res = await api(
        "PATCH",
        `periodoZafra/${dataRegisterEdit?.id}`,
        values
      );
      if (res.status === 200) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          window.location.href = "/admin/periodos-zafra";
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
    } catch (error) {
      setServerError(true);
      setTimeout(() => {
        setServerError(false);
      }, 3000);
    }
  };

  let optionsAnios = [{ value: "", label: "Todos" }];
  aniosData?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.anio_zafra,
    };
    optionsAnios.push(option);
  });

  let optionsIngenios = [{ value: "", label: "Todos" }];
  ingeniosData?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.nombre_ingenio,
    };
    optionsIngenios.push(option);
  });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const dataEditInicio = new Date(dataRegisterEdit?.inicio_zafra)
  const dataInicioConvertido =  moment(dataEditInicio).format('YYYY-MM-DD')

  const dataEditFin = new Date(dataRegisterEdit?.fin_zafra)
  const dataFinConvertido =  moment(dataEditFin).format('YYYY-MM-DD')
  
  return (
    <div className="menuContainer">
      <Form
        form={form}
        layout="vertical"
        labelCol={{
          span: 22,
        }}
        wrapperCol={{
          span: 22,
        }}
        style={{
          marginLeft: "2vh",
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        initialValues={{
          id_anio_zafra: dataRegisterEdit?.anio_zafra,
          id_nombre_ingenio: dataRegisterEdit?.nombre_ingenio,
        }}
      >
        <Row>
          <Col xs={24} sm={11}>
            <Form.Item
              label="Año"
              name="id_anio_zafra"
              style={{ width: "100%" }}
              rules={[{ required: true, message: "Debe ingresar un año" }]}
            >
              <Select
                showSearch
                style={{
                  width: "100%",
                }}
                placeholder="Busque o seleccione"
                disabled={dataRegisterEdit ? true : false}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                options={optionsAnios}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={11}>
            <Form.Item
              label="Ingenio"
              name="id_nombre_ingenio"
              style={{ width: "100%" }}
              rules={[{ required: true, message: "Debe ingresar un ingenio" }]}
            >
              <Select
                showSearch
                style={{
                  width: "100%",
                }}
                placeholder="Busque o seleccione"
                disabled={dataRegisterEdit ? true : false}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                options={optionsIngenios}
              />
            </Form.Item>
          </Col>
          {/* <Col xs={24} sm={11}>
            <Form.Item
              label="Fecha Inicio"
              name="inicio_zafra"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Debe seleccionar una fecha" },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format={"DD/MM/YYYY"}
                onChange={changeData1}
              />
            </Form.Item>
          </Col> */}
          <Col xs={24} sm={11}>
            <input type="date" defaultValue={`${dataInicioConvertido}`} onChange={changeDataInicio}/>
          </Col>
          <Col xs={24} sm={11}>
            <input type="date" defaultValue={`${dataFinConvertido}`} onChange={changeFinInicio}/>
          </Col>
          {/* <Col xs={24} sm={11}>
            <Form.Item
              label="Fecha Finw"
              name="fin_zafra"
              style={{ width: "100%" }}
              rules={[
                { required: true, message: "Debe seleccionar una fecha" },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format={"DD/MM/YYYY"}
                onChange={changeFinInicio}
              />
            </Form.Item>
          </Col> */}
        </Row>
        <Form.Item
          className="text-end"
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 21 }}
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
              <span className="ms-2">
                {dataRegisterEdit ? "Actualizando" : "Agregando"}
              </span>
            </Button>
          ) : (
            <Button type="primary" htmlType="submit">
              {dataRegisterEdit ? "Actualizar" : "Agregar"}
            </Button>
          )}
        </Form.Item>
        {dataError
          ? messageError.map((e, i) => (
              <MsgError key={i} text2={e.path} text1={e.msg} />
            ))
          : null}
        {dataErrorPK && <MsgError text1={"Error"} text2={errorPKDuplicate} />}
        {serverError ? <MsgError text2="Server internal Error" /> : null}
      </Form>
    </div>
  );
};
export default FormAddEditPeriodos;
