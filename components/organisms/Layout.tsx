import React from 'react';
import Footer from '@molecules/Footer';
import Header from '@molecules/Header';
import Main from '@molecules/Main';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className = '' }) => {
  const tailwindStyle = `${className}`;

  return (
    <div className={tailwindStyle}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
