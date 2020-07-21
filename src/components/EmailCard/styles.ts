import styled from 'styled-components';

interface IProps {
  mentions?: number;
}

export const Container = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 64px;

  margin: 0 12px 5px 20px;

  background: var(--secondary);
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  /* background: transparent; */
  transition: background-color 0.4s;

  position: relative;
  cursor: pointer;

  > span {
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    text-align: left;

    margin-left: 20px;

    color: var(--black);
    background: transparent;
  }

  &::after {
    content: '${(props) => props.mentions && props.mentions}';

    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'flex' : 'none'};

    align-items: center;
    justify-content: center;
    flex-grow: 0;

    width: auto;
    min-width: 12px;
    height: 20px;

    position: absolute;
    /* top: calc(100% / 2) - 10px; */
    right: 88px;

    background-color: var(--red);
    background-clip: padding-box;
    padding: 0 4px;

    border-radius: 40px;
    border: 2px solid var(--border-span);

    font-size: 10px;
    font-weight: bold;
    color: var(--white);
  }

  svg {
    color: var(--unticked);
    margin-right: 20px;
  }

  &.mentions {
    background: var(--white);

    span {
      font-weight: bold;
      font-size: 15px;
    }
  }

`;

export const Subject = styled.span`
  width: calc(48% - 75px);
`;

export const Initial = styled.span`
  width: 160px;
`;

export const DataMessage = styled.span`
  width: 36%;
`;
