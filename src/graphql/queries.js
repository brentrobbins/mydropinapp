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
      createdAt
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
  }
}
`;
export const searchGroups = `query SearchGroups(
  $filter: SearchableGroupFilterInput
  $sort: SearchableGroupSortInput
  $limit: Int
  $nextToken: Int
) {
  searchGroups(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
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
export const searchEvents = `query SearchEvents(
  $filter: SearchableEventFilterInput
  $sort: SearchableEventSortInput
  $limit: Int
  $nextToken: Int
) {
  searchEvents(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      location {
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
      createdAt
    }
    nextToken
  }
}
`;
export const searchUsers = `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: SearchableUserSortInput
  $limit: Int
  $nextToken: Int
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      username
      firstName
      lastName
      email
      registered
      orders {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const searchOrders = `query SearchOrders(
  $filter: SearchableOrderFilterInput
  $sort: SearchableOrderSortInput
  $limit: Int
  $nextToken: Int
) {
  searchOrders(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      event {
        id
        title
        eventAt
        price
        owner
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
