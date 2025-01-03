import { useEffect, useState } from "react";
import DealsGrid from "../Components/DealsGrid";
import { Deal } from "../@Types/CustomTypes";

function Deals() {
  const [Deals, setDeals] = useState<Deal[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch("http://dummyshop.vercel.app/api/deal/alldeals", requestOptions)
        .then((response) => response.json())
        .then((result) => setDeals(result))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  console.log("deals :>> ", Deals);

  return <DealsGrid deals={Deals} />;
}

export default Deals;
