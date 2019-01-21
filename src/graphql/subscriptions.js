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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
