import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

// import { User } from "../context/UserProvider";
import { getDataToken, getToken } from "../helpers/helpers";

const AppRouter = () => {
  const [dataToken, setDataToken] = useState(undefined)
  const [token, setToken] = useState(undefined)
  const [banderaLogin, setBanderaLogin] = useState(false)
  useEffect(() => {
    const token = getToken()
    const data = getDataToken()
    setToken(token)
    setDataToken(data)
  },[banderaLogin])
  return (
    <div>
      <Router>
        <Routes>
          {window?.location?.pathname === "/" && (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
          {!token || token.length === 0 ? (
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
            <Route
              path="/*"
              element={<PrivateRoutes token={token} dataToken={dataToken} />}
            />
          )}

          {/* {!state.userToken || state.userToken.length === 0 ? (
            <Route
              path="/*"
              element={
                <PublicRoutes
                />
              }
            />
          ) : (
            <Route
              path="/*"
              element={<PrivateRoutes token={state.userToken} />}
            />
          )} */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
