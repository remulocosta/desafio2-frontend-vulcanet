import React, { ButtonHTMLAttributes } from 'react';

import { Container, CustomerInfo } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IProps extends ButtonProps {
  selected?: boolean;
  customer?: {
    name: string;
    company: string;
    photo?: string;
    mentions?: number;
  };
}

const Customer: React.FC<IProps> = ({ selected, customer, ...rest }) => {
  return (
    <Container
      type="button"
      className={selected ? 'selected' : ''}
      {...rest}
      mentions={customer?.mentions}
    >
      <img src={customer?.photo} alt={customer?.name} />
      <CustomerInfo>
        <strong>{customer?.name}</strong>
        <span>{customer?.company}</span>
      </CustomerInfo>
      {/* {customer.mentions ? <span>{customer.mentions}</span> : ''} */}
    </Container>
  );
};

export default Customer;
