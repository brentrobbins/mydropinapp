import React from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listGroups } from "../graphql/queries";
import { onCreateGroup } from "../graphql/subscriptions";
import { Loading, Card, Icon } from "element-react";
import { Link } from "react-router-dom";
import Error from "./Error";

const GroupList = () => {
  const onNewGroup = (prevQuery, newData) => {
    let updatedQuery = { ...prevQuery };
    const updatedGroupList = [
      newData.onCreateGroup,
      ...prevQuery.listGroups.items
    ];
    updatedQuery.listGroups.items = updatedGroupList;
    return updatedQuery;
  };

  return (
    <Connect
      query={graphqlOperation(listGroups)}
      subscription={graphqlOperation(onCreateGroup)}
      onSubscriptionMsg={onNewGroup}
    >
      {({ data, loading, errors }) => {
        if (errors.length > 0) return <Error errors={errors} />;
        if (loading || !data.listGroups) return <Loading fullscreen={true} />;
        return (
          <React.Fragment>
            <h2 className="header">
              <img
                src="https://icon.now.sh/store_mall_directory/527FFF"
                alt="store"
                className="large-icon"
              />
              Groups
            </h2>
            {data.listGroups.items.map(group => (
              <div key={group.id} className="my-2">
                <Card
                  bodyStyle={{
                    padding: "0.07em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <span className="flex">
                      <Link className="link" to={`/groups/${group.id}`}>
                        {group.title}
                      </Link>

                      <span style={{ color: "var(--darkAmazonOrange)" }}>
                        {/* {group.events.items.length} */}
                      </span>

                      <img
                        src="https://icon.now.sh/shopping_cart/f60"
                        alt="cart"
                      />

                      <div style={{ color: "var(--lightSquidInk)" }}>
                        Group Owner {group.owner}
                      </div>
                    </span>
                  </div>
                </Card>
              </div>
            ))}
          </React.Fragment>
        );
      }}
    </Connect>
  );
};

export default GroupList;
