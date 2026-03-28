package com.kiza.studyplanning.service;

import com.kiza.studyplanning.dto.TaskProgressDTO;
import com.kiza.studyplanning.models.Task;
import com.kiza.studyplanning.models.TaskState;
import com.kiza.studyplanning.repositories.TaskRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    // Injeção de dependência
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Criar Task
    public Task create(Task task) {
        return taskRepository.save(task);
    }

    // Listar todas
    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    // Buscar por ID
    public Task getById(Long id) {
        Optional<Task> task = taskRepository.findById(id);

        return task.orElseThrow(() -> new RuntimeException("Task não encontrada"));
    }

    // Atualizar
    public Task update(Long id, Task updatedTask) {
        Task existingTask = getById(id);

        existingTask.setTitle(updatedTask.getTitle());
        existingTask.setState(updatedTask.getState());
        existingTask.setCategory(updatedTask.getCategory());

        return taskRepository.save(existingTask);
    }

    // Deletar
    public void delete(Long id) {
        Task task = getById(id);
        taskRepository.delete(task);
    }
    // Progresso
    public TaskProgressDTO getProgress() {
        long total = taskRepository.count();
        long completed = taskRepository.countByState(TaskState.DONE);

        double percentage = total > 0 ? (double) completed / total * 100 : 0;

        return new TaskProgressDTO(total, completed, percentage);
    }
}