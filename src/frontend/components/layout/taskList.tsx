import { LuPlus } from "react-icons/lu";
import { ButtonComponent } from "../ui/button-component";

export function TaskList() {
  const tasks = [
    {
      title: "Clean Architecture",
      sub: "Separação de responsabilidades",
      done: false,
    },
    { title: "Blockchain", sub: "Estrutura de blocos", done: false },
    {
      title: "Código Limpo - Cap 3",
      sub: "Assistir aulas e resolver exercícios",
      done: true,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Tarefas do dia</h2>
        <span className="text-sm text-slate-400 font-medium">1/3</span>
      </div>
      <br />

      <div className="flex flex-col gap-3 flex-1">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${task.done ? "bg-sky-500 border-sky-500" : "border-slate-200"}`}
            >
              {task.done && <div className="w-2 h-2 bg-white rounded-sm" />}
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

      <ButtonComponent customize="dashed">
        <LuPlus /> Adicionar tarefa
      </ButtonComponent>
    </div>
  );
}
