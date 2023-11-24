import { Button, Form, Input, Select, Spin } from "antd";
import MsgError from "../Messages/MsgError";
import { useState } from "react";
import { api } from "../../utils/api";

const FormAddEditDataComparativa = ({
  dataRegisterEdit,
  dataComparativaData,
  anio,
  aniosData,
}) => {

  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  let array21

  /** Filtrar anios que no estan registrado, ya qe no se pueden repetir **/
  const eliminarAniosRepetidos = (
    aniosData,
    dataComparativaData,
    propiedad
  ) => {
    const idsArray2 = dataComparativaData.map((obj) =>
      parseInt(obj[propiedad])
    );
    return aniosData.filter((obj) => !idsArray2.includes(obj[propiedad]));
  };

  array21 = dataComparativaData &&
    eliminarAniosRepetidos(aniosData, dataComparativaData, "anio_zafra");
  /*****/

  let optionsAnios = [];
  array21?.forEach((d) => {
    const option = { value: d.id, label: d.anio_zafra };
    optionsAnios.push(option);
  });

  const handleSubmit = async (values) => {
    if (!dataRegisterEdit) {
      createDataComparativa(values);
    } else {
      updateDataComparativa(values);
    }
  };
  const createDataComparativa = async (values) => {
    try {
      const res = await api("POST", "dataComparativa", values);
      if (res.status === 201) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          window.location.href = "/admin/datos-comparativos";
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
  const updateDataComparativa = async (values) => {
    try {
      values.id_anio_zafra = dataRegisterEdit.id_anio_zafra
      const res = await api("PATCH", `dataComparativa/${dataRegisterEdit?.id}`, values)
      if(res.status === 200) {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          window.location.href = "/admin/datos-comparativos"
        }, 2500);
      }
      if(res?.response?.status === 400) {
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="menuContainer">

        <Form
          labelCol={{
            span: 22,
          }}
          wrapperCol={{
            span: 22,
          }}
          layout="vertical"
          style={{
            marginLeft: "2vh",
          }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          initialValues={{
            id_anio_zafra: dataRegisterEdit?.anio_zafra,
            CMB_DDJJ: dataRegisterEdit?.CMB_DDJJ,
            estimacion_EEAOC: dataRegisterEdit?.estimacion_EEAOC
          }}
        >
          <Form.Item
            label="Año"
            name="id_anio_zafra"
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
          <Form.Item
            label="CMD por DDJJ"
            name="CMB_DDJJ"
            rules={[{ required: true, message: "Debe ingresar un valor" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Estimación EEAOC"
            name="estimacion_EEAOC"
            rules={[{ required: true, message: "Debe ingresar un valor" }]}
          >
            <Input type="number" />
          </Form.Item>

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
            ? messageError.map((e, i) => <MsgError key={i} text1={''} text2={e.msg} />)
            : null}
          {serverError ? <MsgError text2="Server internal Error" /> : null}
        </Form>
    </div>
  );
};
export default FormAddEditDataComparativa;
