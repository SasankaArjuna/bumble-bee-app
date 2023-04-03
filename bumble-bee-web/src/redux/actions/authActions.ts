import {AUTH_ACTIONS, COMMON_ACTIONS} from "../../constants";
import {authService} from "../../services";
import {SignInRequestDto} from "../../models";

const signIn = (data: SignInRequestDto, onSuccess?: () => void) => {
    return (action: (arg0: { type: string, data?: any, error?: string }) => any) => {
        action({type: AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.REQUEST})
        authService.signIn(data)
            .then((res) => {
                action({type: AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.SUCCESS, data: res.data})
            })
            .catch((error) => {
                // TODO: handle error
                action({type: AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.ERROR})
            })
    }
}

export const authActions = {
    signIn
}