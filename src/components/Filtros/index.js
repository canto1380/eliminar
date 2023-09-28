import { Col, Row } from "react-bootstrap";
import { Select, DatePicker } from "antd";
import { anios, meses, quincenas } from "../../utils/seeders";

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

  let optionsMeses = [];
  meses?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.name,
    };
    optionsMeses.push(option);
  });
  let optionsAnios = [];
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
  // options.unshift({
  //   value: null,
  //   label: 'Todas',
  // })
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
        {/* <Col xs={12} sm={6} lg={3} className='mb-1 mt-1'>
        <p className='me-4 mb-0 text-white'>.</p>
          <Button icon={<SearchOutlined />} />
        </Col> */}
      </Row>

      <Row>
        <Col className="mt-3">
          <div className={`pt-4 pb-0 px-4`}>
            <p className="fw-bolder">Filtros Parte Diario Directorio</p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
        {/* <Col xs={12} lg={4} className='mb-1 mt-1'>
          <span className='me-4'>Categoría:</span>
          <Select
            onChange={changeIdNewsCategory}
            showSearch
            style={{
              width: '100%',
            }}
            placeholder='Busque o seleccione'
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
          />
        </Col>
        <Col xs={12} lg={4} className='mb-1 mt-1'>
          <p className='me-4 mb-0'>Periodo:</p>
          <RangePicker
            placeholder={['Desde', 'Hasta']}
            format={'DD/MM/YYYY'}
            disabled={true}
            style={{
              width: '100%',
            }}
            onChange={changeData}
          />
        </Col> */}
        <Col xs={12} lg={4} className="mb-1 mt-1">
          <p className="me-4 mb-0">Dia del parte:</p>
          <DatePicker format={"DD/MM/YYYY"} onChange={changeData} />
        </Col>
      </Row>
    </>
  );
};
export default Filtros;
