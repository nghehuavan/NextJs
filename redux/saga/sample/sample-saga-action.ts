import sampleApi from '../../../apis/sampleApi';
import { call, select, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import LoadingSagaAction from '../loading/loading-saga-action';

const SampleSagaAction = {
  SAGA_FETCH_LIST: 'SAGA_FETCH_LIST',
  SAGA_FETCH_LIST_SUCCESS: 'SAGA_FETCH_LIST_SUCCESS',
  SAGA_FETCH_LIST_FAILED: 'SAGA_FETCH_LIST_FAILED',

  *fn_SAGA_FETCH_LIST(action: {}) {
    console.log('*fn_SAGA_FETCH_LIST', action);

    yield LoadingSagaAction.fn_SAGA_SET_LOADING(true);

    try {
      const photos: AxiosResponse<any> = yield call(() =>
        sampleApi.getData({ x: 1, y: 2 })
      );
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

    yield LoadingSagaAction.fn_SAGA_SET_LOADING(false);
  },
};

export default SampleSagaAction;
