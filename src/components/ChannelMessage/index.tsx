import React from 'react';

import { Container, Avatar, Header, SeenIcon } from './styles';

export interface IMessageProps {
  date?: string;
  name?: string;
  imgAvatar?: string;
  content?: string | React.ReactElement | React.ReactNode;
  typeMessage: string;
  seen?: boolean;
}

const ChannelMessage: React.FC<IMessageProps> = ({
  date,
  name,
  imgAvatar,
  content,
  typeMessage,
  seen,
}) => {
  return (
    <Container className={typeMessage}>
      <Header>
        <Avatar>
          <img src={imgAvatar} alt={name} />
        </Avatar>
        <strong>{name}</strong>
        {' - '}
        <time>{date}</time>
        <SeenIcon
          className={
            seen ? 'seen' : `${typeMessage === 'incoming' ? '' : 'seen'}`
          }
        />
      </Header>
      <p>{content}</p>
    </Container>
  );
};

export default ChannelMessage;
