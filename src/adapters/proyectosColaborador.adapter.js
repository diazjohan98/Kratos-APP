import { CardLabelTypes } from "../components/tablaPropyectos/CardLabel/cardLabelTypes";
import { TableTypes } from "../components/tablaPropyectos/TableProyectos/tableTypes";

export const proyectosColaborador = () => {

    const identificadorFila = 'project_id';

    const cabeceras = [
        ['project_name', 'Nombre del proyecto'],
        ['description', 'Descripción'],
        ['start_date', 'Fecha Inicio'],
        ['end_date', 'Fecha Finalización'],
        ['project_status_id', 'Estado'],
    ];

    const tipos = [
        ['estado', TableTypes.CardLabel, [
            ['En desarrollo', CardLabelTypes.Yellow],
            ['Terminado', CardLabelTypes.Green],
            ['Cotizacion', CardLabelTypes.Blue],
            ['Garantia', CardLabelTypes.Inactive],
            ['Anulado', CardLabelTypes.Red],]
        ],
    ];

    const classCells = [
        ['nombre', 'text-success'],
        ['descripcion', 'text-success'],
        ['fechaInicio', 'text-success '],
        ['fechaFinalizacion', 'text-success '],
      
    ];


    return {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    }
}