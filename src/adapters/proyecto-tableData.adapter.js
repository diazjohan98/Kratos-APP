import { CardLabelTypes } from "../components/tablaPropyectos/CardLabel/cardLabelTypes";
import { TableTypes } from "../components/tablaPropyectos/TableProyectos/tableTypes";

export const colaboradorTableConfiguration = (editar, eliminar) => {

    const identificadorFila = 'project_id';

    const cabeceras = [
        ['project_name', 'Nombre'],
        ['description', 'Descripción'],
        ['start_date', 'Fecha Inicio'],
        ['end_date', 'Fecha Finalización'],
        ['collaborators', 'Equipo de Trabajo'],
        ['technologies', 'Tecnologías'],
        ['project_status_id', 'Estado'],
        ['acciones', 'Acciones'],
    ];

    const tipos = [
        ['estado', TableTypes.CardLabel, [
            ['En desarrollo', CardLabelTypes.Yellow],
            ['Terminado', CardLabelTypes.Green],
            ['Cotizacion', CardLabelTypes.Blue],
            ['Garantia', CardLabelTypes.Inactive],
            ['Anulado', CardLabelTypes.Red],]
        ],
        ['acciones', TableTypes.ActionButtons, { fnEditar: editar, fnEliminar: eliminar}, 'project_id'],
        ['collaborators', TableTypes.TooltipList, ],
        ['technologies', TableTypes.TooltipList],
    ];

    const classCells = [
        ['project_name', 'text-success'],
        ['description', 'text-success'],
        ['start_date', 'text-success '],
        ['end_date', 'text-success '],
        ['collaborators', 'text-success '],
        ['technologies', 'text-success '],
    ];


    return {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    }
}