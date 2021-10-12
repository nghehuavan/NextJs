import { put } from 'redux-saga/effects';

const LoadingSagaAction = {
  SAGA_SET_LOADING: 'SAGA_SET_LOADING',

  *fn_SAGA_SET_LOADING(isLoading: boolean) {
    yield put({
      type: LoadingSagaAction.SAGA_SET_LOADING,
      payload: isLoading,
    });
  },
};

export default LoadingSagaAction;
