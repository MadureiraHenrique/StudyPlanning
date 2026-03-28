package com.kiza.studyplanning.models;
import jakarta.persistence.*;

@Entity
public class Task{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    @Enumerated(EnumType.STRING)
    private TaskState state;

    public Task() {
    }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public TaskState getState() { return state; }
    public void setState(TaskState state) { this.state = state; }
}
