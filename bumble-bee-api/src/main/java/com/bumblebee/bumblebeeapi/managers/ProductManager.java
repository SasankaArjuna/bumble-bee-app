package com.bumblebee.bumblebeeapi.managers;

import com.bumblebee.bumblebeeapi.entities.Brand;
import com.bumblebee.bumblebeeapi.entities.Category;
import com.bumblebee.bumblebeeapi.entities.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductManager {
    public static List<Product> mapObjListToProducts (List<Object[]> productObjects) {
        List<Product> products = new ArrayList<>();
        for (Object[] result : productObjects) {
            Product product = (Product) result[0];
            Category category = (Category) result[1];
            Brand brand = (Brand) result[2];
            product.setCategory(category);
            product.setBrand(brand);
            products.add(product);
        }
        return products;
    }
}
