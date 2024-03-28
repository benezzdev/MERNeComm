import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  if (token) return <>{children}</>;

  if (!token)
    return (
      <>
        <Navigate to="/" />
      </>
    );
};
export default ProtectedRoute;
