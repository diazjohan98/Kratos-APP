import KratosApi from "./conectors/KratosApi";
import { projectosPath } from "./config/ports/kratos.ports";

const obtenerPaginado = async (parametros) => {
  const response = await KratosApi.get(`${projectosPath}/general-information`);
  return response.data;
};

export const ProjectosService = {

  obtenerPaginado,
};