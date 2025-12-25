package com.example.meet.plan;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

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
                .toList();
    }

    List<PlanJson> planListInDay(int year, int month, int day) {
        var start = LocalDateTime.of(year, month, day, 0, 0);
        var end = start.plusDays(1);
        var list = planRepository.findByMeetTimeBetween(start, end);
        return list.stream()
                .map(plan -> new PlanJson(
                        plan.id(),
                        plan.title(),
                        plan.meetAt(),
                        plan.meetTime().format(DateTimeFormatter.ISO_LOCAL_DATE),
                        plan.description()))
                .toList();
    }

    void savePlan(PlanJson planJson) {
        var plan = new Plan(
                null,
                planJson.title(),
                planJson.meetAt(),
                LocalDateTime.parse(planJson.meetTime(),
                        DateTimeFormatter.ISO_LOCAL_DATE_TIME),
                planJson.description());
        planRepository.save(plan);
    }

    void deletePlan(int id) {
        planRepository.deleteById(id);
    }

}
