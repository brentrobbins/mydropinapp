import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { createOrder } from "../graphql/mutations";
import { Notification, Message } from "element-react";
import { history } from "../App";
import StripeCheckout from "react-stripe-checkout";

const stripeConfig = {
  currency: "USD",
  publishableAPIKey: "pk_test_mJcP40x870xAmYxVSWZ7kLwP"
};

const PayButton = ({ event, user }) => {
  const getOwnerEmail = async ownerId => {
    try {
      const input = { id: ownerId };
      const result = await API.graphql(graphqlOperation(getUser, input));
      return result.data.getUser.email;
    } catch (err) {
      console.error(`Error fetching event owner's email`, err);
    }
  };
  const handleCharge = async token => {
    try {
      const ownerEmail = await getOwnerEmail(event.owner);
      const result = await API.post("orderlambda", "/charge", {
        body: {
          token,
          charge: {
            currency: stripeConfig.currency,
            amount: event.price,
            name: "My DropIn App",
            description: event.title
          },
          email: {
            customerEmail: user.attributes.email,
            ownerEmail
          }
        }
      });
      console.log({ result });
      if (result.charge.status === "succeeded") {
        //createOrder
        const input = {
          orderUserId: user.attributes.sub,
          orderEventId: event.id
        };
        const order = await API.graphql(
          graphqlOperation(createOrder, { input })
        );
        console.log(order);
        Notification({
          title: "Success",
          message: `${result.message}`,
          duration: 3000
        });
        setTimeout(() => {
          history.push("/");
          Message({
            type: "info",
            message: "Check our verified email for order detail.",
            duration: 5000,
            showClose: true
          });
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error processing order"}`,
        duration: 3000
      });
    }
  };
  return (
    <StripeCheckout
      token={handleCharge}
      email={user.attributes.email}
      name="My DropIn App"
      description={event.title}
      currency={stripeConfig.currency}
      amount={event.price}
      stripeKey={stripeConfig.publishableAPIKey}
      local="auto"
      allowRememberMe={false}
      zipCode={false}
      billingAddress={false}
    />
  );
};

export default PayButton;
