
import React, { useState, useEffect } from 'react';
import { colaboradorTableConfiguration } from '../../../../../adapters/proyecto-tableData.adapter';
import { TableProyectos } from '../../../../../components/tablaPropyectos/TableProyectos/TableProyectos';
import { ProjectosService } from '../../../../../services/projectos.services'
import { colaboradoresTableView } from '../../../../../adapters/colaboradores-tableView.adaptar'
import { Button } from 'react-bootstrap';


export const TablaProyectoPage = () => {
    const [dataProjectos, setDataProjectos] = useState(null)
    const cargarDatos = async () => {
        const response = await ProjectosService.obtenerPaginado();
        if (response) {
            const dataView = response.data.map((d) => colaboradoresTableView(d))
            setDataProjectos(dataView);
        }
    }

    const editar = (id) => {
        console.log('Editar', id);
    }

    const eliminar = (id) => {
        console.log('Eliminar', id);
    }

    useEffect(() => {
        cargarDatos()
    }, [])

    return (
        <div>
            {/* <h3></h3> */}
            {dataProjectos && <TableProyectos
                data={dataProjectos}
                configuration={colaboradorTableConfiguration(editar, eliminar)}
                tableClass={'__table'}
                tableBodyClass={'__table__body'}
                tableHeaderClass={'__table__header'}
            />}
        </div>
    )
}
