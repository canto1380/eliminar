import { Col, Row } from "react-bootstrap";
import { Select, DatePicker, Space, Input } from "antd";
import { anios, meses, quincenas } from "../../utils/seeders";

const { Search } = Input

const Filtros = ({
  setDataEnd,
  setDataAnio,
  setDataMes,
  setDataQuincena,
  setDataZafra,
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  setSearch,
  bandFilterZafraAnio,
  bandFilterAnio,
  bandFilterMes,
  bandFilterQuincena,
  BandFilterDiaParteDirectorio,
  bandFilterSearch
}) => {
  const changeData = (e) => {
    if (e !== null) {
      setDataEnd(e.$d);
    } else {
      setDataEnd(null);
    }
  };

  const handleZafra = (e) => {
    setDataZafra(e);
  };

  const handleAnio = (e) => {
    setDataAnio(e);
  };
  const handleMes = (e) => {
    setDataMes(e);
  };
  const handleQuincena = (e) => {
    setDataQuincena(e);
  };
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  let optionsMeses = [];
  meses?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.name,
    };
    optionsMeses.push(option);
  });
  let optionsAnios = [{value: null, label: 'Todos'}];
  anios?.forEach((d) => {
    const option = {
      value: d.anio,
      label: d.anio,
    };
    optionsAnios.push(option);
  });
  let optionsQuincena = [];
  quincenas?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.quincena,
    };
    optionsQuincena.push(option);
  });

  return (
    <>
      <Row>
        <Col className="mt-3">
          <div className={`pt-4 pb-0 px-4`}>
            <p className="fw-bolder">Filtros información</p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        {bandFilterZafraAnio && (
        <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
          <span className="me-4">Zafra:</span>
          <Select
            onChange={handleZafra}
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
            defaultValue={dataZafra}
          />
        </Col>
        )}
        {bandFilterAnio && (
        <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
          <span className="me-4">Año:</span>
          <Select
            onChange={handleAnio}
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
            defaultValue={dataAnio}
          />
        </Col>
        )}
        {bandFilterMes && (
        <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
          <span className="me-4">Mes:</span>
          <Select
            onChange={handleMes}
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Busque o seleccione"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={optionsMeses}
            defaultValue={dataMes}
          />
        </Col>
        )}
        {bandFilterQuincena && (
        <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
          <span className="me-4">Quincena:</span>
          <Select
            onChange={handleQuincena}
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Busque o seleccione"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={optionsQuincena}
            defaultValue={dataQuincena}
          />
        </Col>
        )}
        {bandFilterSearch && (
        <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
          <span className="me-4">Buscar:</span>
            <Search
              style={{ width: '100%' }}
              placeholder={`Nombre`}
              enterButton='Buscar'
              size='medium'
              width={100}
              onChange={(e) => handleChange(e)}
            />
        </Col>
        )}
      </Row>
      {BandFilterDiaParteDirectorio && (
        <>
      <Row>
        <Col className="mt-3">
          <div className={`pt-4 pb-0 px-4`}>
            <p className="fw-bolder">Filtros Parte Diario Directorio</p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">

        <Col xs={12} lg={4} className="mb-1 mt-1">
          <p className="me-4 mb-0">Dia del parte:</p>
          <DatePicker format={"DD/MM/YYYY"} onChange={changeData} />
        </Col>
      </Row>
      </>
      )}
    </>
  );
};
export default Filtros;
