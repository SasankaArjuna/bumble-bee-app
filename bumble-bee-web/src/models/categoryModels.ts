export interface CategoryCreateDto {
    name: string;
    userId: number;
    note?: string;
    status: boolean;
}

export interface CategoryDto {
    categoryId: number;
    name: string;
    userId: number;
    note?: string;
    status: boolean;
}