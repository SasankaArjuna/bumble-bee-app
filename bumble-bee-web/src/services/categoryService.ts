import {IAxiosInstance} from "./index";
import {AxiosResponse} from "axios";
import {CategoryCreateDto, CategoryDto} from "../models";


const getCategories = (): Promise<AxiosResponse<Array<CategoryDto>>> => {
    return IAxiosInstance.get(`/api/categories`)
}

const getCategory = (categoryId: number): Promise<AxiosResponse<CategoryDto>> => {
    return IAxiosInstance.get(`/api/categories/${categoryId}`)
}

const createCategory = (data: CategoryCreateDto): Promise<AxiosResponse<void>> => {
    return IAxiosInstance.post(`/api/categories`, data)
}

const updateCategory = (categoryId: number, data: CategoryCreateDto): Promise<AxiosResponse<void>> => {
    return IAxiosInstance.put(`/api/categories/${categoryId}`, data)
}

export const categoryService = {
    getCategories,
    createCategory,
    updateCategory,
    getCategory

}