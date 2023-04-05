import {COMMON_ACTIONS, CATEGORY_ACTIONS} from "../../constants";

const INITIAL_STATE = {
    categoryList: {
        isLoading: false,
        data: [],
        error: null
    }
}

const categoryReducer = (state = INITIAL_STATE, action: {type: string, data: any}): any  => {
    switch (action.type) {
        case CATEGORY_ACTIONS.GET_CATEGORIES+COMMON_ACTIONS.REQUEST:
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    isLoading: true
                }
            }
        case CATEGORY_ACTIONS.GET_CATEGORIES+COMMON_ACTIONS.SUCCESS:
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    isLoading: false,
                    data: action.data,
                    error: null
                }
            }
        case CATEGORY_ACTIONS.GET_CATEGORIES+COMMON_ACTIONS.ERROR:
            return {
                ...state,
                categoryList: {
                    ...state.categoryList,
                    isLoading: false,
                    data: [],
                    error: 'Unable to fetch category list'
                }
            }
        default:
            return state
    }
}

export default categoryReducer;