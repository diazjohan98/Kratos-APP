import axios from "axios";
import KratosApi from "./conectors/KratosApi";
import { colaboradoresPath } from "./config/ports/kratos.ports";
import { baseKratosApiURL } from "./config/ports/kratos.ports";


const obtenerPaginado = async (parametros) => {
  const response = await KratosApi.get(`${colaboradoresPath}/detail-filtering`, {
    params: {
      pageNumber: parametros?.page ?? 1,
      pageSize: parametros?.pageSize ?? 10,
    },
  });
  return response.data;
};

const obtenerPorId = async (id) => {
  const response = await KratosApi.get(`${colaboradoresPath}/basic-details-skills-projects/${id}`);
  return response.data;
};

const agregarColaborador = async (colaborador) => {
  console.log(colaborador);
  const response = await KratosApi.post(`${colaboradoresPath}`, colaborador);
  return response.data;
};

const obtenerCiudad = async () => {
  const response = await axios.get(`${baseKratosApiURL}/City/all`);

  if (response.data) {
    return response.data;
  }
};
export const ColaboradoresService = {
  obtenerPorId,
  obtenerPaginado,
  agregarColaborador,
  obtenerCiudad
};
