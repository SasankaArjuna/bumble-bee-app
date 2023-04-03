package com.bumblebee.bumblebeeapi.services;

import com.bumblebee.bumblebeeapi.entities.UserRole;
import com.bumblebee.bumblebeeapi.interfaces.IUserRoleRepository;
import com.bumblebee.bumblebeeapi.interfaces.IUserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserRoleService implements IUserRoleService {
    @Autowired
    private IUserRoleRepository repository;

    @Override
    public UserRole getUserRole(Integer userRoleId) {
        return repository.getUserRole(userRoleId);
    }
}
