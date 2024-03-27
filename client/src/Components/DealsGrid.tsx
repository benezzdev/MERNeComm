import { Deal } from "../@Types/CustomTypes";
import DealCard from "./DealCard";
import { Col } from "antd";

type GridProps = {
  deals: Deal[] | null;
};

const DealsGrid = ({ deals }: GridProps) => {
  return (
    <>
      {deals &&
        deals.map((deal) => {
          return (
            <Col key={deal._id} md={6} sm={8} xs={16}>
              <DealCard
                ein={deal._id}
                cover={deal.image}
                avatar={deal.image}
                title={deal.title}
                descreption={deal.descreption}
              />
            </Col>
          );
        })}
    </>
  );
};

export default DealsGrid;
