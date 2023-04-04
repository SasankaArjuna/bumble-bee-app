package com.bumblebee.bumblebeeapi.controllers;

import com.bumblebee.bumblebeeapi.dtos.UserDto;
import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.entities.UserCreditInfo;
import com.bumblebee.bumblebeeapi.entities.UserRole;
import com.bumblebee.bumblebeeapi.enums.UserCreditLimit;
import com.bumblebee.bumblebeeapi.interfaces.IUserCreditInfoService;
import com.bumblebee.bumblebeeapi.interfaces.IUserRoleService;
import com.bumblebee.bumblebeeapi.interfaces.IUserService;
import com.bumblebee.bumblebeeapi.managers.UserManager;
import com.bumblebee.bumblebeeapi.utills.CommonUtils;
import com.bumblebee.bumblebeeapi.enums.UserRoleIds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@Controller
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private IUserService userService;

    @Autowired
    private IUserRoleService userRoleService;

    @Autowired
    IUserCreditInfoService userCreditInfoService;

    @PostMapping()
    public ResponseEntity<Void> createUser(@RequestBody UserDto payload) {
        Date dob = CommonUtils.stringToDate(payload.getDob());
        Integer userRoleId = payload.getUserRoleId();

        UserRole userRole = userRoleService.getUserRole(userRoleId);

        User newUser = new User();
        newUser.setEmail(payload.getEmail());
        newUser.setFirstName(payload.getFirstName());
        newUser.setLastName(payload.getLastName());
        newUser.setDob(dob);
        newUser.setPassword(payload.getPassword());
        newUser.setUserRole(userRole);
        newUser.setStatus(true);

        Integer createdUserId = userService.createUser(newUser);

        if(Objects.equals(userRoleId, UserRoleIds.USER.getRoleId())) {
            UserCreditInfo userCreditInfo = new UserCreditInfo();
            userCreditInfo.setUserId(createdUserId);
            userCreditInfo.setCreditLimit(UserCreditLimit.DEFAULT_CREDIT_LIMIT.getCreditLimit());
            userCreditInfo.setUsedCredits(0.0f);
            userCreditInfo.setStatus(true);
            userCreditInfoService.createUserCreditInfo(userCreditInfo);
        }

        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail (@PathVariable("email") String email) {
        List<Object[]> userObjects = userService.getUserByEmail(email);
        User user = UserManager.mapUserObjToUser(userObjects.get(0));
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<User>> getUsers (@RequestParam(name = "userRoleId", defaultValue = "2") String userRoleId) {
        List<Object[]> userObjects = userService.getUsers(Integer.parseInt(userRoleId));
        List<User> users = UserManager.mapUserObjListToUser(userObjects);
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }
}
