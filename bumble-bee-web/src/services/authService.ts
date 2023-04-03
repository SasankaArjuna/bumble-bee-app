import {IAxiosInstance} from "./index";
import {AxiosResponse} from "axios";
import {SignInRequestDto, SignInResponseDto} from "../models";

const signIn = (data: SignInRequestDto): Promise<AxiosResponse<SignInResponseDto>> => {
    return IAxiosInstance.post('/api/auth/sign-in', data)
}

export const authService = {
    signIn
}