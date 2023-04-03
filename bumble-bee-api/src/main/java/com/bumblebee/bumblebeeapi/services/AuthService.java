package com.bumblebee.bumblebeeapi.services;

import com.bumblebee.bumblebeeapi.dtos.AuthDto;
import com.bumblebee.bumblebeeapi.interfaces.IAuthRepository;
import com.bumblebee.bumblebeeapi.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements IAuthService {
    @Autowired
    private IAuthRepository repository;

    @Override
    public Object[] signIn(AuthDto data) {
        return repository.signIn(data);
    }
}
