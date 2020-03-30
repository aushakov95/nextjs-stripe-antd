import "../styles/CheckoutForm.css";
import { Col, Row } from "antd";

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <Row>
        <Col span={1}>
          <div className="divider"></div>
        </Col>
        <Col span={23}>
          <h1>Order Summary</h1>
          <Row>
            <Col span={12}>
              <div className="order-item">
                <h3>Standard subscription</h3>
              </div>
            </Col>
            <Col span={12}>
              <div className="order-item-price">
                <p>$10.00 monthly</p>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <h3>Today's charge: $10.00</h3>
        </Col>
      </Row>
    </div>
  );
};

export default OrderSummary;
