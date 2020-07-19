import React from 'react';

import { Webchat } from '../../IconsSVG';
import { IPropsButton } from '../PropsShared';
import { Container } from '../StylesShared';

const WebchatButton: React.FC<IPropsButton> = ({
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
      primarycolor="var(--webchat)"
      secondarycolor="var(--white)"
    >
      <Webchat />
      {children}
    </Container>
  );
};

export default WebchatButton;
