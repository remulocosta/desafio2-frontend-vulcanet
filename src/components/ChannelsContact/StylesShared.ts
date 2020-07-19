import styled from 'styled-components';

import { IPropsButton } from './PropsShared';

export const Container = styled.button<IPropsButton>`
  position: relative;
  border: 0;
  background: transparent;

  width: 64px;
  height: 64px;

  color: ${(props) => props.primarycolor && props.primarycolor};

  svg {
    width: 64px;
    height: 64px;
    padding: 20px;
  }

  &.selected,
  &:hover {
    color: ${(props) => props.secondarycolor && props.secondarycolor};
    background: ${(props) => props.primarycolor && props.primarycolor};
  }

  &::after {
    content: '${(props) => props.mentions && props.mentions}';

    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'flex' : 'none'};

    align-items: center;
    justify-content: center;
    flex-grow: 0;

    width: auto;
    min-width: 10px;
    height: 14px;

    position: absolute;
    bottom: 2px;
    right: 2px;

    border-radius: 28px;
    border: 2px solid var(--border-span) ;

    background-color:  var(--red);
    background-clip: padding-box;
    padding: 0 2px;

    font-size: 10px;
    font-weight: bold;
    line-height: 10px;
    color: var(--white);

  }

  &.selected::after,
  &:hover::after {
    color: ${({ tertiarycolor }) =>
      tertiarycolor ? 'var(--red)' : 'var(--white)'};
    background: ${({ tertiarycolor }) => tertiarycolor || 'var(--red)'};
    background-clip: padding-box;
  }
`;
