import React from 'react';

import { Heading } from 'hyun-design-system';

interface StepTitleProps {
  title: string;
}

const StepTitle: React.FC<StepTitleProps> = ({ title }) => {
  return (
    <div className="step-title mt-10 mb-8">
      <Heading size={3} level="h3" color="primary">
        {title}
        <span className="fc--information">.</span>
      </Heading>
    </div>
  );
};

export default StepTitle;
