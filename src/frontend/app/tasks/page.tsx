"use client";
import { TaskForms } from "@/components/forms/task-forms";
import { GridTask } from "@/components/task/grid-task";
import { ListTask } from "@/components/task/list-task";
import { TaskCategories } from "@/components/task/task-category";
import { useState } from "react";

type dataProps = handleSubmitProps;

type handleSubmitProps = {
  title: string;
  description?: string;
  subtasks?: string[];
};

const Tasks = () => {
  const [display, setDisplay] = useState<"grid" | "list">("grid");
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(data: dataProps) {
    alert(JSON.stringify(data));
  }
  return (
    <main className="w-full h-full flex flex-col gap-4 items-center">
      <section className="w-full">
        <TaskCategories
          display={display}
          setDisplay={setDisplay}
          setShowForm={setShowForm}
        />
      </section>
      <section>{display === "grid" ? <GridTask /> : <ListTask />}</section>
      {showForm && (
        <TaskForms
          formType="New"
          setShowForm={setShowForm}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
};

export default Tasks;
