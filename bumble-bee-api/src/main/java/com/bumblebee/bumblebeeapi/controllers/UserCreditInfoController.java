package com.bumblebee.bumblebeeapi.controllers;

import com.bumblebee.bumblebeeapi.utills.CommonUtils;
import com.bumblebee.bumblebeeapi.dtos.UserCreditInfoDto;
import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.entities.UserCreditInfo;
import com.bumblebee.bumblebeeapi.interfaces.IUserCreditInfoService;
import com.bumblebee.bumblebeeapi.interfaces.IUserService;
import com.bumblebee.bumblebeeapi.managers.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@Controller
@RequestMapping("api/credits")
public class UserCreditInfoController {
    @Autowired
    private IUserCreditInfoService userCreditInfoService;
    @Autowired
    private IUserService userService;

    @GetMapping("/{email}")
    public ResponseEntity<UserCreditInfo> getUserCreditInfo(@PathVariable("email") String email) {
        User requestedByUser = UserManager.mapUserObjToUser(userService.getUserByEmail(email).get(0));

        UserCreditInfo userCreditInfo = userCreditInfoService.getUserCreditInfo(requestedByUser.getUserId());
        return new ResponseEntity<UserCreditInfo>(userCreditInfo, HttpStatus.OK);
    }

    @PostMapping("/{email}")
    public ResponseEntity<UserCreditInfo> setUserCreditInfo(
            @PathVariable("email") String email,
            @RequestBody UserCreditInfoDto userCreditInfoDto
    ){
        User requestedByUser = UserManager.mapUserObjToUser(userService.getUserByEmail(email).get(0));
        UserCreditInfo userCreditInfo = new UserCreditInfo();
        userCreditInfo.setUsedCredits(userCreditInfoDto.getUsedCredits());
        userCreditInfo.setCreditLimit(userCreditInfoDto.getCreditLimit());
        userCreditInfo.setUserId(requestedByUser.getUserId());
        userCreditInfo.setStatus(userCreditInfoDto.getStatus());
        Date updatedAt = new Date();
        userCreditInfo.setUpdatedAt(updatedAt);

        UserCreditInfo response = userCreditInfoService.setUserCreditInfo(userCreditInfo);
        return new ResponseEntity<UserCreditInfo>(response, HttpStatus.OK);

    }
}
