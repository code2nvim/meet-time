package com.example.meet.plan;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.meet.utils.Verify;

import io.github.inertia4j.spring.Inertia;
import jakarta.servlet.http.HttpSession;

@RestController
public class PlanController {

    private final Inertia inertia;

    PlanController(Inertia inertia) {
        this.inertia = inertia;
    }

    @GetMapping("/plan")
    ResponseEntity<String> planPage(HttpSession session) {
        var user = Verify.validUser(session);
        if (user.isEmpty()) {
            return inertia.redirect("/");
        }
        return inertia.render("Plan/Index");
    }

}
