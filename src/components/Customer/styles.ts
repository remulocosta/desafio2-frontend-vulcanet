import styled from 'styled-components';

interface ITest {
  mentions?: number;
}

export const Container = styled.button<ITest>`

  display: flex;
  align-items: center;
  padding: 0px 15px;
  width: 100%;
  height: 70px;
  border: 0;
  text-align: left;
  background: transparent;
  transition: background-color 0.4s;

  position: relative;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  &.selected,
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &.selected {
    cursor: not-allowed;
  }

  /* > span {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    margin-right: 8px;
    min-width: 24px;
    min-height: 24px;

    background: var(--red);
    color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--border);

    font-size: 10px;
    font-weight: bold;
  } */

  &::after {
    content: '${(props) => props.mentions && props.mentions}';

    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-grow: 0;

    background-color: var(--red);
    width: 20px;
    height: 20px;

    position: absolute;
    top: calc(100% / 2) - 10px;
    right: 22px;

    border-radius: 50%;
    border: 2px solid var(--border-span);

    font-size: 10px;
    font-weight: bold;
    color: var(--white);

  }
`;

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  margin: 0 0 0 10px;

  > strong {
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    color: var(--white);

    margin-bottom: 4px;

    max-width: 180px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--tertiary);
  }
`;
