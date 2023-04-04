package com.bumblebee.bumblebeeapi.services;


import com.bumblebee.bumblebeeapi.entities.UserCreditInfo;
import com.bumblebee.bumblebeeapi.interfaces.IUserCreditInfoRepository;
import com.bumblebee.bumblebeeapi.interfaces.IUserCreditInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCreditInfoService implements IUserCreditInfoService {
    @Autowired
    private IUserCreditInfoRepository repository;

    @Override
    public UserCreditInfo getUserCreditInfo(Integer userId) {
        return repository.getUserCreditInfo(userId);
    }

    @Override
    public UserCreditInfo setUserCreditInfo(UserCreditInfo data) {
        return repository.setUserCreditInfo(data);
    }
}
