package com.bumblebee.bumblebeeapi.dtos;

public class UserCreditInfoDto {
    private Float creditLimit;
    private Float usedCredits;
    private Boolean status;

    public Float getCreditLimit() {
        return creditLimit;
    }

    public Float getUsedCredits() {
        return usedCredits;
    }

    public Boolean getStatus() {
        return status;
    }

}
