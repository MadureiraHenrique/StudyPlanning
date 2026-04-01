import { FaCheck } from "react-icons/fa";
import { ButtonComponent } from "../ui/button-component";

type TaskListProps = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TaskList({ setShowForm }: TaskListProps) {
  const tasks = [
    {
      id: 0,
      title: "Clean Architecture",
      sub: "Separação de responsabilidades",
      done: false,
    },
    { id: 1, title: "Blockchain", sub: "Estrutura de blocos", done: false },
    {
      id: 2,
      title: "Código Limpo - Cap 3",
      sub: "Assistir aulas e resolver exercícios",
      done: true,
    },
    {
      id: 3,
      title: "Código Limpo - Cap 3",
      sub: "Assistir aulas e resolver exercícios",
      done: true,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-150 gap-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#1E293B]">Tarefas do dia</h2>
        <span className="text-sm text-slate-400 font-medium">
          {tasks.filter((task) => task.done === true).length}/{tasks.length}
        </span>
      </div>
      <br />
      <div className="flex flex-col gap-3 flex-1 overflow-auto ">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${task.done ? "bg-sky-500 border-sky-500" : "border-slate-200"}`}
            >
              {task.done && <FaCheck className="text-white text-sm" />}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-bold ${task.done ? "text-slate-400 line-through" : "text-slate-700"}`}
              >
                {task.title}
              </p>
              <p className="text-xs text-slate-400">{task.sub}</p>
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
    </div>
  );
}
