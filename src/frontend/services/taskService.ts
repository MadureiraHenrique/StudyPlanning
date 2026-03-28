import { Task } from "../types/Task";
import { tasks } from "../mocks/tasks";

let taskList = [...tasks];

export const getTasks = async (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(taskList), 500);
  });
};

export const createTask = async (newTask: Task): Promise<Task> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      taskList.push(newTask);
      resolve(newTask);
    }, 500);
  });
};

export const deleteTask = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      taskList = taskList.filter((task) => task.id !== id);
      resolve();
    }, 500);
  });
};
