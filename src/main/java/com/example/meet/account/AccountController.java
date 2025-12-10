package com.example.meet.account;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.meet.utils.Verify;

import io.github.inertia4j.spring.Inertia;
import jakarta.servlet.http.HttpSession;

@RestController
public class AccountController {

    private final Inertia inertia;

    private final AccountService accountService;

    AccountController(Inertia inertia, AccountService service) {
        this.inertia = inertia;
        this.accountService = service;
    }

    @GetMapping("/login")
    ResponseEntity<String> loginPage(HttpSession session) {
        if (Verify.validUser(session).isPresent()) {
            return inertia.redirect("/");
        }
        return inertia.render("Login/Index");
    }

    @PostMapping("/login")
    ResponseEntity<String> login(@RequestBody Account account, HttpSession session) {
        var real = accountService.verifyLogin(account)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED, "Wrong username or password!"));
        session.setAttribute("user", real.username());
        return inertia.redirect("/");
    }

    @GetMapping("/login/create")
    ResponseEntity<String> createPage() {
        return inertia.render("Login/Create");
    }

    @PostMapping("/login/create")
    ResponseEntity<String> create(@RequestBody Account account) {
        if (!accountService.addPendingAccount(account)) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT, "Account already exists!");
        }
        return inertia.redirect("/login/pending");
    }

    @GetMapping("/login/pending")
    ResponseEntity<String> pendingPage(HttpSession session) {
        if (Verify.rootUser(session).isEmpty()) {
            return inertia.render("Login/Wait");
        }
        var pending = accountService.getPendingAccounts();
        return inertia.render("Login/Pending", Map.of("pending", pending));
    }

    @PostMapping("/login/pending/accept")
    ResponseEntity<String> save(@RequestBody Account account, HttpSession session) {
        if (Verify.rootUser(session).isEmpty()) {
            return inertia.redirect("/login/pending");
        }
        accountService.saveAccount(account.username());
        return inertia.redirect("/login/pending");
    }

    @PostMapping("/login/pending/deny")
    ResponseEntity<String> remove(@RequestBody Account account, HttpSession session) {
        if (Verify.rootUser(session).isEmpty()) {
            return inertia.redirect("/login/pending");
        }
        accountService.removePendingAccount(account.username());
        return inertia.redirect("/login/pending");
    }

    @PostMapping("/logout")
    ResponseEntity<String> logout(HttpSession session) {
        session.removeAttribute("user");
        return inertia.redirect("/");
    }

}
