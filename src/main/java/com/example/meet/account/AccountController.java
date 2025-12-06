package com.example.meet.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.inertia4j.spring.Inertia;
import jakarta.servlet.http.HttpSession;

@RestController
public class AccountController {

    @Autowired
    private Inertia inertia;

    @Autowired
    private AccountService accountSservice;

    @GetMapping("/login")
    ResponseEntity<String> index(HttpSession session) {
        if (session.getAttribute("user") != null) {
            return inertia.redirect("/");
        }
        return inertia.render("Login/Index");
    }

    @PostMapping("/login")
    ResponseEntity<String> login(@RequestBody Account account, HttpSession session) {
        var real = accountSservice.verifyLogin(account)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED, "Wrong username or password!"));

        session.setAttribute("role", real.role());
        session.setAttribute("user", real.username());

        return inertia.redirect("/");
    }

    @PostMapping("/logout")
    ResponseEntity<String> logout(HttpSession session) {
        session.removeAttribute("role");
        session.removeAttribute("user");

        return inertia.redirect("/");
    }

}
