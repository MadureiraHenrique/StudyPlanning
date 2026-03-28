export type TaskStatus = "pending" | "in_progress" | "done";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  duration: number; // em horas
  categoryId: string;
  userId: string;
}
