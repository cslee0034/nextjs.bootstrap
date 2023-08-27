import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Footer: React.FC<Props> = ({ children, className = '' }) => {
  const tailwindStyle = `${className}`;

  return <footer className={tailwindStyle}></footer>;
};

export default Footer;
