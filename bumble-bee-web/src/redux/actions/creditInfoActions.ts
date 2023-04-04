import {CREDIT_INFO_ACTIONS, COMMON_ACTIONS} from "../../constants";
import {creditInfoService} from "../../services";

const getUserCreditInfo = (onSuccess?: () => void) => {
    return (action: (arg0: { type: string; data?: any; }) => void, getState: () => any) => {
        action({type: CREDIT_INFO_ACTIONS.GET_USER_CREDIT_INFO+COMMON_ACTIONS.REQUEST})
        const email = getState().auth.authenticateUser.data.email
        creditInfoService.getUserCreditInfo(email)
            .then((res) => {
                action({type: CREDIT_INFO_ACTIONS.GET_USER_CREDIT_INFO+COMMON_ACTIONS.SUCCESS, data: res.data})
            })
            .catch((error) => {
                // TODO: handle error
                action({type: CREDIT_INFO_ACTIONS.GET_USER_CREDIT_INFO+COMMON_ACTIONS.ERROR})
            })
    }
}

export const creditInfoActions = {
    getUserCreditInfo
}