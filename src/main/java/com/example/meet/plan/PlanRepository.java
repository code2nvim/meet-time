package com.example.meet.plan;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanRepository extends ListCrudRepository<Plan, Integer> {

    List<Plan> findByMeetTimeBetween(LocalDateTime start, LocalDateTime end);

}

@Repository
interface PlanParticipantRepository extends ListCrudRepository<PlanParticipant, Integer> {

    List<PlanParticipant> findByParticipant(String participant);

}
