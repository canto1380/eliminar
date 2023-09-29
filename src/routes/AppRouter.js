import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import { User } from "../context/UserProvider";
import { getDataToken, getToken } from "../helpers/helpers";
import Login from "../components/Login";
import Perfil from "../container/Admin/index";
import ContainerIndexParteDiario from "../container/ParteDiario";

const AppRouter = () => {
  // const [dataToken, setDataToken] = useState(undefined);
  // const [token, setToken] = useState(undefined);
  const [banderaLogin, setBanderaLogin] = useState(false);

  const { state, action } = useContext(User);
  console.log(state);
  console.log(action)
  
  // useEffect(() => {
  //   const token = getToken();
  //   const data = getDataToken();
  //   setToken(token);
  //   setDataToken(data);
  // }, [banderaLogin]);
  // console.log(token);
  return (
    <div>
      <Router>
        <Routes>
        {/* {window?.location?.pathname === '/' && (
            <Route path='*' element={<Navigate to='/login' replace />} />
          )} */}

          { !state || state.userToken.length === 0 ? (
            <Route
              path='/*'
              element={
                <PublicRoutes
                  banderaLogin={banderaLogin}
                  setBanderaLogin={setBanderaLogin}
                />
              }
            />
          ) : (
            <Route
              path='/*'
              element={
                <PrivateRoutes token={state}  />
              }
            />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
