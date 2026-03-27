package com.kiza.studyplanning.controllers;

import com.kiza.studyplanning.models.Task;
import com.kiza.studyplanning.services.TaskService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    // Injeção de dependência via construtor
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // ✅ Criar uma nova Task
    @PostMapping
    public Task create(@RequestBody Task task) {
        return taskService.create(task);
    }

    // ✅ Listar todas as Tasks
    @GetMapping
    public List<Task> getAll() {
        return taskService.getAll();
    }

    // ✅ Buscar Task por ID
    @GetMapping("/{id}")
    public Task getById(@PathVariable Long id) {
        return taskService.getById(id);
    }

    // ✅ Atualizar Task
    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        return taskService.update(id, task);
    }

    // ✅ Deletar Task
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        taskService.delete(id);
    }
}