import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "antd";

const Account = () => {
  const { logoutUser } = useContext(AuthContext);
  useEffect(() => {
    console.log("profile mounted");
    const getUserProfile = async () => {
      // console.log("fetchiing user profile");
      // const requestOptions = {
      //   method: "GET",
      // };
      // try {
      //   const response = await fetch(
      //     "http://localhost:9876/api/user/profile",
      //     requestOptions
      //   );
      //   const result = await response.json();
      //   console.log(result);
      // } catch (error) {
      //   console.log(error);
      // }
    };
    getUserProfile();
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <Button
        onClick={() => {
          logoutUser();
        }}
      >
        logout
      </Button>
    </div>
  );
};

export default Account;
