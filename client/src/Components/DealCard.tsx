import { EllipsisOutlined, HeartOutlined } from "@ant-design/icons";
import { Avatar, Card, Image } from "antd";
import CardModal from "./CardModal";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

const { Meta } = Card;

type DealCardProps = {
  _id: string;
  title: string;
  descreption: string;
  email: string;
  image: string;
};

function DealCard({ _id, title, descreption, email, image }: DealCardProps) {
    const {user, updateUser} = useContext(AuthContext)
  const navigate = useNavigate();

    const handleLikeOrDislike=async (dealId:string)=>{
        const requestOptions = {
            method: "PATCH",
            body: JSON.stringify({favId: _id, userID: user?._id}),
            headers: {
                'Content-Type': 'application/json',
            },

        };
    let response: any
        if (user?.favDeals.includes(dealId)) {
            response = await fetch(
                "http://dummyshop.vercel.app/api/user/deleteFavourite", requestOptions
            );
        }else {
            response = await fetch(
                "http://dummyshop.vercel.app/api/user/addFavourite", requestOptions
            );
        }
        const result = await response.json();
        updateUser(result.user)
        console.log("resultresultresult-->",result)

    }






  return (
      <Card
        style={{ marginBottom: "25px", marginRight:"50px", width:300 }}
        cover={
          <Image
            alt={title}
            src={image} height={200}
          />
        }
        actions={[
            <HeartOutlined
                style={{ color: user?.favDeals.includes(_id)?"red":"blue" }}
                key="favourite"
                onClick={() => {
                    handleLikeOrDislike(_id)
                }}
            />,
          <EllipsisOutlined
            key="ellipsis"
            onClick={() => {
              navigate("/deal/" + _id);
            }}
          />,
        ]}
      >
        <Meta avatar={<Avatar src={image} />} title={title} />
        <CardModal />
      </Card>
  );
}

export default DealCard;
