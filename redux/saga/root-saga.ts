import SampleSaga from './sample/sample-saga';
import { spawn } from 'redux-saga/effects';

export default function* RootSaga() {
  yield spawn(SampleSaga);
  // yield spawn(SampleSaga1);
}
