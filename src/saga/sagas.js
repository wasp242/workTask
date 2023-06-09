import { takeEvery, call, put, all, delay } from "redux-saga/effects";
import axios from "axios";
import {
  fetchUserDetailsSuccess,
  fetchUserDetailsFailure,
  fetchUserPostsSuccess,
  fetchUserPostsFailure,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  FETCH_POSTS_REQUEST,
  FETCH_COMMENTS_REQUEST,
  FETCH_USER_DETAILS_REQUEST,
  FETCH_USER_POSTS_REQUEST,
} from "./actions";

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

function* fetchUserDetailsSaga(action) {
  try {
    const userId = action.payload;
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = response.data;
    yield put(fetchUserDetailsSuccess(user));
  } catch (error) {
    yield put(fetchUserDetailsFailure(error));
  }
}
function* fetchUserPostsSaga(action) {
  try {
    const userId = action.payload;
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = response.data;
    yield put(fetchUserPostsSuccess(posts));
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
function* watchFetchUserDetails() {
  yield takeEvery(FETCH_USER_DETAILS_REQUEST, fetchUserDetailsSaga);
}

function* watchFetchUserPosts() {
  yield takeEvery(FETCH_USER_POSTS_REQUEST, fetchUserPostsSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchComments(),
    watchFetchUserDetails(),
    watchFetchUserPosts(),
  ]);
}
