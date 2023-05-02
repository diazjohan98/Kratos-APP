import { CardLabelTypes } from "../components/tablaPropyectos/CardLabel/cardLabelTypes";
import { TableTypes } from "../components/tablaPropyectos/TableProyectos/tableTypes";

export const TablaUsuarioData = (editar, eliminar) => {

    const identificadorFila = 'correo';

    const cabeceras = [
        ['correo', 'Correo'],
        ['estado', 'Estado'],
        ['acciones', 'Acciones'],
    ];

    const tipos = [
        ['estado', TableTypes.CardLabel, [
            ['Inactivo', CardLabelTypes.Cancelled],
            ['Activo', CardLabelTypes.Blue],
            ['Suspendido', CardLabelTypes.Blue],
            ['Retirado', CardLabelTypes.Red],]
        ],
        ['acciones', TableTypes.ActionButtons, { fnEditar: editar , fnEliminar: eliminar }, 'id'],
    ];

    const classCells = [
        ['correo', 'text-success '],
    ];


    return {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    }
}