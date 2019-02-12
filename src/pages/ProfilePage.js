import React from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { updateUser } from "../graphql/mutations";

// prettier-ignore
import { Table, Button, Notification, MessageBox, Message, Tabs, Icon, Form, Dialog, Input, Card, Tag } from 'element-react'
import { convertCentsToDollars, formatOrderDate } from "../utils";

const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    firstName
    lastName
    registered
    orders(sortDirection: DESC, limit: 999) {
      items {
        id
        createdAt
        event {
          id
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
    yourId: this.props.userAttributes && this.props.userAttributes.sub,
    email: this.props.userAttributes && this.props.userAttributes.email,
    firstName: "",
    lastName: "",
    emailDialog: false,
    firstNameDialog: false,
    lastNameDialog: false,
    verificationCode: "",
    verificationForm: false,
    orders: [],
    columns: [
      { prop: "name", width: "150" },
      { prop: "value", width: "330" },
      {
        prop: "tag",
        width: "150",
        render: row => {
          if (row.name === "Email") {
            const emailVerified = this.props.userAttributes.email_verified;
            return emailVerified ? (
              <Tag type="success">Verified</Tag>
            ) : (
              <Tag type="danger">Unverified</Tag>
            );
          }
        }
      },
      {
        prop: "operations",
        render: row => {
          switch (row.name) {
            case "Email":
              return (
                <Button
                  onClick={() => this.setState({ emailDialog: true })}
                  type="info"
                  size="small"
                >
                  Edit
                </Button>
              );

            case "First Name":
              return (
                <Button
                  onClick={() => this.setState({ firstNameDialog: true })}
                  type="info"
                  size="small"
                >
                  Edit
                </Button>
              );

            case "Last Name":
              return (
                <Button
                  onClick={() => this.setState({ lastNameDialog: true })}
                  type="info"
                  size="small"
                >
                  Edit
                </Button>
              );

            case "Delete Profile":
              return (
                <Button
                  onClick={this.handleDeleteProfile}
                  type="danger"
                  size="small"
                >
                  Delete
                </Button>
              );
            default:
              return;
          }
        }
      }
    ]
  };

  componentDidMount() {
    if (this.props.userAttributes) {
      this.getUserOrders(this.props.userAttributes.sub);
      this.getUserDetails(this.props.userAttributes.sub);
    }
  }

  getUserOrders = async userId => {
    const input = { id: userId };
    const result = await API.graphql(graphqlOperation(getUser, input));
    this.setState({ orders: result.data.getUser.orders.items });
  };

  getUserDetails = async userId => {
    const input = { id: userId };
    const result = await API.graphql(graphqlOperation(getUser, input));
    this.setState({
      firstName: result.data.getUser.firstName,
      lastName: result.data.getUser.lastName
    });
  };

  handleUpdateEmail = async () => {
    try {
      const updatedAttributes = {
        email: this.state.email
      };
      const result = await Auth.updateUserAttributes(
        this.props.user,
        updatedAttributes
      );
      if (result === "SUCCESS") {
        this.sendVerificationCode("emai l");
      }
    } catch (err) {
      console.error(err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error updating email"}`
      });
    }
  };

  // Update First Name
  handleUpdateFirstName = async () => {
    try {
      const input = {
        id: this.state.yourId,
        firstName: this.state.firstName
      };
      const result = await API.graphql(graphqlOperation(updateUser, { input }));
      console.log(result);
      Notification({
        title: "Success",
        message: "Event successfully updated!",
        type: "success",
        duration: 2000
      });
    } catch (err) {
      console.error(`Failed to update user with id`, err);
    }
  };

  // Update Last Name
  handleUpdateLastName = async () => {

    try {
      this.setState({ lastNameDialog: false });
      //this.setState({ handleUpdateLastName: false });
      // const updatedAttributes = {
      //   email: this.state.firstName
      // };
      const input = {
        id: this.state.yourId,
        lastName: this.state.lastName
      };
      const result = await API.graphql(graphqlOperation(updateUser, { input }));
      console.log(result);
      Notification({
        title: "Success",
        message: "Event successfully updated!",
        type: "success",
        duration: 2000
      });
    } catch (err) {
      console.error(`Failed to update user with id`, err);
    }
  };

  sendVerificationCode = async attr => {
    await Auth.verifyCurrentUserAttribute(attr);
    this.setState({ verificationForm: true });
    Message({
      type: "info",
      customClass: "message",
      message: `Verification code sent to ${this.state.email}`
    });
  };

  handleVerifyEmail = async attr => {
    try {
      const result = await Auth.verifyCurrentUserAttributeSubmit(
        attr,
        this.state.verificationCode
      );
      Notification({
        title: "Success",
        message: "Email successfully verified",
        type: `${result.toLowerCase()}`
      });
      setTimeout(() => window.location.reload(), 3000);
    } catch (err) {
      console.error(err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error updating email"}`
      });
    }
  };

  handleDeleteProfile = () => {
    MessageBox.confirm(
      "This will permanently delete your account. Continue?",
      "Attention!",
      {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        type: "warning"
      }
    )
      .then(async () => {
        try {
          await this.props.user.deleteUser();
        } catch (err) {
          console.error(err);
        }
      })
      .catch(() => {
        Message({
          type: "info",
          message: "Delete canceled"
        });
      });
  };

  render() {
    const {
      orders,
      columns,
      emailDialog,
      firstNameDialog,
      lastNameDialog,
      email,
      firstName,
      lastName,
      verificationForm,
      verificationCode
    } = this.state;
    const { user, userAttributes } = this.props;

    return (
      userAttributes && (
        <>
          <Tabs activeName="1" className="profile-tabs">
            <Tabs.Pane
              label={
                <>
                  <Icon name="document" className="icon" />
                  Summary
                </>
              }
              name="1"
            >
              <h2 className="header">Profile Summary</h2>
              <Table
                columns={columns}
                data={[
                  {
                    name: "Your Id",
                    value: userAttributes.sub
                  },
                  {
                    name: "Username",
                    value: user.username
                  },
                  {
                    name: "First Name",
                    value: this.state.firstName
                  },
                  {
                    name: "Last Name",
                    value: this.state.lastName
                  },
                  {
                    name: "Email",
                    value: userAttributes.email
                  },
                  {
                    name: "Phone Number",
                    value: userAttributes.phone_number
                  },
                  {
                    name: "Delete Profile",
                    value: "Sorry to see you go"
                  }
                ]}
                showHeader={false}
                rowClassName={row =>
                  row.name === "Delete Profile" && "delete-profile"
                }
              />
            </Tabs.Pane>

            <Tabs.Pane
              label={
                <>
                  <Icon name="message" className="icon" />
                  Orders
                </>
              }
              name="2"
            >
              <h2 className="header">Order History</h2>

              {orders.map(order => (
                <div className="mb-1" key={order.id}>
                  <Card>
                    <pre>
                      <p>Order Id: {order.id}</p>
                      <p>Event Title: {order.event.title}</p>
                      <p>Price: ${convertCentsToDollars(order.event.price)}</p>
                      <p>Purchased on {formatOrderDate(order.createdAt)}</p>
                    </pre>
                  </Card>
                </div>
              ))}
            </Tabs.Pane>
          </Tabs>

          {/* Email Dialog */}
          <Dialog
            size="large"
            customClass="dialog"
            title="Edit Email"
            visible={emailDialog}
            onCancel={() => this.setState({ emailDialog: false })}
          >
            <Dialog.Body>
              <Form labelPosition="top">
                <Form.Item label="Email">
                  <Input
                    value={email}
                    onChange={email => this.setState({ email })}
                  />
                </Form.Item>
                {verificationForm && (
                  <Form.Item label="Enter Verification Code" labelWidth="120">
                    <Input
                      onChange={verificationCode =>
                        this.setState({ verificationCode })
                      }
                      value={verificationCode}
                    />
                  </Form.Item>
                )}
              </Form>
            </Dialog.Body>
            <Dialog.Footer>
              <Button onClick={() => this.setState({ emailDialog: false })}>
                Cancel
              </Button>
              {!verificationForm && (
                <Button type="primary" onClick={this.handleUpdateEmail}>
                  Save
                </Button>
              )}
              {verificationForm && (
                <Button
                  type="primary"
                  onClick={() => this.handleVerifyEmail("email")}
                >
                  Submit
                </Button>
              )}
            </Dialog.Footer>
          </Dialog>

          {/* First Name Dialog */}
          <Dialog
            size="large"
            customClass="dialog"
            title="Edit First Name"
            visible={firstNameDialog}
            onCancel={() => this.setState({ firstNameDialog: false })}
          >
            <Dialog.Body>
              <Form labelPosition="top">
                <Form.Item label="First Name">
                  <Input
                    value={firstName}
                    onChange={firstName => this.setState({ firstName })}
                  />
                </Form.Item>
              </Form>
            </Dialog.Body>
            <Dialog.Footer>
              <Button onClick={() => this.setState({ firstNameDialog: false })}>
                Cancel
              </Button>

              <Button type="primary" onClick={this.handleUpdateFirstName}>
                Save
              </Button>
            </Dialog.Footer>
          </Dialog>

          {/* Last Name Dialog */}
          <Dialog
            size="large"
            customClass="dialog"
            title="Edit Last Name"
            visible={lastNameDialog}
            onCancel={() => this.setState({ lastNameDialog: false })}
          >
            <Dialog.Body>
              <Form labelPosition="top">
                <Form.Item label="Last Name">
                  <Input
                    value={lastName}
                    onChange={lastName => this.setState({ lastName })}
                  />
                </Form.Item>
              </Form>
            </Dialog.Body>
            <Dialog.Footer>
              <Button onClick={() => this.setState({ lastNameDialog: false })}>
                Cancel
              </Button>

              <Button type="primary" onClick={this.handleUpdateLastName}>
                Save
              </Button>
            </Dialog.Footer>
          </Dialog>
        </>
      )
    );
  }
}

export default ProfilePage;
