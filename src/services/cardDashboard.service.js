import KratosApi from "./conectors/KratosApi";
import { colaboradoresPath } from "./config/ports/kratos.ports";

const obtenerPaginado = async (parametros) => {
  const response = await KratosApi.get(`${colaboradoresPath}/statuses-summary`, {
    params: {
      pageNumber: parametros?.page ?? 1,
      pageSize: parametros?.pageSize ?? 1,
    },
  });
  return response.data;
};

export const CardDashboardService = {

  obtenerPaginado,
};