import React from "react";

import NewGroup from "../components/NewGroup";
import GroupList from "../components/GroupList";

class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NewGroup />
        <GroupList />
      </React.Fragment>
    );
  }
}

export default HomePage;
