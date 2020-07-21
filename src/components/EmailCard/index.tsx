import React, { ButtonHTMLAttributes } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Subject, Initial, DataMessage } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IEmailProps extends ButtonProps {
  title: string;
  start_date: string;
  timestamp: string;
  mentions: number;
}

const EmailCard: React.FC<IEmailProps> = ({
  title,
  start_date,
  timestamp,
  mentions,
  ...rest
}) => {
  return (
    <Container
      type="button"
      {...rest}
      mentions={mentions}
      className={mentions ? 'mentions' : ''}
    >
      <Subject>{title}</Subject>
      <Initial>{start_date}</Initial>
      <DataMessage>{timestamp}</DataMessage>
      <FaArrowRight size={18} />
    </Container>
  );
};

export default EmailCard;
