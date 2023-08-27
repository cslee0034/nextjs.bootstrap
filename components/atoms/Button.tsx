import React from 'react';

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
} as const;
type ButtonTypeKeys = (typeof ButtonType)[keyof typeof ButtonType];

export const ButtonTheme = {
  DEFAULT: 'bg-blue-500 hover:bg-blue-600 text-white rounded',
  WARNING: 'bg-red-500 hover:bg-red-600 text-white rounded',
} as const;
type ButtonThemeKeys = (typeof ButtonTheme)[keyof typeof ButtonTheme];

export const ButtonSize = {
  SMALL: 'px-2 py-1 text-sm',
  MEDIUM: 'px-4 py-2',
  LARGE: 'px-6 py-3 text-lg',
} as const;
type ButtonSizeKeys = (typeof ButtonSize)[keyof typeof ButtonSize];

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  type: ButtonTypeKeys;
  theme: ButtonThemeKeys;
  size: ButtonSizeKeys;
}

const Button: React.FC<Props> = ({
  onClick,
  children,
  className = '',
  type = ButtonType.BUTTON,
  theme = ButtonTheme.DEFAULT,
  size = ButtonSize.MEDIUM,
}) => {
  const tailwindStyle = `${theme} ${size} ${className}`;
  return (
    <button onClick={onClick} className={tailwindStyle} type={type}>
      {children}
    </button>
  );
};

export default Button;
