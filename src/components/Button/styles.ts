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
  background: var(--blue);
  height: 38px;
  width: 100%;
  border-radius: 4px;
  border: 0;
  padding: 0 20px;
  color: var(--white);
  font-size: 15px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#00A7CF')}; /* var(--blue-dark); */
  }

  svg .loading {
    margin-right: 8px;
    animation: ${rotate} 2s linear infinite;
  }
`;
