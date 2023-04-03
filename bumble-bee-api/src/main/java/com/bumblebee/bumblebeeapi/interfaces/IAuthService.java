package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.dtos.AuthDto;

public interface IAuthService {
    Object[] signIn(AuthDto data);
}
