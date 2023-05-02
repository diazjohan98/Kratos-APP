import { CardLabelTypes } from "../components/tablaPropyectos/CardLabel/cardLabelTypes";
import { TableTypes } from "../components/ranking/Table/tableTypes";

export const colaboradorTableConfiguration = () => {

    const identificadorFila = 'nombre';

    const cabeceras = [
        ['url', 'Perfil'],
        ['nombre', 'Nombre'],
        ['cargo', 'Cargo'],
        ['ciudad', 'Ciudad'],
        ['score', 'Score'],
        ['disponibilidad', 'Disponibilidad'],
    ];

    const tipos = [
        ['url', TableTypes.Imagen],
        ['disponibilidad', TableTypes.CardLabel, [
            ['Ocupado', CardLabelTypes.Red],
            ['Libre', CardLabelTypes.Green],
            ]
        ],
    ];

    const classCells = [
        ['nombre', 'text-success'],
        ['cargo', 'text-success'],
        ['ciudad', 'text-success '],
        ['score', 'text-success'],
    ];


    return {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    }
}