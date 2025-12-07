package com.example.meet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.meet.account.Account;
import com.example.meet.account.AccountRepository;

@Configuration
public class Initialize {

    @Bean
    CommandLineRunner root(AccountRepository accountRepository, PasswordEncoder encoder) {
        return args -> {
            if (accountRepository.findByUsername("root").isEmpty()) {
                var account = new Account(
                        null, "root", "root", encoder.encode("root"));
                accountRepository.save(account);
            }
        };
    }

}
