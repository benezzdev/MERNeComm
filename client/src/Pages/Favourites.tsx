import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {User} from "../@Types/CustomTypes";
import DealsGrid from "../Components/DealsGrid";
import Deals from "./Deals";

type Props = {};

function Favourites({}: Props) {
  const {user}:User = useContext(AuthContext)
  const [favDeals, setFavDeals] = useState<Array<Deals>>([])

  const getFavDeals =()=> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "ids": user?.favDeals
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
console.log("useruseruseruser->",user)

    fetch("http://localhost:5049/api/deal/getListOfDeals", requestOptions)
        .then(async (response) => {
          console.log("response->",response)
let list =  await response.json()
          console.log("list->",list)
          setFavDeals(list)
        })
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
  }
  useEffect(()=>{
    if(user?.favDeals){
      getFavDeals()
    }
  },[user])


  return <>
    <h3>Favorites</h3>
    {favDeals&&<DealsGrid deals={favDeals}/>}
  </>
}

export default Favourites;
