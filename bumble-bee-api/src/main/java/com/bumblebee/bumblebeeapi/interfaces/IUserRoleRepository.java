package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.entities.UserRole;

public interface IUserRoleRepository {
    UserRole getUserRole (Integer userRoleId);
}
