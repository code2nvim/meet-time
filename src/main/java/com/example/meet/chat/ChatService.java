package com.example.meet.chat;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.meet.chat.message.Message;
import com.example.meet.chat.message.MessageRepository;

@Service
public class ChatService {

    private final MessageRepository messageRepository;

    public ChatService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    void saveMessage(String sentFrom, String content) {
        LocalDateTime now = LocalDateTime.now();
        messageRepository.save(new Message(null, sentFrom, now, content));
    }

}
