import axios from "axios";
import {APP_CONFIGS} from "../constants";
import {authService} from "./authService";

axios.defaults.baseURL = APP_CONFIGS.API_BASE

export const IAxiosInstance = axios.create();
export const EAxiosInstance = axios.create();

IAxiosInstance.interceptors.request.use(async (request) => {
    const user = await authService.fetchAuthorizedUser();
    if(user) {
        request.headers['Requested-By'] = user.email
    }
    return request
})

export * from "./authService"
export * from "./creditInfoService"
export * from "./userService"
export * from "./categoryService"