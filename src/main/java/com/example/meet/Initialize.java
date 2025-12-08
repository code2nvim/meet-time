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
                accountRepository.save(new Account(
                        null, "root", encoder.encode("root")));
            }
        };
    }

}
