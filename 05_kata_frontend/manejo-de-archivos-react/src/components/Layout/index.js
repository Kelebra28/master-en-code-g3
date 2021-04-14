import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import logo from '../../assets/img/logo.svg';

const Layout = ({children, noHome}) => {
  const suma = 2 + 2;
  return (
    <>
      {noHome ? undefined : <Header logo={logo} /> }
        <div>
          {children}
        </div>
          { suma}
      <Footer />
    </>
  )
}

export default Layout