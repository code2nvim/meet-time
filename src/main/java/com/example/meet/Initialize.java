package com.example.meet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.meet.account.Account;
import com.example.meet.account.AccountRepository;

@Configuration
public class Initialize {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner root(AccountRepository accountRepository) {
        return args -> {
            if (accountRepository.findByUsername("root").isEmpty()) {
                var account = new Account(
                        null, "root", "root", passwordEncoder.encode("root"));
                accountRepository.save(account);
            }
        };
    }

}
