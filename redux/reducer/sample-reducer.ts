import SampleSagaAction from '../saga/sample/sample-saga-action';

export interface iSampleReducerStore {
  sampleStore: iSampleReducerState;
}

export interface iSampleReducerState {
  photos: [];
}

const initialState: iSampleReducerState = {
  photos: [],
};

export interface iSampleReducerAction {
  type: string;
  payload: [];
}

const SampleReducer = (
  state: iSampleReducerState = initialState,
  action: iSampleReducerAction
) => {
  switch (action.type) {
    case SampleSagaAction.SAGA_FETCH_LIST:
      console.log('SAGA_FETCH_LIST', action);

      state.photos = [];
      return Array.isArray(state)
        ? [...state]
        : typeof state === 'object'
        ? { ...state }
        : state;

    case SampleSagaAction.SAGA_FETCH_LIST_SUCCESS:
      console.log('SAGA_FETCH_LIST_SUCCESS', action);

      state.photos = action.payload;
      return Array.isArray(state)
        ? [...state]
        : typeof state === 'object'
        ? { ...state }
        : state;

    default:
      return state;
  }
};

export default SampleReducer;
