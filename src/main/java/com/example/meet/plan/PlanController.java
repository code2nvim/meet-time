package com.example.meet.plan;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.meet.utils.Verify;

import io.github.inertia4j.spring.Inertia;
import jakarta.servlet.http.HttpSession;

@RestController
public class PlanController {

    private final Inertia inertia;

    private final PlanService planService;

    PlanController(Inertia inertia, PlanService planService) {
        this.inertia = inertia;
        this.planService = planService;
    }

    @GetMapping("/plan")
    ResponseEntity<String> planRedirect(HttpSession session) {
        if (Verify.validUser(session).isEmpty()) {
            return inertia.redirect("/");
        }
        var now = LocalDate.now();
        return inertia.redirect("/plan/" + now.getYear() + "/" + now.getMonthValue());
    }

    @GetMapping("/plan/{year}/{month}")
    ResponseEntity<String> calendarPage(HttpSession session,
            @PathVariable int year, @PathVariable int month) {
        if (Verify.validUser(session).isEmpty()) {
            return inertia.redirect("/");
        }
        var date = LocalDate.of(year, month, 1);
        var localDate = date.format(DateTimeFormatter.ISO_LOCAL_DATE);
        var dateList = planService.planListInMonth(year, month);
        return inertia.render("Plan/Index", Map.of(
                "localDate", localDate, "dateList", dateList));
    }

    @GetMapping("/plan/{year}/{month}/{day}")
    ResponseEntity<String> planPage(HttpSession session,
            @PathVariable int year, @PathVariable int month, @PathVariable int day) {
        if (Verify.validUser(session).isEmpty()) {
            return inertia.redirect("/");
        }
        var planList = planService.planListInDay(year, month, day);
        return inertia.render("Plan/Show", Map.of("planList", planList));
    }

    @PostMapping("/plan/{year}/{month}/{day}")
    ResponseEntity<String> planCreate(HttpSession session, @RequestBody PlanJson planJson,
            @PathVariable int year, @PathVariable int month, @PathVariable int day) {
        if (Verify.validUser(session).isEmpty()) {
            return inertia.redirect("/");
        }
        planService.savePlan(planJson);
        return inertia.redirect("/plan/" + year + "/" + month + "/" + day);
    }

}
