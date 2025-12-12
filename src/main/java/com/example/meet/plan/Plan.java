package com.example.meet.plan;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("plans")
public record Plan(
        @Id Integer id,
        String title,
        String meetAt,
        LocalDateTime meetTime,
        String description) {
}

@Table("plan_participants")
record PlanParticipant(
        @Id Integer id,
        Integer planId,
        String participant) {
}
