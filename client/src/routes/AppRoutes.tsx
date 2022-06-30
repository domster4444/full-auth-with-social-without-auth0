import React from 'react';

import Layout from 'components/Layout';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import Home from 'screen/Home';
import Login from 'screen/Login';
import Register from 'screen/Register';
import ActivateAccount from 'screen/ActivateAccount';
import ForgotPassword from 'screen/ForgotPassword';
import ResetPassword from 'screen/ResetPassword';

const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/activate-account/:token"
            element={<ActivateAccount />}
          />
          <Route path="/send-forgot-pass-email" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          {/* //? Catch all routes that are not defined above */}
          {/* //?  write this route at last after defining all routes */}
          <Route
            path="*"
            element={<h1 style={{ color: 'white ' }}>PAGE NOT FOUND</h1>}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
