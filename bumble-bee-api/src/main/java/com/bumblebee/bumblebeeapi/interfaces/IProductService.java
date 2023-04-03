package com.bumblebee.bumblebeeapi.interfaces;

import java.util.List;

public interface IProductService {
    List<Object[]> getProducts(Integer userId);
}
