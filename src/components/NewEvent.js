import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createEvent } from "../graphql/mutations";

// prettier-ignore
import { Form, Button, Input, Notification } from "element-react";
import { convertDollarsToCents } from "../utils";

const initialState = {
  title: "",
  price: ""
};
class NewEvent extends React.Component {
  state = { ...initialState };

  handleAddEvent = async () => {
    try {
      const input = {
        title: this.state.title,
        price: convertDollarsToCents(this.state.price),
        eventGroupId: this.props.groupId
      };
      const result = await API.graphql(
        graphqlOperation(createEvent, { input })
      );
      console.log("Created event: ", result);
      Notification({
        title: "Success",
        message: "Event successfully created",
        type: "success"
      });
      this.setState({ ...initialState });
    } catch (err) {
      console.error("Error adding Event ", err);
    }
  };

  render() {
    const { title, price } = this.state;

    return (
      <div className="flex-center">
        <h2 className="header">Add New Event</h2>
        <div>
          <Form className="market-header">
            <Form.Item label="Add Event Title">
              <Input
                type="text"
                icon="information"
                placeholder="Title"
                value={title}
                onChange={title => this.setState({ title })}
              />
            </Form.Item>

            <Form.Item label="Add Event Price">
              <Input
                type="number"
                icon="plus"
                placeholder="Price"
                value={price}
                onChange={price => this.setState({ price })}
              />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={!title || !price}
                type="primary"
                onClick={() => this.handleAddEvent()}
              >
                Add Event
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default NewEvent;
