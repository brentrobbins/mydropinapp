import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { convertCentsToDollars } from "../utils";
// prettier-ignore

import { Table, Button, Notification, MessageBox, Message, Tabs, Icon, Form, Dialog, Input, Card, Tag } from 'element-react'

const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    email
    registered
    orders {
      items {
        id
        createdAt
        event {
          id
          title
          owner
          price
          createdAt

        }
      }
      nextToken
    }
  }
}
`;

class ProfilePage extends React.Component {
  state = {
    orders: []
  };

  componentDidMount() {
    if (this.props.user) {
      console.log(this.props.user.attributes.sub);
      this.getUserOrders(this.props.user.attributes.sub);
    }
  }

  getUserOrders = async userId => {
    const input = { id: userId };
    console.log(input);
    const result = await API.graphql(graphqlOperation(getUser, input));
    console.log(result);
    this.setState({ orders: result.data.getUser.orders.items });
  };

  render() {
    const { orders } = this.state;
    return (
      <React.Fragment>
        <Tabs activeName="1" className="profile-tabs">
          <Tabs.Pane
            label={
              <React.Fragment>
                <Icon name="document" className="icon" />
                Summary
              </React.Fragment>
            }
          >
            <h2 className="header">Profile Summary</h2>
          </Tabs.Pane>

          <Tabs.Pane
            label={
              <React.Fragment>
                <Icon name="message" className="icon" />
                Orders
              </React.Fragment>
            }
          >
            <h2 className="header">Order History</h2>
            {orders.map(order => (
              <div className="mb-1" key={order.id}>
                <Card>
                  <pre>
                    <p>Order Id: {order.id}</p>
                    <p>Title: {order.event.title}</p>
                    <p>Price: {convertCentsToDollars(order.event.title)}</p>
                    <p>Purchased On: {order.createdAt}</p>
                  </pre>
                </Card>
              </div>
            ))}
          </Tabs.Pane>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
