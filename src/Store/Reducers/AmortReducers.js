import {
  AMORT_SCHEDULE_AMOUNT,
  AMORT_SCHEDULE_CALCULATE,
} from '../Constants/AmortConstants';

export const amortScheduleAmountReducer = (state = {}, action) => {
  switch (action.type) {
    case AMORT_SCHEDULE_AMOUNT:
      return action.payload;
    default:
      return { state };
  }
};
export const amortScheduleCalculateReducer = (state = {}, action) => {
  switch (action.type) {
    case AMORT_SCHEDULE_CALCULATE:
      return action.payload;
    default:
      return { state };
  }
};
