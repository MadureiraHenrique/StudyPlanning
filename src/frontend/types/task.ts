export type TaskStatus = "pending" | "in_progress" | "done";

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  categoryId: string;
  time: number;
  status: TaskStatus;
}
