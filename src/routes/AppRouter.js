import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import { User } from "../context/UserProvider";
import { deleteCookies, deleteToken } from "../helpers/helpers";
import { redirectBase } from "../helpers/redirect";

const AppRouter = () => {
  const [banderaLogin, setBanderaLogin] = useState(false);
  const [inactivoUser, setInactivoUser] = useState(false);
  const { state, action } = useContext(User);
  useEffect(() => {
    // let tiempoInactivo;

    // const reiniciarTemporizador = () => {
    //   clearTimeout(tiempoInactivo);
    //   tiempoInactivo = setTimeout(() => {
    //     setInactivoUser(true);
    //     deleteCookies();
    //     deleteToken();
    //     redirectBase("login");
    //   }, 1800000000);
    // };

    // reiniciarTemporizador();

    // const manejarActividad = () => {
    //   setInactivoUser(false);
    //   reiniciarTemporizador();
    // };

    // // Agrega los event listeners necesarios para detectar la actividad del usuario
    // document.addEventListener("mousemove", manejarActividad);
    // document.addEventListener("keydown", manejarActividad);

    // return () => {
    //   // Limpia los event listeners cuando el componente se desmonta
    //   clearTimeout(tiempoInactivo);
    //   document.removeEventListener("mousemove", manejarActividad);
    //   document.removeEventListener("keydown", manejarActividad);
    // };
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          {/* {window?.location?.pathname === '/' && (
            <Route path='*' element={<Navigate to='/login' replace />} />
          )} */}

          {!state || state.userToken.length === 0 ? (
            <Route
              path="/*"
              element={
                <PublicRoutes
                  banderaLogin={banderaLogin}
                  setBanderaLogin={setBanderaLogin}
                />
              }
            />
          ) : (
            <Route path="/*" element={<PrivateRoutes token={state} />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
