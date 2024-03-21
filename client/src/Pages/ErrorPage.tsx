import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {};

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error</h1>
      <Button onClick={() => navigate(-1)}>Back...</Button>
      <Button onClick={() => navigate("/")}>Go Home...</Button>
    </div>
  );
}

export default ErrorPage;
