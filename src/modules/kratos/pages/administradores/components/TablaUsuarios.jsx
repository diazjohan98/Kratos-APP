import React from 'react'
import './Styles/tablaUsuariosStyles.css'
import { DataTablaUsuarios } from './sections/usuarios/DataTablaUsuarios'

export const TablaUsuarios = () => {
  return (
    <div className='containerTitleTablaUsuario'>
      <p className='titleWelcome lista'>Lista Usuarios</p>
      <DataTablaUsuarios />
    </div>
  )
}
