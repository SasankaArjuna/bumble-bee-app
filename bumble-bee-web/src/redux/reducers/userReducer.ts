import {USER_ACTIONS, COMMON_ACTIONS} from "../../constants";

const INITIAL_STATE = {
    createUser: {
        isLoading: false,
        error: null
    },
    userList: {
        isLoading: false,
        data: [],
        error: null
    }
}

const creditInfoReducer = (state = INITIAL_STATE, action: {type: string, data: any}): any  => {
    switch (action.type) {
        case USER_ACTIONS.SIGN_UP_USER+COMMON_ACTIONS.REQUEST:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    isLoading: true
                }
            }
        case USER_ACTIONS.SIGN_UP_USER+COMMON_ACTIONS.SUCCESS:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    isLoading: false,
                    error: null
                }
            }
        case USER_ACTIONS.SIGN_UP_USER+COMMON_ACTIONS.ERROR:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    isLoading: false,
                    error: 'Unable to create user.'
                }
            }
        case USER_ACTIONS.GET_USER_LIST+COMMON_ACTIONS.REQUEST:
            return {
                ...state,
                userList: {
                    ...state.userList,
                    isLoading: true
                }
            }
        case USER_ACTIONS.GET_USER_LIST+COMMON_ACTIONS.SUCCESS:
            return {
                ...state,
                userList: {
                    ...state.userList,
                    isLoading: false,
                    error: null,
                    data: action.data
                }
            }
        case USER_ACTIONS.GET_USER_LIST+COMMON_ACTIONS.ERROR:
            return {
                ...state,
                userList: {
                    ...state.userList,
                    isLoading: false,
                    data: [],
                    error: 'Unable to get users.'
                }
            }
        default:
            return state
    }
}

export default creditInfoReducer;