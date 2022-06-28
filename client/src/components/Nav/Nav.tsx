import React from 'react';

import { Navigation, NavList, NavListItem } from './Nav.style';

const Nav = () => {
  return (
    <Navigation>
      <NavList>
        <NavList>
          <NavListItem disableHover className="poppins_regular">
            MernAuth
          </NavListItem>
        </NavList>
        <NavList className="poppins_regular">
          <NavListItem>Home</NavListItem>
          <NavListItem>About</NavListItem>
          <NavListItem>Login</NavListItem>
          <NavListItem>Register</NavListItem>
        </NavList>
      </NavList>
    </Navigation>
  );
};

export default Nav;
