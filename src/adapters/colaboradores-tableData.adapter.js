import { CardLabelTypes } from "../components/tablaPropyectos/CardLabel/cardLabelTypes";
import { TableTypes } from "../components/tablaPropyectos/TableProyectos/tableTypes";

export const colaboradoresTableConfiguration = (editar, eliminar, detalle) => {

    const identificadorFila = 'collaborator_id';

    const cabeceras = [
        ['first_name', 'Nombre'],
        ['last_name', 'Apellido'],
        ['identification', 'Identificación'],
        // ['nivelEscolaridad', 'Nivel Escolaridad'],
        ['phone_number', 'Celular'],
        ['city_id.description', 'Ciudad'],
        ['email', 'Correo'],
        ['collaborator_status_id', 'Estado'],
        ['acciones', 'Acciones'],
    ];

    const tipos = [
        ['collaborator_status_id', TableTypes.CardLabel, [
            [2, CardLabelTypes.Yellow],
            [1, CardLabelTypes.Green],
            [3, CardLabelTypes.Blue],
            [4, CardLabelTypes.Red],]
        ],
        ['acciones', TableTypes.ActionButtons, { fnEditar: editar , fnEliminar: eliminar, fnDetalle: detalle  }, 'collaborator_id'],
    ];

    const classCells = [
        ['first_name', 'text-success'],
        ['last_name', 'text-success'],
        ['identificacion', 'text-success '],
        // ['nivelEscolaridad', 'text-success '],
        ['phone_number', 'text-success '],
        ['city_id', 'text-success '],
        ['correo', 'text-success '],
    ];


    return {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    }
}