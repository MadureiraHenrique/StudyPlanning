package com.kiza.studyplanning.repositories;

import com.kiza.studyplanning.models.Task;
import com.kiza.studyplanning.models.TaskState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    long countByState(TaskState state);
}