package com.example.meet.account;

import java.util.Optional;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends ListCrudRepository<Account, Integer> {
    Optional<Account> findByUsername(String username);
}
