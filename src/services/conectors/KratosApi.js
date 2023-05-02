import axios from "axios";
import { baseKratosApiURL } from '../config/ports/kratos.ports'

const KratosApi = axios.create({ 
    baseURL: baseKratosApiURL,
 })

 export default KratosApi;