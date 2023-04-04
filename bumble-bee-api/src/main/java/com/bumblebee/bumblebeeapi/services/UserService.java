package com.bumblebee.bumblebeeapi.services;

import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.interfaces.IUserRepository;
import com.bumblebee.bumblebeeapi.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository repository;

    @Override
    public Integer createUser(User user) {
        return repository.createUser(user);
    }

    @Override
    public List<Object[]> getUserByEmail (String email) {
        return repository.getUserByEmail(email);
    }

    @Override
    public List<Object[]> getUsers (Integer userRoleId) {
        return repository.getUsers(userRoleId);
    }
}
