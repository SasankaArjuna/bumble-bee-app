import {CREDIT_INFO_ACTIONS, COMMON_ACTIONS} from "../../constants";

const INITIAL_STATE = {
    userCreditInfo: {
        isLoading: false,
        data: null,
        error: null
    }
}

const creditInfoReducer = (state = INITIAL_STATE, action: {type: string, data: any}): any  => {
    switch (action.type) {
        case CREDIT_INFO_ACTIONS.GET_USER_CREDIT_INFO+COMMON_ACTIONS.REQUEST:
            return {
                ...state,
                userCreditInfo: {
                    ...state.userCreditInfo,
                    isLoading: true
                }
            }
        case CREDIT_INFO_ACTIONS.GET_USER_CREDIT_INFO+COMMON_ACTIONS.SUCCESS:
            return {
                ...state,
                userCreditInfo: {
                    ...state.userCreditInfo,
                    isLoading: false,
                    data: action.data,
                    error: null
                }
            }
        case CREDIT_INFO_ACTIONS.GET_USER_CREDIT_INFO+COMMON_ACTIONS.ERROR:
            return {
                ...state,
                userCreditInfo: {
                    ...state.userCreditInfo,
                    isLoading: false,
                    data: null,
                    error: 'Unable to fetch user credit info'
                }
            }
        default:
            return state
    }
}

export default creditInfoReducer;