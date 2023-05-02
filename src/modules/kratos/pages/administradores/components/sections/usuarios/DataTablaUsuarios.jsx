import React from 'react';
import { TablaUsuarioData } from '../../../../../../../adapters/tablaUsuarioData.adapter';
import { TablaUsuariosAdmin } from './TablaUsuariosAdmin';


const dataProyecto = [
    {
        id: 1,
        correo: 'johan123@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 2,
        correo: 'johan1998@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 3,
        correo: 'Martinez123@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 4,
        correo: 'LeandroAcevedo@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 5,
        correo: 'DiazJohan32@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 6,
        correo: 'cifuentesSebas@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 7,
        correo: 'cifuentes@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 8,
        correo: 'AlexisCordoba@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 9,
        correo: 'familyOlsoftware@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 10,
        correo: 'vasquezDiaz1998@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 11,
        correo: 'leandroAce@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 12,
        correo: 'johan123987@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 13,
        correo: 'johan123@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 14,
        correo: 'vasquezJohan@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 15,
        correo: 'vasquezSebastian1998@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 16,
        correo: 'Vasquez.johan@olsoftware.com',
        estado: 'Activo'
      
    },
    {
        id: 17,
        correo: 'Sebastian.cifuentes123@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 18,
        correo: 'johan.123@olsoftware.com',
        estado: 'Inactivo'
      
    },
    {
        id: 19,
        correo: 'johan.12@olsoftware.com',
        estado: 'Inactivo'
      
    },
    
    
    
];


export const DataTablaUsuarios = () => {

    const editar = (id) => {
        console.log('Editar', id);
    }

    const eliminar = (id) => {
        console.log('Eliminar', id);
    }
    
    return (
        <div>
            {/* <h3></h3> */}
            <TablaUsuariosAdmin
                data={dataProyecto}
                configuration={TablaUsuarioData(editar, eliminar)}
                tableClass={'__table'}
                tableBodyClass={'__table__body'}
                tableHeaderClass={'__table__header'}
            />
        </div>
    )
}
