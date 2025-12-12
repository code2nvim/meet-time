package com.example.meet.plan;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PlanService {

    private final PlanRepository planRepository;

    PlanService(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }

    List<Plan> planListInMonth(int year, int month) {
        var start = LocalDateTime.of(year, month, 1, 0, 0);
        var end = start.plusMonths(1);
        return planRepository.findByMeetTimeBetween(start, end);
    }

}
