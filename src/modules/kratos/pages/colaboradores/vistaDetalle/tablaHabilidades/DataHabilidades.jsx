import React, { useState, useEffect } from 'react';
import { habilidadesTableConfiguration } from '../../../../../../adapters/HabilidadesColaborador-tableData.adapter';
import { TablaHabilidades } from './TablaHabilidades';



export const DataHabilidades = ({ skills }) => {
   

    const editar = (id) => {
        console.log('Editar', id);
    }

    const eliminar = (id) => {
        console.log('Eliminar', id);
    }

  

    return (
        <div>

            {/* <h3></h3> */}
            {skills && <TablaHabilidades
                data={skills}
                configuration={habilidadesTableConfiguration(editar, eliminar)}
                tableClass={'__table'}
                tableBodyClass={'__table__body'}
                tableHeaderClass={'__table__header'}
            />}
        </div>
    )
}
