import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../modules/auth/LoginPage'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { KratosRoutes } from './KratosRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={
          <PublicRoute >
            <LoginPage />
          </PublicRoute>
        }/>

        <Route path='/*' element={
          <PrivateRoute >
            <KratosRoutes />
          </PrivateRoute>
        }/>
      </Routes>
    </>
  )
}
