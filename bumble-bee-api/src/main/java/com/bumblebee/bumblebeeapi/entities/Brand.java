package com.bumblebee.bumblebeeapi.entities;

import com.bumblebee.bumblebeeapi.utills.CommonUtils;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="brand")
public class Brand implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="brand_id")
    private Integer brandId;

    @Column(name="user_id")
    private Integer userId;

    @Column(name="name")
    private String name;

    @Column(name="note")
    private String note;

    @Column(name="status")
    private Integer status;

    public Integer getBrandId() {
        return brandId;
    }

    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
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
