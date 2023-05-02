import { object, string, number, date } from "yup";

const schemaColaboradores = object({
  first_name: string()
    .required("El campo nombre es obligatorio")
    .min(1, "El nombre tiene que tener al menos un carácter")
    .max(100, "El nombre no puede superar los 100 carácteres"),
  last_name: string()
    .required("El campo apellido es obligatorio")
    .min(1, "El apellido tiene que tener al menos un carácter")
    .max(100, "El apellido no puede superar los 100 carácteres"),
  identification_type_id: string().required(
    "El campo tipo de identificación es obligatorio"
  ),
  identification: number()
    .required("Es obligatorio poner la identificación")
    .min(7, "la identificación debe de tener al menos 7 digitos"),
  education_level_id: string().required(
    "El campo nivel de escolaridad es obligatorio"
  ),
  entry_date: date()
    .required("El campo la fecha inicial es obligatorio")
    .max(new Date(), "La fecha no puede ser mayor a la fecha de finalización"),
  retirement_date: date()
    .required("El campo la fecha de finalización es obligatorio")
    .min(new Date(), "La fecha no puede ser menor a la fecha de inicial"),
  cellphone_number: number()
    .required("Es obligatorio poner el teléfono o celular ")
    .min(10, "El celular debe al menos los 10 digitos"),
  city_id: string().required("El campo ciudad es obligatorio"),
  email: string()
    .email("El correo electrónico no es válido")
    .required("El campo correo electrónico es obligatorio"),
  birthdate: date().required("El campo la fecha nacimiento es obligatorio"),
  collaborator_status_id: string().required("El campo estado es obligatorio"),
});

export const validarCreacionColaborador = async (colaborador) => {
  try {
    await schemaColaboradores.validate(colaborador);
  } catch (error) {
    console.log(error);
  }
};

export const validarFechasColaborador = (colaborador) => {
  return (
    colaborador.birthdate.length > 0 &&
    colaborador.entry_date.length > 0 &&
    colaborador.retirement_date.length > 0
  );
};
