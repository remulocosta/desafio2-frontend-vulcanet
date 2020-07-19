import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SearchMessage } from './styles';

const SearchBarMessage: React.FC = () => {
  return (
    <Container>
      <SearchMessage>
        <input name="search-message" />
        <FaSearch />
      </SearchMessage>
      <button type="button">Finalizar Atendimento</button>
    </Container>
  );
};

export default SearchBarMessage;
