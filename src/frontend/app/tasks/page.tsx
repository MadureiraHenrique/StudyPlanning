"use client";
import { TaksForms } from "@/components/forms/task-forms";
import { GridTask } from "@/components/task/grid-task";
import { ListTask } from "@/components/task/list-task";
import { TaskCategories } from "@/components/task/task-category";
import { useState } from "react";

const Tasks = () => {
  const [display, setDisplay] = useState<"grid" | "list">("grid");
  return (
    <main className="w-full h-full flex flex-col gap-4 items-center">
      <section className="w-full">
        <TaskCategories display={display} setDisplay={setDisplay} />
      </section>
      <section>{display === "grid" ? <GridTask /> : <ListTask />}</section>
      <TaksForms formType="New" />
    </main>
  );
};

export default Tasks;
