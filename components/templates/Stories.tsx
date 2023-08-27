import React from 'react';

export const enum StoriesWrapper {
  DEFAULT = 'flex flex-col bg-white text-black',
}
export const enum StoriesHero {
  DEFAULT = 'relative',
}
export const enum StoriesCol {
  DEFAULT = 'py-6',
}

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Stories: React.FC<Props> = ({ children, className = '' }) => {
  const tailwindStyle = `${StoriesWrapper.DEFAULT} ${className}`;

  return (
    <div className={tailwindStyle}>
      <div className={StoriesHero.DEFAULT}></div>
      <div className={StoriesCol.DEFAULT}></div>
      <div className={StoriesCol.DEFAULT}></div>
      {children}
    </div>
  );
};

export default Stories;
