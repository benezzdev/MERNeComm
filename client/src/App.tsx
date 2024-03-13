import { useEffect, useState } from "react";

import "./App.css";

interface User {
  email: string;
  _id: string;
  password: string;
}

function App() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch("http://localhost:5049/api/user/allusers", requestOptions)
        .then((response) => response.json())
        .then((result) => setUsers(result))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  console.log("users :>> ", users);

  return (
    <>
      <h1>All Users</h1>
    </>
  );
}

export default App;
