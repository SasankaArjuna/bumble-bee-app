package com.bumblebee.bumblebeeapi.repositories;

import com.bumblebee.bumblebeeapi.entities.UserCreditInfo;
import com.bumblebee.bumblebeeapi.interfaces.IUserCreditInfoRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public class CreditInfoRepository implements IUserCreditInfoRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public UserCreditInfo getUserCreditInfo(Integer userId) {
        String query = "FROM UserCreditInfo as uci WHERE uci.userId= :userId";
        return (UserCreditInfo) entityManager.createQuery(query)
                .setParameter("userId", userId)
                .getSingleResult();
    }

    @Override
    public UserCreditInfo setUserCreditInfo(UserCreditInfo data) {
        UserCreditInfo existingCreditInfo = getUserCreditInfo(data.getUserId());
        existingCreditInfo.setCreditLimit(data.getCreditLimit());
        existingCreditInfo.setUsedCredits(data.getUsedCredits());
        existingCreditInfo.setStatus(data.getStatus());
        existingCreditInfo.setUpdatedAt(data.getUpdatedAt());

        entityManager.flush();

        return getUserCreditInfo(data.getUserId());
    }

    @Override
    public UserCreditInfo createUserCreditInfo(UserCreditInfo data) {
        entityManager.persist(data);
        return data;
    }
}
