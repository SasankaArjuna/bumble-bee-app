package com.bumblebee.bumblebeeapi.dtos;

public class CategoryDto {
    private String name;
    private String note;
    private Boolean status;
    private Integer userId;

    public String getName() {
        return name;
    }

    public String getNote() {
        return note;
    }

    public Boolean getStatus() {
        return status;
    }

    public Integer getUserId() {
        return userId;
    }
}
