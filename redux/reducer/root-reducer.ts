import { combineReducers } from 'redux';
import LoadingReducer from './loading/loading-reducer';
import SampleReducer from './sample/sample-reducer';

var RootReducer = combineReducers({
  LoadingStore: LoadingReducer,
  sampleStore: SampleReducer,
  // sampleStore1: SampleReducer1,
});

export default RootReducer;
