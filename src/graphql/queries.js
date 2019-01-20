// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    title
    description
    Events {
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
      Events {
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
    Group {
      id
      title
      description
      Events {
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
      Group {
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
      Events {
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
      Group {
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
