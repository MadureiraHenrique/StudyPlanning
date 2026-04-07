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
};

const Tasks = () => {
  const [display, setDisplay] = useState<"grid" | "list">("grid");
  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const url = process.env.NEXT_PUBLIC_API_URL;

  async function handleSubmit(data: dataProps) {
    try {
      const res = await fetch(`${url}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setShowMessage("Erro ao criar tarefa");
        setTimeout(() => {
          setShowMessage("");
        }, 2000);
        const errorData = await res.json();
        throw new Error(errorData.message || "Erro ao criar a tarefa");
      }
      setShowMessage("Tarefa criada com sucesso");
      setTimeout(() => {
        setShowMessage("");
      }, 2000);
    } catch (err) {
      console.error("Erro ao enviar a tarefa:", err);
    }
  }

  return (
    <main className="w-full h-full flex flex-col gap-4 items-center">
      {showMessage.length > 0 && (
        <div
          className={`bg-white rounded border border-(--color-border) border-l-6 border-l-red-300 z-50 top-1 right-2 absolute w-60 h-20 p-2 flex items-center flex-col transition`}
        >
          <p className="font-bold">Atenção</p>
          <p>{showMessage}</p>
        </div>
      )}
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
