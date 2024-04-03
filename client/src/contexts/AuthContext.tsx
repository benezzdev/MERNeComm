import {ReactNode, createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {User} from "../@Types/CustomTypes";

interface AuthContextType {
  createUser: (email:string, password:string) => void,
  loginUser: (email:string, password:string) => void,
  logoutUser: () => void;
  getToken: () => void;
  user: User|null
  isLoading: boolean;
  updateUser: (user:User) => void;
}

const defaultValue: AuthContextType = {
  createUser: (email:string, password:string) => {},
  loginUser: (email:string, password:string) => {},
  logoutUser: () => {},
  getToken: () => {},
  user:null,
  isLoading: false,
  updateUser: (user:User) => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

type ProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: ProviderProps) => {
  let navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>(null);

  const getUser=()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    let userID = localStorage.getItem("userId");
    fetch(`http://localhost:5049/api/user/${userID}`, requestOptions)
        .then(async (response) => {
          let result = await response.json()
          console.log("result->",result)
          setUser(result)
        })
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
  }
useEffect(()=>{
  let token = getToken()
  if(token) {
    getUser()
  }
},[])

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    }
  };

  const updateUser = (user:User)=>{
    setUser(user)
  }
  const logoutUser = async () => {
    console.log("inside real")
    const token = localStorage.getItem("token");
    if (token) {
      console.log("token found, Removing User ");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setUser(null)
      navigate("/")
    } else {
      console.log("user cannot logout if not logged in");
    }
  };

  const createUser = async (email:string, password:string)=>{
    console.log("inside create user")

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(
        "http://localhost:5049/api/user/register",
        requestOptions
    );
    const result = await response.json();
    console.log("result", result);
    if (result.user){
      console.log("user setted->",result.user)
      setUser(result.user);
      navigate("/")
    }
  }

  const loginUser = async (email:string, password:string)=>{
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: urlencoded,
    };

    const response = await fetch(
        "http://localhost:5049/api/user/login",
        requestOptions
    );
    const result = await response.json();
    console.log("result", result);
    const { token, user } = result;
    if (token) {
      console.log("setting token", token);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);
    }
    if (user) {
      console.log("useruser->",user)
      setUser(user);
      navigate("/")
    }

  }

  return (
    <AuthContext.Provider
      value={{
        createUser,
        loginUser,
        logoutUser,
        getToken,
        user,
        isLoading,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
