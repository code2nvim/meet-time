package com.example.meet.chat.message;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("messages")
public record Message(
        @Id Integer id,
        String sentFrom,
        LocalDateTime sentAt,
        String content) {
}
