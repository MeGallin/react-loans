import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  amortScheduleAmountReducer,
  amortScheduleCalculateReducer,
} from '../Store/Reducers/AmortReducers';

const reducer = combineReducers({
  amortScheduleAmount: amortScheduleAmountReducer,
  amortScheduleCalculate: amortScheduleCalculateReducer,
});

const initialState = {};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
