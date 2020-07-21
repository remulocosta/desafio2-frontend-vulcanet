import React from 'react';

import { Container, Assunto, Inicio, UltimaMensagem } from './styles';

const HeaderListEmails: React.FC = () => {
  return (
    <Container>
      <Assunto>Assunto</Assunto>
      <Inicio>Início</Inicio>
      <UltimaMensagem>UltimaMensagem</UltimaMensagem>
    </Container>
  );
};

export default HeaderListEmails;
