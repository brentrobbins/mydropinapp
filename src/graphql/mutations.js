// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGroup = `mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
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
export const updateGroup = `mutation UpdateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
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
export const deleteGroup = `mutation DeleteGroup($input: DeleteGroupInput!) {
  deleteGroup(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createRostered = `mutation CreateRostered($input: CreateRosteredInput!) {
  createRostered(input: $input) {
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
export const updateRostered = `mutation UpdateRostered($input: UpdateRosteredInput!) {
  updateRostered(input: $input) {
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
export const deleteRostered = `mutation DeleteRostered($input: DeleteRosteredInput!) {
  deleteRostered(input: $input) {
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
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
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
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
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
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
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
export const registerUser = `mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
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
