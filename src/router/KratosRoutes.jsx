import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from "../components/navbar/Navbar"
import { Sidebar } from "../components/sidebar/Sidebar"
import { DashboardPage } from "../modules/kratos/pages/dashboard/DashboardPage"
import { ProyectosPage } from "../modules/kratos/pages/proyectos/ProyectosPage"
import { ColaboradoresPage } from "../modules/kratos/pages/colaboradores/ColaboradoresPage"
import { AdministradoresPage } from "../modules/kratos/pages/administradores/AdministradoresPage"
import './styles/kratosRoutesStyle.css'
import { DetallesColaborador } from '../modules/kratos/pages/colaboradores/vistaDetalle/DetallesColaborador'
import { TablaUsuarios } from '../modules/kratos/pages/administradores/components/TablaUsuarios'
import { TablaTecnologias } from '../modules/kratos/pages/administradores/components/TablaTecnologias'
import { Error404 } from '../components/error404/Error404'

export const KratosRoutes = () => {
    return (
        <div className='ContainerPrincipal'>
            <div className='containerRoute'>
                <Navbar />
                <Sidebar />
                <div className='main'>
                    <Routes>
                        <Route path='dashboard' element={<DashboardPage />} />
                        <Route path='proyectos' element={<ProyectosPage />} />
                        <Route path='colaboradores' element={<ColaboradoresPage />} />
                        <Route path='administradores' element={<AdministradoresPage />} />
                        <Route path='detallesColaborador/:id' element={<DetallesColaborador />} />
                        <Route path='tablaUsuarios' element={<TablaUsuarios />} />
                        <Route path='tablaTecnologias' element={<TablaTecnologias />} />
                        <Route path='*' element={<Error404 />} />
                        {/* <Route path='usuarios' element={<TablaUsuarios />} /> */}
                        <Route path='/' element={<Navigate to="/dashboard" />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
