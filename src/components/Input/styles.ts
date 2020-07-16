import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: var(--white);
  border-radius: 4px;
  border: 2px solid var(--border);
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--placeholder);

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--blue-dark);
      border-color: var(--blue-dark);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--gray);
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--gray);

    &::placeholder {
      color: var(--placeholder);
    }
  }

  svg {
    margin-right: 20px;
    margin-left: 10px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--red);
    color: var(--white);

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
