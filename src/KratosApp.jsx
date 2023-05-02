import React from 'react'
import { AuthProvider } from './modules/auth/context/AuthProvider'
import { AppRouter } from './router/AppRouter'

export const KratosApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
