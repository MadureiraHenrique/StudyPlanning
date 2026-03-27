package com.kiza.studyplanning.controller;

import com.kiza.studyplanning.models.Category;
import com.kiza.studyplanning.service.CategoryService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;

    // Injeção de dependência
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // ✅ Criar categoria
    @PostMapping
    public Category create(@RequestBody Category category) {
        return categoryService.create(category);
    }

    // ✅ Listar todas
    @GetMapping
    public List<Category> getAll() {
        return categoryService.getAll();
    }

    // ✅ Buscar por ID
    @GetMapping("/{id}")
    public Category getById(@PathVariable Long id) {
        return categoryService.getById(id);
    }

    // ✅ Atualizar categoria
    @PutMapping("/{id}")
    public Category update(@PathVariable Long id, @RequestBody Category category) {
        return categoryService.update(id, category);
    }

    // ✅ Deletar categoria
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        categoryService.delete(id);
    }
}
