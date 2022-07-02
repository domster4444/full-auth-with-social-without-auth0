import React from 'react';

import { Navigation, NavList, NavListItem } from './Nav.style';
import { Link, Navigate } from 'react-router-dom';

//? Step 1 For implementing active link feat
import { useLocation } from 'react-router-dom';
//? -------------------------------------------

import isAuth from 'services/isAuth';

import { DataRemovalMiddleware } from 'services/AuthStorageMiddleware';

import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  //? Step 2 For implementing active link feat
  const location = useLocation();
  console.log(location);
  //? -------------------------------------------

  const isActive = (path: string) => {
    if (location.pathname === path) {
      return { color: 'red' };
    } else {
      return { color: '#A66EFE' };
    }
  };

  return (
    <Navigation>
      <NavList>
        <NavList>
          <NavListItem disableHover className="poppins_regular">
            <Link to="/" style={isActive('/')}>
              MernAuth
            </Link>
          </NavListItem>
        </NavList>
        <NavList className="poppins_regular">
          <NavListItem>
            <Link to="/" style={isActive('/')}>
              Home
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/about" style={isActive('/about')}>
              About
            </Link>
          </NavListItem>

          {!isAuth() && (
            <>
              <NavListItem>
                <Link to={isAuth() ? '/' : '/login'} style={isActive('/login')}>
                  Login
                </Link>
              </NavListItem>
              <NavListItem>
                <Link
                  to={isAuth() ? '/' : '/register'}
                  style={isActive('/register')}
                >
                  Register
                </Link>
              </NavListItem>
            </>
          )}

          {isAuth() && (
            <>
              <NavListItem>
                <a
                  style={isActive('/login')}
                  onClick={() => {
                    DataRemovalMiddleware(() => {
                      navigate('/');
                    });
                  }}
                >
                  Logout
                </a>
              </NavListItem>
            </>
          )}
        </NavList>
      </NavList>
    </Navigation>
  );
};

export default Nav;
