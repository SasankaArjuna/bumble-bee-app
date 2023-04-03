import {UserRoleDto} from "./userRoleModels";

export interface SignInRequestDto{
    email: string;
    password: string;
}

export interface SignInResponseDto {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    status: boolean;
    userRole: UserRoleDto
}