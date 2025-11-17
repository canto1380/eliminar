import { Col, Row, Button, Spinner } from "react-bootstrap";
import { Select, DatePicker, Input, Space } from "antd";
import { getAnios } from "../../utils/queryAPI/anios";
import { getMeses } from "../../utils/queryAPI/meses";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import { getQuincenas } from "../../utils/queryAPI/quincenas";
import { useEffect, useRef, useState } from "react";
import './filtros.css'
import { getRegion } from "../../utils/queryAPI/region";

const { RangePicker } = DatePicker;

const { Search } = Input;

const Filtros = ({
  setDataEnd,
  setDataAnio,
  setDataMes,
  setDataQuincena,
  setDataZafra,
  setIngenio,
  setDatePeriodoStart,
  setDatePeriodoEnd,
  setAnioStart,
  setAnioEnd,
  setItemsComaprativosZafra,
  setRegion,
  dataEnd,
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  diasParadas,
  setSearch,
  bandFilterZafraAnio,
  bandFilterAnio,
  bandFilterMes,
  bandFilterQuincena,
  BandFilterDiaParteDirectorio,
  bandFilterSearch,
  bandFilterIngenio,
  bandFilterDiasParadaAnioZafra,
  bandFilterPeriodo,
  bandFilterIngenioRegion,
  bandFilterPeriodoAnios,
  bandFilterItemsComparativoFinal,
  bandFilterRegion,
  placeHolderSearch,
  zafraParteDiario,
  setZafraParteDiario,
  loadingDownloadReport,
  exportarDiasParadas,
  fixedComponent
}) => {
  const [dataAnios, setDataAnios] = useState(null);
  const [dataMeses, setDataMeses] = useState(null);
  const [dataQuincenas, setDataQuincenas] = useState(null);
  const [dataIngenios, setDataIngenios] = useState(null);
  const [dataRegiones, setDataRegiomes] = useState(null)

  useEffect(() => {
    dataFecha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataFecha = async () => {
    const aniosData = await getAnios();
    const mesesData = await getMeses();
    const quincenasData = await getQuincenas();
    const paramsIngenios = { region: bandFilterIngenioRegion }
    const ingeniosData = await getIngenios(bandFilterIngenioRegion && paramsIngenios);
    const regionData =  await getRegion()

    setDataAnios(aniosData);
    setDataMeses(mesesData);
    setDataQuincenas(quincenasData);
    setDataIngenios(ingeniosData);
    setDataRegiomes(regionData)
  };

  const changeData = (e) => {
    if (e !== null) {
      setDataEnd(e.$d);
    } else {
      setDataEnd(null);
    }
  };

  const changePeriodo = (e) => {
    if (e !== null) {
      setDatePeriodoStart(e[0].$d)
      setDatePeriodoEnd(e[1].$d)
    } else {
      setDatePeriodoStart(undefined)
      setDatePeriodoEnd(undefined)
    }
  }

  const changePeriodoAnios = (e) => {
    if (e !== null) {
      setAnioStart(e[0].$y)
      setAnioEnd(e[1].$y)
    } else {
      setAnioStart(undefined)
      setAnioEnd(undefined)
    }
  }


  const handleZafraParteDiario = (e) => {
    setZafraParteDiario(e);
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
    setSearch(e.target.value);
  };
  const handleIngenio = (e) => {
    setIngenio(e);
  };
  const handleRegion = (e) => {
    setRegion(e)
  }

  let optionsMeses = [];
  dataMeses?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.mes_zafra,
    };
    optionsMeses.push(option);
  });

  let optionsAnios = [{ value: "", label: "Todos" }];
  dataAnios?.forEach((d) => {
    const option = {
      value: d.anio_zafra,
      label: d.anio_zafra,
    };
    optionsAnios.push(option);
  });
  let optionsQuincena = [];
  dataQuincenas?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.quincena_zafra,
    };
    optionsQuincena.push(option);
  });

  let optionsIngenios = [{ value: "", label: "Todos" }];
  dataIngenios?.forEach((d) => {
    const option = {
      value: d.nombre_ingenio,
      label: d.nombre_ingenio,
    };
    optionsIngenios.push(option);
  });

  let optionsRegiones = [{ value: 'Todos', label: 'Todos'}]
  dataRegiones?.forEach((d) => {
    const option = {
      value: d.id,
      label: d.nombre_region
    }
    optionsRegiones.push(option)
  })

  const options = [
    { label: 'CMB', value: 'CMB' },
    { label: 'CMN', value: 'CMN' },
    { label: 'AZ. EQUIV', value: 'EQUIVALENTE' },
    { label: 'RCMB', value: 'RCMB' },
    { label: 'RCMN', value: 'RCMN' },
    { label: 'AZ. CRUDO', value: 'CRUDO' },
    { label: 'AZ. BLANCO', value: 'BLANCO' },
    { label: 'AZ. REFINADO', value: 'REFINADO' },
    { label: 'AZ. ORGÁNICO', value: 'ORGANICO' },
    { label: 'OTROS AZ.', value: 'OTROS' },
    { label: 'AZ. TOTAL', value: 'FISICOTOTAL' },
    { label: 'MELAZA', value: 'MELAZA' },
    // { label: 'ALCOHOL HIDRATADO', value: 'ALCHIDRATADO' },
    { label: 'ALCOHOL PRODUCIDO', value: 'ALCPRODUCIDO' },
    { label: 'ALCOHOL ANHIDRO', value: 'ANHIDRO' }
  ];

  const handleItemsComparativoFinal = value => {
    setItemsComaprativosZafra(value)
  };

  return (
    <div className={`${fixedComponent ? 'position-sticky top-0 bg-white' : ''} `} style={{ zIndex: 1000 }}>
      <Row>
        <Col className="mt-3">
          <div className={`pt-3 pb-0 px-4`}>
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
              optionFilterProp="label"
              // filterOption={(input, option) =>
              //   (option?.label ?? "").includes(input)
              // }
              options={optionsAnios}
              value={dataZafra}
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
              optionFilterProp="label"
              // filterOption={(input, option) =>
              //   (option?.label ?? "").includes(input)
              // }
              options={optionsAnios}
              value={dataAnio}
            />
          </Col>
        )}

        {bandFilterPeriodo && (
          <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
            <div>
              <span className="me-4">Periodo:</span>

            </div>
            <RangePicker
              format={"DD/MM/YYYY"}
              onChange={changePeriodo}
              disabled={!dataZafra ? true : false}
              style={{
                width: "100%",
              }}
            />
          </Col>
        )}
        {bandFilterPeriodoAnios && (
          <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
            <div>
              <span className="me-4">Años:</span>
            </div>
            <RangePicker
              picker="year"
              id={{
                start: 'startInput',
                end: 'endInput',
              }}

              onChange={changePeriodoAnios}
              style={{
                width: "100%",
              }}
              placeholder={['Año 1', 'Año 2']}
            />
          </Col>
        )}
        {bandFilterItemsComparativoFinal && (
          <Col xs={12} md={6} className="mb-1 mt-1">
            <div>
              <span className="me-4">Items comparativos:</span>
            </div>
            <Space style={{ width: '100%' }} direction="vertical">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Parámetros comparativos"
                defaultValue={['CMB']}
                onChange={handleItemsComparativoFinal}
                options={options}
              />
            </Space>
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
              optionFilterProp="label"
              // filterOption={(input, option) =>
              //   (option?.label ?? "").includes(input)
              // }
              options={optionsMeses}
              value={dataMes}
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
              optionFilterProp="label"
              // filterOption={(input, option) =>
              //   (option?.label ?? "").includes(input)
              // }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={optionsQuincena}
              value={dataQuincena}
            />
          </Col>
        )}
        {bandFilterIngenio && (
          <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
            <span className="me-4">Ingenio:</span>
            <Select
              onChange={(e) => handleIngenio(e)}
              showSearch
              style={{
                width: "100%",
              }}
              placeholder="Busque o seleccione"
              optionFilterProp="label"
              // filterOption={(input, option) =>
              //   (option?.label ?? "").includes(input)
              // }
              options={optionsIngenios}
            />
          </Col>
        )}
        {bandFilterRegion && (
          <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
            <span className="me-4">Región:</span>
            <Select
              onChange={(e) => handleRegion(e)}
              showSearch
              style={{
                width: "100%",
              }}
              placeholder="Busque o seleccione"
              optionFilterProp="label"

              options={optionsRegiones}
            />
          </Col>
        )}
        {bandFilterSearch && (
          <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
            <span className="me-4">Buscar:</span>
            <Search
              style={{ width: "100%" }}
              placeholder={placeHolderSearch}
              enterButton="Buscar"
              size="medium"
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
                <p className="fw-bolder mb-1">
                  Filtros Parte Diario Directorio
                </p>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
            <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
              <span className="me-4">Zafra:</span>
              <Select
                onChange={handleZafraParteDiario}
                showSearch
                style={{
                  width: "100%",
                }}
                placeholder="Busque o seleccione"
                optionFilterProp="label"
                // filterOption={(input, option) =>
                //   (option?.label ?? "").includes(input)
                // }
                options={optionsAnios}
              // defaultValue={zafraParteDiario}
              />
            </Col>
            <Col xs={12} lg={4} className="mb-1 mt-1">
              <p className="me-4 mb-0">Dia del parte:</p>
              <DatePicker
                format={"DD/MM/YYYY"}
                onChange={changeData}
                disabled={!zafraParteDiario ? true : false}
              />
            </Col>

          </Row>
        </>
      )}
      {bandFilterDiasParadaAnioZafra && (
        <>

          <Row className="d-flex justify-content-start align-items-center pb-1 px-4">

            <Col xs={12} md={6} lg={3} className="mb-1 mt-1 alignSelf">
              <Button
                className={`${(dataZafra === null ||
                  dataZafra === undefined ||
                  diasParadas === null ||
                  !diasParadas) &&
                  "disabled"
                  }`}

                onClick={() => exportarDiasParadas()}
              >
                {dataZafra === null || !dataZafra ? (
                  "Elija año"
                ) : dataZafra !== null &&
                  dataZafra &&
                  diasParadas === null ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Procesando
                  </>
                ) : loadingDownloadReport ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Descargando
                  </>
                ) : (
                  "Descargar informe"
                )}
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
export default Filtros;
