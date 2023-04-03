package com.bumblebee.bumblebeeapi.repositories;

import com.bumblebee.bumblebeeapi.interfaces.IProductRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public class ProductRepository implements IProductRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    @Override
    public List<Object[]> getProducts(Integer userId) {
        String query = "SELECT p, c, b FROM Product p JOIN p.category c JOIN p.brand b WHERE p.userId= :userId";
        return entityManager.createQuery(query, Object[].class)
                .setParameter("userId", userId)
                .getResultList();
    }
}
