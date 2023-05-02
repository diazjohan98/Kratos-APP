import { CardLabelTypes } from "../components/tablaPropyectos/CardLabel/cardLabelTypes";
import { TableTypes } from "../components/tablaPropyectos/TableProyectos/tableTypes";

export const tablaTecnologiasData = (editar, eliminar) => {

    const identificadorFila = 'tecnologia';

    const cabeceras = [
        ['tecnologia', 'Tecnología'],
        ['categorias', 'categorias'],
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
        ['categorias', 'text-success '],
    ];


    return {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    }
}