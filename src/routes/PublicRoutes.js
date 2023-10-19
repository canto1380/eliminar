import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../container/Login";

const PublicRoutes = ({ token, banderaLogin, setBanderaLogin }) => {
  return (
    <Routes>
      {window?.location?.pathname === "/" && (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
      <Route
        exact
        path="/login"
        element={
          <Login
            banderaLogin={banderaLogin}
            setBanderaLogin={setBanderaLogin}
          />
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default PublicRoutes;
