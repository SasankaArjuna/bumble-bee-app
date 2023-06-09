package com.bumblebee.bumblebeeapi.repositories;

import com.bumblebee.bumblebeeapi.entities.User;
import com.bumblebee.bumblebeeapi.enums.UserRoleIds;
import com.bumblebee.bumblebeeapi.interfaces.IUserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Transactional
@Repository
public class UserRepository implements IUserRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Integer createUser(User user) {
        entityManager.persist(user);
        return user.getUserId();
    }

    @Override
    public List<Object[]> getUserByEmail(String email) {
        String query = "SELECT u, ur FROM User u JOIN u.userRole ur WHERE u.email = :email";
        return entityManager.createQuery(query, Object[].class)
                .setParameter("email", email)
                .getResultList();
    }
    @SuppressWarnings("unchecked")
    @Override
    public List<Object[]> getUsers(Integer userRoleId) {
        String query = "SELECT u, ur FROM User u JOIN u.userRole ur WHERE ur.id= :userRoleId";
        return (List<Object[]>) entityManager.createQuery(query, Object[].class)
                .setParameter("userRoleId", userRoleId)
                .getResultList();
    }
}
