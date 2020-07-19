import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;

  background: var(--white);
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 234px;
    height: 38px;

    margin-right: 20px;

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

export const SearchMessage = styled.div`
  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  width: 280px;
  height: 38px;

  margin-left: 20px;

  color: var(--unticked);

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--font-tertiary);
    margin: 8px 0 8px 8px;
  }

  svg {
    width: 38px;
    height: 38px;
    padding: 12px;
    margin-left: 2px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.02);
      border-radius: 4px;
    }
  }
`;
