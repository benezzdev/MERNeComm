import { EllipsisOutlined, HeartOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import CardModal from "./CardModal";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

type DealCardProps = {
  _id: string;
  title: string;
  descreption: string;
  email: string;
  image: string;
};

function DealCard({ _id, title, descreption, email, image }: DealCardProps) {
  const navigate = useNavigate();

  return (
    <div>
      <Card
        style={{ width: 300, marginBottom: "25px" }}
        cover={
          <img
            alt={title}
            src={image}
            style={{ width: "300px", height: "200px" }}
          />
        }
        actions={[
          <HeartOutlined
            style={{ color: "red" }}
            key="favourite"
            onClick={() => {}}
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
    </div>
  );
}

export default DealCard;
