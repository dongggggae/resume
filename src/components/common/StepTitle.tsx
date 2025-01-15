import React from 'react';

import { Heading } from 'hyun-design-system';

const StepTitle = ({ title }) => {
  return (
    <div className="step-title mt-8 mb-8">
      <Heading size={3} level="h3" color="primary" className="fw--600">
        {title}
      </Heading>
    </div>
  );
};

export default StepTitle;
