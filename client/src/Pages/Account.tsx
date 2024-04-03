import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { AuthContext } from "../contexts/AuthContext";

const Account = () => {
  const { user,logoutUser } = useContext(AuthContext);
  let navigate = useNavigate()
  console.log("user->",user)

  // useEffect(() => {
  //   console.log("profile mounted");
  //   const getUserProfile = async () => {
  //     console.log("fetchiing user profile");
  //     const requestOptions = {
  //       method: "GET",
  //     };
  //     try {
  //       const response = await fetch(
  //         "http://localhost:9876/api/user/profile",
  //         requestOptions
  //       );
  //       const result = await response.json();
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUserProfile();
  // }, []);

  return (
    <Button
      onClick={() => {
        logoutUser();
      }}
    >
      logout
    </Button>
  );
};

export default Account;
