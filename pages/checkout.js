import "../styles/CheckoutForm.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import { Col, Row } from "antd";

const CheckoutPage = () => {
  const stripePromise = loadStripe("your_public_stripe_key");
  return (
    <Row>
      <Col offset={6} span={12} className="stripe-form-container">
        <div className="stripe-form">
          <Row gutter={12}>
            <Col span={14}>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </Col>
            <Col span={10}>
              <OrderSummary />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default CheckoutPage;
