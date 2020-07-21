import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container, SearchEmail, ContentEmailHeader } from './styles';

const SearchBarEmail: React.FC = () => {
  return (
    <Container>
      <ContentEmailHeader>
        <strong>CAIXA DE ENTRADA</strong>
        <div>
          <SearchEmail>
            <input name="search-message" />
            <FaSearch />
          </SearchEmail>
          <button type="button">Novo Email</button>
        </div>
      </ContentEmailHeader>
    </Container>
  );
};

export default SearchBarEmail;
