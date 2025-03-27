import { Col, Row, Button, Spinner } from "react-bootstrap";
import { Select, DatePicker, Input } from "antd";
import { getAnios } from "../../utils/queryAPI/anios";
import { getMeses } from "../../utils/queryAPI/meses";
import { getIngenios } from "../../utils/queryAPI/ingenios";
import { getQuincenas } from "../../utils/queryAPI/quincenas";
import { useEffect, useState } from "react";

const { Search } = Input;

const Filtros = ({
  setDataEnd,
  setDataAnio,
  setDataMes,
  setDataQuincena,
  setDataZafra,
  setIngenio,
  dataEnd,
  dataAnio,
  dataMes,
  dataQuincena,
  dataZafra,
  anioExportDiaParada,
  diasParadaExport,
  setSearch,
  bandFilterZafraAnio,
  bandFilterAnio,
  bandFilterMes,
  bandFilterQuincena,
  BandFilterDiaParteDirectorio,
  bandFilterSearch,
  bandFilterIngenio,
  bandFilterDiasParadaAnioZafra,
  placeHolderSearch,
  zafraParteDiario,
  setZafraParteDiario,
  setAnioExportDiaParada,
  loadingDownloadReport,
  setLoadingDownloadReport,
  exportarDiasParadas,
}) => {
  const [dataAnios, setDataAnios] = useState(null);
  const [dataMeses, setDataMeses] = useState(null);
  const [dataQuincenas, setDataQuincenas] = useState(null);
  const [dataIngenios, setDataIngenios] = useState(null);

  useEffect(() => {
    dataFecha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataFecha = async () => {
    const aniosData = await getAnios();
    const mesesData = await getMeses();
    const quincenasData = await getQuincenas();
    const ingeniosData = await getIngenios();

    setDataAnios(aniosData);
    setDataMeses(mesesData);
    setDataQuincenas(quincenasData);
    setDataIngenios(ingeniosData);
  };

  const changeData = (e) => {
    if (e !== null) {
      setDataEnd(e.$d);
    } else {
      setDataEnd(null);
    }
  };

  const handleZafraParteDiario = (e) => {
    setZafraParteDiario(e);
  };
  const handleZafra = (e) => {
    setDataZafra(e);
  };
  const handleZafraReporteDiasParada = (e) => {
    setAnioExportDiaParada(e);
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
              optionFilterProp="label"
              // filterOption={(input, option) =>
              //   (option?.label ?? "").includes(input)
              // }
              options={optionsAnios}
              defaultValue={dataZafra}
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
              optionFilterProp="label"
              // filterOption={(input, option) =>
              //   (option?.label ?? "").includes(input)
              // }
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
              defaultValue={dataQuincena}
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
                <p className="fw-bolder mb-1">Filtros Parte Diario Directorio</p>
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
          <Row>
            <Col className="mt-3">
              <div className={`pt-4 pb-0 px-4`}>
                <p className="fw-bolder">
                  Filtros para exportar reporte días de parada
                </p>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
            <Col xs={12} md={6} lg={3} className="mb-1 mt-1">
              <span className="me-4">Zafra:</span>
              <Select
                onChange={handleZafraReporteDiasParada}
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
              />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-1 mt-1 alignSelf">
              <Button
                className={`${(anioExportDiaParada === null ||
                    anioExportDiaParada === "" ||
                    diasParadaExport === null) &&
                  "disabled"
                  }`}
                onClick={() => exportarDiasParadas()}
              >

                {(anioExportDiaParada === null || anioExportDiaParada === "") ? (
                  "Elija año"
                ) : anioExportDiaParada !== null &&
                  anioExportDiaParada !== "" &&
                  diasParadaExport === null ? (
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
                  "Descargar"
                )}
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default Filtros;
