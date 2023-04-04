import {IAxiosInstance} from "./index";
import {AxiosResponse} from "axios";
import {CreateUserDto, UserCreditInfoResponseDto, UserDetailDto} from "../models";


const createUser = (data: CreateUserDto): Promise<AxiosResponse<UserCreditInfoResponseDto>> => {
    return IAxiosInstance.post(`/api/users`, data)
}

const getUserList = (): Promise<AxiosResponse<Array<UserDetailDto>>> => {
    return IAxiosInstance.get(`/api/users`)
}

export const userService = {
    createUser,
    getUserList
}