package com.bumblebee.bumblebeeapi.services;

import com.bumblebee.bumblebeeapi.interfaces.IProductRepository;
import com.bumblebee.bumblebeeapi.interfaces.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository repository;

    @Override
    public List<Object[]> getProducts(Integer userId) {
        return repository.getProducts(userId);
    }
}
