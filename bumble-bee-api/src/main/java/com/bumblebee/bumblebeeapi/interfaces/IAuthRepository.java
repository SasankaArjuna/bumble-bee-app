package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.dtos.AuthDto;

public interface IAuthRepository {
    Object[] signIn(AuthDto data);
}
