package com.bumblebee.bumblebeeapi.repositories;

import com.bumblebee.bumblebeeapi.entities.Category;
import com.bumblebee.bumblebeeapi.interfaces.ICategoryRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public class CategoryRepository implements ICategoryRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    @Override
    public List<Category> getCategories(Integer userId) {
        String query = "FROM Category as c WHERE c.userId= :userId ORDER BY c.name";
        return (List<Category>) entityManager.createQuery(query)
                .setParameter("userId", userId)
                .getResultList();
    }

    @Override
    public boolean createCategory(Category category) {
        entityManager.persist(category);
        return true;
    }

    @Override
    public Category getCategory(Integer categoryId) {
        return entityManager.find(Category.class, categoryId);
    }

    @Override
    public Category updateCategory(Integer categoryId, Category category){
        Category existingCategory = getCategory(categoryId);
        existingCategory.setName(category.getName());
        existingCategory.setUserId(category.getUserId());
        existingCategory.setNote(category.getNote());
        existingCategory.setStatus(category.getStatus());

        entityManager.flush();

        return getCategory(categoryId);
    }

    @Override
    public boolean deleteCategory(Integer categoryId) {
        Category category = getCategory(categoryId);
        entityManager.remove(category);

        boolean isDeleted = entityManager.contains(category);
        return !isDeleted;
    }
}
