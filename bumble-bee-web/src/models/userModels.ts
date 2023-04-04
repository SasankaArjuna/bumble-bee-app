import {UserRoleDto} from "./userRoleModels";
import {UserCreditInfoResponseDto} from "./creditInfoModels";

export interface UserDto {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    status: boolean;
    userRole: UserRoleDto
}

export interface CreateUserDto {
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    password: string;
    userRoleId: number;
}

export interface UserDetailDto {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    status: boolean;
    userRole: UserRoleDto;
    userCreditInfo: UserCreditInfoResponseDto
}