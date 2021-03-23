import React from 'react';
import Header from '../Header';
import logo from '../../assets/img/logo.svg';

const Layout = ({children}) => {
  console.log(children)
  return (
    <> 
      <Header logo={logo} />
        <div>
          {children}
        </div>
      <Header />
    </>
  )
}

export default Layout