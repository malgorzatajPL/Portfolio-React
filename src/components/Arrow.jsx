import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';

const move = keyframes`
  25% {
      opacity: 1; 
    }
    33% {
        opacity: 1;
        transform: translateY(30px);
    }
    67% {
        opacity: 1;
        transform: translateY(40px);
    }
    100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
`;

const ContainerArrow = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin: 0 auto;
`;

const Chevron = styled.div`
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  animation: ${move} 3s ease-out infinite;
  transform: scale3d(0.5, 0.5, 0.5);
  &:first-child {
    animation: ${move} 3s ease-out 1s infinite;
  }
  &:nth-child(2) {
    animation: ${move} 3s ease-out 2s infinite;
  }
  :before {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    left: 0;
    transform: skew(0deg, 30deg);
    background: ${theme.palette.common.white};
  }
  :after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
    width: 51%;
    background: ${theme.palette.common.white};
  }
`;

function ArrowDown() {
  return (
    <ContainerArrow>
      <Chevron />
      <Chevron />
      <Chevron />
    </ContainerArrow>
  );
}

export default ArrowDown;
