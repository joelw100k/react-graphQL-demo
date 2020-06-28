// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePresentation = `subscription OnCreatePresentation {
  onCreatePresentation {
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
export const onUpdatePresentation = `subscription OnUpdatePresentation {
  onUpdatePresentation {
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
export const onDeletePresentation = `subscription OnDeletePresentation {
  onDeletePresentation {
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
export const onCreateClip = `subscription OnCreateClip {
  onCreateClip {
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
export const onUpdateClip = `subscription OnUpdateClip {
  onUpdateClip {
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
export const onDeleteClip = `subscription OnDeleteClip {
  onDeleteClip {
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
export const onCreateWatcher = `subscription OnCreateWatcher {
  onCreateWatcher {
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
export const onUpdateWatcher = `subscription OnUpdateWatcher {
  onUpdateWatcher {
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
export const onDeleteWatcher = `subscription OnDeleteWatcher {
  onDeleteWatcher {
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
export const onCreateBookmark = `subscription OnCreateBookmark {
  onCreateBookmark {
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
export const onUpdateBookmark = `subscription OnUpdateBookmark {
  onUpdateBookmark {
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
export const onDeleteBookmark = `subscription OnDeleteBookmark {
  onDeleteBookmark {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateUserProfile = `subscription OnCreateUserProfile {
  onCreateUserProfile {
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
export const onUpdateUserProfile = `subscription OnUpdateUserProfile {
  onUpdateUserProfile {
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
export const onDeleteUserProfile = `subscription OnDeleteUserProfile {
  onDeleteUserProfile {
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
export const onCreateSearchCode = `subscription OnCreateSearchCode {
  onCreateSearchCode {
    id
    expiresAT
    presentationId
  }
}
`;
export const onUpdateSearchCode = `subscription OnUpdateSearchCode {
  onUpdateSearchCode {
    id
    expiresAT
    presentationId
  }
}
`;
export const onDeleteSearchCode = `subscription OnDeleteSearchCode {
  onDeleteSearchCode {
    id
    expiresAT
    presentationId
  }
}
`;
