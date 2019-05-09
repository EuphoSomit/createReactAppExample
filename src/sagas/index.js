import { all } from 'redux-saga/effects';
import { memberDetailWatcherSaga } from './saga.memberDetail';

export default function* root() {
  yield all([memberDetailWatcherSaga()]);
}
