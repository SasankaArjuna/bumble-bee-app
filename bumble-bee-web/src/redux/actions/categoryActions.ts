import {CATEGORY_ACTIONS, COMMON_ACTIONS} from "../../constants";
import {categoryService} from "../../services";
import {CategoryCreateDto, CategoryDto} from "../../models";

const getCategories = (onSuccess?: () => void) => {
    return (action: (arg0: { type: string; data?: any; }) => void, getState: () => any) => {
        action({type: CATEGORY_ACTIONS.GET_CATEGORIES+COMMON_ACTIONS.REQUEST})
        categoryService.getCategories()
            .then((res) => {
                action({type: CATEGORY_ACTIONS.GET_CATEGORIES+COMMON_ACTIONS.SUCCESS, data: res.data})
            })
            .catch((error) => {
                // TODO: handle error
                action({type: CATEGORY_ACTIONS.GET_CATEGORIES+COMMON_ACTIONS.ERROR})
            })
    }
}

const getCategory= (categoryId:number, onSuccess?: (data: CategoryDto) => void) => {
    return (action: (arg0: { type: string; data?: any; }) => void, getState: () => any) => {
        action({type: CATEGORY_ACTIONS.GET_CATEGORY+COMMON_ACTIONS.REQUEST})
        categoryService.getCategory(categoryId)
            .then((res) => {
                action({type: CATEGORY_ACTIONS.GET_CATEGORY+COMMON_ACTIONS.SUCCESS, data: res.data})
                onSuccess && onSuccess(res.data)
            })
            .catch((error) => {
                // TODO: handle error
                action({type: CATEGORY_ACTIONS.GET_CATEGORY+COMMON_ACTIONS.ERROR})
            })
    }
}

const createCategory = (data: CategoryCreateDto, onSuccess?: () => void) => {
    return (action: (arg0: { type: string; data?: any; }) => void, getState: () => any) => {
        action({type: CATEGORY_ACTIONS.CREATE_CATEGORY+COMMON_ACTIONS.REQUEST})
        const email = getState().auth.authenticateUser.data.email
        categoryService.createCategory(data)
            .then((res) => {
                action({type: CATEGORY_ACTIONS.CREATE_CATEGORY+COMMON_ACTIONS.SUCCESS, data: res.data})
                onSuccess && onSuccess()
            })
            .catch((error) => {
                // TODO: handle error
                action({type: CATEGORY_ACTIONS.CREATE_CATEGORY+COMMON_ACTIONS.ERROR})
            })
    }
}

const updateCategory = (categoryId: number, data: CategoryCreateDto, onSuccess?: () => void) => {
    return (action: (arg0: { type: string; data?: any; }) => void, getState: () => any) => {
        action({type: CATEGORY_ACTIONS.UPDATE_CATEGORY+COMMON_ACTIONS.REQUEST})
        const email = getState().auth.authenticateUser.data.email
        categoryService.updateCategory(categoryId, data)
            .then((res) => {
                action({type: CATEGORY_ACTIONS.UPDATE_CATEGORY+COMMON_ACTIONS.SUCCESS, data: res.data})
                onSuccess && onSuccess()
            })
            .catch((error) => {
                // TODO: handle error
                action({type: CATEGORY_ACTIONS.UPDATE_CATEGORY+COMMON_ACTIONS.ERROR})
            })
    }
}

export const categoryActions = {
    getCategories,
    createCategory,
    updateCategory,
    getCategory
}