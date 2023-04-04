package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.entities.User;

import java.util.List;

public interface IUserService {

    Integer createUser(User user);
    List<Object[]> getUserByEmail(String email);
    List<Object[]> getUsers(Integer userRoleId);
}
