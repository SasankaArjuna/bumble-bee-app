import {EAxiosInstance} from "./index";
import {AxiosResponse} from "axios";
import {SignInRequestDto, SignInResponseDto} from "../models";
import {APP_CONFIGS} from "../constants";
import {utils} from "../utils";
import Cookies from 'universal-cookie';
import moment from "moment";

const cookies = new Cookies();
const signIn = (data: SignInRequestDto): Promise<AxiosResponse<SignInResponseDto>> => {
    return EAxiosInstance.post('/api/auth/sign-in', data)
}

const signOut = () => {
    return new Promise((resolve) => {
        cookies.remove(APP_CONFIGS.AUTH_DATA_KEY)
        resolve(true)
    })
}

const fetchAuthorizedUser = ():Promise<SignInResponseDto | null> => {
    return new Promise((resolve) => {
        const _data = cookies.get(APP_CONFIGS.AUTH_DATA_KEY)

        if(_data) {
            utils.decrypt(_data).then(data => {
                resolve(data);
            })
        } else {
            resolve(null)
        }
    })
}

const setAuthorizedUser = (data: SignInResponseDto) => {
    return new Promise((resolve) => {
        const userInfo = JSON.stringify(data)
       utils.encrypt(userInfo).then(encUserInfo => {
           // localStorage.setItem(APP_CONFIGS.AUTH_DATA_KEY, encUserInfo)
           cookies.set(APP_CONFIGS.AUTH_DATA_KEY, encUserInfo, {
               expires: moment().add(1, 'days').toDate(),
           })
           resolve(true)
       })
    })
}

export const authService = {
    signIn,
    fetchAuthorizedUser,
    setAuthorizedUser,
    signOut
}