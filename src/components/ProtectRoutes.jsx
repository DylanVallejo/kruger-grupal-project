import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const ProtectRoutes = ({ children }) => {
  const { user } = UserAuth();

  if (Object.entries(user) !== 0) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectRoutes;
