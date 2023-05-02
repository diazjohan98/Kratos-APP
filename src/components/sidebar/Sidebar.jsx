import React from 'react'
import { NavLink } from "react-router-dom"
import { MdOutlineDashboard } from 'react-icons/md'
import { BiHomeAlt2 } from 'react-icons/bi'
import * as FaIcons from "react-icons/fa"
import './styles/siderbarStyle.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaUserFriends } from 'react-icons/fa'

export const Sidebar = () => {
    return (
        <div className="siderbar">
            <ul className='UlSidebar'>
                <li>
                    <NavLink to="/dashboard" className=" py-2 w-100 m-20 d-inline-block px-3 sideFont " ><BiHomeAlt2 className="me-3" /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/proyectos" className=" py-2 w-100 m-20 d-inline-block px-3 sideFont" ><MdOutlineDashboard className="me-3" /> Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/colaboradores" className=" py-2 w-100 m-20 d-inline-block px-3 sideFont" ><FaIcons.FaHandsHelping className="me-3" /> Colaboradores</NavLink>
                </li>
                <li>
                    <DropdownButton
                        id="dropdown-administradores"
                        className="btn-Administrador dropdown-navlink "
                        title={<span className='py-2 w-100 m-20 d-inline-block px-3 sideFont btnAdministradoresIcon'><FaUserFriends className="me-3" />Administradores</span>}

                    >
                        <div className='containerTablasDeUsuTec'>
                            <NavLink to="/tablaUsuarios" className="dropdown-item dropNavlink" >
                                Usuarios
                            </NavLink>
                            <NavLink to="/tablatecnologias" className="dropdown-item dropNavlink" >
                                Tecnologias
                            </NavLink>
                        </div>
                    </DropdownButton>
                </li>
            </ul>
        </div>
    )
}
