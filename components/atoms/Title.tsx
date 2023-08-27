import React from 'react';

export const TitleTheme = {
  SMALL: 'text-xl font-bold',
  MEDIUM: 'text-2xl font-bold',
  LARGE: 'text-3xl font-bold',
} as const;
type TitleThemeKeys = (typeof TitleTheme)[keyof typeof TitleTheme];

interface Props {
  children: React.ReactNode;
  className?: string;
  theme: TitleThemeKeys;
}

const Title: React.FC<Props> = ({
  children,
  className = '',
  theme = TitleTheme.MEDIUM,
}) => {
  const tailwindStyle = `${theme} ${className}`;

  return <h1 className={tailwindStyle}>{children}</h1>;
};

export default Title;
