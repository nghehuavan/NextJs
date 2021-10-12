import LoadingSagaAction from './loading-saga-action';

export interface iLoadingReducerStore {
  LoadingStore: iLoadingReducerState;
}

export interface iLoadingReducerState {
  isLoading: boolean;
}

const initialState: iLoadingReducerState = {
  isLoading: false,
};

export interface iLoadingReducerAction {
  type: string;
  payload: boolean;
}

const LoadingReducer = (
  state: iLoadingReducerState = initialState,
  action: iLoadingReducerAction
) => {
  switch (action.type) {
    case LoadingSagaAction.SAGA_SET_LOADING:
      console.log('SAGA_SET_LOADING', action);

      state.isLoading = action.payload;
      return Array.isArray(state)
        ? [...state]
        : typeof state === 'object'
        ? { ...state }
        : state;

    default:
      return state;
  }
};

export default LoadingReducer;
