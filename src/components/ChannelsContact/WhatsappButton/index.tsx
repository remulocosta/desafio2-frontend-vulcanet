import React from 'react';

import { Whatsapp } from '../../IconsSVG';
import { IPropsButton } from '../PropsShared';
import { Container } from '../StylesShared';

const WhatsappButton: React.FC<IPropsButton> = ({
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
      primarycolor="var(--whatsapp)"
      secondarycolor="var(--white)"
      tertiarycolor=""
    >
      <Whatsapp />
      {children}
    </Container>
  );
};

export default WhatsappButton;
