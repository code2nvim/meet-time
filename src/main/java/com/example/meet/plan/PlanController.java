package com.example.meet.plan;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    ResponseEntity<String> planRedirect(HttpSession session) {
        var user = Verify.validUser(session);
        if (user.isEmpty()) {
            return inertia.redirect("/");
        }
        var now = LocalDate.now();
        return inertia.redirect("/plan/" + now.getYear() + "/" + now.getMonthValue());
    }

    @GetMapping("/plan/{year}/{month}")
    ResponseEntity<String> planPage(HttpSession session,
            @PathVariable int year, @PathVariable int month) {
        var user = Verify.validUser(session);
        if (user.isEmpty()) {
            return inertia.redirect("/");
        }
        var timestamp = LocalDate.of(year, month, 1)
                .atStartOfDay(ZoneId.systemDefault())
                .toInstant()
                .toEpochMilli();
        return inertia.render("Plan/Index", Map.of("timestamp", timestamp));
    }

}
