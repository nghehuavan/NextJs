import SampleSagaAction from './sample-saga-action';
import { takeLatest } from 'redux-saga/effects';

export function* SampleSaga() {
  yield takeLatest(
    SampleSagaAction.SAGA_FETCH_LIST,
    SampleSagaAction.fn_SAGA_FETCH_LIST
  );
}

export default SampleSaga;
