package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.entities.UserCreditInfo;

public interface IUserCreditInfoService {
    UserCreditInfo getUserCreditInfo(Integer userId);
    UserCreditInfo setUserCreditInfo(UserCreditInfo data);
}
