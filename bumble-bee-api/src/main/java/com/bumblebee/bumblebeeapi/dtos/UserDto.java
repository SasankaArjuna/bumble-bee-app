package com.bumblebee.bumblebeeapi.dtos;

public class UserDto {
    private String email;
    private String firstName;
    private String lastName;
    private String dob;
    private String password;
    private Integer userRoleId;
    private Boolean status;

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getDob() {
        return dob;
    }

    public String getPassword() {
        return password;
    }

    public Integer getUserRoleId() {
        return userRoleId;
    }
    public Boolean getStatus() {
        return status;
    }
}
