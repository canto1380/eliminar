// /**
//  * PARAMETROS GLOBALES
//  * 1- dataZafra >> anio elegido
//  * 2- data >> datos a exportart
//  * 3- funcionExportar >> funcion que se ejecuta para generar el excel
//  * 4- loadingDownloadReport >> state boolean para determinar si se esta descargando para poner spinn en el btn
//  * 
//  * PARAMETROS INDIVIDUALES
//  * 1- bandExoport<nombre_reporte> >> Determina que se ejecuta
//  **/


// import { Col, Row, Button, Spinner } from "react-bootstrap";
// import './botones.css'
// const BtnDescargar = ({
//   /** GLOBAL **/
//   dataZafra,  // anio elegido
//   data, // datos a exportar
//   funcionExportar, // funcion de exportacion de cada pagina

//   /** DIAS PARADAS **/
//   bandExportDiasParadas,
//   loadingDownloadReport,

//   /** PERIODOS **/
//   bandExportPeriodos,
//   loading,

//   /** DDJJ INFORME **/
//   bandExportDDJJInforme,

//   /** DDJJ REPORTE DINAMICO **/
//   bandExportDDJJDynamicReport,
//   puedeMostrarReporte
// }) => {
  
//   // Determinar qué bandera está activa
//   const isDiasParadas = bandExportDiasParadas === true;
//   const isPeriodos = bandExportPeriodos === true;
//   const isDDJJInforme = bandExportDDJJInforme === true
//   const isDDJJReporte = bandExportDDJJDynamicReport === true

//   // Determinar qué función de loading usar
//   const isLoading = isDiasParadas ? loadingDownloadReport : loading;

//   // Lógica para determinar si el botón está deshabilitado
//   const isDisabled = isDiasParadas
//     ? (!dataZafra || data === null || data === undefined) // Para días de paradas: requiere dataZafra y data
//     : false; // Para periodos: siempre habilitado

//   // Lógica para determinar el texto del botón
//   const getButtonText = () => {
//     if (isDiasParadas) {
//       // Estados para días de paradas
//       if (!dataZafra) {
//         return "Elija año";
//       }
//       if (dataZafra && (data === null || data === undefined)) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Procesando
//           </>
//         );
//       }
//       if (loadingDownloadReport) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Descargando
//           </>
//         );
//       }
//       return "Descargar informe";
//     }

//     if (isPeriodos) {

//       if (!data || data === null) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Procesando
//           </>
//         )
//       }
//       // Estados para periodos
//       if (loading) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Descargando
//           </>
//         );
//       }
//       return "Descargar informe";
//     }

//     if (isDDJJInforme) {

//       if (!data || data === null) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Procesando
//           </>
//         )
//       }
//       // Estados para periodos
//       if (loadingDownloadReport) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Descargando
//           </>
//         );
//       }
//       return "Descargar informe";
//     }

//     if (isDDJJReporte) {

//       if (!data || data === null) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Procesando
//           </>
//         )
//       }
//       // Estados para periodos
//       if (loadingDownloadReport) {
//         return (
//           <>
//             <Spinner
//               as="span"
//               animation="border"
//               size="sm"
//               role="status"
//               aria-hidden="true"
//             />
//             Descargando
//           </>
//         );
//       }
//       return "Descargar reporte";
//     }

//     return "Descargar informe";
//   };

//   // Manejar el click
//   const handleClick = () => {
//     if (funcionExportar && !isDisabled && !isLoading) {
//       funcionExportar();
//     }
//   };

//   return (
//     <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
//       <Col xs={12} md={6} lg={3} className="mb-1 mt-1 alignSelf">
//         <Button
//           className={`btn-descargar ${isDisabled || isLoading ? "disabled" : ""}`}
//           onClick={handleClick}
//           disabled={isDisabled || isLoading}
//         >
//           {getButtonText()}
//         </Button>
//       </Col>
//     </Row>
//   );
// };

// export default BtnDescargar;

import { Col, Row, Button, Spinner } from "react-bootstrap";
import "./botones.css";

const BtnDescargar = ({
  enabled = true,
  loading = false,
  processing = false,
  onClick,
  text = "Descargar informe",
}) => {

  const isDisabled = !enabled || loading || processing;

  const renderText = () => {
    if (processing) {
      return (
        <>
          <Spinner size="sm" animation="border" className="me-2" />
          Procesando
        </>
      );
    }

    if (loading) {
      return (
        <>
          <Spinner size="sm" animation="border" className="me-2" />
          Descargando
        </>
      );
    }

    return text;
  };

  return (
    <Row className="d-flex justify-content-start align-items-center pb-1 px-4">
      <Col xs={12} md={6} lg={3}>
        <Button
          className="btn-descargar"
          disabled={isDisabled}
          onClick={onClick}
        >
          {renderText()}
        </Button>
      </Col>
    </Row>
  );
};

export default BtnDescargar;
