import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "react-bootstrap/Button";
import { useDispatch,useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Error from './Error';
import Loader from './Loader';
import Success from './Success';

function Checkout({ subTotal }) {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };

  return (
    <>
    {loading && <Loader />}
    {error && <Error error="something went wrong" />}
    {success && <Success success="Order placed Successfully" />}
    <StripeCheckout

      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51Kgl5nKkPr0681NoaZBHeUECkOZFxwsY5urHH0VupdpHSoLhXck5L4QXayLfGAnM6Cy2KWfLYlG3UQYJA17mpnDx00TJRpttqs"
      currency="INR"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
    </>
  );
}

export default Checkout;
