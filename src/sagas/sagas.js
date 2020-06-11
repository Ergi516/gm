import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTracks({ artist }) {
  const url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term={${artist}}`;

  const payload = yield axios.get(url)
  
  yield put({ type: "SET_TRACKS", payload: payload.data.results});
}

function* actionWatcher() {
  yield takeEvery('GET_TRACKS', fetchTracks)
}

export default function* saga() {
  yield all([
    actionWatcher(),
  ]);
}