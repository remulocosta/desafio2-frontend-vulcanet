import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;

  background: var(--white);
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  svg {
    width: 38px;
    height: 38px;
    padding: 12px;

    margin-left: 20px;
    cursor: pointer;

    color: var(--unticked);

    &:hover {
      color: var(--gray);
      border-radius: 4px;
    }
  }
`;

export const ContentReadEmailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;

  background: var(--white);
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  strong {
    margin-left: 20px;

    font-weight: bold;
    font-size: 18px;
    line-height: 16px;

    color: var(--black);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 234px;
    height: 38px;

    margin: 0 20px;

    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;

    color: var(--white);

    background: var(--blue);
    border: 0;
    border-radius: 4px;
    box-shadow: 0px 1px 0px var(--blue-dark);

    cursor: pointer;

    &:hover {
      background: var(--blue-dark);
    }
  }
`;
