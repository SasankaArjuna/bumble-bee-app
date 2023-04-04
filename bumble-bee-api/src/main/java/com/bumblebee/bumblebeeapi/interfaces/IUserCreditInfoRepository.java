package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.entities.UserCreditInfo;

public interface IUserCreditInfoRepository {
    UserCreditInfo getUserCreditInfo(Integer userId);
    UserCreditInfo setUserCreditInfo(UserCreditInfo data);

    UserCreditInfo createUserCreditInfo(UserCreditInfo data);
}
