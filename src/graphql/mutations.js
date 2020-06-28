// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPresentation = `mutation CreatePresentation($input: CreatePresentationInput!) {
  createPresentation(input: $input) {
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
export const updatePresentation = `mutation UpdatePresentation($input: UpdatePresentationInput!) {
  updatePresentation(input: $input) {
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
export const deletePresentation = `mutation DeletePresentation($input: DeletePresentationInput!) {
  deletePresentation(input: $input) {
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
export const createClip = `mutation CreateClip($input: CreateClipInput!) {
  createClip(input: $input) {
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
export const updateClip = `mutation UpdateClip($input: UpdateClipInput!) {
  updateClip(input: $input) {
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
export const deleteClip = `mutation DeleteClip($input: DeleteClipInput!) {
  deleteClip(input: $input) {
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
export const createWatcher = `mutation CreateWatcher($input: CreateWatcherInput!) {
  createWatcher(input: $input) {
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
export const updateWatcher = `mutation UpdateWatcher($input: UpdateWatcherInput!) {
  updateWatcher(input: $input) {
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
export const deleteWatcher = `mutation DeleteWatcher($input: DeleteWatcherInput!) {
  deleteWatcher(input: $input) {
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
export const createBookmark = `mutation CreateBookmark($input: CreateBookmarkInput!) {
  createBookmark(input: $input) {
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
export const updateBookmark = `mutation UpdateBookmark($input: UpdateBookmarkInput!) {
  updateBookmark(input: $input) {
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
export const deleteBookmark = `mutation DeleteBookmark($input: DeleteBookmarkInput!) {
  deleteBookmark(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createUserProfile = `mutation CreateUserProfile($input: CreateUserProfileInput!) {
  createUserProfile(input: $input) {
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
export const updateUserProfile = `mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
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
export const deleteUserProfile = `mutation DeleteUserProfile($input: DeleteUserProfileInput!) {
  deleteUserProfile(input: $input) {
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
export const createSearchCode = `mutation CreateSearchCode($input: CreateSearchCodeInput!) {
  createSearchCode(input: $input) {
    id
    expiresAT
    presentationId
  }
}
`;
export const updateSearchCode = `mutation UpdateSearchCode($input: UpdateSearchCodeInput!) {
  updateSearchCode(input: $input) {
    id
    expiresAT
    presentationId
  }
}
`;
export const deleteSearchCode = `mutation DeleteSearchCode($input: DeleteSearchCodeInput!) {
  deleteSearchCode(input: $input) {
    id
    expiresAT
    presentationId
  }
}
`;
