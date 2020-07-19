import React from 'react';

import { Skype } from '../../IconsSVG';
import { IPropsButton } from '../PropsShared';
import { Container } from '../StylesShared';

const SkypeButton: React.FC<IPropsButton> = ({
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
      primarycolor="var(--skype)"
      secondarycolor="var(--white)"
    >
      <Skype />
      {children}
    </Container>
  );
};

export default SkypeButton;
