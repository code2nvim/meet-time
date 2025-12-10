package com.example.meet.chat;

import java.time.Duration;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.meet.account.Account;
import com.example.meet.chat.message.Message;
import com.example.meet.utils.Verify;

import io.github.inertia4j.spring.Inertia;
import jakarta.servlet.http.HttpSession;
import reactor.core.publisher.Flux;
import reactor.core.scheduler.Schedulers;

@RestController
public class ChatController {

    private final Inertia inertia;

    private final ChatService chatService;

    ChatController(Inertia inertia, ChatService chatService) {
        this.inertia = inertia;
        this.chatService = chatService;
    }

    @GetMapping("/chat")
    ResponseEntity<String> chatPage(HttpSession session) {
        var user = Verify.validUser(session);
        if (user.isEmpty()) {
            return inertia.redirect("/");
        }
        return inertia.render("Chat/Index", Map.of("account",
                new Account(null, user.get(), null)));
    }

    @GetMapping("/chat/message")
    Flux<List<Message>> message(HttpSession session) {
        if (Verify.validUser(session).isEmpty()) {
            return Flux.error(
                    new AuthenticationCredentialsNotFoundException("Not logged in!!!"));
        }
        Flux.interval(Duration.ofSeconds(1));
        return Flux.fromIterable(List.of(chatService.getAllMessages()))
                .subscribeOn(Schedulers.boundedElastic());
        // reference:
        // https://spring.io/blog/2019/12/13/flight-of-the-flux-3-hopping-threads-and-schedulers
    }

    @PostMapping("/chat/message")
    ResponseEntity<String> sendMessage(@RequestBody Message message, HttpSession session) {
        var user = Verify.validUser(session);
        if (user.isEmpty()) {
            return inertia.redirect("/");
        }
        chatService.saveMessage(user.get(), message.content());
        return inertia.redirect("/chat");
    }

}
