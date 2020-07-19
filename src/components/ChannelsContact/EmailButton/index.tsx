import React from 'react';

import { Email } from '../../IconsSVG';
import { IPropsButton } from '../PropsShared';
import { Container } from '../StylesShared';

const EmailButton: React.FC<IPropsButton> = ({
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
      primarycolor="var(--email)"
      secondarycolor="var(--white)"
      tertiarycolor="var(--white)"
    >
      <Email className="email" />
      {children}
    </Container>
  );
};

export default EmailButton;
