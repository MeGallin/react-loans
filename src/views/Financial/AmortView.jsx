import React from 'react';
import AmortScheduleComponent from '../../components/AmortSchedule/AmortScheduleComponent';

const AmortView = () => {
  return (
    <fieldset className="fieldSet">
      <legend>Financial</legend>
      <div>
        <AmortScheduleComponent />
      </div>
    </fieldset>
  );
};

export default AmortView;
