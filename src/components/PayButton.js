import React from "react";
import { Notification, Message } from "element-react";

import StripeCheckout from "react-stripe-checkout";

const stripeConfig = {
  currency: "USD",
  publishableAPIKey: "pk_test_mJcP40x870xAmYxVSWZ7kLwP"
};

const PayButton = ({ event, user }) => {
  const handleCharge = () => {
    //
  };
  return (
    <StripeCheckout
      token={handleCharge}
      email={user.attributes.email}
      name={`My DropIn App - ${event.title}`}
      currency={stripeConfig.currency}
      amount={event.price}
      stripeKey={stripeConfig.publishableAPIKey}
      local="auto"
      allowRememberMe={false}
    />
  );
};

export default PayButton;
