import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../modules/auth/context/AuthContext';

export const PrivateRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);
  return (
    logged ? children : <Navigate to="/login" />
  )

}
