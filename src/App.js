import React from "react";
import { Auth, Hub } from "aws-amplify";
import { Authenticator, AmplifyTheme } from "aws-amplify-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import GroupPage from "./pages/GroupPage";
import Navbar from "./components/NavBar";

import "./App.css";

export const UserContext = React.createContext();

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    console.dir(AmplifyTheme);
    this.getUserData();
    Hub.listen("auth", this, "onHubCapsule");
  }

  getUserData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      user ? this.setState({ user }) : this.setState({ user: null });
    } catch (err) {
      console.log("user errors: ", err);
    }
  };

  onHubCapsule = capsule => {
    switch (capsule.payload.event) {
      case "signIn":
        console.log("signed in");
        this.getUserData();
        break;
      case "signUp":
        console.log("signed up");
        break;
      case "signOut":
        console.log("signed out");
        this.setState({ user: null });
        break;
      default:
        return;
    }
  };

  handleSignout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log("Error signing out user", err);
    }
  };

  render() {
    const { user } = this.state;
    return !user ? (
      <Authenticator theme={theme} />
    ) : (
      <UserContext.Provider value={{ user }}>
        <Router>
          <React.Fragment>
            {/* Navigation */}
            <Navbar user={user} handleSignout={this.handleSignout} />

            {/* Routes */}
            <div className="app-container">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route
                path="/groups/:groupId"
                component={({ match }) => (
                  <GroupPage user={user} groupId={match.params.groupId} />
                )}
              />
            </div>
          </React.Fragment>
        </Router>
      </UserContext.Provider>
    );
  }
}

const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "var(--darkBlue)",
    color: "var(--white)",
    borderRadius: "4px"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionBody,
    backgroundColor: "var(--darkBlue)",
    color: "var(--white)"
  },
  Input__input___2Sh1s: {
    ...AmplifyTheme.phone_line_number,
    height: "50px"
  }
};

//export default withAuthenticator(App, true, [], null, theme);
export default App;
