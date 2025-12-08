package com.example.meet.account;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final PasswordEncoder passwordEncoder;

    private final AccountRepository accountRepository;

    AccountService(AccountRepository repository, PasswordEncoder passwordEncoder) {
        this.accountRepository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    private final List<Account> pendingAccounts = new ArrayList<Account>();

    Optional<Account> verifyLogin(Account account) {
        return accountRepository.findByUsername(account.username())
                .filter(real -> passwordEncoder
                        .matches(account.password(), real.password()));
    }

    List<Account> getPendingAccounts() {
        return pendingAccounts;
    }

    boolean addPendingAccount(Account account) {
        var inRepo = accountRepository.findByUsername(account.username()).isPresent();
        var inPending = pendingAccounts.stream()
                .anyMatch(elem -> elem.username().equals(account.username()));
        if (inRepo || inPending) {
            return false;
        }
        pendingAccounts.add(new Account(
                null, account.username(), passwordEncoder.encode(account.password())));
        return true;
    }

    void removePendingAccount(String username) {
        pendingAccounts.removeIf(account -> account.username().equals(username));
    }

    void saveAccount(String username) {
        accountRepository.save(pendingAccounts.stream()
                .filter(account -> account.username().equals(username))
                .findAny().get());
        this.removePendingAccount(username);
    }

}
