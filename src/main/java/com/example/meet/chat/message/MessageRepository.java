package com.example.meet.chat.message;

import org.springframework.data.repository.ListCrudRepository;

public interface MessageRepository extends ListCrudRepository<Message, Integer> {
}
