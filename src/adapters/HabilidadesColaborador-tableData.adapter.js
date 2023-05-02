import { CardLabelTypes } from "../components/tablaPropyectos/CardLabel/cardLabelTypes";
import { TableTypes } from "../components/tablaPropyectos/TableProyectos/tableTypes";

export const habilidadesTableConfiguration = (editar, eliminar) => {

    const identificadorFila = 'collaborator_id';

    const cabeceras = [
        ['description', 'Tecnologias'],
        ['category_id', 'Categoria'],
        ['selfconcept_score', 'Autoconcepto'],
        ['team_score', 'Equipo'],
        ['technical_score', 'Evaluacion'],
        ['average_score', 'Ponderado'],
        ['description_technology_level', 'Nivel'],
        ['acciones', 'Acciones'],
    ];

    const tipos = [
     
        ['acciones', TableTypes.ActionButtons, { fnEditar: editar, fnEliminar: eliminar  }, 'collaborator_id'],
    ];

    const classCells = [
        ['description', 'text-success tdHabilidades'],
        ['category_id', 'text-success tdHabilidades'],
        ['selfconcept_score', 'text-success tdHabilidades'],
        ['team_score', 'text-success tdHabilidades'],
        ['technical_score', 'text-success tdHabilidades'],
        ['average_score', 'text-success tdHabilidades'],
        ['description_technology_level', 'text-success tdHabilidades'],
    ];


    return {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    }
}