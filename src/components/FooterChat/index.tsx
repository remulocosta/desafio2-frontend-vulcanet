import React from 'react';

import { Pic, Copy, Mic, Plane } from '../IconsSVG';
import { InputWrapper, ContentButtonsSendMessage } from './styles';

const FooterChat: React.FC = () => (
  <InputWrapper>
    <input
      type="text"
      placeholder="Digite sua mensagem..."
      name="send-message"
    />
    <ContentButtonsSendMessage>
      <button type="button">
        <Pic />
      </button>
      <button type="button">
        <Copy />
      </button>
      <button type="button">
        <Mic />
      </button>
      <button type="button">
        <Plane />
      </button>
    </ContentButtonsSendMessage>
  </InputWrapper>
);

export default FooterChat;
