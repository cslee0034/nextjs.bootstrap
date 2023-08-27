import React from 'react';

export const SubtitleTheme = {
  SMALL: 'text-lg',
  MEDIUM: 'text-xl',
  LARGE: 'text-2xl',
} as const;
type SubtitleThemeKeys = (typeof SubtitleTheme)[keyof typeof SubtitleTheme];

interface Props {
  children: React.ReactNode;
  className?: string;
  theme: SubtitleThemeKeys;
}

const Subtitle: React.FC<Props> = ({
  children,
  className = '',
  theme = SubtitleTheme.MEDIUM,
}) => {
  const tailwindStyle = `${theme} ${className}`;

  return <h2 className={tailwindStyle}>{children}</h2>;
};

export default Subtitle;
