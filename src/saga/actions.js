export const FETCH_USER_POSTS_REQUEST = "FETCH_USER_POSTS_REQUEST";
export const FETCH_USER_POSTS_SUCCESS = "FETCH_USER_POSTS_SUCCESS";
export const FETCH_USER_POSTS_FAILURE = "FETCH_USER_POSTS_FAILURE";
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const fetchUserPostsRequest = (userId) => ({
  type: FETCH_USER_POSTS_REQUEST,
  payload: userId,
});

export const fetchUserPostsSuccess = (user, posts) => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload: { user: user, posts: posts },
});

export const fetchUserPostsFailure = (error) => ({
  type: FETCH_USER_POSTS_FAILURE,
  payload: error,
});
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchCommentsRequest = (postId) => ({
  type: FETCH_COMMENTS_REQUEST,
  payload: postId,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});
