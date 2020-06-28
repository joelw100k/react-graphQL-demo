// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPresentation = `query GetPresentation($id: ID!) {
  getPresentation(id: $id) {
    id
    description
    presenter {
      id
      userName
      firstName
      lastName
      biography
      followers
      following
      interests
      location
      image
    }
    startDateTime
    frontClipURL
    title
    clips {
      items {
        id
        CaptureDateTime
        ClipThumbnailURL
        ClipURL
      }
      nextToken
    }
    watchers {
      items {
        id
        joinedAT
        title
        frontClipURL
        presentationId
      }
      nextToken
    }
  }
}
`;
export const listPresentations = `query ListPresentations(
  $filter: ModelPresentationFilterInput
  $limit: Int
  $nextToken: String
) {
  listPresentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      presenter {
        id
        userName
        firstName
        lastName
        biography
        followers
        following
        interests
        location
        image
      }
      startDateTime
      frontClipURL
      title
      clips {
        items {
          id
          CaptureDateTime
          ClipThumbnailURL
          ClipURL
        }
        nextToken
      }
      watchers {
        items {
          id
          joinedAT
          title
          frontClipURL
          presentationId
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getClip = `query GetClip($id: ID!) {
  getClip(id: $id) {
    id
    CaptureDateTime
    ClipThumbnailURL
    ClipURL
    presentation {
      id
      description
      startDateTime
      frontClipURL
      title
    }
    Bookmarks {
      items {
        id
        kind
      }
      nextToken
    }
  }
}
`;
export const listClips = `query ListClips(
  $filter: ModelClipFilterInput
  $limit: Int
  $nextToken: String
) {
  listClips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      CaptureDateTime
      ClipThumbnailURL
      ClipURL
      presentation {
        id
        description
        startDateTime
        frontClipURL
        title
      }
      Bookmarks {
        items {
          id
          kind
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getWatcher = `query GetWatcher($id: ID!) {
  getWatcher(id: $id) {
    id
    joinedAT
    user {
      id
      userName
      firstName
      lastName
      biography
      followers
      following
      interests
      location
      image
    }
    presentationWatched {
      id
      description
      startDateTime
      frontClipURL
      title
    }
    bookmarks {
      items {
        id
        kind
      }
      nextToken
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
    title
    frontClipURL
    presentationId
  }
}
`;
export const listWatchers = `query ListWatchers(
  $filter: ModelWatcherFilterInput
  $limit: Int
  $nextToken: String
) {
  listWatchers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      joinedAT
      user {
        id
        userName
        firstName
        lastName
        biography
        followers
        following
        interests
        location
        image
      }
      presentationWatched {
        id
        description
        startDateTime
        frontClipURL
        title
      }
      bookmarks {
        items {
          id
          kind
        }
        nextToken
      }
      comments {
        items {
          id
          content
        }
        nextToken
      }
      title
      frontClipURL
      presentationId
    }
    nextToken
  }
}
`;
export const getBookmark = `query GetBookmark($id: ID!) {
  getBookmark(id: $id) {
    id
    kind
    watcher {
      id
      joinedAT
      title
      frontClipURL
      presentationId
    }
    clip {
      id
      CaptureDateTime
      ClipThumbnailURL
      ClipURL
    }
  }
}
`;
export const listBookmarks = `query ListBookmarks(
  $filter: ModelBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      kind
      watcher {
        id
        joinedAT
        title
        frontClipURL
        presentationId
      }
      clip {
        id
        CaptureDateTime
        ClipThumbnailURL
        ClipURL
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    taggedClip {
      id
      CaptureDateTime
      ClipThumbnailURL
      ClipURL
    }
    watcher {
      id
      joinedAT
      title
      frontClipURL
      presentationId
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      taggedClip {
        id
        CaptureDateTime
        ClipThumbnailURL
        ClipURL
      }
      watcher {
        id
        joinedAT
        title
        frontClipURL
        presentationId
      }
    }
    nextToken
  }
}
`;
export const getUserProfile = `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    userName
    firstName
    lastName
    biography
    followers
    following
    interests
    location
    image
    presentationsPresented {
      items {
        id
        description
        startDateTime
        frontClipURL
        title
      }
      nextToken
    }
    presentationsWatched {
      items {
        id
        joinedAT
        title
        frontClipURL
        presentationId
      }
      nextToken
    }
  }
}
`;
export const listUserProfiles = `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userName
      firstName
      lastName
      biography
      followers
      following
      interests
      location
      image
      presentationsPresented {
        items {
          id
          description
          startDateTime
          frontClipURL
          title
        }
        nextToken
      }
      presentationsWatched {
        items {
          id
          joinedAT
          title
          frontClipURL
          presentationId
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSearchCode = `query GetSearchCode($id: ID!) {
  getSearchCode(id: $id) {
    id
    expiresAT
    presentationId
  }
}
`;
export const listSearchCodes = `query ListSearchCodes(
  $filter: ModelSearchCodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listSearchCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      expiresAT
      presentationId
    }
    nextToken
  }
}
`;
