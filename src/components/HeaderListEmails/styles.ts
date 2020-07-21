import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 44px;

  margin: 0 20px;

  background: transparent;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  > span {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    display: flex;
    align-items: center;
    text-transform: uppercase;

    margin-left: 20px;

    color: var(--quinary);
  }
`;

export const Assunto = styled.span`
  width: calc(50% - 80px);
`;

export const Inicio = styled.span`
  width: 160px;
`;

export const UltimaMensagem = styled.span`
  width: 42%;
`;
