import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 240px;

  margin-bottom: auto;

  background: var(--white);
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);
  border-radius: 0px;

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--font-tertiary);
    margin: 8px 0 8px 30px;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
  }
`;

export const ContentButtonsSendMessage = styled.div`
  display: flex;
  margin: 0 20px;

  button {
    width: 38px;
    height: 38px;

    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 16px;
    /* or 80% */

    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--unticked);

    &:hover {
      color: var(--font-tertiary);
    }
  }
`;
