import React from 'react';
import { tablaTecnologiasData } from '../../../../../../../adapters/tablaTecnologiasData.adapter';
import { TablaTecnologiasAdmin } from './TablaTecnologiasAdmin';


const dataProyecto = [
    {
        id: 1,
        tecnologia: 'ReactJS',
        categorias: 'Tecnolgía'
      
    },
    {
        id: 2,
        tecnologia: 'Angular',
        categorias: 'Tecnolgía'
      
    },
    {
        id: 3,
        tecnologia: 'SQL',
        categorias: 'Tecnolgía'
      
    },
    {
        id: 4,
        tecnologia: '.Net',
        categorias: 'Tecnolgía'
      
    },
    {
        id: 5,
        tecnologia: 'GitLab',
        categorias: 'Plataforma'
      
    },
    {
        id: 6,
        tecnologia: 'VsCode',
        categorias: 'Herramienta'
      
    },
    {
        id: 7,
        tecnologia: 'VueJS',
        categorias: 'Tecnolgía'
      
    },
    {
        id: 8,
        tecnologia: 'NodeJS',
        categorias: 'Tecnolgía'
      
    },
  
];


export const DataTablaTecnologias = () => {

    const editar = (id) => {
        console.log('Editar', id);
    }

    const eliminar = (id) => {
        console.log('Eliminar', id);
    }
    
    return (
        <div>
            {/* <h3></h3> */}
            <TablaTecnologiasAdmin
                data={dataProyecto}
                configuration={tablaTecnologiasData(editar, eliminar)}
                tableClass={'__table'}
                tableBodyClass={'__table__body'}
                tableHeaderClass={'__table__header'}
            />
        </div>
    )
}
