import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: #FFF;
  border-radius: 10px;
  border: 2px solid #E0E7ED;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #C7D7E2;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #636466;
      border-color: #636466;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #636466;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #636466;

    &::placeholder {
      color: #C7D7E2;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
