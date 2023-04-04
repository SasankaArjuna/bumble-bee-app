import {IAxiosInstance} from "./index";
import {AxiosResponse} from "axios";
import {SignInRequestDto, SignInResponseDto} from "../models";
import {APP_CONFIGS} from "../constants";
import {utils} from "../utils";

const signIn = (data: SignInRequestDto): Promise<AxiosResponse<SignInResponseDto>> => {
    return IAxiosInstance.post('/api/auth/sign-in', data)
}

const signOut = () => {
    return new Promise((resolve) => {
        localStorage.removeItem(APP_CONFIGS.AUTH_DATA_KEY)
        resolve(true)
    })
}

const fetchAuthorizedUser = () => {
    return new Promise((resolve) => {
        const _data = localStorage.getItem(APP_CONFIGS.AUTH_DATA_KEY)

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
           localStorage.setItem(APP_CONFIGS.AUTH_DATA_KEY, encUserInfo)
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