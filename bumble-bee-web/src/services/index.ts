import axios from "axios";
import {APP_CONFIGS} from "../constants";

axios.defaults.baseURL = APP_CONFIGS.API_BASE
console.log('X', APP_CONFIGS.API_BASE)
export const IAxiosInstance = axios.create();

export * from "./authService"
export * from "./creditInfoService"