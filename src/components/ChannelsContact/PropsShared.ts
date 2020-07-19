import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IPropsButton extends ButtonProps {
  selected?: boolean;
  mentions?: number;
  primarycolor?: string;
  secondarycolor?: string;
  tertiarycolor?: string;
}
