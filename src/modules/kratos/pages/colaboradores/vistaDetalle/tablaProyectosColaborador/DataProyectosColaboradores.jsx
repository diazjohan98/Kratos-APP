import React from 'react';
import { proyectosColaborador } from '../../../../../../adapters/proyectosColaborador.adapter';
import { TablaProyectosColaborador } from './TablaProyectosColaborador';
import { colaboradoresTableProyectosView } from '../../../../../../adapters/tablaProyectosView-detallesColaboradores.adapter';

export const DataProyectosColaboradores = ({ projects }) => {

    const editar = (id) => {
        console.log('Editar', id);
    }

    const eliminar = (id) => {
        console.log('Eliminar', id);
    }

    const proyectosConFechasString = projects && projects.map(colaboradoresTableProyectosView);
    
    console.log(proyectosConFechasString);
    return (
        <div>
            {/* <h3></h3> */}
            {proyectosConFechasString && <TablaProyectosColaborador
                data={proyectosConFechasString}
                configuration={proyectosColaborador(editar, eliminar)}
                tableClass={'__table'}
                tableBodyClass={'__table__body'}
                tableHeaderClass={'__table__header'}
            />}
        </div>
    )
}
