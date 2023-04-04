package com.bumblebee.bumblebeeapi.enums;

public enum UserCreditLimit {
    DEFAULT_CREDIT_LIMIT(15000.0f);

    private final Float creditLimit;

    UserCreditLimit(Float creditLimit) {
        this.creditLimit = creditLimit;
    }

    public Float getCreditLimit() {
        return creditLimit;
    }
}
