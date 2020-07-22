import React from 'react';

import { Container, ContentReadEmailsHeader } from './styles';

interface IHeaderProps {
  subject?: string;
}

const HeaderReadEmails: React.FC<IHeaderProps> = ({ subject, children }) => {
  return (
    <Container>
      {children}
      <ContentReadEmailsHeader>
        <strong>{subject || 'Procedimento de Troca'}</strong>
        <button type="button">Finalizar Atendimento</button>
      </ContentReadEmailsHeader>
    </Container>
  );
};

export default HeaderReadEmails;
