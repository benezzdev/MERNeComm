import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: Props) => {
  return <>{children}</>;
};
export default ProtectedRoute;
