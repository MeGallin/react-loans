import React from 'react';
import AmortScheduleComponent from '../../components/AmortSchedule/AmortScheduleComponent';

const AmortView = () => {
  return (
    <fieldset className="fieldSet">
      <legend>Amortization Schedule</legend>
      <div>
        <AmortScheduleComponent />
      </div>
    </fieldset>
  );
};

export default AmortView;
