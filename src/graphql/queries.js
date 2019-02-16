// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    title
    description
    events {
      items {
        id
        title
        eventAt
        price
        owner
        rosteredCap
        createdAt
      }
      nextToken
    }
    owner
    createdAt
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      events {
        nextToken
      }
      owner
      createdAt
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    title
    location {
      id
      title
      address
      city
      state
      zipCode
      country
    }
    eventAt
    group {
      id
      title
      description
      events {
        nextToken
      }
      owner
      createdAt
    }
    price
    owner
    rostered {
      items {
        id
        createdAt
      }
      nextToken
    }
    rosteredCap
    createdAt
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      location {
        id
        title
        address
        city
        state
        zipCode
        country
      }
      eventAt
      group {
        id
        title
        description
        owner
        createdAt
      }
      price
      owner
      rostered {
        nextToken
      }
      rosteredCap
      createdAt
    }
    nextToken
  }
}
`;
export const getRostered = `query GetRostered($id: ID!) {
  getRostered(id: $id) {
    id
    event {
      id
      title
      location {
        id
        title
        address
        city
        state
        zipCode
        country
      }
      eventAt
      group {
        id
        title
        description
        owner
        createdAt
      }
      price
      owner
      rostered {
        nextToken
      }
      rosteredCap
      createdAt
    }
    user {
      id
      username
      firstName
      lastName
      email
      registered
      orders {
        nextToken
      }
      rostered {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const listRostereds = `query ListRostereds(
  $filter: ModelRosteredFilterInput
  $limit: Int
  $nextToken: String
) {
  listRostereds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      event {
        id
        title
        eventAt
        price
        owner
        rosteredCap
        createdAt
      }
      user {
        id
        username
        firstName
        lastName
        email
        registered
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    title
    address
    city
    state
    zipCode
    country
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      address
      city
      state
      zipCode
      country
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    firstName
    lastName
    email
    registered
    orders {
      items {
        id
        createdAt
      }
      nextToken
    }
    rostered {
      items {
        id
        createdAt
      }
      nextToken
    }
  }
}
`;
