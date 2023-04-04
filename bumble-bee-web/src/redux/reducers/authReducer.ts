import {AUTH_ACTIONS, COMMON_ACTIONS, USER_ROLE_IDS} from "../../constants";
import {SignInResponseDto} from "../../models";

const INITIAL_STATE = {
    authenticateUser: {
        isLoading: false,
        isAuthenticated: false,
        data: null,
        error: null
    }
}

const authReducer = (state = INITIAL_STATE, action: {type: string, data: any}): any  => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.REQUEST:
            return {
                ...state,
                authenticateUser: {
                    ...state.authenticateUser,
                    isLoading: true
                }
            }
        case AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.SUCCESS:
        case AUTH_ACTIONS.FETCH_AUTHORIZED_USER+COMMON_ACTIONS.SUCCESS:
            return {
                ...state,
                authenticateUser: {
                    ...state.authenticateUser,
                    isLoading: false,
                    isAuthenticated: true,
                    data: action.data,
                    error: null
                }
            }
        case AUTH_ACTIONS.AUTHENTICATE_USER+COMMON_ACTIONS.ERROR:
        case AUTH_ACTIONS.FETCH_AUTHORIZED_USER+COMMON_ACTIONS.ERROR:
            return {
                ...state,
                authenticateUser: {
                    ...state.authenticateUser,
                    isLoading: false,
                    isAuthenticated: false,
                    data: null,
                    error: "Unauthorized! Invalid Username/Password"
                }
            }
        case AUTH_ACTIONS.SIGN_OUT:
            return {
                ...state,
                authenticateUser: {
                    ...state.authenticateUser,
                    isLoading: false,
                    isAuthenticated: false,
                    data: null,
                    error: null
                }
            }
        default:
            return state
    }
}

export default authReducer;