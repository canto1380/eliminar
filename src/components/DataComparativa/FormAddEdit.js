import { Button, Form, Input, Select, Spin } from "antd";
import MsgError from "../Messages/MsgError";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import TitlePage from "../TitlePages";
import { anios } from "../../utils/seeders";
import dataComparativa from "../../Excel/dataConstanteParteDiario.json";

const FormAddEditDataComparativa = ({
  dataRegisterEdit,
  dataComparativaJSON,
}) => {
  const [dataError, setDataError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [serverError, setServerError] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  /** Filtrar anios que no estan registrado, ya qe no se pueden repetir **/
  const eliminarAniosRepetidos = (anios, dataComparativaJSON, propiedad) => {
    const idsArray2 = dataComparativaJSON.map((obj) =>
      parseInt(obj[propiedad])
    );
    return anios.filter((obj) => !idsArray2.includes(obj[propiedad]));
  };
  const array21 =
    dataComparativaJSON &&
    eliminarAniosRepetidos(anios, dataComparativaJSON, "anio");
  /*****/

  let optionsAnios = [];
  array21?.forEach((d) => {
    const option = { value: d.anio, label: d.anio };
    optionsAnios.push(option);
  });

  useEffect(() => {
    if (dataRegisterEdit) {
      setData(dataRegisterEdit[0]);
    }
  }, [dataRegisterEdit]);

  const handleSubmit = async (values) => {
    const anio = values.anio;
    const registerNew = {
      anio: anio.toString(),
      estimacionEEAOC: values.estimacionEEAOC,
      CMBPorDDJJIPAAT: values.CMBPorDDJJIPAAT,
    };
    const ss = dataComparativa.dataComparativa
    ss.push(registerNew)
    console.log(ss)
    dataComparativa.dataComparativa.push(ss)
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
        // initialValues={data}
      >
        <Form.Item
          label="Año"
          name="anio"
          rules={[{ required: true, message: "Debe ingresar un año" }]}
        >
          <Select
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Busque o seleccione"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={optionsAnios}
            // defaultValue={dataZafra}
          />
          {/* <Input disabled={dataRegisterEdit ? true : false}/> */}
        </Form.Item>
        <Form.Item
          label="CMD por DDJJ"
          name="CMBPorDDJJIPAAT"
          rules={[{ required: true, message: "Debe ingresar un valor" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Estimación EEAOC"
          name="estimacionEEAOC"
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
          ? messageError.map((e, i) => <MsgError key={i} text2={e.msg} />)
          : null}
        {serverError ? <MsgError text2="Server internal Error" /> : null}
      </Form>
    </div>
  );
};
export default FormAddEditDataComparativa;
