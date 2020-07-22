import React from 'react';

import {
  Pic,
  Clip,
  Bold,
  Italic,
  Underline,
  Left,
  Center,
  Right,
  Justified,
} from '../IconsSVG';
import { InputWrapper, ContentButtonsSendMessage } from './styles';

const FooterEmail: React.FC = () => (
  <InputWrapper>
    <textarea placeholder="Digite sua mensagem..." name="send-message" />
    <ContentButtonsSendMessage>
      <button type="button" className="responder">
        RESPONDER
      </button>
      <button type="button">
        <Pic />
      </button>
      <button type="button">
        <Clip />
      </button>
      <button type="button">
        <Bold />
      </button>
      <button type="button">
        <Italic />
      </button>
      <button type="button">
        <Underline />
      </button>
      <button type="button">
        <Left />
      </button>
      <button type="button">
        <Center />
      </button>
      <button type="button">
        <Right />
      </button>
      <button type="button">
        <Justified />
      </button>
    </ContentButtonsSendMessage>
  </InputWrapper>
);

export default FooterEmail;
