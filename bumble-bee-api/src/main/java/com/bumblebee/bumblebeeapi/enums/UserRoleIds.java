package com.bumblebee.bumblebeeapi.enums;

public enum UserRoleIds {
    ADMIN(1),
    USER(2);

    private final Integer roleId;

    UserRoleIds(Integer roleId) {
        this.roleId = roleId;
    }

    public Integer getRoleId() {
        return roleId;
    }
}
