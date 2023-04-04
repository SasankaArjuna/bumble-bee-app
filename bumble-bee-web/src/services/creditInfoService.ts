import {IAxiosInstance} from "./index";
import {AxiosResponse} from "axios";
import {UserCreditInfoResponseDto} from "../models";


const getUserCreditInfo = (email: string): Promise<AxiosResponse<UserCreditInfoResponseDto>> => {
    return IAxiosInstance.get(`/api/credits/${email}`)
}



export const creditInfoService = {
    getUserCreditInfo,

}