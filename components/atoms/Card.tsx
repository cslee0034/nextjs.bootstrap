import React from 'react';

export const CardTheme = {
  DEFAULT: 'bg-white shadow-md rounded-lg p-6',
  SLATE: 'bg-slate-500 shadow-md rounded-lg p-6',
} as const;
type CardThemeKeys = (typeof CardTheme)[keyof typeof CardTheme];

export const CardSize = {
  DEFAULT: 'w-96 h-80',
} as const;
type CardSizeKeys = (typeof CardSize)[keyof typeof CardSize];

interface Props {
  children: React.ReactNode;
  className?: string;
  theme: CardThemeKeys;
  size: CardSizeKeys;
}

const Card: React.FC<Props> = ({
  children,
  className = '',
  theme = CardTheme.DEFAULT,
  size = CardSize.DEFAULT,
}) => {
  const tailwindStyle = `${theme} ${size} ${className}`;

  return <div className={tailwindStyle}>{children}</div>;
};

export default Card;
