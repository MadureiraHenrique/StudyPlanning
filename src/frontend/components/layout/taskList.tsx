"use client";
import { FaCheck } from "react-icons/fa";
import { ButtonComponent } from "../ui/button-component";
import { useContext } from "react";
import { OpenModal } from "@/contexts/modal-edit-context";
import { ModalEdit } from "../task/modal-edit";

type TaskListProps = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TaskList({ setShowForm }: TaskListProps) {
  const context = useContext(OpenModal);

  if (!context) return null;

  const { openModal, toggleModal } = context;

  const tasks = [
    {
      id: 1,
      title: "Estudar React Context API",
      description:
        "Revisar hooks useContext e criar um pequeno projeto de teste",
      category: "Estudos",
      status: "pending",
    },
    {
      id: 2,
      title: "Preparar Hackathon",
      description: "",

      category: "Projeto",
      status: "done",
    },
    {
      id: 3,
      title: "Revisar Código Limpo",
      description:
        "Ler capítulo 3, fazer exercícios do livro e revisar anotações",
      category: "Leitura",
      status: "done",
    },
    {
      id: 4,
      title: "Organizar Estudos Semanais",
      description: "",
      category: "Planejamento",
      status: "pending",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col  gap-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#1E293B]">Tarefas do dia</h2>
        <span className="text-sm text-slate-400 font-medium">
          {tasks.filter((task) => task.status === "done").length}/{tasks.length}
        </span>
      </div>

      <div className="flex flex-col gap-3 flex-1 overflow-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
            onClick={() =>
              toggleModal({
                title: task.title,
                category: task.category,
                status: task.status,
                description: task.description,
              })
            }
          >
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                task.status === "done"
                  ? "bg-sky-500 border-sky-500"
                  : "border-slate-200"
              }`}
            >
              {task.status === "done" && (
                <FaCheck className="text-white text-sm" />
              )}
            </div>

            <div className="flex-1">
              <p
                className={`text-sm font-bold ${
                  task.status === "done"
                    ? "text-slate-400 line-through"
                    : "text-slate-700"
                }`}
              >
                {task.title}
              </p>

              <p className="text-xs text-slate-400 line-clamp-1">
                {task.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ButtonComponent
        customize="dashed"
        onClick={() => setShowForm((prev) => !prev)}
      >
        + Adicionar tarefa
      </ButtonComponent>

      {openModal && <ModalEdit />}
    </div>
  );
}
