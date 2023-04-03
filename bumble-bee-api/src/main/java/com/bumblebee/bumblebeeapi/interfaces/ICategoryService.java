package com.bumblebee.bumblebeeapi.interfaces;

import com.bumblebee.bumblebeeapi.entities.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getCategories(Integer userId );
    Category getCategory(Integer categoryId);
    boolean createCategory(Category category);
    Category updateCategory(Integer categoryId, Category category);
    boolean deleteCategory(Integer categoryId);
}
