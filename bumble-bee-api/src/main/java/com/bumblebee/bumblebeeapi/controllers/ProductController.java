package com.bumblebee.bumblebeeapi.controllers;

import com.bumblebee.bumblebeeapi.entities.Product;
import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.interfaces.IProductService;
import com.bumblebee.bumblebeeapi.interfaces.IUserService;
import com.bumblebee.bumblebeeapi.managers.ProductManager;
import com.bumblebee.bumblebeeapi.managers.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("api/products")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private IUserService userService;

    @GetMapping
    public ResponseEntity<List<Product>> getCategories(
            @RequestHeader("Requested-By") String requestedByEmail
    ) {
        User requestedByUser = UserManager.mapUserObjToUser(userService.getUserByEmail(requestedByEmail).get(0));
        Integer userId = requestedByUser.getUserId();
        List<Object[]> productObjects = productService.getProducts(userId);
        List<Product> products = ProductManager.mapObjListToProducts(productObjects);
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

}
