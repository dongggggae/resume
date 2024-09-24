import React from 'react';
import styled from '@emotion/styled';

const headingStyles = {
  h1: {
    fontSize: '56px',
    lineHeight: '72px',
  },
  h2: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  h3: {
    fontSize: '40px',
    lineHeight: '56px',
  },
  h4: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  h5: {
    fontSize: '24px',
    lineHeight: '40px',
  },
  h6: {
    fontSize: '20px',
    lineHeight: '32px',
  },
};

interface HeadingProps {
  text: string;
  level: keyof typeof headingStyles; // 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const StyledHeading = styled('h1')<{ ElementType: keyof typeof headingStyles }>`
  font-size: ${(props) => headingStyles[props.ElementType].fontSize};
  line-height: ${(props) => headingStyles[props.ElementType].lineHeight};
`;

const Heading: React.FC<HeadingProps> = ({ level, text }) => {
  return (
    <StyledHeading as={level} ElementType={level}>
      {text}
    </StyledHeading>
  );
};

export default Heading;
