export interface UserCreditInfoResponseDto {
    userId: number;
    creditLimit: number;
    usedCredits: number;
    status: boolean;
    updatedAt: string
}