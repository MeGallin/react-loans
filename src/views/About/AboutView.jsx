import React from 'react';
import { AboutComponent } from '../../components/About/AboutComponent';

const AboutView = () => {
  return (
    <fieldset className="fieldSet">
      <legend>About</legend>
      <AboutComponent />
    </fieldset>
  );
};

export default AboutView;
