import sampleApi from '../../../apis/sampleApi';
import { call, select, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

const SampleSagaAction = {
  SAGA_FETCH_LIST: 'SAGA_FETCH_LIST',
  SAGA_FETCH_LIST_SUCCESS: 'SAGA_FETCH_LIST_SUCCESS',
  SAGA_FETCH_LIST_FAILED: 'SAGA_FETCH_LIST_FAILED',

  *fn_SAGA_FETCH_LIST(action: {}) {
    console.log('fn_SAGA_FETCH_LIST', action);
    try {
      const photos: AxiosResponse<any> = yield call(() => sampleApi.getData());
      yield put({
        type: SampleSagaAction.SAGA_FETCH_LIST_SUCCESS,
        payload: photos,
      });
    } catch (e: any) {
      console.error(e);
      yield put({
        type: SampleSagaAction.SAGA_FETCH_LIST_FAILED,
        message: e.message,
      });
    }
  },
};

export default SampleSagaAction;
