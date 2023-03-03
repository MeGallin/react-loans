import React from 'react';
import { CapitalAppreciationComponent } from '../../components/CapitalAppreciation/CapitalAppreciationComponent';

const CapitalAppreciationView = () => {
  return (
    <fieldset className="fieldSet">
      <legend>Capital Appreciation Schedule</legend>
      <div>
        <CapitalAppreciationComponent />;
      </div>
    </fieldset>
  );
};

export default CapitalAppreciationView;
