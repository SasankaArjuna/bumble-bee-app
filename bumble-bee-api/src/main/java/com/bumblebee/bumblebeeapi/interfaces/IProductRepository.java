package com.bumblebee.bumblebeeapi.interfaces;

import java.util.List;

public interface IProductRepository {
    List<Object[]> getProducts(Integer userId);
}
