import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
  background: #00a7cf;
  height: 56px;
  width: 100%;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#00A7CF')};
  }

  svg .loading {
    margin-right: 8px;
    animation: ${rotate} 2s linear infinite;
  }
`;
