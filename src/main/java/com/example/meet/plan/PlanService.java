package com.example.meet.plan;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class PlanService {

    private final PlanRepository planRepository;

    PlanService(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }

    List<String> planListInMonth(int year, int month) {
        var start = LocalDateTime.of(year, month, 1, 0, 0);
        var end = start.plusMonths(1);
        var list = planRepository.findByMeetTimeBetween(start, end);
        return list.stream()
                .map(plan -> plan.meetTime().format(DateTimeFormatter.ISO_LOCAL_DATE))
                .collect(Collectors.toList());
    }

}
