import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  onCreateEvent,
  onUpdateEvent,
  onDeleteEvent
} from "../graphql/subscriptions";
import { getGroup } from "../graphql/queries";
import { Loading, Icon, Tabs } from "element-react";
import { Link } from "react-router-dom";
import NewEvent from "../components/NewEvent";
import Event from "../components/Event";
class GroupPage extends React.Component {
  state = {
    group: null,
    isLoading: true,
    isGroupOwner: false
  };

  componentDidMount() {
    this.handleGetGroup();
    this.createEventListener = API.graphql(
      graphqlOperation(onCreateEvent)
    ).subscribe({
      next: eventData => {
        const createdEvent = eventData.value.data.onCreateEvent;
        const prevEvents = this.state.group.events.items.filter(
          item => item.id !== createdEvent.id
        );
        const updatedEvents = [createdEvent, ...prevEvents];
        const group = { ...this.state.group };
        group.events.items = updatedEvents;
        this.setState({ group });
      }
    });
    this.updatedEventListener = API.graphql(
      graphqlOperation(onUpdateEvent)
    ).subscribe({
      next: eventData => {
        const updatedEvent = eventData.value.data.onUpdateEvent;
        const updatedEventIndex = this.state.group.events.items.findIndex(
          item => item.id === updatedEvent.id
        );
        const updatedEvents = [
          ...this.state.group.events.items.slice(0, updatedEventIndex),
          updatedEvent,
          ...this.state.group.events.items.slice(updatedEventIndex + 1)
        ];
        const group = { ...this.state.group };
        group.events.items = updatedEvents;
        this.setState({ group });
      }
    });
    this.deleteEventListener = API.graphql(
      graphqlOperation(onDeleteEvent)
    ).subscribe({
      next: eventData => {
        const deletedEvent = eventData.value.data.onDeleteEvent;
        const updatedEvents = this.state.group.events.items.filter(
          item => item.id !== deletedEvent.id
        );
        const group = { ...this.state.group };
        group.events.items = updatedEvents;
        this.setState({ group });
      }
    });
  }

  componentWillUnmount() {
    this.createEventListener.unsubscribe();
    this.updatedEventListener.unsubscribe();
    this.deleteEventListener.unsubscribe();
  }

  handleGetGroup = async () => {
    const input = {
      id: this.props.groupId
    };
    const result = await API.graphql(graphqlOperation(getGroup, input));
    //console.log("result: ", { result });
    this.setState({ group: result.data.getGroup, isLoading: false }, () => {
      this.checkGroupOwner();
    });
  };

  checkGroupOwner = () => {
    const { user } = this.props;
    const { group } = this.state;
    if (user) {
      this.setState({ isGroupOwner: user.attributes.sub === group.owner });
    }
  };

  render() {
    const { group, isLoading, isGroupOwner } = this.state;

    return isLoading ? (
      <Loading fullscreen={true} />
    ) : (
      <React.Fragment>
        <Link className="link" to="/">
          Back to Group list
        </Link>

        {/* Group MetaData */}
        <span className="items-center pt-2">
          <h2 className="mb-mr">{group.title}</h2> - {group.owner}
        </span>
        <div className="items-center pt-2">
          <span style={{ color: "var(--lightSquidInk)", paddingBottom: "1em" }}>
            <Icon name="date" className="icon" />
            {group.createdAt}
          </span>
        </div>

        {/* New Event  */}
        <Tabs type="border-card" value={isGroupOwner ? "1" : "2"}>
          {isGroupOwner && (
            <Tabs.Pane
              label={
                <React.Fragment>
                  <Icon name="plus" class="icon" /> Add Event
                </React.Fragment>
              }
              name="1"
            >
              <NewEvent groupId={this.props.groupId} />
            </Tabs.Pane>
          )}
          {/* Events List */}
          <Tabs.Pane
            label={
              <React.Fragment>
                <Icon name="menu" className="icon" />
                Events ({group.events.items.length})
              </React.Fragment>
            }
            name="2"
          >
            <div className="product-list">
              {group.events.items.map(event => (
                <Event key={event.id} event={event} />
              ))}
            </div>
          </Tabs.Pane>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default GroupPage;
