package com.bumblebee.bumblebeeapi.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="user_role")
public class UserRole implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="user_role_id")
    private Integer userRoleId;

    @Column(name="name")
    private String name;

    @Column(name="note")
    private String note;

    public Integer getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(Integer userRoleId) {
        this.userRoleId = userRoleId;
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
}
