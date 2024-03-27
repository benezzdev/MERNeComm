import { ReactNode, createContext, useState } from "react";

interface AuthContextType {
  logoutUser: () => void;
  getToken: () => void;
  setUserCredentials: (userId: string) => void;
  userId: string;
  isLoading: boolean;
}

const defaultValue: AuthContextType = {
  logoutUser: () => {},
  getToken: () => {},
  setUserCredentials: () => {},
  userId: "",
  isLoading: false,
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

type ProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const setUserCredentials = (userId: string) => {
    setUserId(userId);
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    }
  };

  const logoutUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("token found, Removing User ");
      localStorage.removeItem("token");
    } else {
      console.log("user cannot logout if not logged in");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logoutUser,
        getToken,
        setUserCredentials,
        userId,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
