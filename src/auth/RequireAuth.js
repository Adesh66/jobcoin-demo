import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { getCookie } from "../helper/_cookieHelper";

const RequireAuth = (props) => {
  const { children } = props;
  let location = useLocation();
  let authDataSerialized = getCookie("token");

  if (!authDataSerialized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
