import { DateFormatUtility } from "../utilities/dateFormat.utility"

export const colaboradoresTableView = (colaborador) => {

    return{
        project_id: colaborador.project_id,
        project_name: colaborador.project_name,
        description:colaborador.description,
        start_date: DateFormatUtility.dateToStringDateFormat(colaborador.start_date),
        end_date: DateFormatUtility.dateToStringDateFormat(colaborador.end_date),
        project_status_id: colaborador.project_status_id,
        collaborators: colaborador.collaborator.map((c) => `${c.first_name} ${c.last_name}`),
        technologies: colaborador.technology.map((t) => `${t.description}`),
    }


}

