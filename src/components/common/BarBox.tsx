import React, { ReactNode } from 'react';

interface BarBoxProps {
  children: ReactNode;
}

const BarBox: React.FC<BarBoxProps> = ({ children }) => {
  return <div className="bar">{children}</div>;
};

export default BarBox;
