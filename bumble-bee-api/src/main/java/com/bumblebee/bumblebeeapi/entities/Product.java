package com.bumblebee.bumblebeeapi.entities;

import com.bumblebee.bumblebeeapi.utills.CommonUtils;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="product")
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="product_id")
    private Integer productId;

    @Column(name="user_id")
    private Integer userId;

    @Column(name="name")
    private String name;

    @Column(name="note")
    private String note;

    @Column(name="price")
    private Float price;

    @Column(name="installment_count")
    private Integer installmentCount;

    @Column(name="status")
    private Integer status;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id")
    private Brand brand;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
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

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getInstallmentCount() {
        return installmentCount;
    }

    public void setInstallmentCount(Integer installmentCount) {
        this.installmentCount = installmentCount;
    }

    public Boolean getStatus() {
        return CommonUtils.integerToBool(status);
    }

    public void setStatus(Boolean status) {
        this.status = CommonUtils.booleanToInteger(status);
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }
}
