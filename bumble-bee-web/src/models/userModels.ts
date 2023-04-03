import {UserRoleDto} from "./userRoleModels";

export interface UserDto {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    status: boolean;
    userRole: UserRoleDto
}