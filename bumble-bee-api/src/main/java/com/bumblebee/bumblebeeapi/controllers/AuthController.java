package com.bumblebee.bumblebeeapi.controllers;

import com.bumblebee.bumblebeeapi.dtos.AuthDto;
import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.interfaces.IAuthService;
import com.bumblebee.bumblebeeapi.managers.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/auth")
public class AuthController {
    @Autowired
    private IAuthService authService;

    @PostMapping("/sign-in")
    public ResponseEntity<User> signIn (@RequestBody AuthDto payload) {
        Object[] userObject = authService.signIn(payload);
        if(userObject == null || userObject[0] == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User user = UserManager.mapUserObjToUser(userObject);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
}
