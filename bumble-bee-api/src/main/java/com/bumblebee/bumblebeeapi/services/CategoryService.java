package com.bumblebee.bumblebeeapi.services;

import com.bumblebee.bumblebeeapi.entities.Category;
import com.bumblebee.bumblebeeapi.interfaces.ICategoryRepository;
import com.bumblebee.bumblebeeapi.interfaces.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository repository;
    @Override
    public List<Category> getCategories(Integer userId) {
        return repository.getCategories(userId);
    }

    @Override
    public Category getCategory(Integer categoryId) {
        return repository.getCategory(categoryId);
    }

    @Override
    public boolean createCategory(Category category) {
        return repository.createCategory(category);
    }

    @Override
    public Category updateCategory(Integer categoryId, Category category) {
        return repository.updateCategory(categoryId, category);
    }

    @Override
    public boolean deleteCategory(Integer categoryId) {
        return repository.deleteCategory(categoryId);
    }
}
