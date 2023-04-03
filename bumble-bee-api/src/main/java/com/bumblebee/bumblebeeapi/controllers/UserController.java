package com.bumblebee.bumblebeeapi.controllers;

import com.bumblebee.bumblebeeapi.dtos.UserDto;
import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.entities.UserRole;
import com.bumblebee.bumblebeeapi.interfaces.IUserRoleService;
import com.bumblebee.bumblebeeapi.interfaces.IUserService;
import com.bumblebee.bumblebeeapi.managers.UserManager;
import com.bumblebee.bumblebeeapi.utills.CommonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private IUserService userService;

    @Autowired
    private IUserRoleService userRoleService;

    @PostMapping()
    public ResponseEntity<Boolean> createCategory(@RequestBody UserDto payload) {
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

        Boolean status = userService.createUser(newUser);
        return new ResponseEntity<Boolean>(status, HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail (@PathVariable("email") String email) {
        List<Object[]> userObjects = userService.getUserByEmail(email);
        User user = UserManager.mapUserObjToUser(userObjects.get(0));
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
}
