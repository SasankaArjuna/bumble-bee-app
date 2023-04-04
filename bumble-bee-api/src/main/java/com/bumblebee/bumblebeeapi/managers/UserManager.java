package com.bumblebee.bumblebeeapi.managers;

import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.entities.UserCreditInfo;
import com.bumblebee.bumblebeeapi.entities.UserRole;

import java.util.ArrayList;
import java.util.List;

public class UserManager {
    public static User mapUserObjToUser (Object[] userObject) {
        User user = (User) userObject[0];
        UserRole userRole = (UserRole) userObject[1];

        user.setUserRole(userRole);
        return user;
    }

    public static List<User> mapUserObjListToUser (List<Object[]> userObjects) {
        List<User> users = new ArrayList<>();
        for (Object[] result : userObjects) {
            User user = (User) result[0];
            UserRole userRole = (UserRole) result[1];
            user.setUserRole(userRole);
            user.setPassword(null);

            users.add(user);
        }
        return users;
    }
}
