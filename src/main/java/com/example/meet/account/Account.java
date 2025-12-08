package com.example.meet.account;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("accounts")
public record Account(
        @Id Integer id,
        String username,
        String password) {
}
