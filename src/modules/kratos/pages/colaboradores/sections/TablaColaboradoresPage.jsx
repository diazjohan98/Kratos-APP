import React, { useEffect, useState } from 'react';
import { colaboradoresTableConfiguration } from '../../../../../adapters/colaboradores-tableData.adapter';
import { TableColaboradores } from '../../../../../components/tablaColaboradores/TableProyectos/TableColaboradores';
import { Navigate, useNavigate } from 'react-router-dom';
import { ColaboradoresService } from '../../../../../services/colaboradores.service'
import { cityViewColaboradores } from '../../../../../adapters/cityViewTablaColaboradores.adapter';


export const TablaColaboradoresPage = () => {
  const [dataColaborador, setDataColaborador] = useState(null)
  const navigate = useNavigate()
  
  const cargarDatos = async () => {
    const response = await ColaboradoresService.obtenerPaginado();
    if (response) {
      const colaboradores = response.data;
      const ciudades = await ColaboradoresService.obtenerCiudad();
      const colaboradoresConCiudad = colaboradores.map((colaborador) =>
        cityViewColaboradores(colaborador, ciudades)
      );
      setDataColaborador(colaboradoresConCiudad);
    }
  };



  const editar = (id) => {
    console.log('Editar', id);
  }

  const eliminar = (id) => {
    console.log('Eliminar', id);
  }

  const detalle = (id) => {
    navigate(`/detallesColaborador/${id}`)
  }

  useEffect(() => {
    cargarDatos()
  }, [])

  return (
    <div>
      {dataColaborador && <TableColaboradores
        data={dataColaborador}
        configuration={colaboradoresTableConfiguration(editar, eliminar, detalle)}
        tableClass={` __table`}
        tableBodyClass={`__table__body`}
        tableHeaderClass={`__table__header`}
      />}
    </div>
  );
}