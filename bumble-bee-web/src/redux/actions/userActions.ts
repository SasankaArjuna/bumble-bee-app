import {USER_ACTIONS, COMMON_ACTIONS} from "../../constants";
import {userService} from "../../services";
import {CreateUserDto} from "../../models";

const SignUpUser = (data: CreateUserDto,onSuccess?: () => void) => {
    return (action: (arg0: { type: string; data?: any; }) => void, getState: () => any) => {
        action({type: USER_ACTIONS.SIGN_UP_USER+COMMON_ACTIONS.REQUEST})
        userService.createUser(data)
            .then((res) => {
                onSuccess && onSuccess()
                action({type: USER_ACTIONS.SIGN_UP_USER+COMMON_ACTIONS.SUCCESS, data: res.data})
            })
            .catch((error) => {
                // TODO: handle error
                action({type: USER_ACTIONS.SIGN_UP_USER+COMMON_ACTIONS.ERROR})
            })
    }
}

const getUserList = () => {
    return (action: (arg0: { type: string; data?: any; }) => void, getState: () => any) => {
        action({type: USER_ACTIONS.GET_USER_LIST+COMMON_ACTIONS.REQUEST})
        userService.getUserList()
            .then(res => {
                action({type: USER_ACTIONS.GET_USER_LIST+COMMON_ACTIONS.SUCCESS, data: res.data})
            })
            .catch((error) => {
                // TODO: handle error
                action({type: USER_ACTIONS.GET_USER_LIST+COMMON_ACTIONS.ERROR})
            })
    }
}
export const userActions = {
    SignUpUser,
    getUserList
}