package com.bumblebee.bumblebeeapi.repositories;

import com.bumblebee.bumblebeeapi.entities.UserRole;
import com.bumblebee.bumblebeeapi.interfaces.IUserRoleRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public class UserRoleRepository implements IUserRoleRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public UserRole getUserRole(Integer userRoleId) {
        return entityManager.find(UserRole.class, userRoleId);
    }
}
