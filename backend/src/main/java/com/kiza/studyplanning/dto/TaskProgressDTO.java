package com.kiza.studyplanning.dto;

public class TaskProgressDTO {

    private long totalTasks;
    private long completedTasks;
    private double progressPercentage;

    public TaskProgressDTO(long totalTasks, long completedTasks, double progressPercentage) {
        this.totalTasks = totalTasks;
        this.completedTasks = completedTasks;
        this.progressPercentage = progressPercentage;
    }

    public long getTotalTasks() { return totalTasks; }
    public long getCompletedTasks() { return completedTasks; }
    public double getProgressPercentage() { return progressPercentage; }
}