import { ButtonHTMLAttributes, FC } from 'react';
import {
  BaseBotton,
  ButtonSpinner,
  GoogleSignInButton,
  InvertedButton,
} from './Button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseBotton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseBotton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps =  {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...props }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...props}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
