import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SearchMessage, ContentMessagesHeader } from './styles';

const SearchBarMessage: React.FC = () => {
  return (
    <Container>
      <ContentMessagesHeader>
        <SearchMessage>
          <input name="search-message" />
          <FaSearch />
        </SearchMessage>
        <button type="button">Finalizar Atendimento</button>
      </ContentMessagesHeader>
    </Container>
  );
};

export default SearchBarMessage;
