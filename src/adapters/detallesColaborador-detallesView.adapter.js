import { DateFormatUtility } from "../utilities/dateFormat.utility";
import imgFallback from '../assets/img/user_318-159711.webp'

export const colaboradoresDetallesView = (colaborador) => {
  return {
    first_name: colaborador.first_name,
    last_name: colaborador.last_name,
    identification: colaborador.identification,
    education_level_id: colaborador.education_level_id,
    birthdate: DateFormatUtility.dateToStringDateFormat(colaborador.birthdate),
    occupation_id: colaborador.occupation_id,
    cellphone_number: colaborador.cellphone_number,
    city_id: colaborador.city_id,
    email: colaborador.email,
    skills: colaborador.skills,
    projects: colaborador.projects,
    photo_url: !!colaborador.photo_url?colaborador.photo_url:imgFallback
  };
};
