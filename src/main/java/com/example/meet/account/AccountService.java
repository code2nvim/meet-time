package com.example.meet.account;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    Optional<Account> verifyLogin(Account account) {
        return accountRepository.findByUsername(account.username())
                .filter(real -> passwordEncoder.matches(
                        account.password(), real.password()));
    }

    AccountRole checkRole(Account account) {
        return accountRepository.findByUsername(account.username())
                .map(real -> switch (real.role()) {
                    case "root" -> new Root();
                    case "member" -> new Member();
                    default -> new None();
                })
                .orElse(new None());
    }

}
