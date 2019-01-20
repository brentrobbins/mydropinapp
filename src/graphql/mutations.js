// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGroup = `mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
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
export const updateGroup = `mutation UpdateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
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
export const deleteGroup = `mutation DeleteGroup($input: DeleteGroupInput!) {
  deleteGroup(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const registerUser = `mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    Event {
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
    user {
      id
      firstName
      lastName
      email
      registered
      orders {
        nextToken
      }
    }
    createdAt
  }
}
`;
