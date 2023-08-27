import React from 'react';
import { default as NextLink } from 'next/link';

export const LinkTheme = {
  DEFAULT: 'text-gray-600 text-lg pl-4 py-2 rounded-lg',
  LOGO: 'text-gray-600 text-3xl rounded-lg',
} as const;
type LinkThemeKeys = (typeof LinkTheme)[keyof typeof LinkTheme];

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  theme: LinkThemeKeys;
}

/**
 * This has the same name as 'next/link',
 * but make sure to import it from '@/atoms/Link
 */
const Link: React.FC<Props> = ({
  children,
  className = '',
  href = '',
  theme = LinkTheme.DEFAULT,
}) => {
  const tailwindStyle = `${theme} ${className}`;
  return (
    <NextLink href={href} className={tailwindStyle}>
      {children}
    </NextLink>
  );
};

export default Link;
