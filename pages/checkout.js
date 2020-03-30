import "../styles/CheckoutForm.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import { Col, Row } from "antd";

const CheckoutPage = () => {
  const stripePromise = loadStripe(
    "pk_test_f4ItgvCpY35cAFDKy0kxzaZe00LFMkfD3v"
  );
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
