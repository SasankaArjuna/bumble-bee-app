package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.entities.User;

import java.util.List;

public interface IUserService {

    boolean createUser(User user);
    List<Object[]> getUserByEmail(String email);
}
