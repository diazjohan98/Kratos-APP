import React, { useState } from 'react';
import logo from '../../assets/img/Logo.png'
import imgProfile from '../../assets/img/user_318-159711.webp'
import { FaPowerOff } from "react-icons/fa"
import './styles/navbarStyle.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../modules/auth/context/AuthContext'
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar = () => {
  const [cerrarSesionHover, setCerrarSesionHover] = useState(false);

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const cerrarSesion = () => {
    logout()
    navigate('/login');
  }
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='titleLogo'>
          <img src={logo} className="img-logo" alt="logo" />
          <p className='title-navbar'>KratosAPP</p>
        </div>
        <div className='titleEmail'>
          <img src={imgProfile} alt="profile" className='imgProfile' />
          <NavDropdown className='titleCorreo' title="johan123@olsoftware.com" id="collasible-nav-dropdown">
            <NavDropdown.Item classname='containerCerrar' href="#action/3.4" onClick={logout}>
              <FaPowerOff className="iconoNotificacion iconoPower" />Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </nav>
  );
}

