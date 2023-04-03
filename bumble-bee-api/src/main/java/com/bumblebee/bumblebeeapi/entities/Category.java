package com.bumblebee.bumblebeeapi.entities;

import com.bumblebee.bumblebeeapi.utills.CommonUtils;
import jakarta.persistence.*;

import java.io.Serializable;
@Entity
@Table(name="category")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="category_id")
    private Integer categoryId;

    @Column(name="user_id")
    private Integer userId;

    @Column(name="name")
    private String name;

    @Column(name="note")
    private String note;

    @Column(name="status")
    private Integer status;

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Boolean getStatus() {
        return CommonUtils.integerToBool(status);
    }

    public void setStatus(Boolean status) {
        this.status = CommonUtils.booleanToInteger(status);
    }

}
