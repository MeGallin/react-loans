import React from 'react';
import AmortScheduleComponent from '../../components/AmortSchedule/AmortScheduleComponent';

const FinancialView = () => {
  return (
    <fieldset className="fieldSet">
      <legend>Financial</legend>
      <div>
        <AmortScheduleComponent />
      </div>
    </fieldset>
  );
};

export default FinancialView;
