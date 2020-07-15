import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerStyle?: Record<string, any>;
}

const Button: React.FC<IButtonProps> = ({
  children,
  containerStyle = {},
  ...rest
}) => (
  <Container type="button" {...rest} style={containerStyle}>
    {children}
  </Container>
);

export default Button;
