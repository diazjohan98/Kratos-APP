import React, { useEffect, useState } from 'react'
import { Card } from '../../../../components/cards/Card'
import '../styles/dashboardStyles.css'
import * as FaIcons from "react-icons/fa"
// import { Table } from '../../../components/ranking/Table/Table'
import { TablaSection } from './sections/TablaSection'
import { CardDashboardService } from '../../../../services/cardDashboard.service'

export const DashboardPage = () => {
  const [statuses, setStatuses] = useState([]);

  const cargarDatos = async () => {
    const response = await CardDashboardService.obtenerPaginado();
    if (response) {
      setStatuses(response.data);
    }
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  const getTotalEmpleados = () => {
    if (!statuses) {
      return "0/0";
    }
    const total =
      statuses.active_count +
      statuses.inactive_count +
      statuses.suspended_count +
      statuses.retired_count;
    return `${total}`;
  };

  return (
    <div className='mainDashboard'>
      <div className='mainCardWelcome'>
        <div className='containerTitle'>
          <p className='titleWelcome'>Bienvenido Johan</p>
        </div>
        <div className="container-cards">
          <Card className="cardContainer"
            name="Empleados Activos"
            numEmpleados={`${statuses?.active_count}/${getTotalEmpleados()}`}
            iconoStatus={<FaIcons.FaUserCheck className='iconoTamaño activo' />}
            status="activo" />
          <Card className="cardContainer" 
          name="Empleados Inactivos" 
          numEmpleados={`${statuses?.inactive_count}/${getTotalEmpleados()}`}
          iconoStatus={<FaIcons.FaUserCog className='iconoTamaño inactivo' />} 
          status="inactivo" />
          <Card className="cardContainer" 
          name="Empleados Suspendidos" 
          numEmpleados={`${statuses?.suspended_count}/${getTotalEmpleados()}`}          
          iconoStatus={<FaIcons.FaUserClock className='iconoTamaño suspendido' />} 
          status="suspendido" />
          <Card className="cardContainer" 
          name="Empleados Retirado" 
          numEmpleados={`${statuses?.retired_count}/${getTotalEmpleados()}`}          
          iconoStatus={<FaIcons.FaUserTimes className='iconoTamaño retirado' />} 
          status="retirado" />
        </div>
      </div>
      <br />
      <div className='containerRanking'>
        <div className='containerTitle'>
          <p className='titleWelcome ranking'>Ranking</p>
        </div>
        <div >
          <TablaSection />
        </div>
      </div>

    </div>
  )
}
