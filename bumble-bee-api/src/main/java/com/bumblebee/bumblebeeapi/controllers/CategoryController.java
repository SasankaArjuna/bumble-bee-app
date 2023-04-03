package com.bumblebee.bumblebeeapi.controllers;

import com.bumblebee.bumblebeeapi.dtos.CategoryDto;
import com.bumblebee.bumblebeeapi.entities.Category;
import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.interfaces.ICategoryService;
import com.bumblebee.bumblebeeapi.interfaces.IUserService;
import com.bumblebee.bumblebeeapi.managers.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("api/categories")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private IUserService userService;

    @GetMapping
    public ResponseEntity<List<Category>> getCategories(
            @RequestHeader("Requested-By") String requestedByEmail
    ) {
        User requestedByUser = UserManager.mapUserObjToUser(userService.getUserByEmail(requestedByEmail).get(0));

        List<Category> categories = categoryService.getCategories(requestedByUser.getUserId());
        return new ResponseEntity<List<Category>>(categories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategory(
            @PathVariable("id") Integer id
    ) {
        Category category = categoryService.getCategory(id);
        return new ResponseEntity<Category>(category, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Void> createCategory(@RequestBody CategoryDto payload) {

        Category newCategory = new Category();

        newCategory.setName(payload.getName());
        newCategory.setNote(payload.getNote());
        newCategory.setUserId(payload.getUserId());
        newCategory.setStatus(true);

        categoryService.createCategory(newCategory);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> createCategory(@PathVariable("id") Integer id, @RequestBody CategoryDto payload) {

        Category category = new Category();

        category.setName(payload.getName());
        category.setNote(payload.getNote());
        category.setUserId(payload.getUserId());
        category.setStatus(payload.getStatus());
        category.setCategoryId(id);

        Category updatedCategory = categoryService.updateCategory(id, category);
        return new ResponseEntity<Category>(updatedCategory, HttpStatus.OK);
    }
}
