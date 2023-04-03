package com.bumblebee.bumblebeeapi.managers;

import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.entities.UserRole;

public class UserManager {
    public static User mapUserObjToUser (Object[] userObject) {
        User user = (User) userObject[0];
        UserRole userRole = (UserRole) userObject[1];

        user.setUserRole(userRole);
        return user;
    }
}
