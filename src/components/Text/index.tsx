import React from 'react';
import styled from '@emotion/styled';

const textStyles = {
  lg: {
    fontSize: '18px',
    lineHeight: '32px',
  },
  md: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  sm: {
    fontSize: '14px',
    lineHeight: '24px',
  },
  xs: {
    fontSize: '12px',
    lineHeight: '20px',
  },
  xxs: {
    fontSize: '10px',
    lineHeight: '16px',
  },
};

interface TextProps {
  children: React.ReactNode;
  size: keyof typeof textStyles; // 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
}

const StyledText = styled('p')<{ size: keyof typeof textStyles }>`
  font-size: ${(props) => textStyles[props.size].fontSize};
  line-height: ${(props) => textStyles[props.size].lineHeight};
`;

const Text: React.FC<TextProps> = ({ size, children }) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export default Text;
