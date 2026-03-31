import { Task } from "../types/Task";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Estudar React",
    status: "done",
    duration: 3,
    categoryId: "1",
    userId: "1",
  },
  {
    id: "2",
    title: "Estudar TypeScript",
    status: "in_progress",
    duration: 2,
    categoryId: "1",
    userId: "1",
  },
  {
    id: "3",
    title: "Treinar lógica",
    status: "pending",
    duration: 1,
    categoryId: "2",
    userId: "1",
  },
];
