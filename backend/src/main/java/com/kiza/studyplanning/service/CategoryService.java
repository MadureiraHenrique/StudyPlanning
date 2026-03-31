package com.kiza.studyplanning.service;

import com.kiza.studyplanning.models.Category;
import com.kiza.studyplanning.repositories.CategoryRepository;

import java.util.List;
import java.util.Optional;

public class CategoryService {
    private final CategoryRepository categoryRepository;

    // Injeção de dependência
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Criar categoria
    public Category create(Category category) {
        return categoryRepository.save(category);
    }

    // Listar todas
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    // Buscar por ID
    public Category getById(Long id) {
        Optional<Category> category = categoryRepository.findById(id);

        return category.orElseThrow(() -> new RuntimeException("Categoria não encontrada"));
    }

    // Atualizar
    public Category update(Long id, Category updatedCategory) {
        Category existingCategory = getById(id);

        existingCategory.setName(updatedCategory.getName());

        return categoryRepository.save(existingCategory);
    }

    // Deletar
    public void delete(Long id) {
        Category category = getById(id);
        categoryRepository.delete(category);
    }
}
