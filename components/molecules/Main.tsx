import React from 'react';

export const enum MainTheme {
  DEFAULT = 'bg-white text-black',
}

interface Props {
  children?: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className={MainTheme.DEFAULT}>{children}</main>;
};

export default Main;
