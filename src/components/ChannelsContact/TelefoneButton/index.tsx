import React from 'react';

import { Telefone } from '../../IconsSVG';
import { IPropsButton } from '../PropsShared';
import { Container } from '../StylesShared';

const TelefoneButton: React.FC<IPropsButton> = ({
  selected,
  mentions,
  children,
  ...rest
}) => {
  return (
    <Container
      type="button"
      className={selected ? 'selected' : ''}
      {...rest}
      mentions={mentions}
      primarycolor="var(--telefone)"
      secondarycolor="var(--white)"
    >
      <Telefone />
      {children}
    </Container>
  );
};

export default TelefoneButton;
