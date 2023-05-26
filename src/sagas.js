import { takeEvery, call, put, all, delay } from "redux-saga/effects";
import axios from "axios";

// Action Types
const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

// Actions
const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

const fetchCommentsRequest = (postId) => ({
  type: FETCH_COMMENTS_REQUEST,
  payload: postId,
});

const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

// Sagas
function* fetchPostsSaga() {
  try {
    yield delay(500);
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* fetchCommentsSaga(action) {
  const postId = action.payload;
  try {
    yield delay(500);
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    yield put(fetchCommentsSuccess(response.data));
  } catch (error) {
    yield put(fetchCommentsFailure(error));
  }
}
function* fetchUserPostsSaga(action) {
  try {
    const { userId } = action.payload;
    const [userResponse, postsResponse] = yield Promise.all([
      call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`),
      call(
        axios.get,
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      ),
    ]);
    const user = userResponse.data;
    const posts = postsResponse.data;
    yield put(fetchUserPostsSuccess(user, posts));
  } catch (error) {
    yield put(fetchUserPostsFailure(error));
  }
}
function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

function* watchFetchComments() {
  yield takeEvery(FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchPosts(), watchFetchComments()]);
}
