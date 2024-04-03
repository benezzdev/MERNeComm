import { Deal } from "../@Types/CustomTypes";
import DealCard from "./DealCard";
import {Col, Row} from "antd";

type GridProps = {
  deals: Deal[] | null;
};

const DealsGrid = ({ deals }: GridProps) => {
  console.log("user.favDeals--->",deals)
  return (
    <Row>
      {deals &&
        deals.map((deal) => {
          return (
            <Col key={deal._id}   xs={{ flex: '100%' }}
                 sm={{ flex: '50%' }}
                 md={{ flex: '40%' }}
                 lg={{ flex: '20%' }}
                 xl={{ flex: '10%' }}>
              <DealCard
                _id={deal._id}
                image={deal.image}
                title={deal.title}
                descreption={deal.descreption}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default DealsGrid;
