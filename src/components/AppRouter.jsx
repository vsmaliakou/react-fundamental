import React, { useContext } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route => {
          return <Route key={route.path} path={route.path} element={route.element} />
        })}
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => {
          return <Route key={route.path} path={route.path} element={route.element} />
        })}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
  );
};

export default AppRouter;
