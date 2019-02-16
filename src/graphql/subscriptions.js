// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateRostered = `subscription OnCreateRostered {
  onCreateRostered {
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
export const onUpdateRostered = `subscription OnUpdateRostered {
  onUpdateRostered {
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
export const onDeleteRostered = `subscription OnDeleteRostered {
  onDeleteRostered {
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
export const onCreateLocation = `subscription OnCreateLocation {
  onCreateLocation {
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
export const onUpdateLocation = `subscription OnUpdateLocation {
  onUpdateLocation {
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
export const onDeleteLocation = `subscription OnDeleteLocation {
  onDeleteLocation {
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
