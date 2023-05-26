import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./actions";

const initialState = {
  user: null,
  userPosts: [],
  posts: [],
  comments: {},
  loadingUser: true,
  loadingPosts: false,
  loadingComments: {},
  selectedPost: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS_REQUEST:
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload.posts,
        user: action.payload.user,
        loadingPosts: false,
      };
    case FETCH_USER_POSTS_FAILURE:
      return {
        ...state,
        loadingPosts: false,
        error: action.payload,
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loadingPosts: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loadingPosts: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loadingPosts: false,
        error: action.payload,
      };
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loadingComments: {
          ...state.loadingComments,
          [action.payload]: true,
        },
        selectedPost: action.payload,
        error: null,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [state.selectedPost]: action.payload,
        },
        loadingComments: {
          ...state.loadingComments,
          [state.selectedPost]: false,
        },
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loadingComments: {
          ...state.loadingComments,
          [state.selectedPost]: false,
        },
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
