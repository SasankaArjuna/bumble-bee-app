package com.bumblebee.bumblebeeapi.entities;

import jakarta.persistence.*;
import com.bumblebee.bumblebeeapi.utills.CommonUtils;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="user_credit_info")
public class UserCreditInfo implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="row_id")
    private Integer rowId;

    @Column(name="user_id")
    private Integer userId;

    @Column(name="credit_limit")
    private Float creditLimit;

    @Column(name="used_credits")
    private Float usedCredits;

    @Column(name="status")
    private Integer status;

    @Column(name="updated_at")
    private Date updatedAt;

    public Integer getRowId() {
        return rowId;
    }

    public void setRowId(Integer rowId) {
        this.rowId = rowId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Float getCreditLimit() {
        return creditLimit;
    }

    public void setCreditLimit(Float creditLimit) {
        this.creditLimit = creditLimit;
    }

    public Float getUsedCredits() {
        return usedCredits;
    }

    public void setUsedCredits(Float usedCredits) {
        this.usedCredits = usedCredits;
    }

    public Boolean getStatus() {
        return CommonUtils.integerToBool(status);
    }

    public void setStatus(Boolean status) {
        this.status = CommonUtils.booleanToInteger(status);
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
