import { useEffect, useState } from "react";
import { Button } from "antd";

interface Deal {
  email: string;
  _id: string;
  password: string;
}

function App() {
  const [Deals, setDeals] = useState<Deal[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch("http://localhost:5049/api/deal/alldeals", requestOptions)
        .then((response) => response.json())
        .then((result) => setDeals(result))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  console.log("deals :>> ", Deals);

  return (
    <>
      <h1>All Deals</h1>
    </>
  );
}

export default App;
