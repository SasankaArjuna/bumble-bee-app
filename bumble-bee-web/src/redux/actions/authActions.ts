import {AUTH_ACTIONS, COMMON_ACTIONS} from "../../constants";
import {authService} from "../../services";
import {SignInRequestDto} from "../../models";

const signIn = (data: SignInRequestDto, onSuccess?: () => void) => {
    return (action: (arg0: { type: string; data?: any; }) => void) => {
        action({type: AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.REQUEST})
        authService.signIn(data)
            .then((res) => {
                authService.setAuthorizedUser(res.data)
                action({type: AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.SUCCESS, data: res.data})
            })
            .catch((error) => {
                // TODO: handle error
                action({type: AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.ERROR})
            })
    }
}

const fetchAuthorizedUser = () => {
    return async (action: (arg0: { type: string, data?: any, error?: string }) => any) => {
        action({type: AUTH_ACTIONS.FETCH_AUTHORIZED_USER+COMMON_ACTIONS.REQUEST})
        authService.fetchAuthorizedUser()
            .then(data => {
                if(!!data) {
                    action({type: AUTH_ACTIONS.FETCH_AUTHORIZED_USER+COMMON_ACTIONS.SUCCESS, data: data})
                } else {
                    action({type: AUTH_ACTIONS.FETCH_AUTHORIZED_USER+COMMON_ACTIONS.ERROR})
                }
            })
            .catch(error => {
                action({type: AUTH_ACTIONS.FETCH_AUTHORIZED_USER+COMMON_ACTIONS.ERROR})
            })
    }
}

const signOut = () => {
    return async (action: (arg0: { type: string, data?: any, error?: string }) => any) => {
        authService.signOut().then(res => {
            action({type: AUTH_ACTIONS.SIGN_OUT})
        })
    }
}

export const authActions = {
    signIn,
    signOut,
    fetchAuthorizedUser
}