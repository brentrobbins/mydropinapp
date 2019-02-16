import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { convertCentsToDollars, convertDollarsToCents, formatOrderDate } from "../utils";
import { UserContext } from "../App";
import PayButton from "../components/PayButton";
// prettier-ignore
import { Notification, Popover, Button, Dialog, Card, Form, Input, DatePicker } from "element-react";
import { updateEvent, deleteEvent } from "../graphql/mutations";

class Event extends React.Component {
  state = {
    title: "",
    price: "",
    eventAt: null,
    updateEventDialog: false,
    deleteEventDialog: false
  };

  handleUpdateEvent = async eventId => {
    try {
      this.setState({ updateEventDialog: false });
      const { title, price, eventAt } = this.state;
      const input = {
        id: eventId,
        title,
        price: convertDollarsToCents(price),
        eventAt
      };
      const result = await API.graphql(
        graphqlOperation(updateEvent, { input })
      );
      console.log(result);
      Notification({
        title: "Success",
        message: "Event successfully updated!",
        type: "success",
        duration: 2000
      });
    } catch (err) {
      console.error(`Failed to update event with id ${eventId}`, err);
    }
  };

  handleDeleteEvent = async eventId => {
    try {
      this.setState({ deleteEventDialog: false });
      const input = {
        id: eventId
      };
      const result = await API.graphql(
        graphqlOperation(deleteEvent, { input })
      );
      console.log(result);
      Notification({
        title: "Success",
        message: "Event successfully deleted!",
        type: "success",
        duration: 2000
      });
    } catch (err) {
      console.error(`Failed to delete event with id ${eventId}`, err);
    }
  };

  render() {
    const { updateEventDialog, deleteEventDialog, title, price, eventAt } = this.state;
    const { event } = this.props;

    return (
      <UserContext.Consumer>
        {({ user }) => {
          const isEventOwner = user && user.attributes.sub === event.owner;
          return (
            <div className="cart-container">
              <Card bodyStyle={{ padding: 0, minWidth: "200px" }}>
                <div className="card-body">
                  <h3 className="m-0">{event.title}</h3>
                  <div className="text-right">
                    <span className="mx-1">
                      ${convertCentsToDollars(event.price)}
                    </span>
                    <div>
                    {formatOrderDate(event.eventAt)}
                    </div>

                    <PayButton event={event} user={user} />
                  </div>
                </div>
              </Card>
              {/* Update / Delete Event Buttons */}
              <div className="text-center">
                {isEventOwner && (
                  <React.Fragment>
                    <Button
                      type="warning"
                      icon="edit"
                      className="m-1"
                      onClick={() =>
                        this.setState({
                          updateEventDialog: true,
                          title: event.title,
                          eventAt: event.eventAt,
                          price: convertCentsToDollars(event.price)
                        })
                      }
                    />
                    <Popover
                      placement="top"
                      width="160"
                      trigger="click"
                      visible={deleteEventDialog}
                      content={
                        <React.Fragment>
                          <p>Do you want to delete this?</p>
                          <div className="text-right">
                            <Button
                              size="mini"
                              type="text"
                              className="m-1"
                              onClick={() =>
                                this.setState({ deleteEventDialog: false })
                              }
                            >
                              Cancel
                            </Button>
                            <Button
                              size="mini"
                              type="primary"
                              className="m-1"
                              onClick={() => this.handleDeleteEvent(event.id)}
                            >
                              Confirm
                            </Button>
                          </div>
                        </React.Fragment>
                      }
                    >
                      <Button
                        type="danger"
                        icon="delete"
                        className="m-1"
                        onClick={() =>
                          this.setState({ deleteEventDialog: true })
                        }
                      />
                    </Popover>
                  </React.Fragment>
                )}
              </div>
              {/* Update Event Dialog */}
              <Dialog
                title="Update Event"
                size="large"
                customClass="dialog"
                visible={updateEventDialog}
                onCancel={() => this.setState({ updateEventDialog: false })}
              >
                <Dialog.Body>
                  <Form labelPosition="top">
                    <Form.Item label="Updated Title">
                      <Input
                        icon="information"
                        placeholder="Title"
                        value={title}
                        trim={true}
                        onChange={title => this.setState({ title })}
                        onCancel={() =>
                          this.setState({ updateEventDialog: false })
                        }
                      />
                    </Form.Item>

                    <Form.Item label="Updated Event Date">
                    <DatePicker
                    isShowTime={true}
                    placeholder="Update the Event Date and Time"
                    value={eventAt}
                    onChange={date=>{
                        console.log('DatePicker changed: ', date)
                        this.setState({eventAt: date})
                      }}
                    />
                    </Form.Item>

                    <Form.Item label="Updated Price">
                      <Input
                        type="number"
                        icon="plus"
                        placeholder="Price"
                        value={price}
                        onChange={price => this.setState({ price })}
                      />
                    </Form.Item>
                  </Form>
                </Dialog.Body>

                <Dialog.Footer>
                  <Button
                    onClick={() => this.setState({ updateEventDialog: false })}
                  >
                    Cancel
                  </Button>

                  <Button
                    type="primary"
                    onClick={() => this.handleUpdateEvent(event.id)}
                  >
                    Update
                  </Button>
                </Dialog.Footer>
              </Dialog>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Event;
