package com.bumblebee.bumblebeeapi.repositories;

import com.bumblebee.bumblebeeapi.dtos.AuthDto;
import com.bumblebee.bumblebeeapi.interfaces.IAuthRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public class AuthRepository implements IAuthRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Object[] signIn(AuthDto data) {
        try{
            String query = "SELECT u, ur FROM User u JOIN u.userRole ur WHERE u.email = :email AND u.password= :password";
            return entityManager.createQuery(query, Object[].class)
                    .setParameter("email", data.getEmail())
                    .setParameter("password", data.getPassword())
                    .getSingleResult();
        }catch (NoResultException ex) {
            return null;
        }

    }
}
