import React from 'react';

import { Layouts } from './Layout.style';

import Nav from 'components/Nav';
import Footer from 'components/Footer';

import { ILayout } from 'components/Layout/interface';

const Layout: React.FC<ILayout> = ({ children }): React.ReactElement => {
  return (
    <Layouts>
      <Nav />

      {children}

      <Footer />
    </Layouts>
  );
};

export default Layout;
