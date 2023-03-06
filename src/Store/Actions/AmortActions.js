import {
  AMORT_SCHEDULE_AMOUNT,
  AMORT_SCHEDULE_CALCULATE,
} from '../Constants/AmortConstants';

export const amortScheduleAmountAction =
  ({ amount, interestRate, period }) =>
  (dispatch) => {
    dispatch({
      type: AMORT_SCHEDULE_AMOUNT,
      payload: { amount, interestRate, period },
    });
  };

export const amortScheduleCalculateAction =
  ({ amount, interestRate, period }) =>
  (dispatch) => {
    dispatch({
      type: AMORT_SCHEDULE_CALCULATE,
    });
  };
