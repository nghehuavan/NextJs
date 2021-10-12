import { combineReducers } from 'redux';
import SampleReducer from './sample-reducer';

var RootReducer = combineReducers({
  sampleStore: SampleReducer,
  // sampleStore1: SampleReducer1,
});

export default RootReducer;
