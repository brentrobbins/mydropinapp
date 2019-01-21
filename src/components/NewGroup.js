import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createGroup } from "../graphql/mutations";
// prettier-ignore
import { Form, Button, Dialog, Input, Notification } from 'element-react'

import { UserContext } from "../App";

class NewGroup extends React.Component {
  state = {
    addGroupDialog: false,
    title: "",
    description: ""
  };

  handleAddGroup = async user => {
    try {
      console.log(this.state.title);
      this.setState({ addGroupDialog: false });
      const input = {
        title: this.state.title,
        description: this.state.description,
        owner: user.attributes.sub
      };
      const result = await API.graphql(
        graphqlOperation(createGroup, { input })
      );
      console.log(`Created Group: id ${result.data.createGroup.id}`);
      this.setState({ title: "", description: "" });
    } catch (err) {
      console.error("error adding new group", err);
      Notification.error({
        title: "Error",
        message: `${err.message || "Error adding group"}`
      });
    }
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <React.Fragment>
            <div className="market-header">
              <h1 className="market-title">
                Create Your New Group
                <Button
                  type="text"
                  icon="edit"
                  classname="market-title-button"
                  onClick={() => this.setState({ addGroupDialog: true })}
                />
              </h1>
            </div>
            <Dialog
              title="Create New Group"
              visible={this.state.addGroupDialog}
              onCancel={() => this.setState({ addGroupDialog: false })}
              size="large"
              customClass="dialog"
            >
              <Dialog.Body>
                <Form labelPosition="top">
                  <Form.Item lable="Add Group Title">
                    <Input
                      placeholder="Group Title"
                      trim={true}
                      onChange={title => this.setState({ title })}
                      value={this.state.title}
                    />
                  </Form.Item>

                  <Form.Item lable="Add Group Description">
                    <Input
                      placeholder="Group Description"
                      type="textarea"
                      rows={4}
                      onChange={description => this.setState({ description })}
                      value={this.state.description}
                    />
                  </Form.Item>
                </Form>
              </Dialog.Body>
              <Dialog.Footer>
                <Button
                  onClick={() => this.setState({ addGroupDialog: false })}
                >
                  Cancel
                </Button>

                <Button
                  disabled={!this.state.title}
                  type="primary"
                  onClick={() => this.handleAddGroup(user)}
                >
                  Add
                </Button>
              </Dialog.Footer>
            </Dialog>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default NewGroup;
