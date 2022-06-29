import React from 'react';

import { Navigation, NavList, NavListItem } from './Nav.style';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Navigation>
      <NavList>
        <NavList>
          <NavListItem disableHover className="poppins_regular">
            <Link to="/">MernAuth</Link>
          </NavListItem>
        </NavList>
        <NavList className="poppins_regular">
          <NavListItem>
            <Link to="/">Home</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/about">About</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/login">Login</Link>
          </NavListItem>
          <NavListItem>
            <Link to="/register">Register</Link>
          </NavListItem>
        </NavList>
      </NavList>
    </Navigation>
  );
};

export default Nav;
