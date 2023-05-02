import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../modules/auth/context/AuthContext';

export const PublicRoute = ({ children }) => {

  const { logged } = useContext(AuthContext);

 
  return (
    !logged ? children : <Navigate to="/dashboard" />
  )
}
