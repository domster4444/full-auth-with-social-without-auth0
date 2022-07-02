import React from 'react';
import Layout from 'components/Layout';
import isAuth from 'services/isAuth';

const index = () => {
  return (
    <h1>
      {isAuth()
        ? `${isAuth()._id}
        ${isAuth().name}
        ${isAuth().email}`
        : 'notLoggedInYet'}
    </h1>
  );
};

export default index;
